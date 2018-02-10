<navbar>
    <nav class="navbar navbar-light bg-light mb-5">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="/assets/images/logo.png" width="41" height="36" class="d-inline-block .align-middle" alt="">
                Blockchain Explorer
            </a>

            <span class="navbar-text"><span class="badge badge-secondary">{ mempool }</span> txs in mempool</span>

            <form class="form-inline" onsubmit={ submit }>
                <input class="form-control mr-sm-2" type="search" placeholder="Block height or tx hash" aria-label="Search" onkeyup="{ editQuery }">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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
