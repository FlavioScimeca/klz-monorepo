# @klz/eslint-config

TypeScript-powered ESLint configuration for the KLZ monorepo.

## Features

- Full TypeScript support with proper types
- React and React Hooks rules
- Import sorting and organization
- Prettier integration
- Modern JavaScript/TypeScript features

## Installation

```json
{
  "dependencies": {
    "@klz/eslint-config": "workspace:*"
  }
}
```

## Usage

In your `.eslintrc.js`:

```js
module.exports = {
  extends: ['@klz/eslint-config'],
};
```

Or in `.eslintrc.json`:

```json
{
  "extends": ["@klz/eslint-config"]
}
```

## Development

```bash
# Build the configuration
pnpm build

# Watch mode
pnpm dev

# Type check
pnpm typecheck

# Lint
pnpm lint

# Clean
pnpm clean
```

## Configuration Details

The configuration includes:

- TypeScript-specific rules
- React and React Hooks best practices
- Import sorting and organization
- Modern JavaScript features (ES2022)
- Browser and Node.js environments
- Prettier integration

See `src/base.ts` for the complete configuration.
