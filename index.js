module.exports.requestHooks = [
  context => {
    const url = new URL(context.request.getUrl());

    // Sort by param name length so `:foo` doesn't clobber `:foobar`
    for (const { name, value } of context.request.getParameters().sort((a, b) => b.name.length - a.name.length)) {
      if (!name) continue;
      
      // First check the hostname for replacements
      let toReplace = `--${name}`

      if (url.hostname.includes(toReplace)) {
        url.hostname = url.hostname.replace(toReplace, value);
      }

      toReplace = `:${name}`;
      let path = url.pathname;

      if (!path.includes(toReplace)) {
        // Not found in URL, treat as regular parameter
        continue;
      }

      while (path.includes(toReplace)) {
        path = path.replace(toReplace, value);
      }
      url.pathname = path;

      context.request.removeParameter(name);
    }

    context.request.setUrl(url.toString());
  },
];
