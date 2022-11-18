// const mongooose = require('mongoose');

// const blogSchema = new mongooose.Schema({
//     // Your code goes here

    
// })

// const Blog = mongooose.model('blogs', blogSchema);

// module.exports = Blog;






const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    // Your code goes here
    topic:{type:String},//it tells the type of data is string not numbers
    Description:{type:String},
    postedby:String,//check this once
},{timestamps:true})//true means time when created and when it was updated both will be recorded

const Blog = mongooose.model('blogs', blogSchema);//we are giving the properties of blog to Blog model

module.exports = Blog;//exporting created Blog