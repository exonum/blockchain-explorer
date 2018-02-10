<app>
    <navbar/>

    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div id="content"></div>
            </div>
        </div>
    </div>

    <footer class="bg-light mt-5 pt-5 pb-4">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <ul class="list-unstyled">
                        <li>Sources on <a href="https://github.com/exonum/blockchain-explorer" target="_blank">GitHub</a></li>
                        <li><a href="https://exonum.com/doc/" target="_blank">Exonum docs</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <script>
        this.on('mount', function() {
            route('/', function() {
                riot.mount('#content', 'list');
            });

            route('/block/*', function(height) {
                riot.mount('#content', 'block', {height: height});
            });

            route('/transaction/*', function(hash) {
                riot.mount('#content', 'transaction', {hash: hash});
            });

            route.start(true);
        });
    </script>
</app>
