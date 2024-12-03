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
fetch('https://adventofcode.com/2024/day/2/input')
    .then(x => x.text())
    .then(x => x.split('\n'))
    .then(x => x.slice(0, x.length - 1))
    .then(reports => reports.map(levels => levels.split(' ').map(n => parseInt(n, 10))))
    .then(reports => reports
        .map(levels => {
            const diffSum = levels.reduce((offset, level, index) => {
                if (index < 1) return offset;
                
                return offset + level - levels[index-1];
            }, 0)
            const average = levels.reduce((a, b) => a + b) / levels.length;
            const isAsc = diffSum === 0 
                ? average < levels[0]
                : diffSum > 0;
            
            const firstRun = levels.reduce((info, level, index) => {
                if (!info.isSafe) return info;

                const diff = index < 1 
                    ? levels[index+1] - level
                    : level - levels[index-1];

                const isSafe = info.isSafe && (isAsc 
                    ? diff >= 1 && diff <= 3
                    : diff <= -1 && diff >= -3);

                const potentialProblem1 = !!levels[index-2] 
                    ? (isAsc 
                        ? level - levels[index-2] >= 1 && level - levels[index-2] <= 3
                        : level - levels[index-2] <= -1 && level - levels[index-2] >= -3)
                        ? index-1
                        : index
                    : index;
                const potentialProblem2 = !!levels[index+2] 
                    ? (isAsc 
                        ? levels[index+2] - level >= 1 && levels[index+2] - level <= 3
                        : levels[index+2] - level <= -1 && levels[index+2] - level >= -3)
                        ? index+1
                        : index
                    : index;

                const problem = isSafe 
                    ? null 
                    : [index, potentialProblem1, potentialProblem2];

                return {isAsc, isSafe, problem, levels};
            }, {isAsc: null, isSafe: true, problem: null});

            if (firstRun.isSafe) return firstRun;

            const result = [];

            for (let problem of firstRun.problem) {
                const correctedLevels = [...levels];
                correctedLevels.splice(problem, 1);
    
                result.push(correctedLevels.reduce((info, level, index) => {
                    if (index < 1) return info;
                    if (!info.isSafe) return info;
    
                    const diff = level - correctedLevels[index-1];
    
                    const isSafe = info.isSafe && (isAsc 
                        ? diff >= 1 && diff <= 3
                        : diff <= -1 && diff >= -3);
    
                    return {isAsc, isSafe, problem: firstRun.problem, firstLevels: firstRun.levels, secondLevels: correctedLevels};
                }, {isAsc: null, isSafe: true, problem: null}));
            }

            return result.some(x => x.isSafe);
        })
    )
    .then(reports => reports.filter((isSafe) => isSafe).length)
    .then(console.log)
