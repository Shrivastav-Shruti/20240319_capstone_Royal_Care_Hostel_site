const mongoose = require('mongoose');

const HostelSchema = new mongoose.Schema({
    gender: { 
        type: String, 
        required: true, 
        enum: ['M','F','Other'],
        default: 'Other'
    },
    category: { 
        type: String, 
        required: true, 
        enum: ['Deluxe','Super Deluxe','Standard'],
        default: 'Standard'
    },
    personNo: { type: Number, required: true },
    roomNo: { type: Number, required: true },
    isStatus: { type: Boolean, default: false }
});

module.exports = mongoose.model('Hostel', HostelSchema);
