# Insomnia Path Parameters Plugin

[![Npm Version](https://img.shields.io/npm/v/insomnia-plugin-path-parameters.svg)](https://www.npmjs.com/package/insomnia-plugin-path-parameters)

This is a plugin for [Insomnia](https://insomnia.rest) that automatically replaces URL path
parameters with syntax `:myParam` and the URL hostname (full or partial) with syntax `--myParam` with values defined in the Query tab by the same name.

## Installation

Install the `insomnia-plugin-path-parameters` plugin from Preferences > Plugins.

## Usage

1. Add placeholders to url hostname (eg. `https://--foo.example.com/`)
2. Add placeholders to url path (eg. `https://--foo.example.com/:bar/:baz`)
3. Add matching entries to Query tab (eg. `foo`, `bar`, `baz`)

![image](https://user-images.githubusercontent.com/587576/77125299-a2153880-6a02-11ea-80aa-75f7a937fcbb.png)
