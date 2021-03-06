import { Component, OnInit } from "@angular/core";
import { HttpService } from "app/http.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

declare const google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}
@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.css"]
})
export class MapsComponent implements OnInit {
  item: any = null;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _activateRoute: ActivatedRoute
  ) {}
  geocoder;
  address = "costa mesa";
  ngOnInit() {
    this._activateRoute.params.subscribe((params: Params) => {
      this._httpService.getOne(params.id).subscribe((data: any) => {
        this.item = data.data;

        var geocoder = new google.maps.Geocoder();

        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);

        var mapOptions = {
          zoom: 15,
          center: myLatlng,
          scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
          styles: [
            {
              featureType: "water",
              stylers: [
                {
                  saturation: 43
                },
                {
                  lightness: -11
                },
                {
                  hue: "#0088ff"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [
                {
                  hue: "#ff0000"
                },
                {
                  saturation: -100
                },
                {
                  lightness: 99
                }
              ]
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#808080"
                },
                {
                  lightness: 54
                }
              ]
            },
            {
              featureType: "landscape.man_made",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#ece2d9"
                }
              ]
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#ccdca1"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#767676"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#ffffff"
                }
              ]
            },
            {
              featureType: "poi",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "landscape.natural",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  color: "#b8cb93"
                }
              ]
            },
            {
              featureType: "poi.park",
              stylers: [
                {
                  visibility: "on"
                }
              ]
            },
            {
              featureType: "poi.sports_complex",
              stylers: [
                {
                  visibility: "on"
                }
              ]
            },
            {
              featureType: "poi.medical",
              stylers: [
                {
                  visibility: "on"
                }
              ]
            },
            {
              featureType: "poi.business",
              stylers: [
                {
                  visibility: "simplified"
                }
              ]
            }
          ]
        };
        var map = new google.maps.Map(
          document.getElementById("map"),
          mapOptions
        );

        var marker = new google.maps.Marker({
          position: myLatlng,
          title: "Hello World!"
        });

        var circle = new google.maps.Circle({
          center: myLatlng,
          map: map,
          radius: 250,
          strokeColor: "red",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "red"
        });

        geocoder = new google.maps.Geocoder();
        this.codeAddress(geocoder, map);
        // To add the marker to the map, call setMap();
        marker.setMap(map);
      });
    });
  }

  codeAddress(geocoder, map) {
    geocoder.geocode({ address: this.item.location }, function(
      results,
      status
    ) {
      if (status === "OK") {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
}
