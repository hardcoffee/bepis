// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
import Expo from "expo";

const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (callback) => { return /*'en'; */ Expo.DangerZone.Localization.getCurrentLocaleAsync().then(lng => { callback(lng.replace('_', '-')); }) },
  init: () => {},
  cacheUserLanguage: () => {}
};

export default languageDetector;
