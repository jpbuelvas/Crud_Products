const mongoose = require('mongoose');

const  mongoAtlasUri ='mongodb+srv://admin:admin@cluster0.5pius.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }

module.exports = mongoose