// worker queues running on the worker server
const Queue = require('bee-queue');
const redis = require('redis');
const sharedConfig = {
  redis: {
    host: '',
    port: ''
  },
};

const queue = new Queue('TEST_DELIVERY', sharedConfig);

queue.on('ready', () => {
  console.log('queue now ready to start doing things');
});

queue.on('succeeded', (job, result) => {
  console.log(`Job ${job.id} succeeded with result: ${result}`);
});

queue.process((job, done) => {
  console.log(job)
  done();
});

queue.createJob({ test: 1 }).save();