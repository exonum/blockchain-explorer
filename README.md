# Exonum Blockchain Explorer

An application for monitoring blocks and transactions in Exonum blockchain.

First, install dependencies:

```sh
npm install
```

## Starting as a Node.JS server

Build sources:

```sh
npm build
```

Run app:

```sh
npm start -- --port=3000 --api-root=http://127.0.0.1:8300
```

`--port` is a port for Node.JS app.

`--api-root` is a root URL of Exonum node public API.

## Alternatives

* [https://github.com/quicky84/exonum-block-explorer](https://github.com/quicky84/exonum-block-explorer)

## LICENSE

Exonum Blockchain Explorer is licensed under the Apache License (Version 2.0). See [LICENSE](https://github.com/exonum/blockchain-explorer/blob/master/LICENSE) for details.
