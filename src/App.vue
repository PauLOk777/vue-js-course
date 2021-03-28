<template>
  <div id="app">
    <custom-header />
    <result-control :number_of_movies="1" />
    <!-- <film-gallery /> -->
    <custom-footer company_name="netflix" app_name="roulette" />
  </div>
</template>

<script>
import "./assets/app.css";
import CustomHeader from './components/CustomHeader.vue';
import CustomFooter from './components/CustomFooter.vue';
// import FilmGallery from './components/FilmGallery.vue';
import ResultControl from './components/ResultControl.vue';

export default {
  name: "App",
  components: {
    CustomHeader,
    CustomFooter,
    ResultControl,
    // FilmGallery
  },
  methods: {
    getMovies: function() {
      
    }
  }
};
</script>
