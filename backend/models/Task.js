const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  imagePath: { type: String },
  calendar: { type: String },
  marca: { type: String },
  created_at: { type: Date, default: Date.now }
});

module.exports = model('Task', TaskSchema);