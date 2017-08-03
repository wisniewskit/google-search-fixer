/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Override the user-agent HTTP headers sent to Google Search

const GoogleSearchTLDs = /^https?:\/\/www\.google\..*/;

const ChromePhoneUA = "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36";
const ChromeTabletUA = "Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36";

const IsPhone = navigator.userAgent.includes("Mobile");
const TargetUA = IsPhone ? ChromePhoneUA : ChromeTabletUA;

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
