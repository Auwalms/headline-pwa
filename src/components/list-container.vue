<template>
    <div class="container">
      <div class="row">
        <headline v-for="news in newsList" :newsItem="news" :key="news.url"> </headline>
      </div>

    </div>
</template>

<script>
import axios from "axios";
import sysVar from "../../config/sysVar.env";
import Headline from "./list-item";
export default {
  name: "",
  components: {
    Headline
  },
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
      const self = this;
      let countryCode = "us";
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${
            sysVar.APIKEY
          }`
        )
        .then(response => {
          const data = response.data;
          if (data.status == "ok") {
            self.newsList = data.articles;
            console.log(self.newsList);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 16px;
}
</style>
