import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'

library.add(faHatWizard)

import './assets/tailwind.css'

const app = createApp(App)



app
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
