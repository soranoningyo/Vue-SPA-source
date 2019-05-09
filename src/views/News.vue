<template>
  <div>
    <!-- loader -->
    <transition name="slide-fade">
      <div class="abso" v-if="!loaded">
        <div class="lbody">
          <div class="boxes">
            <div class="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
      <b-container>
        <b-row>
          <NewsCard :to-news-card="newpost" v-for="(newpost,index) in cardData" :key="index"/>
        </b-row>
      </b-container>
  </div>
</template>

<script>
import NewsCard from './../components/NewsCard'
export default {
  components: {
    NewsCard
  },
  created: function () {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=fa09a7018c3d4428be48cea154fa3f7f')
      .then(response => response.json())
      .then(json => this.fetcher.push(json))
      .then(() => {
        this.cardData = this.fetcher[0].articles
        this.loaded = true
        var x = this.cardData
        x.forEach(function (element) {
          if (!element.urlToImage) {
            element.urlToImage = 'https://dummyimage.com/400x300/777777/222222.png&text=No+Image+provided'
          }
        })
      })
  },
  data () {
    return {
      fetcher: [],
      cardData: [],
      loaded: false
    }
  }
}
</script>
