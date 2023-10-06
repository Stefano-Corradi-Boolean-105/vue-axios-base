const { createApp } = Vue;

createApp({
  data(){
    return{
      titolo: 'Caio Axios!',
      risultatoChiamataAxios:''
    }
  },

  methods:{
    getApi(){
      // in get si passa l'endpointe dell'API
      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
      // se la risposta è positiva il body della riposta vine passato come parametro alla funzione di callback
      .then((risposta) => {
        // il JSON trasformato in oggetto JS lo si trova nella poprità data della siposta
        console.log(risposta.data.response)
        // da data, studiando l'API prendo l'informazione che mi serve
        this.risultatoChiamataAxios = 'Risultato: ' + risposta.data.response;
      })
      .catch((errore) => {
        console.log(errore.code);
        this.risultatoChiamataAxios = 'Errore: ' + errore.code;
      })
    }
  },

  mounted(){
    // al caricamento richiamo la funzione che fa la chiamata API
    this.getApi();
  }
}).mount('#app');