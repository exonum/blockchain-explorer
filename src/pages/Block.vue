<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Explorer</a></li>
        <li class="breadcrumb-item active" aria-current="page">Block {{ height }}</li>
      </ol>
    </nav>

    <div v-if="block" class="card">
      <div class="card-header">Summary</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Height:</strong></div>
            <div class="col-sm-9">{{ block.height }}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Previous block hash:</strong></div>
            <div class="col-sm-9">{{ block.prev_hash }}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Proposer ID:</strong></div>
            <div class="col-sm-9">{{ block.proposer_id }}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Schema version:</strong></div>
            <div class="col-sm-9">{{ block.schema_version }}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Blockchain state hash:</strong></div>
            <div class="col-sm-9">{{ block.state_hash }}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Transactions count:</strong></div>
            <div class="col-sm-9">{{ block.tx_count }}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Hash of transactions tree:</strong></div>
            <div class="col-sm-9">{{ block.tx_hash }}</div>
          </div>
        </li>
        <li v-if="median" class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Precommits median time:</strong></div>
            <div class="col-sm-9">{{ moment(median / 1000000).format() }}</div>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="precommits" class="card mt-3">
      <div class="card-header">Precommits</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item font-weight-bold">
          <div class="row">
            <div class="col-sm-3">Validator</div>
            <div class="col-sm-3">Time</div>
            <div class="col-sm-6">Signature</div>
          </div>
        </li>
        <li :for="precommit in precommits" class="list-group-item">
          <div class="row">
            <div class="col-sm-3">{{ precommit.body.validator }}</div>
            <div class="col-sm-3">{{ moment(bigInt(precommit.body.time.secs).multiply(1000000000).plus(precommit.body.time.nanos) / 1000000).format() }}</div>
            <div class="col-sm-6">{{ precommit.signature }}</div>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="transactions && transactions.length > 0" class="card mt-3">
      <div class="card-header">Transactions</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item font-weight-bold">
          <div class="row">
            <div class="col-sm-3">Position</div>
            <div class="col-sm-9">Hash</div>
          </div>
        </li>
        <li :for="(transaction, index) in transactions" class="list-group-item">
          <div class="row">
            <div class="col-sm-3">{{ index }}</div>
            <div class="col-sm-9">
              <router-link :to="{ name: 'transaction', params: { hash: transaction } }">{{ transaction }}</router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <nav class="mt-5" aria-label="Nearby blocks navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <router-link :to="{ name: 'block', params: { height: height - 1 } }" class="page-link">&larr; Previous block</router-link>
        </li>
        <li class="page-item">
          <router-link :to="{ name: 'block', params: { height: height + 1 } }" class="page-link">Next block &rarr;</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  function getPrecommitsMedianTime(precommits) {
    let values = [];

    for (let i = 0, time; i < precommits.length; i++) {
      time = precommits[i].body.time
      values.push(bigInt(time.secs).multiply(1000000000).plus(time.nanos))
    }

    values.sort((a, b) => a.compare(b))

    const half = Math.floor(values.length / 2)

    if (values.length % 2) {
      return values[half].toString()
    } else {
      return values[half - 1].plus(values[half]).divide(2).toString()
    }
  }

  module.exports = {
    components: {},
    props: {
      height: Number
    },
    data: function() {
      return {}
    },
    methods: {
      loadBlock: function() {
        const self = this

        this.$http.get('/api/explorer/v1/blocks/' + this.height).then(response => {
          if (typeof response.data === 'object') {
            self.block = response.data.block
            self.median = getPrecommitsMedianTime(response.data.precommits)
            self.precommits = response.data.precommits
            self.transactions = response.data.txs
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
        this.loadBlock()
      })
    }
  }
</script>
