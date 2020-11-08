console.log('module js')

async function start() {
  const test = 'test'
  return await Promise.resolve('asinc woking')
}

start().then(data => console.log(data));
