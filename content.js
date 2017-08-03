/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Override the navigator.userAgent value Google Search sees

window.wrappedJSObject.eval(`(function() {
  const ChromePhoneUA = "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Mobile Safari/537.36";
  const ChromeTabletUA = "Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36";

  const IsPhone = navigator.userAgent.includes("Mobile");
  const TargetUA = IsPhone ? ChromePhoneUA : ChromeTabletUA;

  Object.defineProperty(navigator, "userAgent", {
    get: () => TargetUA,
    configurable: true
  });
}());`);
