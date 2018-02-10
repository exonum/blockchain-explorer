<transaction>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Explorer</a></li>
            <li class="breadcrumb-item"><a href="#block/{ location.block_height }">Block { location.block_height }</a></li>
            <li class="breadcrumb-item active" aria-current="page">Transaction { opts.hash }</li>
        </ol>
    </nav>

    <div class="card" if={ transaction }>
        <div class="card-header">Summary</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" if={ type }>
                <div class="row">
                    <div class="col-sm-3"><strong>Type:</strong></div>
                    <div class="col-sm-9">{ type }</div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-3"><strong>Protocol version:</strong></div>
                    <div class="col-sm-9">{ transaction.protocol_version }</div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-3"><strong>Network ID:</strong></div>
                    <div class="col-sm-9">{ transaction.network_id }</div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-3"><strong>Service ID:</strong></div>
                    <div class="col-sm-9">{ transaction.service_id }</div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-3"><strong>Message ID:</strong></div>
                    <div class="col-sm-9">{ transaction.message_id }</div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-3"><strong>Signature:</strong></div>
                    <div class="col-sm-9">{ transaction.signature }</div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-3"><strong>Body:</strong></div>
                    <div class="col-sm-9"><pre><code>{ JSON.stringify(transaction.body, null, 2) }</code></pre></div>
                </div>
            </li>
        </ul>
    </div>

    <div class="card mt-3" if={ location }>
        <div class="card-header">Location</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-3"><strong>Block height:</strong></div>
                    <div class="col-sm-9"><a href="#block/{ location.block_height }">{ location.block_height }</a></div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-3"><strong>Position in block:</strong></div>
                    <div class="col-sm-9">{ location.position_in_block }</div>
                </div>
            </li>
        </ul>
    </div>

    <script>
        var self = this;

        $.ajax({
            method: 'GET',
            url: '/api/system/v1/transactions/' + self.opts.hash,
            dataType: 'json',
            success: function(response) {
                if (typeof response === 'object') {
                    self.transaction = response.content;
                    self.location = response.location;
                    self.type = response.type;
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
