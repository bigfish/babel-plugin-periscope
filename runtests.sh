#!/bin/bash
# parse a file with the plugin:
cat fixtures/arrow_fns.js | babel-node test.js src/index.js  > output.js

