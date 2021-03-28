<template>
  <div id="custom_footer" class="text-center">
    <span>
      <strong>{{company_name}}</strong>{{app_name}}
    </span>
  </div>
</template>

<script>
import "../assets/customFooter.css";
export default {
  name: "CustomFooter",
  props: {
    company_name: {
      type: String,
      default: "netflix"
    },
    app_name: {
      type: String,
      default: "roulette"
    }
  }
};
</script>
