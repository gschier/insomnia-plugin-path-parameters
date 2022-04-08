module.exports.requestHooks = [
  context => {
    const url = new URL(context.request.getUrl());

    // Sort by param name length so `:foo` doesn't clobber `:foobar`
    for (const { name, value } of context.request.getParameters().sort((a, b) => b.name.length - a.name.length)) {
      if (!name) continue;
      
      // Handles both :name and {name}
      const toReplace = [`:${name}`, `%7B${name}%7D`];
      let path = url.pathname;

      toReplace.forEach(function (item, index) {
        if (!path.includes(item)) {
          // Not found in URL, treat as regular parameter
          return;
        }

        while (path.includes(item)) {
          path = path.replace(item, value);
        }
      });
      url.pathname = path;
      context.request.removeParameter(name);
    }

    context.request.setUrl(url.toString());
  },
];
