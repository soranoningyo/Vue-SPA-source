<template>
  <div>
    <!-- loader -->
    <transition name="slide-fade">
      <loader :loading="loaded"/>
    </transition>
    <b-container>
        <b-row>
          <b-col sm='12'>
            <h1 class="mx-auto mb-3">your very hot news comes here !</h1>
          </b-col>
          <b-col sm="12" class="mx-auto mb-3">
            <p>hot news comes first !</p>
          </b-col>
          <HotNews :to-hot-news="hotty" v-for="(hotty,index) in cardData" :key="index"/>
          <b-col lg="3" offset-lg="9">
            <hr>
            <b-button to="/news" class="py-2 mb-4" variant="light">see other news</b-button>
          </b-col>
          <b-col sm='6' offset="3">
            <h2 class="mb-4">subscribe to our newsletter</h2>
            <b-form-input class="mb-3" placeholder="Enter your E-mail"></b-form-input>
            <b-button variant="primary" class="mb-5"> Subscribe </b-button>
          </b-col>
        </b-row>
      </b-container>
  </div>
</template>

<script>
import loader from './../components/loader'
import HotNews from './../components/HotNews'
export default {
  name: 'home',
  components: {
    loader,
    HotNews
  },
  created: function () {
    fetch('https://newsapi.org/v2/top-headlines?country=fr&apiKey=fa09a7018c3d4428be48cea154fa3f7f')
      .then(response => response.json())
      .then(json => this.fetcher.push(json))
      .then(() => {
        this.cardData = this.fetcher[0].articles
        this.cardData.length = 3
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
<style scoped>
p {
  font-size: 30px;
  margin: 30px 0
}
@media (min-width: 768px) {
  img {
    max-height:510px
  }
}
</style>
