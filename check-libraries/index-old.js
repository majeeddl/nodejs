const ivm = require("isolated-vm");
const axios = require("axios");
const performNetworkRequest = require("./shim");

// async function checkLibraries() {
//   //   const isolate = new ivm.Isolate();
//   //   const context = await isolate.createContext();
//   //   const jail = context.global;
//   //   //   jail.set("axios", ivm.ExternalCopy(axios).copySync());
//   //   await jail.set("axios", new ivm.Reference(axios));
//   //   jail.set("log", function (...args) {
//   //     console.log(...args);
//   //   });
//   //   //   context.eval("log('Hello from the jail!')");
//   //   const script = await isolate.compileScript(`
//   //      async function fetchData() {
//   //         const response = await axios.get("https://google.com");
//   //         console.log(response.data);
//   //         // log('Hello from the jail!');
//   //         }
//   //         fetchData();
//   //     `);
//   //   //   const script = await isolate.compileScript(`
//   //   //     const axios = global.axios;
//   //   //     axios.get("https://google.com").then((res) => {
//   //   //       console.log(res.data);
//   //   //     });
//   //   //     `);
//   //   await script.run(context);
// }

// checkLibraries();

(async () => {
  const isolate = new ivm.Isolate({ memoryLimit: 128 });
  const context = await isolate.createContext();
  const jail = context.global;

  // This will transfer 'performNetworkRequest' into the isolate
  await jail.set("performNetworkRequest", new ivm.Reference(performNetworkRequest));

  // Initialize the global object within the isolate context
  await jail.set("global", jail.derefInto());

  // Create a script to run inside the isolate
  const script = await isolate.compileScript(`
    // This function will run inside the isolate
    async function fetchData(url) {
      const response = await performNetworkRequest.deref().apply(null, [url]);
      return response;
    }
    
    // Expose fetchData function to the global scope
    global.fetchData = fetchData;
  `);

  await script.run(context);

  // Now we can call fetchData from the main script
  const fetchData = await context.global.get("fetchData");
  const result = await fetchData.apply(undefined, ["https://jsonplaceholder.typicode.com/todos/1"]);

  console.log(result);
})();
