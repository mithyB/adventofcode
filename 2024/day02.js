// Puzzle 1
fetch('https://adventofcode.com/2024/day/2/input')
    .then(x => x.text())
    .then(x => x.split('\n'))
    .then(x => x.slice(0, x.length - 1))
    .then(reports => reports.map(levels => levels.split(' ').map(n => parseInt(n, 10))))
    .then(reports => reports
        .map(levels => 
            levels.reduce((isSafe, level, index) => {
                if (!isSafe) return false;
                if (index <= 1) return true;
    
                const smallerRule1 = levels[index-2] < levels[index-1] 
                    && levels[index-1] < level;
                const smallerRule2 = (levels[index-1] - levels[index-2]) <= 3 
                    && (level - levels[index-1]) <= 3;
                const biggerRule1 = levels[index-2] > levels[index-1] 
                    && levels[index-1] > level;
                const biggerRule2 = (levels[index-2] - levels[index-1]) <= 3 
                    && (levels[index-1] - level) <= 3;
                
                return smallerRule1 && smallerRule2
                    || biggerRule1 && biggerRule2;
            }, true)
        )
    )
    .then(reports => reports.filter(isSafe => isSafe).length)
    .then(console.log)

// Puzzle 2
