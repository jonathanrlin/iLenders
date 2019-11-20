const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.connect('mongodb://localhost/iLender_mongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// require(path.join(modelsPath, file));