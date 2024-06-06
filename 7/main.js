async function makeToy(ms) {
  return new Promise(async (resolve, reject) => {
    await delay(ms);
    if (Math.random() < 0.8) {
      resolve("Made Toy");
    } else {
      reject("Toy not made");
    }
  });
}
async function sellToy(ms) {
  return new Promise(async (resolve, reject) => {
    await delay(ms);
    if (Math.random() < 0.9) {
      resolve("Sold Toy");
    } else {
      reject("Toy not sold");
    }
  });
}
async function deliverToy(ms) {
  return new Promise(async (resolve, reject) => {
    await delay(ms);
    if (Math.random() < 0.99) {
      resolve("Delivered Toy");
    } else {
      reject("Toy not delivered");
    }
  });
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function toyProcess() {
  try {
    const toy = await makeToy(3000);
    console.log(toy);
    const soldToy = await sellToy(2000);
    console.log(soldToy);
    const deliveredToy = await deliverToy(1000);
    console.log(deliveredToy);
  } catch (error) {
    console.log(error);
  }
}

toyProcess();
