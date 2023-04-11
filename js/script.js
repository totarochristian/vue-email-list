const { createApp } = Vue;

createApp({
  data(){
    return {
      title: "Lista di e-mail randomiche",
      apiRestUri: "https://flynn.boolean.careers/exercises/api/random/mail"
    }
  },
  methods: {

  },
  mounted(){

  }
}).mount("#app");