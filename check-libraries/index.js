const ivm = require("isolated-vm");
const axios = require("axios");

async function checkLibraries() {
  const isolate = new ivm.Isolate();
  const context = await isolate.createContext();

  const jail = context.global;

  //   jail.set("axios", ivm.ExternalCopy(axios).copySync());

  await jail.set("axios", new ivm.Reference(axios));

  jail.set("log", function (...args) {
    console.log(...args);
  });

  //   context.eval("log('Hello from the jail!')");

  const script = await isolate.compileScript(`
   

     async function fetchData() {
        const response = await axios.get("https://google.com");

        console.log(response.data);

        // log('Hello from the jail!');
        }

        fetchData();
     
    `);

  //   const script = await isolate.compileScript(`
  //     const axios = global.axios;
  //     axios.get("https://google.com").then((res) => {
  //       console.log(res.data);
  //     });
  //     `);

  await script.run(context);
}

checkLibraries();
