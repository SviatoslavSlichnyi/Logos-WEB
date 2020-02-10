class Buffer {
  buffArr = [];

  add(element) {
    this.buffArr.push("" + element);
  }

  print() {
    return this.buffArr.join("");
  }
}

makeBuffer = () => new Buffer();

let buffer = makeBuffer();

buffer.add("JavaScript ");
buffer.add("is ");
buffer.add("stupid ");

console.log(buffer.print());

let numBuffer = makeBuffer();

numBuffer.add(0);
numBuffer.add(1);
numBuffer.add(0);

console.log(numBuffer.print());
