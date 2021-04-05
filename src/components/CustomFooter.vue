<template>
  <div id="custom_footer" class="text-center">
    <span>
      <strong>{{ company_name }}</strong
      >{{ app_name }}
    </span>
  </div>
</template>

<script>
import "../assets/customFooter.css";
import { I18N } from "../core/constants";
export default {
  name: "CustomFooter",
  props: {
    company_name: {
      type: String,
      default: I18N["EN"].COMPANY_NAME
    },
    app_name: {
      type: String,
      default: I18N["EN"].APP_NAME
    }
  }
};
</script>
