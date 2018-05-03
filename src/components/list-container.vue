<template>
    <div class="container">
      <div class="loader" v-if="loading & !newsList"></div>
      <div class="row" v-else>
        <headline v-for="news in newsList" :newsItem="news" :key="news.url"> </headline>
      </div>
    </div>
</template>

<script>
import axios from "axios";
import sysVar from "../../config/sysVar.env";
import Headline from "./list-item";
import store from "../util/indexDB";
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
      axios
        .get(
          `https://newsapi.org/v2/everything?q=javascript&apiKey=${
            sysVar.APIKEY
          }`
        )
        .then(response => {
          const data = response.data;
          if (data.status == "ok") {
            self.loading = false;
            self.newsList = data.articles;
            store.addHeadlines(data.articles);
          }
        })
        .catch(error => {
          self.loading = false;
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
