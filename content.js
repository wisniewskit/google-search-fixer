/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Override the navigator.userAgent value Google Search sees


Object.defineProperty(
  navigator.wrappedJSObject,
  "userAgent",
  {
    enumerable: true,
    configurable: true,
    // This property descriptor is a value-property rather than a getter function,
    // to avoid the error "TypeError: can't access dead object" when the content
    // accesses navigator.userAgent after the extension is unloaded.
    value: TargetUA,
  }
);
