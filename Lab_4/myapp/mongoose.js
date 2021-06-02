// встановлюємо зєрнання з базою даних
var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Admin:yaromyr@cluster0.r43gz.mongodb.net/dbterekh?retryWrites=true&w=majority');
console.log("mongodb connect...")
module.exports=mongoose;
