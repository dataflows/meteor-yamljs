Package.describe({
  name: 'dataflows:meteor-yamljs',
  summary: "A YAML parser and serializer.",
  version: "0.3.2",
  git: "https://github.com/dataflows/meteor-yamljs.git",
  environments: ["client", "server"]
});

Npm.depends({
  'yamljs': '0.2.3'
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files('lib/yamljs.js', ["client"]);
  api.add_files('lib/exports.js', ["client"]);
  api.add_files('lib/server.js', ["server"]);
  api.export(['YAML']);
});
