// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9

// output 1 4 7 5 3 6 9

function runProgram(input) {
  input = input.trim().split('\n');
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var n = +input[line];
    line++;
    var arr = [];
    for (var j = 0; j < n; j++) {
      arr.push(input[line].trim().split(' ').map(Number));
      line++;
    }
    var bag = '';
    for (var r = 0; r < n; r++) {
      bag += arr[r][n - 1] + ' ';
    }
    for (var r = n - 2; r >= 0; r--) {
      bag += arr[r][r] + ' ';
    }
    for (var r = 1; r < n; r++) {
      bag += arr[r][0] + ' ';
    }
    console.log(bag);
  }
}
if (process.env.USER === '') {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    read = read.replace(/\n$/, '');
    runProgram(read);
  });
  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}
