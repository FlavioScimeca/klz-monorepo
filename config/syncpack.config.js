module.exports = {
  source: [
    'package.json',
    'apps/*/package.json',
    'packages/*/package.json',
    'components/*/package.json',
  ],
  versionGroups: [
    {
      label: 'React',
      packages: ['@klz/mobile'],
      dependencies: ['react', 'react-dom', '@types/*'],
      isIgnored: true,
    },
  ],
  semverGroups: [
    {
      range: '',
      dependencies: ['react', 'react-dom', 'typescript', '@types/*'],
      packages: ['react', 'react-dom', 'typescript', '@types/*'],
    },
  ],
  semverRanges: ['^', '~'],
  indent: '  ',
  sortAz: [
    'contributors',
    'dependencies',
    'devDependencies',
    'keywords',
    'peerDependencies',
    'scripts',
  ],
  sortFirst: ['name', 'version', 'private', 'description', 'author', 'license'],
  ignore: [],
  ignoreUnresolved: [],
  only: [],
};
