module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js')
    config.resolve.alias.set('mutt-forms$', 'mutt-forms/dist/mutt-forms.es.js')
    config.resolve.alias.set('mutt-forms-vue$',
        'mutt-forms-vue/dist/mutt-forms-vue.es.js')
  }
}
