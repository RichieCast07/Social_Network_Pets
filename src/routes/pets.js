const express = require('express');
const router = express.Router();
const aviones = require('../controllers/pet');

router.post('/Pet', pet.createPet);

router.get('/Pet', pet.getAllPet);

router.get('/Pet/:id', pet.getPetById);

router.put('/Pet/:id', pet.updatePet);

router.delete('/Pet/:id', pet.deletePet);

module.exports = router;
