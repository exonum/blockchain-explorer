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
              <code>{{ block.height }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Previous block hash:</strong></div>
            <div class="col-sm-9">
              <code>{{ block.prev_hash }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Proposer ID:</strong></div>
            <div class="col-sm-9">
              <code>{{ block.proposer_id }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Blockchain state hash:</strong></div>
            <div class="col-sm-9">
              <code>{{ block.state_hash }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Transactions count:</strong></div>
            <div class="col-sm-9">
              <code>{{ block.tx_count }}</code>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Hash of transactions tree:</strong></div>
            <div class="col-sm-9">
              <code>{{ block.tx_hash }}</code>
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
        <li class="list-group-item font-weight-bold">
          <div class="row">
            <div class="col-sm-2">Validator</div>
            <div class="col-sm-2">Time</div>
            <div class="col-sm-2">Round</div>
            <div class="col-sm-2">Propose hash</div>
            <div class="col-sm-4">Signature</div>
          </div>
        </li>
        <li v-for="(precommit) in precommits" :key="precommit.body.validator" class="list-group-item">
          <div class="row">
            <div class="col-sm-2">
              <code>{{ precommit.body.validator }}</code>
            </div>
            <div class="col-sm-2">
              <code>{{ $moment($bigInt(precommit.body.time.secs).multiply(1000000000).plus(precommit.body.time.nanos) / 1000000).format() }}</code>
            </div>
            <div class="col-sm-2">
              <code>{{ precommit.body.round }}</code>
            </div>
            <div class="col-sm-2">
              <code>{{ precommit.body.propose_hash }}</code>
            </div>
            <div class="col-sm-4">
              <code>{{ precommit.signature }}</code>
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
        <li v-for="(transaction, index) in transactions" :key="transaction" class="list-group-item">
          <div class="row">
            <div class="col-sm-3">
              <code>{{ index }}</code>
            </div>
            <div class="col-sm-9">
              <code>
                <router-link :to="{ name: 'transaction', params: { hash: transaction } }">{{ transaction }}</router-link>
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
      height: String
    },
    data: function() {
      return {
        block: {},
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

        this.$http.get('/api/explorer/v1/block?height=' + this.height).then(response => {
          self.block = response.data.block;
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
