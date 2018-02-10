<block>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Explorer</a></li>
            <li class="breadcrumb-item active" aria-current="page">Block { opts.height }</li>
        </ol>
    </nav>

    <div class="card" if={ block }>
        <div class="card-header">Summary</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-3"><strong>Height:</strong></div>
                    <div class="col-sm-9">{ block.height }</div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-3"><strong>Previous block hash:</strong></div>
                    <div class="col-sm-9">{ block.prev_hash }</div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-3"><strong>Proposer ID:</strong></div>
                    <div class="col-sm-9">{ block.proposer_id }</div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-3"><strong>Schema version:</strong></div>
                    <div class="col-sm-9">{ block.schema_version }</div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-3"><strong>Blockchain state hash:</strong></div>
                    <div class="col-sm-9">{ block.state_hash }</div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-3"><strong>Transactions count:</strong></div>
                    <div class="col-sm-9">{ block.tx_count }</div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-3"><strong>Hash of transactions tree:</strong></div>
                    <div class="col-sm-9">{ block.tx_hash }</div>
                </div>
            </li>
            <li class="list-group-item" if={ median }>
                <div class="row">
                    <div class="col-sm-3"><strong>Precommits median time:</strong></div>
                    <div class="col-sm-9">{ moment(median / 1000000).format() }</div>
                </div>
            </li>
        </ul>
    </div>

    <div class="card mt-3" if={ precommits }>
        <div class="card-header">Precommits</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item font-weight-bold">
                <div class="row">
                    <div class="col-sm-3">Validator</div>
                    <div class="col-sm-3">Time</div>
                    <div class="col-sm-6">Signature</div>
                </div>
            </li>
            <li class="list-group-item" each={ precommit in precommits }>
                <div class="row">
                    <div class="col-sm-3">{ precommit.body.validator }</div>
                    <div class="col-sm-3">{ moment(bigInt(precommit.body.time.secs).multiply(1000000000).plus(precommit.body.time.nanos) / 1000000).format() }</div>
                    <div class="col-sm-6">{ precommit.signature }</div>
                </div>
            </li>
        </ul>
    </div>

    <div class="card mt-3" if={ transactions && transactions.length > 0 }>
        <div class="card-header">Transactions</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item font-weight-bold">
                <div class="row">
                    <div class="col-sm-3">Position</div>
                    <div class="col-sm-9">Hash</div>
                </div>
            </li>
            <li class="list-group-item" each={ transaction, index in transactions }>
                <div class="row">
                    <div class="col-sm-3">{ index }</div>
                    <div class="col-sm-9">
                        <a href="#transaction/{ transaction }">{ transaction }</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>

    <nav class="mt-5" aria-label="Nearby blocks navigation">
        <ul class="pagination justify-content-center">
            <li class="page-item"><a class="page-link" href="#block/{ height - 1 }">&larr; Previous block</a></li>
            <li class="page-item"><a class="page-link" href="#block/{ height + 1 }">Next block &rarr;</a></li>
        </ul>
    </nav>

    <script>
        var self = this;

        this.height = parseInt(this.opts.height);

        function getPrecommitsMedianTime(precommits) {
            var values = [];
            for (var i = 0; i < precommits.length; i++) {
                var time = precommits[i].body.time;
                values.push(bigInt(time.secs).multiply(1000000000).plus(time.nanos));
            }
            values.sort(function(a, b) {
                return a.compare(b);
            });
            var half = Math.floor(values.length / 2);

            if (values.length % 2) {
                return values[half].toString();
            } else {
                return values[half - 1].plus(values[half]).divide(2).toString();
            }
        }

        $.ajax({
            method: 'GET',
            url: '/api/explorer/v1/blocks/' + self.height,
            dataType: 'json',
            success: function(response) {
                if (typeof response === 'object') {
                    self.block = response.block;
                    self.median = getPrecommitsMedianTime(response.precommits);
                    self.precommits = response.precommits;
                    self.transactions = response.txs;
                    self.update();
                } else {
                    console.error(new TypeError('Unknown format of server response'));
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error(errorThrown);
            }
        });
    </script>
</block>
