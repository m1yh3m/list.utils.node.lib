const Jasmine = require("jasmine");
const JasmineConsoleReporter = require("jasmine-console-reporter");

const jasmine = new Jasmine();
const reporter = new JasmineConsoleReporter({
    colors: 1, cleanStack: 3, verbosity: 4, listStyle: "indent", activity: false,
});
jasmine.addReporter(reporter);
jasmine.showColors(true);
jasmine.loadConfigFile("spec/support/jasmine.json");
jasmine.execute().then((passed) => {
    if (!passed) {
        process.exit(1);
    }
}).catch((err) => {
    console.error(err);
    process.exit(1);
});
