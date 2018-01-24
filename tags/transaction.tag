<transaction>
    <h3>
        <a href="#">Blockchain Explorer</a>
        /
        <a href="#block/{ location.block_height }">Block { location.block_height }</a>
        /
        Transaction { opts.hash }
    </h3>

    <table class="table table-bordered">
        <caption>Transaction details</caption>
        <tbody if={ transaction }>
        <tr>
            <td><strong>message_id</strong></td>
            <td>{ transaction.message_id }</td>
        </tr>
        <tr>
            <td><strong>network_id</strong></td>
            <td>{ transaction.network_id }</td>
        </tr>
        <tr>
            <td><strong>protocol_version</strong></td>
            <td>{ transaction.protocol_version }</td>
        </tr>
        <tr>
            <td><strong>service_id</strong></td>
            <td>{ transaction.service_id }</td>
        </tr>
        <tr>
            <td><strong>signature</strong></td>
            <td>{ transaction.signature }</td>
        </tr>
        <tr>
            <td><strong>body</strong></td>
            <td><pre><code>{ JSON.stringify(transaction.body, null, 2) }</code></pre></td>
        </tr>
        </tbody>
    </table>

    <script>
        var self = this;

        $.ajax({
            method: 'GET',
            url: '/api/system/v1/transactions/' + self.opts.hash,
            dataType: 'json',
            success: function(response) {
                if (typeof response === 'object') {
                    self.location = response.location;
                    self.transaction = response.content;
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
</transaction>
