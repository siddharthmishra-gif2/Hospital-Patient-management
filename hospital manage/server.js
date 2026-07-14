require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Patient = require("./models/Patient");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch(err => {
    console.log(err);
});

app.post("/add-patient", async (req, res) => {

    try {

        const patient = new Patient({
            name: req.body.name,
            dob: req.body.dob,
            disease: req.body.disease,
            address: req.body.address,
            contact: req.body.contact
        });

        await patient.save();

        res.send("Patient Registered Successfully");

    } catch (err) {

        res.send(err);

    }

});

app.get("/patients", async (req, res) => {

    const patients = await Patient.find();

    res.json(patients);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});