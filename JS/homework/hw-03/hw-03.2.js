class Buffer {
  buffArr = [];

  add(element) {
    this.buffArr.push("" + element);
  }

  print() {
    return this.buffArr.join("");
  }

  clear() {
    this.buffArr.length = 0;
  }
}

makeBuffer = () => new Buffer();

let buffer = makeBuffer();

buffer.add("JavaScript ");
buffer.add("is ");
buffer.add("stupid ");

console.log(buffer.print());

buffer.clear();
console.log(buffer.print());
