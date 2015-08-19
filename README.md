# Beispiel Programm for jspm

## prerequisites

* node.js
* npm install -g jspm bower

## install jspm

	jspm install
	jspm install jquery npm:lodash

	jspm install text css json

	//type script plugin
	jspm install ts

## install bower polymer
	bower update


## Run in browser

	npm install -g browser-sync --save-dev

	browser-sync start --server --files "*"

## distribute

	 jspm bundle script/app script/build.js

## tasks

* learn npm jspm gulp
* how to deploy jspm version
