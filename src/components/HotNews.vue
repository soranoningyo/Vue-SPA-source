<template>
  <b-col sm="12" class="mb-4">
    <b-card
      :title="toHotNews.title"
      :img-src="toHotNews.urlToImage"
      :img-alt="toHotNews.title"
      img-top
      tag="article"
      class="mb-2">
      <b-card-text>
        {{toHotNews.content}}
      </b-card-text>
      <b-button size='lg' block :href="toHotNews.url" target="_blank" variant="primary">See it Now</b-button>
    </b-card>
  </b-col>

</template>
<script>
export default {
  props: ['toHotNews']
}
</script>
