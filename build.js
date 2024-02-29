"use strict";

const { writeFile } = require("fs").promises;
const js = require("rosid-handler-js");

js("src/scripts/main.js", {
	optimize: true,
	browserify: {
		standalone: "teftish-tracker",
	},
}).then((data) => {
	return writeFile("dist/teftish-tracker.min.js", data);
});
