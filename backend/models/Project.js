const mongoose = require("mongoose");
const slugify = require("slugify");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  description: { type: String },
  fullDescription: { type: String },
  tech: [{ type: String }],
  image: { type: String },
  github: { type: String },
  demo: { type: String },
});

// Auto-generate slug from title before saving
projectSchema.pre("save", function (next) {
  if (!this.slug && this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
