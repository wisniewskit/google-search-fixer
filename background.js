/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Override the user-agent HTTP headers sent to Google Search

function rewriteUserAgentForGoogleSearchTLDs(e) {
  if (e.url.match(GoogleSearchTLDs)) {
    for (let header of e.requestHeaders) {
      if (header.name.toLowerCase() === "user-agent") {
        header.value = TargetUA;
      }
    }
    return {requestHeaders: e.requestHeaders};
  }
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentForGoogleSearchTLDs,
  {"urls": ["*://*/*"]},
  ["blocking", "requestHeaders"]
);

// Block the Google serviceworker, because it is currently causing strange issues.

function blockGoogleServiceWorker(e) {
  if (e.url.match(GoogleSearchTLDs) && e.url.indexOf("/serviceworker") != -1) {
    return {cancel: true};
  }
}

browser.webRequest.onBeforeRequest.addListener(
  blockGoogleServiceWorker,
  {"urls": ["*://*/*"]},
  ["blocking"]
);
