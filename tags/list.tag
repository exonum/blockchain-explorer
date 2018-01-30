<list>
    <ol class="breadcrumb">
        <li class="active">Explorer</li>
    </ol>

    <table class="table">
        <caption>Latest blocks</caption>
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

    <nav>
        <ul class="pager">
            <li><a href="#" onclick={ more }>Load older blocks</a></li>
        </ul>
    </nav>

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
