var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var messageSchema = new Schema({
    recipient: {
        type: String
    },
    sender: {
        type: String
    },
    from: {
        type: String
    },
    subject: {
        type: String
    },
    'body-plain': {
        type: String
    },
    'body-html': {
    type: String
    },
    'stripped-text': {
        type: String
    },
    'stripped-signature': {
        type: String
    },
    'stripped-html':{
        type: String
    },
    'attachment-count': {
        type: String
    },
    'attachment-x': {
        type: String
    },
    timestamp: {
        type: String
    },
    token: {
        type: String
    },
    signature: {
        type: String
    },
    'message-headers': {
        type: String
    },
    'content-id-map': {
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    },
    dealer:{
        type: String
    }
});

module.exports =  mongoose.model('message', messageSchema);
