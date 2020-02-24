var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentsSchema = new Schema ({
    name: {
        type: String,

    },
    body: {
        type: String,
        required: true
    },

});
var Comment = mongoose.model("Comment", CommentsSchema);
module.exports = Comment;