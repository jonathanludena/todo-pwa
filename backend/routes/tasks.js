const { Router } = require('express');
const { unlink } = require('fs-extra');
const path = require('path');

const router = Router();
const Task = require('../models/Task');

router.get('/', async(req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.get('/:id', async(req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

router.post('/', async(req, res) => {
  const { title, description } = req.body;
  const imagePath = '/uploads/' + req.file.filename;
  const newTask = new Task({ title, description, imagePath });
  await newTask.save();
  res.json({ messaje: 'Tarea Agregada' });
});

router.delete('/:id', async(req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if(task.imagePath) unlink(path.resolve('./backend/public' + task.imagePath));
  res.json({ message: 'Tarea Borrada' });
});

router.put('/:id', async(req, res) => {
  const body = req.body;
  if(req.file) {
    const imagePath = '/uploads/' + req.file.filename;
    const task = await Task.findByIdAndUpdate(req.params.id, {
      title: body.title,
      description: body.description,
      imagePath
    });
    unlink(path.resolve('./backend/public' + task.imagePath));
  } else {
    await Task.findByIdAndUpdate(req.params.id, {
      title: body.title,
      description: body.description
    });
  }
  res.json({ message: `Se modificado la tarea` });
});

module.exports = router;
