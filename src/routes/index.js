import {createRouter,createWebHashHistory} from 'vue-router'
import Home from "./Home.vue";
import About from "./About.vue";
import Movie from "./Movie.vue";

export default createRouter({
    //  Hash, History
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            component: Home
        },
        {
            path:'/movie',
            component: Movie
        },
        {
            path:'/about',
            component: About
        }
    ]
})