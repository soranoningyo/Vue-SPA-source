<template>
  <b-col md="12" class="mb-4">
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col lg="6">
          <b-card-img-lazy
            :src="toNewsCard.urlToImage"
            :alt="toNewsCard.title"
            fluid
            class="rounded-0"
            style="height:100%;max-height:350px"
          ></b-card-img-lazy>
        </b-col>
        <b-col lg="6">
          <b-card-body :title="toNewsCard.title">
            <b-card-text class="mb-4">
              {{toNewsCard.content}}
            </b-card-text>
            <b-button variant="primary" :href="toNewsCard.url" target="_blank">Complate Reading</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: ['toNewsCard']
}
</script>
