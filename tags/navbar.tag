<navbar>
    <nav class="navbar navbar-light bg-light mb-5">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="assets/images/logo.png" width="41" height="36" class="d-inline-block" alt="">
                Blockchain Explorer
            </a>

            <form class="form-inline" onsubmit={ submit }>
                <input class="form-control mr-sm-2" type="search" placeholder="Block height or tx hash" aria-label="Search" onkeyup="{ editQuery }">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>

    <script>
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
