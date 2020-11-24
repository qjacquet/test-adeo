#!/usr/bin/env node

const filter = require("./src/commands/filter");
const printJson = require("./src/utils");

const errorMsg = (param, argType) =>
  `Incorrect argument. Please try with '${param}=[${argType}]'`;

/**
 * MAIN
 */

// Get arguments
let args = process.argv[2];

// --filter
if (args && args.includes("--filter")) {
  const param = args.split("=")[1];

  param ? printJson(filter(param)) : console.log(errorMsg("--filter", "text"));
}

// Otherwise, show a default message
else {
  console.log(errorMsg("--filter", "text"));
}
