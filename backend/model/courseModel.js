const mongoose = require("./dbconnection.js");
// Initialize parameters
const collectionName_courses = process.env.DB_COLLECTION_COURSES;

//define structure of the documents in a collection
const courseSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

});

const courseModel = mongoose.model(collectionName_courses, courseSchema);

module.exports = courseModel;
