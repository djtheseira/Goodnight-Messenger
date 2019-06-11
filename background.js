"use strict";
var toggle;

chrome.storage.sync.get("activated", function(obj) {
  toggle = obj.activated;
  console.log('toggle', toggle);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    if (tab.url.indexOf("messenger.com/t/") != -1 ||
        tab.url.indexOf("messenger.com/new") != -1) {
      if (toggle) chrome.browserAction.setIcon({path: "images/night16.png", tabId: tabId});
    }
  }
});

var toggleDayNight = function(tab) {
  toggle = !toggle;
  if (toggle) {
    chrome.browserAction.setIcon({path: "images/night16.png", tabId: tab.id});
    chrome.tabs.executeScript(tab.id, {file: "turn_lights_off.js"});
  } else {
    chrome.browserAction.setIcon({path: "images/sun16.png", tabId: tab.id});
    chrome.tabs.executeScript(tab.id, {file: "turn_lights_on.js"});
  }
};

chrome.browserAction.onClicked.addListener(toggleDayNight);
