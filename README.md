# Cube

React component library build with [Tailwind CSS](https://tailwindcss.com/), [twin.macro](https://github.com/ben-rogerson/twin.macro) and [stitches](https://stitches.dev/).

## Installation:

1. Clone cube with `git clone git@github.com:missionx-co/cube.git`
1. Inside project root run `yarn` or `npm install`.

## Available Packages

At this point conists of three packages:

1.  Cube documentation found as `@cube-ui/docs` at `packages > docs`.
1.  Cube components found as `@cube-ui/components` at `packages > components`.
1.  Cube tailwind css plugin that contains design tokens like colors, typography ...etc fount as `@cube-ui/foundation` at `packages > foundation`

## Running the project

1. Inside project root, run `yarn build` to build the foundation package and the components packages.
2. Inside project root, run `yarn docs:watch` to start the next.js server.

## Development:

1. Inside project root run `yarn foundation:build`. this command will build the foundation packages, For now you have to quit from this command manually.
1. Inside project root run `yarn components:types`, this will transpile TypeScript code and build the ts declaration files. You should NOT quit from this command.
1. Inside project root, in a different terminal, run `yarn components:watch` this will transpile TypeScript React components and build the components library.
1. Inside project root, in a different terminal, run `yarn docs:watch` this will start the docs development server.
