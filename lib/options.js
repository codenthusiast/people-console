#!/usr/bin/env node

const yargs = require("yargs");

const options = yargs
  .usage("Usage: -d <person>")
  .option("d", {
    alias: "details",
    describe: "Show details on a specific Person",
    type: "string",
    demandOption: false,
  })
  .option("l", {
    alias: "list",
    describe: "List people",
    type: "boolean",
    demandOption: false,
  })
  .option("f", {
    alias: "filter",
    describe: "Filter people",
    type: "string",
    demandOption: false,
  });

module.exports = {
  options,
  args: options.argv,
};
