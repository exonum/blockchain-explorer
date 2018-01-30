<navbar>
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Blockchain Explorer</a>
            </div>

            <p class="navbar-text"><span class="badge">{ mempool }</span> txs in mempool</p>

            <form class="navbar-form navbar-right" onsubmit={ submit }>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Block height or tx hash" onkeyup="{ editQuery }">
                </div>
                <button type="submit" class="btn btn-default">Search</button>
            </form>
        </div>
    </nav>

    <script>
        var self = this;
        var mempoolPollingInterval = 3000;

        function validateHash(hash) {
            var bytes = 32;

            if (typeof hash !== 'string') {
                return false;
            } else if (hash.length !== bytes * 2) {
                // 'hexadecimal string is of wrong length
                return false;
            }

            for (var i = 0; i < hash.length; i++) {
                if (isNaN(parseInt(hash[i], 16))) {
                    // invalid symbol in hexadecimal string
                    return false;
                }
            }

            return true;
        }

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

        editQuery(e) {
            this.query = e.target.value;
        }

        submit(e) {
            e.preventDefault();

            if (validateHash(this.query)) {
                route('/transaction/' + this.query);
            } else if (!isNaN(parseInt(this.query))) {
                route('/block/' + this.query);
            }
        }
    </script>
</navbar>
