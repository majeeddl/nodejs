import { Connection, Channel, connect } from "amqplib";

// const start = async () => {
//   const connection: Connection = await connect("amqp://localhost");

//   const channel: Channel = await connection.createChannel();

//   await channel.assertQueue('hello',{
//       durable : true
//   });

//   channel.sendToQueue('hello',Buffer.from('Hello World!'))
// };

export class Send {
  connection: Connection;
  channel: Channel;

  constructor() {}

  async start() {
    this.connection = await connect("amqp://admin:admin@localhost");
    this.channel = await this.connection.createChannel();

    await this.channel.assertQueue("hello", {
      durable: true,
    });

    this.channel.consume(
      "hello",
      (message) => {
        console.log("test");
        // console.log(message);
        console.log(message.content.toString());
      },
      {
        noAck: true,
      }
    );
  }

  send(message) {
    this.channel.sendToQueue("hello", Buffer.from(message));
  }

  close() {
    this.connection.close();
  }
}
