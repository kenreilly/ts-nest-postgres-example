#!/usr/bin/env bash

cd web
tsc
cd ..
rm -rf dist/web
mkdir dist/web
cp -r web dist
