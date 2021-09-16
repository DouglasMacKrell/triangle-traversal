let tri = [
  "75",
  "95 64", 
  "17 47 82", 
  "11 13 72 24", 
  "23 57 13 85 41", 
  "94 21 17 55 10 27"
];

let tri2 = [
    "10",
    "10 1",
    "10 1 1",
    "10 1 1 1",
    "10 1 1 1 1"
]

let triArr = []

for (let str of tri) {
    let subArr = str.split(" ").map(Number)
    triArr.push(subArr)
}

// loop backwards from bottom of triangle starting at the second row
// loop again backwards through the triangle starting at the bottom row
// for each iteration ask which element is larger and add that upwards by overwriting
// the original value
// Since we're traveling up the tree, the max value will be all that's left at arr[0][0]!

var maxTotal = (T) => {
  for (let i = T.length - 2; i >= 0; i--) {
      for (let j = T[i].length - 1; j >= 0; j--) {
          T[i][j] += Math.max(T[i + 1][j], T[i + 1][j + 1]);
      }
  }
  console.log(T[0,0])
  return T[0][0];
};

maxTotal(triArr)