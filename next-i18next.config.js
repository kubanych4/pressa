const path = require('path');

module.exports = {
  i18n: {
    defaultNS: "general",
    ns: ["general"],
    defaultLocale: "kg",
    locales: ["kg", "ru"],
    localePath: path.resolve('./public/locales'),
    localeDetection: false
  }
};
