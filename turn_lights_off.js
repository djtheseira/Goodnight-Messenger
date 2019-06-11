"use strict";

if (!document.getElementById("goodNighttime")) {
  let css = chrome.extension.getURL("mingoodnight.css"),
    docLink = document.createElement("link");
  docLink.type = "text/css";
  docLink.rel = "stylesheet";
  docLink.id = "goodNighttime";
  docLink.href = css;
  document.head.appendChild(docLink);

  chrome.storage.sync.set({activated: true}, function() {
    console.log("Activated");
  });
  console.log("Night Time Activated");
}