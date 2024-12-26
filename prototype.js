let computer = {cpu : 12};
let lenovo = {screen : "HD",};

let tomhardware = {};


Object.setPrototypeOf(tomhardware, computer);

console.log(Object.getPrototypeOf(tomhardware));