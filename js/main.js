// Generare 10 email e stamparle a schermo, utilizzando Vue, Axios e l'endpoint relativo nelle slide.

axios
  .get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then( function (result) {
    console.log(result);
    console.log(result.data.response);
  });

var app = new Vue({
  el: "#root",
  data: {
    randomEmail: "valore iniziale",
  },
  methods: {

  }
});
