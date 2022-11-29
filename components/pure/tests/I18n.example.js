import i18next from "i18next";


i18next.init({
  debug: true,
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        key: 'hello world',
        look: {
          deeper: 'some deep key'
        }
      }
    },
    es: {
      translation: {
        key: 'Hola Mundo'
      }
    }
  }
})

const ret = i18next.t('look.deeper', { lng: 'es'})
console.log(ret);