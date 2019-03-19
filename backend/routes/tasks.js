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
  if(!req.body.calendar && !req.body.marca && !req.file) {
    const data = {
      title: req.body.title, 
      description: req.body.description,
    }
    await Task(data).save();
    res.json({ messaje: 'Tarea Agregada' });
  } else if(!req.file && req.body.calendar) {
    const data = {
      title: req.body.title, 
      description: req.body.description,
      calendar: req.body.calendar,
      marca: req.body.marca
    }
    console.log(data)
    await Task(data).save();
    res.json({ messaje: 'Tarea Agregada' });
  } else if(!req.file && !req.body.calendar && req.body.marca) {
    const data = {
      title: req.body.title, 
      description: req.body.description,
      marca: req.body.marca
    }
    console.log(data)
    await Task(data).save();
    res.json({ messaje: 'Tarea Agregada' });

  } else if(req.file && !req.body.calendar && !req.body.marca) {
    const data = {
      title: req.body.title, 
      description: req.body.description,
      imagePath: '/uploads/' + req.file.filename
    }
    console.log(data)
    await Task(data).save();
    res.json({ messaje: 'Tarea Agregada' });

  } else if(req.file && req.body.calendar && req.body.marca) {
    const data = {
      title: req.body.title, 
      description: req.body.description,
      calendar: req.body.calendar,
      marca: req.body.marca,
      imagePath: '/uploads/' + req.file.filename
    }
    console.log(data)
    await Task(data).save();
    res.json({ messaje: 'Tarea Agregada' });
  }
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
