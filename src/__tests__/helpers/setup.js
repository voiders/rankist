require('browser-env')()
const hooks = require('require-extension-hooks')
const Vue = require('vue')
const Vuetify = require('vuetify').default

Vue.config.productionTip = false
Vue.use(Vuetify)

hooks('vue').plugin('vue').push()
hooks(['vue', 'js']).plugin('babel').push()
