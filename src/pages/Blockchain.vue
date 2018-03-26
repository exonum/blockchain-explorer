<template>
  <div>
    <div class="card">
      <div class="card-header">Mempool</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-3"><strong>Transactions:</strong></div>
            <div class="col-sm-9">{{ mempoolSize }}</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="card mt-3">
      <div class="card-header d-flex justify-content-between">
        Latest blocks
        <div class="custom-control custom-checkbox">
          <input type="checkbox" v-model="skip" v-on:change="skipChange" class="custom-control-input" id="skip-empty-blocks">
          <label class="custom-control-label" for="skip-empty-blocks">Skip empty blocks</label>
        </div>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item font-weight-bold">
          <div class="row">
            <div class="col-sm-3">Block height</div>
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
        blocks: []
      }
    },
    methods: {
      loadMempool: function() {
        const self = this

        this.$http.get('/api/system/v1/mempool').then(response => {
          if (typeof response.data === 'object') {
            self.mempoolSize = response.data.size
            setTimeout(self.loadMempool, POOLING_INTERVAL)
          } else {
            console.error(new TypeError('Unknown format of server response'))
          }
        }).catch(error => {
          console.error(error)
        })
      },

      loadBlocks: function(latest) {
        const self = this
        let suffix = ''

        // Provide support for 0.5 and 0.6 Exonum versions
        if (!isNaN(parseInt(latest)) || !isNaN(latest)) {
          suffix += '&latest=' + latest
        }

        if (this.skip) {
            suffix += '&skip_empty_blocks=true'
        }

        this.$http.get('/api/explorer/v1/blocks?count=' + PER_PAGE + suffix).then(response => {
          if (typeof response.data === 'object') {
            // Provide support for 0.5 and 0.6 Exonum versions
            if (Array.isArray(response.data.blocks)) {
              self.blocks = self.blocks.concat(response.data.blocks)
            } else {
              self.blocks = self.blocks.concat(response.data)
            }
          } else {
            console.error(new TypeError('Unknown format of server response'))
          }
        }).catch(error => {
          console.error(error)
        })
      },

      loadMore: function() {
        this.loadBlocks(this.blocks[this.blocks.length - 1].height)
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
