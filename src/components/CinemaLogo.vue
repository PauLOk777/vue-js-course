<template>
  <div class="cinema_logo">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "CinemaLogo",
  props: {
    msg: String,
    img_src: String
  }
};
</script>
