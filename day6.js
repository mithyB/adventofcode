fetch("https://adventofcode.com/2022/day/6/input")
    .then(r => r.text())
    .then(m => m.split('').map((_, i) => { let a=[]; return m.substring(i, i+4).split('').map((c, i) => { if(a.includes(c)) return; a.push(c); return a })}))
    .then(x => x.findIndex(y => y[0].length === 4) + 4)
    .then(console.log)


fetch("https://adventofcode.com/2022/day/6/input")
    .then(r => r.text())
    .then(m => m.split('').map((_, i) => { let a=[]; return m.substring(i, i+14).split('').map((c, i) => { if(a.includes(c)) return; a.push(c); return a })}))
    .then(x => x.findIndex(y => y[0].length === 14) + 14)
    .then(console.log)
