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
            <div class="col-sm-9">
              <code>{{ type }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Status:</strong></div>
            <div class="col-sm-9">
              <code>{{ status.type }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Block:</strong></div>
            <div class="col-sm-9">
              <code>
                <router-link v-if="location.block_height" :to="{ name: 'block', params: { height: location.block_height } }">{{ location.block_height }}</router-link>
              </code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Position in block:</strong></div>
            <div class="col-sm-9">
              <code v-if="location.position_in_block">
                {{ location.position_in_block }}
              </code>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="card mt-3">
      <div class="card-header">Content</div>
      <ul v-if="content" class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Message ID:</strong></div>
            <div class="col-sm-9">
              <code>{{ content.message_id }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Service ID:</strong></div>
            <div class="col-sm-9">
              <code>{{ content.service_id }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Protocol version:</strong></div>
            <div class="col-sm-9">
              <code>{{ content.protocol_version }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Signature:</strong></div>
            <div class="col-sm-9">
              <code>{{ content.signature }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Body:</strong></div>
            <div class="col-sm-9"><pre><code>{{ JSON.stringify(content.body, null, 2) }}</code></pre></div>
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
        content: {},
        location: {},
        type: '',
        status: {}
      }
    },
    methods: {
      loadTransaction: function() {
        const self = this;

        this.$http.get('/api/explorer/v1/transactions?hash=' + this.hash).then(response => {
          self.content = response.data.content;
          self.location = response.data.location;
          self.type = response.data.type;
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
