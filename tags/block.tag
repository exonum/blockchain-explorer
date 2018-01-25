<block>
    <h3>
        <a href="#">Blockchain Explorer</a>
        /
        Block { opts.height }
    </h3>

    <table class="table table-bordered">
        <caption>Block details</caption>
        <tbody if={ block }>
        <tr>
            <td><strong>height</strong></td>
            <td>{ block.height }</td>
        </tr>
        <tr>
            <td><strong>prev_hash</strong></td>
            <td>{ block.prev_hash }</td>
        </tr>
        <tr>
            <td><strong>proposer_id</strong></td>
            <td>{ block.proposer_id }</td>
        </tr>
        <tr>
            <td><strong>schema_version</strong></td>
            <td>{ block.schema_version }</td>
        </tr>
        <tr>
            <td><strong>state_hash</strong></td>
            <td>{ block.state_hash }</td>
        </tr>
        <tr>
            <td><strong>tx_count</strong></td>
            <td>{ block.tx_count }</td>
        </tr>
        <tr>
            <td><strong>tx_hash</strong></td>
            <td>{ block.tx_hash }</td>
        </tr>
        </tbody>
    </table>

    <table class="table" if={ transactions && transactions.length > 0 }>
        <caption>Block transactions</caption>
        <thead>
        <tr>
            <th>hash</th>
        </tr>
        </thead>
        <tbody>
        <tr each={ transaction in transactions }>
            <td>
                <a href="#transaction/{ transaction }">{ transaction }</a>
            </td>
        </tr>
        </tbody>
    </table>

    <div class="form-group">
        <div class="row">
            <div class="col-sm-6">
                <button class="btn btn-lg btn-block btn-default" onclick={ previous }>
                    Previous block
                </button>
            </div>
            <div class="col-sm-6">
                <button class="btn btn-lg btn-block btn-default" onclick={ next }>
                    Next block
                </button>
            </div>
        </div>
    </div>

    <script>
        var self = this;
        var height = parseInt(this.opts.height);

        previous(e) {
            e.preventDefault();
            route('/block/' + (height - 1));
        }

        next(e) {
            e.preventDefault();
            route('/block/' + (height + 1));
        }

        $.ajax({
            method: 'GET',
            url: '/api/explorer/v1/blocks/' + height,
            dataType: 'json',
            success: function(response) {
                if (typeof response === 'object') {
                    self.block = response.block;
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
