// deleteAllProjects.js
const axios = require('axios');

const projectIds = [
  "686bf9eb4d8c84fe111de5e4",
  "686bfa064d8c84fe111de5e7",
  "686bfa1a4d8c84fe111de5e9",
  "686bfa304d8c84fe111de5eb",
  "686bfa464d8c84fe111de5ed",
  "686bfa5d4d8c84fe111de5ef",
  "686bfa6f4d8c84fe111de5f1",
  "686bfa884d8c84fe111de5f3",
  "686bfa9d4d8c84fe111de5f5",
  "686cc3cc3310947e815cbce5"
];
 
projectIds.forEach(async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/projects/${id}`);
    console.log(`✅ Deleted project: ${id}`);
  } catch (err) {
    console.error(`❌ Failed to delete ${id}:`, err.message);
  }
});
