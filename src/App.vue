<template>
  <div id="app">
    <h1>Mutt Forms Vue</h1>
    <mutt-vue
      v-bind:schema="schema"
      v-bind:options="options"
      v-on:init="init"
      v-on:callback="callback"
      v-on:submit="submit"
      ></mutt-vue>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
      return {
        schema: {
          name: {
            type: 'string'
          },
          email: {
            type: 'string'
          },
          message: {
            type: 'string'
          }
        },
        options: {
          fields: {
            message: {
              widget: 'textarea'
            }
          }
        }
      }
  },
  methods: {
    init(form) {
      this.form = form
      console.log('Form init!')
    },
    callback(payload) {
      console.log('Widget Callback: ',
          JSON.stringify(payload, null, 2))
    },
    submit(form) {
      console.log('Submission: ',
          JSON.stringify(form.data(), null, 2))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
