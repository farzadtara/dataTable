export default {
    mode: 'universal',

    head :{
        title : 'MEVN STACK',
        meta:[
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link:[],
    },

    css: [],

    plugins: [],

    comments: true,

    buildModule:[
        "@nuxtjs/vuetify"
    ],

    modules:[
        "@nuxtjs/axios"
    ],

    pwa: {
        manifest: {
          lang: 'en'
        }
      },


    build: {
        vendor: ['vuetify']
      }
    }
    








}