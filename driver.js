"use strict";

chrome.storage.sync.get("activated", function(obj) {
  let initToggleStage;
  console.log('init check');
  initToggleStage = obj.activated;
  console.log('init: ', initToggleStage);

  if (initToggleStage) {
    let css = chrome.extension.getURL("mingoodnight.css"),
      docLink = document.createElement("link");
    docLink.type = "text/css";
    docLink.rel = "stylesheet";
    docLink.id = "goodNighttime";
    docLink.href = css;
    document.head.appendChild(docLink);
  }
});