// console.log(process);
// console.log(process.argv);
// const name = process.argv[2];
// const hours = new Date().getHours();

// const greetings = getGreeitngs(hours);
// console.log(`${greetings},${name}`);

import os from 'node:os';
console.log('Cpus',os.cpus().length);
console.log('Total memory',os.totalmem());
console.log(os.uptime()/(60*60));
console.log('hostname',os.hostname())