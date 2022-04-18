import { Send } from "./rabbit/send";

const send = new Send();

(async () => {
  console.log("salam");
  await send.start();

  send.send("Hello World");

  setTimeout(function () {
    send.close();
    process.exit(0);
  }, 500);
})();
