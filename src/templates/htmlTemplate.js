export default (content, store) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
  <title>Rick And Morty Catalogue</title>
</head>
<body>
  <div id="root">${content}</div>
  <script async src="client.js"></script>
  <script async>window.__PRELOADED_STATE__=${JSON.stringify(store.getState())}</script>
</body>
</html>`;
