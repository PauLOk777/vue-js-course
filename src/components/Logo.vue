<template>
  <div id="logo">
    <a href="#"
      ><strong>{{ company_name }}</strong
      >{{ app_name }}</a
    >
  </div>
</template>

<script>
import "../assets/logo.css";
export default {
  name: "Logo",
  props: {
    company_name: {
      type: String,
      require: true
    },
    app_name: {
      type: String,
      require: true
    }
  }
};
</script>
