fetch("https://adventofcode.com/2022/day/1/input")
    .then(r => r.text())
    .then(t => t.split('\n\n').map(t => t.split('\n').filter(x => !!x).map(n => parseInt(n)).reduce((a, b) => a + b, 0)))
    .then(x => Math.max(...x))
    .then(console.log)
    
    
fetch("https://adventofcode.com/2022/day/1/input")
    .then(r => r.text())
    .then(t => t.split('\n\n').map(t => t.split('\n').filter(x => !!x).map(n => parseInt(n)).reduce((a, b) => a + b, 0)))
    .then(a => a.sort((a, b) => b - a))
    .then(a => a[0] + a[1] + a[2])
    .then(console.log)
