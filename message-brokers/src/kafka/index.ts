import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:19092", "localhost:19093", "localhost:19094"],
  // brokers: ["localhost:19092"],
  // sasl: {
  //   mechanism: "plain", // can be 'plain', 'scram-sha-256', or 'scram-sha-512'
  //   username: "admin", // replace with actual username
  //   password: "admin-secret", // replace with actual password
  // },
  // ssl: false, // set to true if using SSL/TLS
});

const producer = kafka.producer({ allowAutoTopicCreation: true });
const consumer = kafka.consumer({ groupId: "test-group" });

const run = async () => {
  // Producing
  await producer.connect();

  setInterval(async () => {
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS user!" }],
    });
  }, 5000);

  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);
