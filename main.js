// Original code:
// document.querySelectorAll(".panel").forEach(function (panel) {
//   panel.addEventListener("click", function () {
//     panel.classList.toggle("active")
//   })
// })

// More specific code:
// Format: To look at it as a chain of events;
// First we get all the panels, then we run through them, etc.
// Added names to the inner functions to be more specific
document
  .querySelectorAll(".panel")
  .forEach(function registerPanelClickListener(panel) {
    panel.addEventListener("click", function togglePanelActive() {
      // This is a callback function because it doesn't run right now.
      // It runs whenever there is a click on "panel"
      panel.classList.toggle("active")
    })
  })
