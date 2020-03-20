module.exports.requestHooks = [
  context => {
    let url = context.request.getUrl();
    for (const { name, value } of context.request.getParameters()) {
      const toReplace = `:${name}`;

      if (!url.includes(toReplace)) {
        // Not found in URL, treat as regular parameter
        continue;
      }

      url = url.replace(toReplace, value);
      context.request.removeParameter(name);
    }

    context.request.setUrl(url);
  },
];
