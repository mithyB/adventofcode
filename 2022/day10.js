fetch('https://adventofcode.com/2022/day/10/input')
  .then(r => r.text())
  .then(r => r.split('\n'))
  .then(r => r.flatMap((l) => (l.startsWith('addx') ? ['.addx', l] : [l])))
  .then(r => {
    var m = [20, 60, 100, 140, 180, 220];
    var o = [null, null, null, null, null, null];
    var x = 1;
    r.forEach((l, i) => {
      if (i + 1 === m[o.indexOf(null)]) {
        o[o.indexOf(null)] = x * (i + 1);
      }

      if (l.startsWith('addx')) {
        var v = parseInt(l.split(' ')[1]);
        x += v;
      }
    });
    return o.reduce((a, c) => a + c, 0);
  })
  .then(console.log);

fetch('https://adventofcode.com/2022/day/10/input')
  .then(r => r.text())
  .then(r => r.split('\n'))
  .then(r => r.flatMap((l) => (l.startsWith('addx') ? ['.addx', l] : [l])))
  .then(r => {
    var x = 1;
    var p = Array(240).fill('.');
    r.forEach((l, i) => {
      var c = i + 1;

      if (l.startsWith('addx')) {
        var v = parseInt(l.split(' ')[1]);
        x += v;
      }

      p[i] = [x-1, x, x+1].includes(c % 40) ? '#' : '.';
    });

    var d = [];

    while(p.length) d.push(p.splice(0,40));
      
    return d.splice(0, 6);
  })
  .then(d => d.map(l => l.join('')).join('\n'))
  .then(console.log);
