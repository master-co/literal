<br><br>
<div align="center">

<p align="center">
    <img src="https://raw.githubusercontent.com/master-co/package/document/images/logo-and-text.svg" alt="logo" width="142">
</p>
<p align="center">
    <b><!-- name -->literal<!----></b>
</p>
<p align="center"><!-- package.description -->Conditionally construct class names and strings with template literals.<!----></p>
<p align="center">
<!-- badges.map((badge) => `\n[![${badge.alt}](${badge.src})](${badge.href})`).join('&nbsp;')-->

[![MIT License](https://flat.badgen.net/github/license/master-co/literal?color=yellow)](https://github.com/master-co/css/blob/main/LICENSE)
[![Latest Release](https://flat.badgen.net/npm/v/@master/literal?icon=npm&label&color=yellow)](https://www.npmjs.com/package/@master/literal)
[![Bundle Size](https://flat.badgen.net/bundlephobia/minzip/@master/literal?icon=packagephobia&label&color=yellow)](https://bundlephobia.com/package/@master/literal 'gzip bundle size (including dependencies)')
[![Package Size](https://flat.badgen.net/badgesize/brotli/https://cdn.jsdelivr.net/npm/@master/literal?icon=jsdelivr&label&color=yellow)](https://unpkg.com/@master/literal 'brotli package size (without dependencies)')
[![Github](https://flat.badgen.net/badge/icon/master-co%2Fliteral?icon=github&label&color=yellow)](https://github.com/master-co/literal)
[![CI](https://flat.badgen.net/github/status/master-co/literal/main/ci/circleci?icon=circleci)](https://circleci.com/gh/master-co/workflows/literal/tree/main)
<!-- -->
</p>
</div>

###### On this page
- [Install](#install)
- [Import](#import)
- [Usage](#usage)
  - [Strings](#strings)
  - [Objects](#objects)
  - [Arrays](#arrays)
  - [Trim and clear](#trim-and-clear)
  - [Mixed and nested](#mixed-and-nested)
  - [Execute like a function](#execute-like-a-function)
- [Related](#related)
- [Inspiration](#inspiration)

# Install
```sh
npm install @master/literal
```

# Import
```js
import $ from '@master/literal';
// or
import { literal } from '@master/literal';
```
`$` is equal to `literal`

# Usage

## Strings
```js
$`a ${true && 'b'} c`;
/* 'a b c' */
```

## Objects
```js
$`a ${{ b: true, c: false, d: isTrue() }} e`;
/* 'a b d e' */
```

## Arrays
```js
$`a ${['b', 0, false, 'c']} d`;
/* 'a b c d' */
```

## Trim and clear
- Remove newlines
- Convert consecutive spaces to one space
```js
$`
    a
    b
    ${undefined}
    c    d
`
/* 'a b c d' */
```

## Mixed and nested
```js
$`
    a
    ${
        [
            1 && 'b',
            { c: false, d: null },
            ['e', ['f']]
        ]
    }
    g    h
`;
/* 'a b e f g h' */
```

## Execute like a function
```js
$`a b ${['c', 'd']} ${{ e: true, f: false }} ${true && 'g'}`;
// or
$('a b', ['c', 'd'], { e: true, f: false }, true && 'g');

/* 'a b c d e g' */
```

# Related
- [@master/style-element.react](https://github.com/master-co/style-element.react) - Quickly create styled React elements with conditional class names.

# Inspiration
- [clsx](https://github.com/lukeed/clsx) - A tiny utility for constructing `className` strings conditionally.