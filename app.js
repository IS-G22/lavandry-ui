const routes = [
    { path: '/', component: prenotazioni },
    { path: '/guasto', component: guasto },
    { path: '/nuovaprenotazione', component: nuovaprenotazione },
    { path: '/tecnico', component: viewTecnico },
]

const router = new VueRouter({
    routes
})

// Ready translated locale messages

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'it', // set locale
    messages: languages, // set locale messages
})

const app = new Vue({
    i18n,
    router,
    data: {
        isActive: window.location.hash,
        isMenuOpen: false,
        isToggle: false,
        isEng: false,
        isFrog: 0,
        frogActivated: false,
    },
    methods: {
        setActive: function () {
            this.isActive = window.location.hash;
            this.isMenuOpen = false;

        },
        toggleMenu: function () {
            this.isMenuOpen = !this.isMenuOpen;
        },
        toggle: function () {
            this.isToggle = !this.isToggle;
        },
        toggleLanguage: function () {
            //manca localstorage
            //console.log(i18n.locale)
            if (i18n.locale == 'it') {
                i18n.locale = 'en';
            } else {
                i18n.locale = 'it';
            }
            this.isEng = !this.isEng;
            window.localStorage.language = i18n.locale;
            this.isFrog += 1;
            if (this.isFrog == 10) {
                console.log("Frog Activated");
                this.frogActivated = true;
            }
        },
        closeFrog: function () {
            this.frogActivated = false;
            this.isFrog = 0;
        }
    },
    mounted: function () {
        this.isActive = window.location.hash;
        //registerSW();
        if (window.localStorage.language) {
            console.log(window.localStorage.language);
            i18n.locale = window.localStorage.language;
            if (window.localStorage.language == 'en') {
                this.isEng = true;
            }
        } else {
            window.localStorage.language = "it";
        }
    },
}).$mount('#app')




// Register the Service Worker
async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            console.log('trying sw');
            await navigator
                .serviceWorker
                .register('serviceworker.js');
            console.log('SW registration success');
        }
        catch (e) {
            console.log('SW registration failed');
            throw e;
        }
    } else {
        console.log("no sw")
    }
}
