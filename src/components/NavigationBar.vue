<template>
  <div id="nav_bar">
    <form action="#">
      <div class="text-left mb-4">
        <huge-font-paragraph text="FIND YOUR MOVIE" />
      </div>
      <div class="row search_box mb-2">
        <div class="col">
          <search-input placeholder_text="Search" />
        </div>
        <div class="col col-2">
          <search-button text="SEARCH" />
        </div>
      </div>
      <div class="text-left">
        <radio-choose text="Search By" first_option="Title" second_option="Genre" options_name="search_by" />
      </div>
    </form>
  </div>
</template>

<script>
import "../assets/navigationBar.css";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import RadioChoose from "./RadioChoose";
import HugeFontParagraph from "./HugeFontParagraph.vue";

export default {
  name: "NavigationBar",
  components: {
    SearchInput,
    SearchButton,
    RadioChoose,
    HugeFontParagraph
  }
};
</script>
