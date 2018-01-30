<navbar>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Blockchain Explorer</a>
            </div>

            <p class="navbar-text"><span class="badge">{ mempool }</span> txs in mempool</p>
        </div>
    </nav>

    <script>
        var self = this;
        var mempoolPollingInterval = 3000;

        (function mempoolPolling() {
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
        })();
    </script>
</navbar>