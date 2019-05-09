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
        <sportCard :to-sports-card="Sport" v-for="(Sport,index) in cardData" :key="index"/>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import sportCard from './../components/sportCard'
export default {
  created: function () {
    fetch('https://www.scorebat.com/video-api/v1/')
      .then(response => response.json())
      .then(json => this.fetcher.push(json))
      .then(() => {
        var matches = this.fetcher[0]
        var thisIn = this
        matches.forEach(function (item) {
          thisIn.cardData.push(item)
          thisIn.loaded = true
        })
        var x = this.cardData
        x.forEach(function (element) {
          if (!element.thumbnail) {
            element.thumbnail = 'https://dummyimage.com/400x300/777777/222222.png&text=No+Image+provided'
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
  },
  components: {
    sportCard
  }
}
</script>
