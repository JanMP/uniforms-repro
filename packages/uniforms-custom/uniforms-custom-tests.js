// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by uniforms-custom.js.
import { name as packageName } from "meteor/uniforms-custom";

// Write your tests here!
// Here is an example.
Tinytest.add('uniforms-custom - example', function (test) {
  test.equal(packageName, "uniforms-custom");
});
