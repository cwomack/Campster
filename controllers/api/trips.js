const Trip = require('../../models/trip');

module.exports = {
    index,
    show,
    create,
    delete: deleteTrip,
    update
};

async function index(req, res) {
    const trips = await Trip.find({});
    res.status(200).json(trips);
}
async function show(req, res) {
    const trip = await Trip.findById(req.params.id);
    res.status(200).json(trip);
}
async function create(req, res) {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
}
async function deleteTrip(req, res) {
    const deletedTrip = await Trip.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedTrip);
}
async function update(req, res) {
    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedTrip);
}