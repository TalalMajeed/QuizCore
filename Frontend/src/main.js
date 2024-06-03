/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import '@/styles/index.css'

// Components
import App from './App.vue'

export const API = 'http://localhost:8080'

function setCookie(cookieName, cookieValue) {
    document.cookie = cookieName + "=" + cookieValue + ";path=/";
}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


export const SETSTUDENT = (user) => {
    setCookie('student', JSON.stringify(user));
}

export const GETSTUDENT = () => {
    return JSON.parse(getCookie('student'));
}

export const SETTOKEN = (token) => {
    setCookie('token', JSON.stringify(token));
}

export const GETTOKEN = () => {
    return JSON.parse(getCookie('token'));
}


// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
