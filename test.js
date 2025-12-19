function show(city , age) {
console.log(this.name, city, age);
}

let obj = {
  name: 1

}

show.apply(obj, ['nik', 25])