<template>
  <div id="custom_header">
    <div class="text-left mb-5">
      <logo :company_name="company_name" :app_name="app_name" />
    </div>
    <navigation-bar />
  </div>
</template>

<script>
import "../assets/customHeader.css";
import Logo from "./Logo";
import NavigationBar from "./NavigationBar";
import { I18N } from "../core/constants";
export default {
  name: "Header",
  components: {
    Logo,
    NavigationBar
  },
  data() {
    return {
      company_name: I18N["EN"].COMPANY_NAME,
      app_name: I18N["EN"].APP_NAME
    };
  }
};
</script>
