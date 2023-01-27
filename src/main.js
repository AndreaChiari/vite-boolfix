import { createApp } from 'vue'

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.vue';

// import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHatWizard);

App.component('font-awesome-icon', FontAwesomeIcon)


createApp(App).mount('#app')
