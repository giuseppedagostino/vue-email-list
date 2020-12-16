// Generare 10 email e stamparle a schermo, utilizzando Vue, Axios e l'endpoint relativo nelle slide.

var app = new Vue({
  el: "#root",
  data: {
    randomEmail: "valore iniziale",
  },
  methods: {},
  mounted: function() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then( (result) => {
        console.log(result);
        console.log(result.data.response);
        this.randomEmail = result.data.response;
      });
  }
});
