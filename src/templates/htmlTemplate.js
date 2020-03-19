import serialize from 'serialize-javascript';

export default (content, store) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
  <title>Rick And Morty Catalogue</title>
  <link rel="stylesheet" type="text/css" href="styles.css" />
  <script defer>window.__PRELOADED_STATE__=${serialize(store.getState())}</script>
</head>
<body>
  <div id="root">${content}</div>
  <script defer src="client.js"></script>
</body>
</html>`;
