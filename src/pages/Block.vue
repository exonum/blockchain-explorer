<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'blockchain' }">Explorer</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Block {{ height }}</li>
      </ol>
    </nav>

    <div class="card">
      <div class="card-header">Summary</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Height:</strong></div>
            <div class="col-sm-9">
              <code>{{ height }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Previous block hash:</strong></div>
            <div class="col-sm-9">
              <code>{{ prev_hash }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Proposer ID:</strong></div>
            <div class="col-sm-9">
              <code>{{ proposer_id }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Blockchain state hash:</strong></div>
            <div class="col-sm-9">
              <code>{{ state_hash }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Error hash:</strong></div>
            <div class="col-sm-9">
              <code>{{ error_hash }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Transactions count:</strong></div>
            <div class="col-sm-9">
              <code>{{ tx_count }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Hash of transactions tree:</strong></div>
            <div class="col-sm-9">
              <code>{{ tx_hash }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Time:</strong></div>
            <div class="col-sm-9">
              <code>{{ time }}</code>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="card mt-3">
      <div class="card-header">Precommits</div>
      <ul class="list-group list-group-flush">
        <li v-for="(precommit) in precommits" :key="precommit" class="list-group-item">
          <div class="row">
            <div class="col-sm-12">
              <code>{{ precommit }}</code>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="card mt-3">
      <div class="card-header">Transactions</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item font-weight-bold">
          <div class="row">
            <div class="col-sm-3">Position</div>
            <div class="col-sm-9">Hash</div>
          </div>
        </li>
        <li v-for="(transaction, index) in transactions" :key="index" class="list-group-item">
          <div class="row">
            <div class="col-sm-3">
              <code>{{ index }}</code>
            </div>
            <div class="col-sm-9">
              <code>
                <router-link :to="{ name: 'transaction', params: { hash: transaction.tx_hash } }">{{ transaction.tx_hash }}</router-link>
              </code>
            </div>
          </div>
        </li>
        <li v-if="transactions.length === 0" class="list-group-item">
          <div class="row">
            <div class="col-sm-12">
              <em class="text-secondary">There are no transactions in the block</em>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <nav class="mt-5" aria-label="Nearby blocks navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <router-link :to="{ name: 'block', params: { height: previous } }" class="page-link">&larr; Previous block</router-link>
        </li>
        <li class="page-item">
          <router-link :to="{ name: 'block', params: { height: next } }" class="page-link">Next block &rarr;</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  module.exports = {
    props: {
      height: {
        type: String,
        defaultValue: ""
      }
    },
    data: function() {
      return {
        tx_count: String,
        prev_hash: String,
        tx_hash: String,
        state_hash: String,
        error_hash: String,
        proposer_id: String,
        precommits: [],
        time: '',
        transactions: []
      }
    },
    computed: {
      previous: function() {
        return (parseInt(this.height) - 1).toString()
      },
      next: function() {
        return (parseInt(this.height) + 1).toString()
      }
    },
    watch: {
      height: function() {
        this.loadBlock()
      }
    },
    methods: {
      loadBlock: function() {
        const self = this

        this.$http.get('/public/api/explorer/v1/block?height=' + this.height).then(response => {
          self.tx_count = response.data.tx_count;
          self.prev_hash = response.data.prev_hash;
          self.tx_hash = response.data.tx_hash;
          self.state_hash = response.data.state_hash;
          self.error_hash = response.data.error_hash;
          self.proposer_id = response.data.additional_headers.headers.proposer_id[0];
          self.precommits = response.data.precommits;
          self.time = response.data.time;
          self.transactions = response.data.txs
        }).catch(error => {
          console.error(error)
        })
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        this.loadBlock()
      })
    }
  }
</script>
