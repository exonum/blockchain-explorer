<template>
  <div>
    <div class="card">
      <div class="card-header">Mempool</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Size:</strong></div>
            <div class="col-sm-9">{{ mempoolSize }}</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="card mt-3">
      <div class="card-header d-flex justify-content-between">
        Latest blocks
        <div class="custom-control custom-checkbox">
          <input id="skip-empty-blocks" v-model="isSkipEmpty" class="custom-control-input" type="checkbox" @change="skipChange">
          <label class="custom-control-label" for="skip-empty-blocks">Skip empty blocks</label>
        </div>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item font-weight-bold">
          <div class="row">
            <div class="col-sm-3">Height</div>
            <div class="col-sm-6">Blockchain state hash</div>
            <div class="col-sm-3">Transactions count</div>
          </div>
        </li>
        <li v-for="(block) in blocks" :key="block.height" class="list-group-item">
          <div class="row">
            <div class="col-sm-3">
              <router-link :to="{ name: 'block', params: { height: block.height } }">{{ block.height }}</router-link>
            </div>
            <div class="col-sm-6">{{ block.state_hash }}</div>
            <div class="col-sm-3">{{ block.tx_count }}</div>
          </div>
        </li>
      </ul>
      <div class="card-body text-center">
        <a href="#" class="btn btn-primary" @click.prevent="loadMore">Load older blocks</a>
      </div>
    </div>
  </div>
</template>

<script>
  const POOLING_INTERVAL = 3000
  const PER_PAGE = 10

  module.exports = {
    data() {
      return {
        blocks: [],
        mempoolSize: 0,
        isSkipEmpty: false
      }
    },
    methods: {
      loadMempool: function() {
        const self = this

        this.$http.get('/api/system/v1/mempool').then(response => {
          self.mempoolSize = response.data.size
          setTimeout(self.loadMempool, POOLING_INTERVAL)
        }).catch(error => {
          console.error(error)
        })
      },

      loadBlocks: function(latest) {
        const self = this
        let suffix = ''

        if (!isNaN(parseInt(latest))) {
          suffix += '&latest=' + latest
        }

        if (this.isSkipEmpty) {
          suffix += '&skip_empty_blocks=true'
        }

        this.$http.get('/api/explorer/v1/blocks?count=' + PER_PAGE + suffix).then(response => {
          self.blocks = self.blocks.concat(response.data.blocks)
        }).catch(error => {
          console.error(error)
        })
      },

      loadMore: function() {
        this.loadBlocks(this.blocks[this.blocks.length - 1].height - 1)
      },

      skipChange: function() {
        this.blocks = [];
        this.loadBlocks();
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        this.loadMempool()
        this.loadBlocks()
      })
    }
  }
</script>
