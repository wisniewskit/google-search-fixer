const RunningFirefoxVersion = (navigator.userAgent.match(/Firefox\/([0-9.]+)/) || ["", "58.0"])[1];
const RunningAndroidVersion = navigator.userAgent.match(/Android\/[0-9.]+/) || "Android 6.0";

const ChromeMajorVersionToMimic = `${parseInt(RunningFirefoxVersion) + 4}.0.0.0`;

const ChromePhoneUA = `Mozilla/5.0 (Linux; ${RunningAndroidVersion}; Nexus 5 Build/MRA58N) FxQuantum/${RunningFirefoxVersion} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${ChromeMajorVersionToMimic} Mobile Safari/537.36`;
const ChromeTabletUA = `Mozilla/5.0 (Linux; ${RunningAndroidVersion}; Nexus 7 Build/JSS15Q) FxQuantum/${RunningFirefoxVersion} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${ChromeMajorVersionToMimic} Safari/537.36`;

const IsPhone = navigator.userAgent.includes("Mobile");

const TargetUA = IsPhone ? ChromePhoneUA : ChromeTabletUA;
