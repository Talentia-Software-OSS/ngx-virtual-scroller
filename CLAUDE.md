# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`@talentia/ngx-virtual-scroller` is a **fork of [rintoj/ngx-virtual-scroller](https://github.com/rintoj/ngx-virtual-scroller)**
(git remote `upstream`), kept current with Angular by Talentia: a virtual "infinite" list supporting
vertical/horizontal scrolling, multiple columns, variable item sizes, window/parent scroll and SSR.
Peer `@tweenjs/tween.js ~17.4.0` (scroll animations). Its de facto consumer is the HCM front-end
(`tf-draggable-list`) — check real usage there before changing behavior or styles.

The workspace has two projects: the library (`projects/ngx-virtual-scroller`) and a demo app
(`projects/demo`: `/samples` with vertical, horizontal, RTL, multi-column, table and chunk-loading
lists of 10,000 seeded items via `chance`; `/parent-scroll` using the window scrollbar). The library
version follows the release branch name (e.g. `4.0.12`).

## Commands

```bash
npm run build          # clean:build + build:prod — production library build (dist/ngx-virtual-scroller)
npm run build:dev      # development build
npm start              # build:dev + ng serve demo (http://localhost:4200)
npm run watch          # lib + demo in watch mode
npm run demo:prod      # production build of the demo (also demo:dev); CI runs build:prod + demo:prod
npm run lint           # ng lint (lib + demo)
npm run lint:lib-fix   # ng lint of the library with --fix
npm run update-browserslist
```

There is no test framework (no Jest/Karma, no `*.spec.ts`): verify in the demo or in a consumer.
Node version: `.nvmrc`.

## Architecture

Everything lives in `projects/ngx-virtual-scroller/src/lib/`:

- **`ngx-virtual-scroller.component.ts`** — `VirtualScrollerComponent` (selector
  `virtual-scroller,[virtualScroller]`, `exportAs: 'virtualScroller'`, `standalone: false`), the whole
  implementation (~1300 lines): measures the viewport and the children, computes `viewPortInfo` /
  `viewPortItems` (rendered by the consumer with `*ngFor`/`@for` over `scroll.viewPortItems`), emits
  `vsUpdate`/`vsChange`/`vsStart`/`vsEnd`, scrolls with `scrollToIndex`/`scrollInto`/`scrollToPosition`
  (animated with tween.js, the animation loop runs outside the Angular zone). Scroll/resize handling
  runs outside the zone; changes are brought back with `zone.run` unless
  `[executeRefreshOutsideAngularZone]="true"`. Resize is polled every `checkResizeInterval` ms.
  `#header` / `#container` content children support fixed table headers and extra content.
  SSR: `isPlatformServer` + `ssrChildWidth/Height`, `ssrViewportWidth/Height` inputs.
  **Styles: `ViewEncapsulation.None` + host class `virtual-scroller`**: global styles scoped by that
  class (`.virtual-scroller > .scrollable-content > *`, ...) so they reach the projected children.
  This replaced `::ng-deep` in HCM-8031; computed styles verified identical in the demo.
- **`ngx-virtual-scroller.interface.ts`** — `VirtualScrollerDefaultOptions` and
  `VIRTUAL_SCROLLER_DEFAULT_OPTIONS_FACTORY`.
- **`ngx-virtual-scroller.module.ts`** — `VirtualScrollerModule`: declares/exports the component and
  provides the default options under the **string token `'virtual-scroller-default-options'`**
  (consumers override it with `{ provide: 'virtual-scroller-default-options', useValue: {...} }`).

## Working in this codebase

- Angular upgrades are done **without adopting new Angular features** (NgModule, `standalone: false`,
  zone.js in the demo via `provideZoneChangeDetection()`). Exception agreed in HCM-8031: the **demo**
  uses the built-in control flow (`@if`/`@for`), which also fixed `/parent-scroll` (its template used
  `*ngFor` without importing `NgFor`).
- When changing styles, compare computed styles before/after in the demo (the HCM-8031 worklog in
  `tmp/` has `styles-dump.js`; wait ~3 s, the chunk-loading list loads its first chunk after a random
  1–2 s timer).
- `previousScrollBoundingRect` is typed `DOMRect` (`ClientRect` is deprecated in TypeScript).
- `@angular/*` versions are pinned exactly; peer range `^<major>.0.0`. No `overrides` in
  `package.json`: transitive `@angular-devkit/*` are kept on the framework patch only by the lock.
- `tmp/` is git-ignored and may contain task worklogs/scripts (e.g. a Playwright test of the demo).
