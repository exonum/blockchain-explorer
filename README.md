# Exonum Blockchain Explorer

An application for monitoring blocks and transactions in Exonum blockchain.

## Install

First, install dependencies:

```sh
npm install
```

Run app:

```sh
npm start -- --port=3000
```

Find blockchain explorer at [http://127.0.0.1:3000](http://127.0.0.1:3000) in your browser.
Default port is `3000`.

Default public endpoint URL of Exonum node is `http://127.0.0.1:8200`.
It can be changed on app start:

```sh
npm start -- --endpoint=http://127.0.0.1:8200
```

## Alternatives

* [https://github.com/quicky84/exonum-block-explorer](https://github.com/quicky84/exonum-block-explorer)

## LICENSE

Exonum Blockchain Explorer is licensed under the Apache License (Version 2.0). See [LICENSE](https://github.com/exonum/blockchain-explorer/blob/master/LICENSE) for details.
