<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'blockchain' }">Explorer</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'block', params: { height: location.block_height } }">Block {{ location.block_height }}</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Transaction {{ hash }}</li>
      </ol>
    </nav>

    <div class="card">
      <div class="card-header">Summary</div>
      <ul class="list-group list-group-flush">
        <li v-if="type" class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Type:</strong></div>
            <div class="col-sm-9">{{ type }}</div>
          </div>
        </li>
        <li v-if="status" class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Status:</strong></div>
            <div class="col-sm-9">{{ status }}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Protocol version:</strong></div>
            <div class="col-sm-9">{{ transaction.protocol_version }}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Network ID:</strong></div>
            <div class="col-sm-9">{{ transaction.network_id }}</div>
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
            <div class="col-sm-3"><strong>Signature:</strong></div>
            <div class="col-sm-9">{{ transaction.signature }}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Body:</strong></div>
            <div class="col-sm-9"><pre><code>{{ JSON.stringify(transaction.body, null, 2) }}</code></pre></div>
          </div>
        </li>
      </ul>
    </div>

    <div class="card mt-3">
      <div class="card-header">Location</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Block height:</strong></div>
            <div class="col-sm-9">
              <router-link :to="{ name: 'block', params: { height: location.block_height } }">{{ location.block_height }}</router-link>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Position in block:</strong></div>
            <div class="col-sm-9">{{ location.position_in_block }}</div>
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
        transaction: Object,
        location: Object,
        type: String
      }
    },
    methods: {
      loadTransaction: function() {
        const self = this

        this.$http.get('/api/system/v1/transactions/' + this.hash).then(response => {
          if (typeof response.data === 'object') {
            self.transaction = response.data.content
            self.location = response.data.location
            self.type = response.data.type
            self.status = response.data.status
          } else {
            console.error(new TypeError('Unknown format of server response'))
          }
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
