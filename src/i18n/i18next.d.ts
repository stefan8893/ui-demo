import 'i18next'
import type common from '../../public/locales/de/common.json'
import type styleGuide from '../../public/locales/de/style-guide.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common'
    resources: {
      common: typeof common
      'style-guide': typeof styleGuide
    }
  }
}
