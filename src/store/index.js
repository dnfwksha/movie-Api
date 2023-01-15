import {createStore} from "vuex";
import movie from "@/store/movie";
import about from "@/routes/About.vue";


export default createStore({
    modules: {
        movie,
        about
    }
})