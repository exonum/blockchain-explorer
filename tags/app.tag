<app>
    <div class="container app">
        <div class="row">
            <div class="col-sm-12">
                <div id="content"></div>
            </div>
        </div>
    </div>

    <style>
        .app {
            margin-top: 20px;
        }
    </style>

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
