function analyzeResume() {
  const text = document.getElementById("resumeInput").value.toLowerCase();
  let feedback = [];

  const skills = ["java", "dsa", "project", "internship", "html", "css", "javascript", "machine learning"];
  const softSkills = ["leadership", "teamwork", "communication"];
  const achievements = ["award", "hackathon", "competition", "winner"];

  // Check skill keywords
  const matchedSkills = skills.filter(skill => text.includes(skill));
  if (matchedSkills.length < 4) {
    feedback.push("Add more technical skills (Java, DSA, HTML, etc.)");
  }

  // Check for soft skills
  if (!softSkills.some(skill => text.includes(skill))) {
    feedback.push("Include soft skills like teamwork, communication.");
  }

  // Check for achievements
  if (!achievements.some(word => text.includes(word))) {
    feedback.push("Mention any competitions, awards, or recognitions.");
  }

  // Show feedback
  document.getElementById("feedback").innerHTML = feedback.length
    ? feedback.map(f => `• ${f}`).join("<br>")
    : "✅ Your resume looks good!";
}
