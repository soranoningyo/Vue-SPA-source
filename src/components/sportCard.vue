<template>
  <b-col md="12" class="mb-4">
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col lg="6">
          <b-card-img-lazy
            :src="toSportsCard.thumbnail"
            :alt="toSportsCard.title"
            fluid
            class="rounded-0"
            style="height:100%;max-height:350px">
          </b-card-img-lazy>
        </b-col>
        <b-col lg="6">
          <b-card-body :title="toSportsCard.competition.name">
            <b-card-text class="mb-4">
                <a :href="toSportsCard.side1.url" target="_blank">{{toSportsCard.side1.name}}</a>
                <span id="vs"> Vs </span>
                <a :href="toSportsCard.side2.url" target="_blank">{{toSportsCard.side2.name}}</a>
            </b-card-text>
            <b-button variant="primary" :href="toSportsCard.url"  target="_blank">Live Stream</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-col>
</template>
<script>
export default {
  props: ['toSportsCard']
}
</script>

<style scoped>
@media (min-width: 978px) {
  .card-body{
    padding-top:20%
  }
}
#vs {
  font-weight: bold;
  font-size: 20px;
  color:rgb(97, 97, 97)
}
</style>
