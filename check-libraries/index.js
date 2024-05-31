const ivm = require("isolated-vm");
const axios = require("axios");

(async () => {
  const isolate = new ivm.Isolate({ memoryLimit: 128 });

  // Create a new context within this isolate. Each context has its own copy of all the builtin
  // Objects. So for instance if one context does Object.prototype.foo = 1 this would not affect any
  // other contexts.
  const context = isolate.createContextSync();

  // Get a Reference{} to the global object within the context.
  const jail = context.global;

  // This makes the global object available in the context as `global`. We use `derefInto()` here
  // because otherwise `global` would actually be a Reference{} object in the new isolate.
  jail.setSync("global", jail.derefInto());

  // We will create a basic `log` function for the new isolate to use.
  jail.setSync("log", function (...args) {
    console.log(...args);
  });

  jail.setSync("axios1", async function (url) {
    return await axios.get(url);
  });

  // And let's test it out:
  context.evalSync('log("hello world")');
  // > hello world

  // Let's see what happens when we try to blow the isolate's memory
  const hostile = isolate.compileScriptSync(`

  const run = async () => {

    const storage = [1,3,4,5.6];

  let max = 0

  const $sdk = {
    database: {
      users: {
        findOne: async (query) => {
          return new Promise((resolve, reject) => {
            resolve({
              name: "admin",
              email: "admin@localhost",
            });
          });
        },
      },
    },
  };

  const test = async () => {
    const result = await $sdk.database.users.findOne({ 
      query : {
        "name": "admin" 
      }

      
    });

    const m = $sdk.me.name; const n = $sdk.me.email;

    log(result);

  };

  await test();
  }

	run().catch((err) => log(err));
  6

`);

  // Using the async version of `run` so that calls to `log` will get to the main node isolate
  hostile.run(context).catch((err) => console.error(err));
})();
