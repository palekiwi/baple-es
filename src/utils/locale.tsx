import * as locale from 'browser-locale';
const storage = window.localStorage;

export function getLocale(): string {
  function checkLocale (f: () => string) {
    switch (f().toLowerCase().substr(0,2)) {
      case 'en': return 'en';
      case 'es': return 'es';
      case 'zh': return 'zh';
      default:   return 'es';
    }
  }
  return storage.getItem('lang') || checkLocale(locale);
}

export const saveLocale = (lang: string) => storage.setItem('lang', lang);
