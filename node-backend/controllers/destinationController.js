const Destination = require('../models/Destination');

// GET all destinations
const getAllDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.json(destinations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET a single destination by ID
const getDestination = async (req, res) => {
    try {
        const destination = await Destination.findOne({ name: req.params.name });
        if (!destination) {
            return res.status(404).json({ message: `Destination ID ${req.params.name} not found` });
        }
        res.json(destination);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// CREATE a new destination
const createNewDestination = async (req, res) => {
    const { name, description, city, country, averageRating } = req.body;

    if (!name || !description) {
        return res.status(400).json({ message: "Name and description are required" });
    }

    const newDestination = new Destination({
        name,
        description,
        city,
        country,
        averageRating
    });

    try {
        const savedDestination = await newDestination.save();
        res.status(201).json(savedDestination);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// UPDATE a destination
const updateDestination = async (req, res) => {
    try {
        const destination = await Destination.findOne({ name: req.params.name });
        if (!destination) {
            return res.status(404).json({ message: `Destination ${req.params.name} was not found` });
        }
        // updated the fields if they appear in the request:
        if (req.body.name) destination.name = req.body.name;
        if (req.body.description) destination.description = req.body.description;
        if (req.body.city) destination.city = req.body.city;
        if (req.body.country) destination.country = req.body.country;
        if (req.body.averageRating) destination.averageRating = req.body.averageRating;

        const updatedDestination = await destination.save();
        res.json(updatedDestination);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE a destination
const deleteDestination = async (req, res) => {
    try {
        const destination = await Destination.findOne({ name: req.params.name });
        if (!destination) {
            return res.status(404).json({ message: `Destination: ${req.params.name} was not found` });
        }

        await destination.deleteOne();
        res.json({ message: "Destination deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllDestinations,
    createNewDestination,
    updateDestination,
    deleteDestination,
    getDestination
};