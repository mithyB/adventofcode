fetch("https://adventofcode.com/2022/day/2/input")
    .then(r => r.text())
    .then(t => t.split('\n').filter(x => !!x).map(m => ({'A X': 3 + 1, 'A Y': 6 + 2, 'A Z': 0 + 3, 'B X': 0 + 1, 'B Y': 3 + 2, 'B Z': 6 + 3, 'C X': 6 + 1, 'C Y': 0 + 2, 'C Z': 3 + 3 }[m])))
    .then(p => p.reduce((a, b) => a + b, 0))
    .then(console.log)


fetch("https://adventofcode.com/2022/day/2/input")
    .then(r => r.text())
    .then(t => t.split('\n').filter(x => !!x).map(m => ({'A X': 0 + 3, 'A Y': 3 + 1, 'A Z': 6 + 2, 'B X': 0 + 1, 'B Y': 3 + 2, 'B Z': 6 + 3, 'C X': 0 + 2, 'C Y': 3 + 3, 'C Z': 6 + 1 }[m])))
    .then(p => p.reduce((a, b) => a + b, 0))
    .then(console.log)
