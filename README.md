# Drunken PHP for Atom

[![apm](https://flat.badgen.net/apm/license/drunken-php)](https://atom.io/packages/drunken-php)
[![apm](https://flat.badgen.net/apm/v/drunken-php)](https://atom.io/packages/drunken-php)
[![apm](https://flat.badgen.net/apm/dl/drunken-php)](https://atom.io/packages/drunken-php)
[![CI](https://img.shields.io/github/workflow/status/idleberg/atom-drunken-php/CI?style=flat-square)](https://github.com/idleberg/atom-drunken-php/actions)

## Description

PHP is [often](http://me.veekun.com/blog/2012/04/09/php-a-fractal-of-bad-design/) [criticized](http://tnx.nl/php.html) for having an inconsistent syntax and this is exactly what *Drunken PHP* aims at. It's a set of alternative command completions, including aliases for ill-formed syntax. Read the [Aliases](#aliases) section below for examples.

## Installation

### apm

Install `drunken-php` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install drunken-php`

### Using Git

Change to your Atom packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.atom\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.atom\packages
```

**Linux & macOS**

```bash
$ cd ~/.atom/packages/
```

Clone repository as `drunken-php`:

```bash
$ git clone https://github.com/idleberg/atom-drunken-php drunken-php
```

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

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)
