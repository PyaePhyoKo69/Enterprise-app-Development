document.addEventListener("DOMContentLoaded", () => {
  const statsData = {
    meals: 25000,
    members: 1200,
    volunteers: 300,
    partners: 40
  };

  document.getElementById("meals").textContent = statsData.meals.toLocaleString() + "+";
  document.getElementById("members").textContent = statsData.members.toLocaleString();
  document.getElementById("volunteers").textContent = statsData.volunteers + "+";
  document.getElementById("partners").textContent = statsData.partners;
});


// // later this comes from backend instead of mock data
// fetch("/api/stats")
//   .then(res => res.json())
//   .then(statsData => {
//     document.getElementById("meals").textContent = statsData.meals + "+";
//     document.getElementById("members").textContent = statsData.members;
//     document.getElementById("volunteers").textContent = statsData.volunteers + "+";
//     document.getElementById("partners").textContent = statsData.partners;
//   });
