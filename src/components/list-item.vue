<template>
    <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card">
                <img src="../../static/headline_news.png" alt="headline-img" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{newsItem.title}}</h5>
                    <p class="card-text">{{newsItem.description}}</p>
                </div>
            </div>
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
.card-img-top {
  max-width: 100%;
}
</style>
