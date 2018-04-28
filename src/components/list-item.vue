<template>
    <div class="col-sm-12 col-md-6 col-lg-4 news">
        <p class="news-source">{{newsItem.source.name}}</p>
        <img :src=newsItem.urlToImage alt="headline-img" class="img" v-if="newsItem.urlToImage">
        <img src="../../static/headline_news.png" alt="headline-img" class="img img-fluid" v-else>
        <small class="posted text-primary">Posted: {{newsItem.publishedAt}}</small>
        <h4>{{newsItem.title}}</h4>
        <p>{{newsItem.description}}</p>
        <p>
            <a :href="newsItem.url" class="btn btn-primary btn-md" target="_blank" rel="noopener noreferrer">More Details</a>
        </p>
    </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    newsItem: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.card-text {
  text-align: justify;
}
.img {
  max-width: 100%;
  height: 230px;
}
.news {
  margin-bottom: 20px;
}
.news-source {
  font-weight: bold;
  color: #35495e;
}
.posted {
  text-align: right;
}
</style>
