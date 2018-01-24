<list>
    <h3>Blockchain Explorer</h3>

    <table class="table">
        <thead>
        <tr>
            <th>height</th>
            <th>state_hash</th>
            <th>tx_count</th>
        </tr>
        </thead>
        <tbody>
        <tr each={ blocks }>
            <td><a href="#block/{ height }">{ height }</a></td>
            <td>{ state_hash }</td>
            <td>{ tx_count }</td>
        </tr>
        </tbody>
    </table>

    <div class="form-group">
        <div class="row">
            <div class="col-sm-12">
                <button class="btn btn-lg btn-block btn-default" onclick={ more }>
                    Older blocks
                </button>
            </div>
        </div>
    </div>

    <script>
        var self = this;
        var count = 10;

        function getBlocks(latest) {
            var suffix = '';

            if (!isNaN(latest)) {
                suffix += '&latest=' + latest;
            }

            $.ajax({
                method: 'GET',
                url: '/api/explorer/v1/blocks?count=' + count + suffix,
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
