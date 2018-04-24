<template>
    <div class="container">
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      newsList: null,
      loading: true
    };
  },
  created() {
    this.getCurrentHeadlines();
  },
  methods: {
    getCurrentHeadlines() {
      axios
        .get("url")
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style>

</style>
