// Comment out one function if you want to see the functionality in the browser.
// Both functions do the same thing.

// ORIGINAL CODE:
document.querySelectorAll(".panel").forEach(function (panel) {
  panel.addEventListener("click", function () {
    panel.classList.toggle("active")
  })
})

// MORE SPECIFIC CODE:
// document
//   .querySelectorAll(".panel")
//   .forEach(function registerPanelClickListener(panel) {
//     panel.addEventListener("click", function togglePanelActive() {
//       panel.classList.toggle("active")
//     })
//   })

// RUNDOWN:
// 1. We use .querySelectorAll to get all the panels.
//    Each panel has a `.header` div and a `.body` div

// 2. Then using a forEach method,
//    the function `registerPanelClickListener` takes a parameter called `Panel`
//    and adds an addEventListener to it.

// 3. If the panel is clicked, the function `togglePanelActive` will use `.toggle`
//    to say "If the panel is clicked switch it's class to `.active` if not take off `.active`"
//    `.toggle()` is used to toggle between classes.
//    You can also use an `if statement` if you'd like, I just used `toggle.()`
//    becuase it's shorter.

// FORMAT:
// 1. The format of the second function is different from the first.
//    Instead of one line, the second function is broken into separate lines for each method.
//    To me, it's a little more organized and looks like a chain.

// 2. If you compare the second function to the first, each function has a name.
//    I did this so it's more specific.

// OTHER:
// `togglePanelActive()` is a callback function because it doesn't run right now.
//  It runs whenever there is a click on "panel"
