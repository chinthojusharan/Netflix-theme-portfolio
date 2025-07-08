const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// ✅ POST - Add a new project
router.post('/', async (req, res) => {
  try {
    const {
      title,
      description,
      fullDescription,
      tech,
      image,
      github,
      demo
    } = req.body;

    const newProject = new Project({
      title,
      description,
      fullDescription,
      tech,
      image,
      github,
      demo
      // slug will be auto-generated in the model
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    console.error('Error adding project:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ GET - Fetch all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Project not found' });
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (err) {
    console.error('Error deleting project:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
