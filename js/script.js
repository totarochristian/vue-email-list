const { createApp } = Vue;

createApp({
  data(){
    return {
      title: "Lista di e-mail randomiche",
      apiRestUri: "https://flynn.boolean.careers/exercises/api/random/mail"
    }
  },
  methods: {
    GetSingleRandomMail(){
      axios.get(this.apiRestUri).then((res)=>{
        if(res.data.success)
          return res.data.response;
        return "";
      });
    }
  },
  mounted(){
    this.GetSingleRandomMail();
  }
}).mount("#app");