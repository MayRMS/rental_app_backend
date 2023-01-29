
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentalSchema = new Schema ({
    idSerie: {
        type: String,
        required: true
    },
    idUser: {
        type: String,
        required: true,
    },
    rentDate: {
        type: Date,
    },
    returnDate: {
        type: Date,

    },
});

const Rent = mongoose.model("Rent", rentalSchema);
module.exports = Rent;