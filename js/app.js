const checkIfEmptyValue = (obj) => {
    let isEmpty = false;
    for (const prop in obj) {
        if (obj[prop] == "") {
            isEmpty = true;
        }
    }
    return isEmpty
}
const showAlert = (message) => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
    })
}
const App = {
    data() {
        return {
            showHome: false,
            showPresentation: false,
            showActualite: false,
            showContact: false,
            newActualite: {
                contenu: "",
                image: "",

            },
            actualites: [
            ]
        }
    },
    mounted() {
        this.changeLien("home");
    },
    methods: {
        goToHome() {
            this.changeLien("home")
        },
        goToPresentation() {
            this.changeLien("presentation")
        },
        goToActualite() {
            this.changeLien("actualite")
            this.employees = getLocalDB()


        },
        goToContact() {
            this.changeLien("contact")
            this.employees = getLocalDB()


        },
        deleteActualite(actualite) {
            deleteActualite(actualite)
            showAlert(" actualite deleted")
            this.goToActualite()
        },

        changeLien(menu) {
            this.showHome = false
            this.showPresentation = false
            this.showActualite = false
            this.showContact = false

            switch (menu) {
                case "home":
                    this.showHome = true
                    break;
                case "presentation":
                    this.showPresentation = true
                    break;
                case "actualite":
                    this.showActualite = true
                    break;
                case "contact":
                    this.showContact = true
                    break;
                default:
                    this.showHome = true
                    break;
            }
        }

    }
}

Vue.createApp(App).mount("#app")