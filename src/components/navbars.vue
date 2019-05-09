<template>
  <div>
    <b-nav fill class="mb-5">
      <b-nav-item>
        <b-button block size="lg" pressed="true" variant="light" style="cursor:default;color:#0062CC">
                <b>Al</b>ways <b>Hot</b>
        </b-button>
      </b-nav-item>
      <b-nav-item>
        <b-button block size="lg" active-class="showd" variant="primary" to="/" exact>Home</b-button>
      </b-nav-item>
      <b-nav-item>
        <b-button block size="lg" active-class="showd" variant="primary" to="/News">News</b-button>
        </b-nav-item>
      <b-nav-item>
        <b-button block size="lg" active-class="showd" variant="primary" to="/Sports">Sports</b-button>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<style scoped>
.showd {
  background-color: #0062cc;
  border-color: #005cbf;
}
.nav-link {
  padding: 0px !important
}
.btn {
  border-radius: 0
}
.btn b {
  color: rgb(255, 50, 50);
}
</style>
