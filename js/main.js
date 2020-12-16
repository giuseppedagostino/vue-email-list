// Generare 10 email e stamparle a schermo, utilizzando Vue, Axios e l'endpoint relativo nelle slide.

var app = new Vue({
  el: "#root",
  data: {
    randomEmail: "",
    arrayEmail: []
  },
  methods: {},
  mounted: function() {
    for (var i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then( (result) => {
          console.log(result);
          console.log(result.data.response);
          // inserisco nel dato randomEmail il valore restituito dal server
          this.randomEmail = result.data.response;
          // pusho nell'array la singola email
          this.arrayEmail.push(this.randomEmail);
        });
    }

  }
});
