fetch("https://adventofcode.com/2022/day/4/input")
    .then(r => r.text())
    .then(t => t.split('\n').filter(x => !!x))
    .then(a => a.map(i => i.split(',').map(s => s.split('-').map(n => +n))))
    .then(a => a.filter(i => i[0][0] >= i[1][0] && i[0][1] <= i[1][1] || i[1][0] >= i[0][0] && i[1][1] <= i[0][1]).length)
    .then(console.log)


fetch("https://adventofcode.com/2022/day/4/input")
    .then(r => r.text())
    .then(t => t.split('\n').filter(x => !!x))
    .then(a => a.map(i => i.split(',').map(s => s.split('-').map(n => +n))))
    .then(a => a.filter(i => i[0][0] <= i[1][1] && i[0][1] >= i[1][0] || i[1][1] <= i[0][0] && i[1][0] >= i[0][1]).length)
    .then(console.log)
