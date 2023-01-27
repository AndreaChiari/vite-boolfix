import { createApp } from 'vue'
import App from './App.vue';

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHatWizard);





createApp(App).mount('#app')

