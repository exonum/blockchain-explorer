<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'blockchain' }">Explorer</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link v-if="location.block_height" :to="{ name: 'block', params: { height: location.block_height } }">Block {{ location.block_height }}</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Transaction {{ hash }}</li>
      </ol>
    </nav>

    <div class="card">
      <div class="card-header">Summary</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Type:</strong></div>
            <div class="col-sm-9">{{ type }}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Status:</strong></div>
            <div class="col-sm-9">{{ status.type }}</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="card mt-3">
      <div class="card-header">Content</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Protocol version:</strong></div>
            <div class="col-sm-9">{{ transaction.protocol_version }}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Service ID:</strong></div>
            <div class="col-sm-9">{{ transaction.service_id }}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Message ID:</strong></div>
            <div class="col-sm-9">{{ transaction.message_id }}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Body:</strong></div>
            <div class="col-sm-9"><pre><code>{{ JSON.stringify(transaction.body, null, 2) }}</code></pre></div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Signature:</strong></div>
            <div class="col-sm-9">{{ transaction.signature }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  module.exports = {
    props: {
      hash: String
    },
    data: function() {
      return {
        transaction: {},
        location: {},
        type: '',
        status: {}
      }
    },
    methods: {
      loadTransaction: function() {
        const self = this

        this.$http.get('/api/explorer/v1/transactions?hash=' + this.hash).then(response => {
          self.transaction = response.data.content
          self.location = response.data.location
          self.type = response.data.type
          self.status = response.data.status
        }).catch(error => {
          console.error(error)
        })
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        this.loadTransaction()
      })
    }
  }
</script>
