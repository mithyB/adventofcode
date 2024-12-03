// Puzzle 1
fetch('https://adventofcode.com/2024/day/3/input')
    .then(x => x.text())
    .then(input => {
        function getMatches(input) {
            let m;
            const result = [];
            const regex = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;

            while ((m = regex.exec(input)) !== null) {
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                
                m.forEach((match, groupIndex) => {
                    const group = /mul\(([0-9]{1,3}),([0-9]{1,3})\)/.exec(match);
                    result.push([parseInt(group[1], 10), parseInt(group[2], 10)]);
                });
            }

            return result;
        }
        
        return { input, getMatches };
    })
    .then(({ input, getMatches }) => getMatches(input))
    .then(muls => muls.reduce((total, current) => total + (current[0] * current[1]), 0))
    .then(console.log)
