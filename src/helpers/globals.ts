import { NightwatchTestHooks } from 'nightwatch';
import rimraf from 'rimraf';
// https://github.com/nightwatchjs/nightwatch/blob/master/examples/globalsModule.js#L20
const cleanupOutput = (cb) => {
  const path = 'output/screenshots';
  rimraf(path, (err) => {
    err && console.log(err);
    cb(err);
  });
};

const globals: NightwatchTestHooks = {
  before(browser, done) {
    console.log;
    cleanupOutput(done);
  },
};

module.exports = globals;
