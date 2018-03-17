<template>
  <div>
    <nav class="navbar navbar-light bg-light mb-5">
      <div class="container">
        <router-link :to="{ name: 'blockchain' }" class="navbar-brand">
          <img src="images/logo.png" width="41" height="36" class="d-inline-block" alt="">
          Blockchain Explorer
        </router-link>
        <form class="form-inline" @submit.prevent="search">
          <input v-model="query" class="form-control mr-sm-2" type="search" placeholder="Block height or tx hash" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <router-view/>
        </div>
      </div>
    </div>

    <footer class="pb-4 hr">
      <hr class="mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <ul class="list-unstyled">
              <li>Sources on <a href="https://github.com/exonum/blockchain-explorer" target="_blank">GitHub</a></li>
              <li><a href="https://exonum.com/doc/" target="_blank">Exonum docs</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  module.exports = {
    methods: {
      search: function() {
        if (this.$validateHex(this.query)) {
          this.$router.push({name: 'transaction', params: {hash: this.query}})
        } else if (!isNaN(parseInt(this.query))) {
          this.$router.push({name: 'block', params: {height: this.query}})
        }
      }
    }
  }
</script>

<style>
  input:invalid {
    box-shadow: none;
  }

  code {
    word-break: break-all;
    word-wrap: break-word;
  }
</style>
