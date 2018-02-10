<list>
    <div class="card">
        <div class="card-header">{ count } Latest blocks</div>
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
            <a href="#" class="btn btn-primary" onclick={ more }>Load { count } older blocks</a>
        </div>
    </div>

    <script>
        var self = this;

        this.count = 10;

        function getBlocks(latest) {
            var suffix = '';

            if (!isNaN(latest)) {
                suffix += '&latest=' + latest;
            }

            $.ajax({
                method: 'GET',
                url: '/api/explorer/v1/blocks?count=' + self.count + suffix,
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
    </script>
</list>
