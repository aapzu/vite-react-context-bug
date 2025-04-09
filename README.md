# vite-react-context-bug

Vite has some issues with symlinks & TypeScript path aliases. I don't really know what's the issue, but this repo is a minimal reproduction.

## Reproduction

1. Clone the repo
2. Run `pnpm install`
3. Run `pnpm --filter example start`

## Expected

All examples should work (render 'bar').

## Actual

- `ExampleAlias` fails with `Error: Foo context not found`
- `ExampleLinked` works
- `ExampleLocal` works

