const guasto = {
    template:`<div class="main-content">
    <h2 class="main-title">{{ $t("guasto.titolo") }}</h2>
    <hr></hr>
        <div class="list" v-if="fullStatus=='ready'">
            <h2>{{ $t("guasto.select") }}</h2>
            <div v-for="lavatrice in lavatrici">
                <div class="lavaggio" @click="selectLavatrice(lavatrice)">
                    <div>{{ $t("prenotazioni.pren.lavatrice")}} {{lavatrice.id}}</div> <span>></span>
                </div>
            </div>
        </div>
        <div class="list" v-if="fullStatus=='form'">
            <div class="back" @click="backToStart"><span><</span></div>
            
            <div class="lavaggio">
                <div>{{ $t("prenotazioni.pren.lavatrice")}} {{lavatriceSelected.id}}</div> <span>></span>
            </div>
            <h2>{{ $t("guasto.form") }}</h2>
            <div>
                <form class="form-container">
                    <textarea v-model="message" cols="40" rows="5" class="form" type="text" placeholder="C'è acqua da tutte le parti!"></textarea>
                </form>
            </div>
            <div class="lavaggio" @click="inviaSegnalazione">
                <div>{{ $t("guasto.send")}}</div> <span>></span>
            </div>
        </div>
        <div class="list" v-if="fullStatus=='complete'">
            <h2>{{ $t("guasto.complete") }}</h2>
        </div>
        <div class="list centrated" v-if="fullStatus=='charging'">
            <lottie-player src="./lottie/loading.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player>
            <span id="caricamento">{{ $t("prenotazioni.caricamento") }}</span>
        </div>
        <div class="list" v-if="fullStatus=='failure'">
            <p class="red ordered">{{ $t("errorapi")}}</p>
        </div>
    </div>
    `,
    data() {
        return {
            lavatrici: [],
            lavatriceSelected:{},
            fullStatus: "charging",
            message:""
        }
    },
    methods: {
        refreshData() {
            this.fullStatus = 'charging';
            let timer = setTimeout(() => {
                this.fullStatus = 'failure';
            }, 5000);
            axios.get(variables.API_URL + "lavatrici")
                .then((response) => {
                    clearTimeout(timer);
                    this.lavatrici = response.data;
                    //console.log(this.lavatrici);
                    this.lavatrici.sort((first,second)=>{
                        return first.id<second.id ? -1 : 1})
                    console.log(this.lavatrici)
                    this.fullStatus = 'ready';
                });
        },
        inviaSegnalazione(){
            this.fullStatus = 'charging';
            let timer = setTimeout(() => {
                this.fullStatus = 'failure';
            }, 5000);
            axios.post(variables.API_URL + "segnala?lavatrice="+this.lavatriceSelected.id+"&text="+this.message)
            .then((response) => {
                clearTimeout(timer);
                console.log(response.data)

                this.fullStatus = 'complete';
            })

        },
        selectLavatrice(lavatrice){
            this.lavatriceSelected=lavatrice;
            this.fullStatus="form";
        },
        backToStart(){
            this.fullStatus="ready";
        }
    },
    mounted: function () {
        this.refreshData();
    }
}