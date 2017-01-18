# Drunken PHP for Atom

[![apm](https://img.shields.io/apm/l/drunken-php.svg?style=flat-square)](https://atom.io/packages/drunken-php)
[![apm](https://img.shields.io/apm/v/drunken-php.svg?style=flat-square)](https://atom.io/packages/drunken-php)
[![apm](https://img.shields.io/apm/dm/drunken-php.svg?style=flat-square)](https://atom.io/packages/drunken-php)
[![Travis](https://img.shields.io/travis/idleberg/atom-drunken-php.svg?style=flat-square)](https://travis-ci.org/idleberg/atom-drunken-php)
[![David](https://img.shields.io/david/dev/idleberg/atom-drunken-php.svg?style=flat-square)](https://david-dm.org/idleberg/atom-drunken-php?type=dev)

## Description

PHP is [often](http://me.veekun.com/blog/2012/04/09/php-a-fractal-of-bad-design/) [criticized](http://tnx.nl/php.html) for having an inconsistent syntax and this is exactly what *Drunken PHP* aims at. It's a set of alternative command completions, including aliases for ill-formed syntax. Read the [Aliases](#aliases) section below for examples.

## Installation

### apm

* Install package `apm install drunken-php` (or use the GUI)

### Using Git

1. Change directory `cd ~/.atom/packages/`
2. Clone repository `git clone https://github.com/idleberg/atom-drunken-php drunken-php`

## Usage

## Aliases

You can tell apart *Drunken PHP* from proper syntax from the `%`-prefix displayed in the command completion window. Aliases have been broken up into the following categories:

### Prince Versions

Named after the Prince Emulator in Douglas Coupland's [Microserfs](http://www.wired.com/wired/archive/2.01/microserfs.html), you can substitute any `to` with the number `2` and vice versa.

Examples:

PHP         | Alias
------------|-----------
`bin2hex`   | `bintohex`
`cal_to_jd` | `cal2jd`

### Spacing

Enables you to type commands with or without spacing. Probably obsolete due to fuzzy completions.

Examples:

PHP                          | Alias
-----------------------------|-----------------------------
`get_html_translation_table` | `gethtmltranslationtable`
`getimagesizefromstring`     | `get_image_size_from_string`

### Spelling

Corrects common spelling mistakes.

Examples:

PHP             | Alias
----------------|-----------------------------
`mb_strwidth`   | `mb_strwidht`
`ob_get_length` | `ob_get_lenght`
`phpversion`    | `phpverison`

### Synonyms

Makes some native syntax more descriptive

Examples:

PHP          | Alias
-------------|------------------------
`asin`       | `arc_sin` (or `arcsin`)
`asort`      | `array_sort`
`bzcompress` | `bzip_compress`

### Word Order

The order of noun and verb is reversible

Examples:

PHP           | Alias
--------------|-----------
`ini_get`     | `get_ini`
`get_class`   | `class_get`

## License

The MIT License (MIT)

Copyright (c) 2015 Jan T. Sott

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/atom-drunken-php) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
