<list>
    <div class="card">
        <div class="card-header">Mempool</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-3"><strong>Transactions:</strong></div>
                    <div class="col-sm-9">{ mempool }</div>
                </div>
            </li>
        </ul>
    </div>

    <div class="card mt-3">
        <div class="card-header">Latest blocks</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item font-weight-bold">
                <div class="row">
                    <div class="col-sm-3">Block height</div>
                    <div class="col-sm-6">Blockchain state hash</div>
                    <div class="col-sm-3">Transactions count</div>
                </div>
            </li>
            <li class="list-group-item" each={ blocks }>
                <div class="row">
                    <div class="col-sm-3"><a href="#block/{ height }">{ height }</a></div>
                    <div class="col-sm-6">{ state_hash }</div>
                    <div class="col-sm-3">{ tx_count }</div>
                </div>
            </li>
        </ul>
        <div class="card-body text-center">
            <a href="#" class="btn btn-primary" onclick={ more }>Load older blocks</a>
        </div>
    </div>

    <script>
        var self = this;
        var mempoolPollingInterval = 3000;
        var perPage = 10;

        function mempoolPolling() {
            $.ajax({
                method: 'GET',
                url: '/api/system/v1/mempool',
                dataType: 'json',
                success: function(response) {
                    if (typeof response === 'object') {
                        self.mempool = response.size;
                        self.update();
                        setTimeout(mempoolPolling, mempoolPollingInterval);
                    } else {
                        console.error(new TypeError('Unknown format of server response'));
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error(errorThrown);
                }
            });
        }

        function getBlocks(latest) {
            var suffix = '';

            if (!isNaN(latest)) {
                suffix += '&latest=' + latest;
            }

            $.ajax({
                method: 'GET',
                url: '/api/explorer/v1/blocks?count=' + perPage + suffix,
                dataType: 'json',
                success: function(response) {
                    if (typeof response === 'object') {
                        self.blocks = self.blocks.concat(response);
                        self.update();
                    } else {
                        console.error(new TypeError('Unknown format of server response'));
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error(errorThrown);
                }
            });
        }

        more(e) {
            e.preventDefault();
            getBlocks(self.blocks[self.blocks.length - 1].height);
        }

        this.blocks = [];

        getBlocks();

        mempoolPolling();
    </script>
</list>
