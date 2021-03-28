<template>
    <div id="custom_header">
        <div class="text-left mb-5">
          <logo company_name="netflix" app_name="roulette" />
        </div>
        <navigation-bar />
    </div>
</template>

<script>
import "../assets/customHeader.css";
import Logo from "./Logo";
import NavigationBar from "./NavigationBar";

export default {
  name: "Header",
  components: {
    Logo,
    NavigationBar
  }
};
</script>
