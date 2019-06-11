"use strict";

document.getElementById("goodNighttime")
  .parentNode.removeChild(document.getElementById("goodNighttime"));

chrome.storage.sync.set({activated: false}, function() {
  console.log("Deactivated");
});

console.log("Day Time Activated");