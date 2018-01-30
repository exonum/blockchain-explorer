<block>
    <ol class="breadcrumb">
        <li><a href="#">Explorer</a></li>
        <li class="active">Block { opts.height }</li>
    </ol>

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

    <nav>
        <ul class="pager">
            <li><a href="#block/{ height - 1 }">&larr; Previous block</a></li>
            <li><a href="#block/{ height + 1 }">Next block &rarr;</a></li>
        </ul>
    </nav>

    <script>
        var self = this;

        this.height = parseInt(this.opts.height);

        $.ajax({
            method: 'GET',
            url: '/api/explorer/v1/blocks/' + self.height,
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
