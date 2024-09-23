const { Pets } = require('../models');

const createPets = async (req, res) => {
  try {
    const pets = await Pets.create(req.body);
    res.status(201).json(plane);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPets = async (req, res) => {
  try {
    const pets = await Pets.findAll();
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPetsById = async (req, res) => {
  try {
    const pets = await Pets.findByPk(req.params.id);
    if (pets) {
      res.status(200).json(plane);
    } else {
      res.status(404).json({ error: 'Pets not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePets = async (req, res) => {
  try {
    const [updated] = await Plets.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedPets = await Pets.findByPk(req.params.id);
      res.status(200).json(updatedPets);
    } else {
      res.status(404).json({ error: 'Pets not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePets = async (req, res) => {
  try {
    const deleted = await Pets.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Pets not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPets,
  getAllPets,
  getPetsById,
  updatePets,
  deletePets
};
