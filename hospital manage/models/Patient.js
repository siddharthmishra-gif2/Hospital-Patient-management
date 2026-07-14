const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    dob: {
        type: Date,
        required: true
    },

    disease: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    contact: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Patient", patientSchema);