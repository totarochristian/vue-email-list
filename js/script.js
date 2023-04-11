const { createApp } = Vue;

createApp({
  data(){
    return {
      title: "Lista di e-mail randomiche",
      apiRestUri: "https://flynn.boolean.careers/exercises/api/random/mail",
      maxNumberOfMails: 10,
      generatedMails: []
    }
  },
  methods: {
    /**
     * Method used to return a random mail
     */
    GetSingleRandomMail(){
      axios.get(this.apiRestUri).then((res)=>{
        if(res.data.success)
          return res.data.response;
        return "";
      });
    },
    ResetGeneratedMails(){
      this.generatedMails.splice(0,this.generatedMails.length);
    },
    GenerateMails(){
      this.ResetGeneratedMails();
      //Generate mails and push to the generatedMails array
      for(let i=0; i<this.maxNumberOfMails; i++)
        this.generatedMails.push(this.GetSingleRandomMail());
    }
  },
  mounted(){
    this.GenerateMails();
  }
}).mount("#app");