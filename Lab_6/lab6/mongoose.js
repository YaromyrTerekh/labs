var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Admin1:yaromyr1@cluster1.whkks.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
console.log("mongodb connect...")
module.exports=mongoose;