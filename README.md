# Beispiel Programm for jspm

## prerequisites

* node.js
* npm install -g jspm bower

## install jspm

	npm install -g jspm
	jspm install
	jspm install jquery
	jspm install npm:lodash

	jspm install text css json

	//type script plugin
	jspm install ts

## install bower polymer
	bower update


## Run in browser

	npm install -g browser-sync --save-dev

	browser-sync start --server --files "*"

## Test
	export PYTHON=d:/sde/cygwin/bin/python2.7.exe
	npm install -g web-component-tester

	bugfix in ./npm/node_modules/web-component-tester/node_modules/wct-local/node_modules/selenium-standalone/lib/compute-download-urls.js
	ie: util.format(
		urls.ie,
		opts.drivers.ie.baseURL,
		opts.drivers.ie.version.slice(0, opts.drivers.ie.version.lastIndexOf('.')),
		getIeDriverArchitecture(opts.drivers.ie.arch),
		opts.drivers.ie.version
	)

## distribute

	 jspm bundle script/app script/build.js

## tasks

* learn npm jspm gulp
* how to deploy jspm version
