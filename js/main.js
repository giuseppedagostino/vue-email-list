var app = new Vue({
  el: "#root",
  data: {
    // genero l'array vuoto dove ad ogni ciclo del for inserirò una email presa dal server
    emails: []
  },
  mounted: function() {
    for (var i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then( (result) => {
          console.log(result);
          console.log(result.data.response);
          // pusho nell'array la singola email (costituita da result.data.response)
          this.emails.push(result.data.response);
        });
    }

  }
});
