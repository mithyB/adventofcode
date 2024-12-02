// Puzzle 1
fetch('https://adventofcode.com/2024/day/1/input')
    .then(x => x.text())
    .then(x => x.split('\n'))
    .then(x => x.slice(0, x.length - 1))
    .then(input => {
        let leftList = [], rightList = [];
        for (let line of input) {
            const splitLine = line.split('   ');
            leftList.push(splitLine[0]);
            rightList.push(splitLine[1]);
        }
        return { leftList, rightList };
    })
    .then(({ leftList, rightList }) => ({ 
        leftList: leftList.sort((a, b) => a - b), 
        rightList: rightList.sort((a, b) => a - b)
    }))
    .then(x => x.leftList.map((l, i) => 
        Math.max(x.rightList[i], l) - Math.min(x.rightList[i], l)))
    .then(x => x.reduce((acc, result) => acc + result, 0))
    .then(console.log)

// Puzzle 2
fetch('https://adventofcode.com/2024/day/1/input')
    .then(x => x.text())
    .then(x => x.split('\n'))
    .then(x => x.slice(0, x.length - 1))
    .then(input => {
        let leftList = [], rightList = [];
        for (let line of input) {
            const splitLine = line.split('   ');
            leftList.push(parseInt(splitLine[0], 10));
            rightList.push(parseInt(splitLine[1], 10));
        }
        return { leftList, rightList };
    })
    .then(({ leftList, rightList }) => leftList.map(l => 
      rightList.filter(r => l === r).length * l
    ))
    .then(x => x.reduce((acc, result) => acc + result, 0))
    .then(console.log)
