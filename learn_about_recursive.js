function loop(start, end, callback) {
  if (start < end) {
    callback(start);
    return loop(start + 1, end, callback);
  }
}
const course = [1, 2, 3, 4, 2, 1, 2, 1, 3];

let output = [];

loop(0, course.length, function (index) {
  if (!output.includes(course[index])) {
    console.log(course[index]);
    output.push(course[index]);
  }
});
console.log(output);
