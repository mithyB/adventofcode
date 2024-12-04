// Puzzle 1
fetch('https://adventofcode.com/2024/day/4/input')
    .then(x => x.text())
    .then(x => x.split('\n'))
    .then(x => x.slice(0, x.length - 1))
    .then(input => {
        const lineLength = input[0].length;
        const search = 'XMAS';
        let count = 0;

        for (let y = 0; y < input.length; y++) {
            for (let x = 0; x < lineLength; x++) {
                if (input[y][x] === search[0]) {
                    const isRight = (function() {
                        for (let i = 1; i < search.length; i++) {
                            if (input[y]?.[x+i] !== search[i]) return false;
                        }
                        return true;
                    })()
                    const isLeft = (function() {
                        for (let i = 1; i < search.length; i++) {
                            if (input[y]?.[x-i] !== search[i]) return false;
                        }
                        return true;
                    })()
                    const isUp = (function() {
                        for (let i = 1; i < search.length; i++) {
                            if (input[y-i]?.[x] !== search[i]) return false;
                        }
                        return true;
                    })()
                    const isDown = (function() {
                        for (let i = 1; i < search.length; i++) {
                            if (input[y+i]?.[x] !== search[i]) return false;
                        }
                        return true;
                    })()
                    
                    const isUpRight = (function() {
                        for (let i = 1; i < search.length; i++) {
                            if (input[y-i]?.[x+i] !== search[i]) return false;
                        }
                        return true;
                    })()
                    const isUpLeft = (function() {
                        for (let i = 1; i < search.length; i++) {
                            if (input[y-i]?.[x-i] !== search[i]) return false;
                        }
                        return true;
                    })()
                    const isDownRight = (function() {
                        for (let i = 1; i < search.length; i++) {
                            if (input[y+i]?.[x+i] !== search[i]) return false;
                        }
                        return true;
                    })()
                    const isDownLeft = (function() {
                        for (let i = 1; i < search.length; i++) {
                            if (input[y+i]?.[x-i] !== search[i]) return false;
                        }
                        return true;
                    })()

                    if (isRight) count++;
                    if (isLeft) count++;
                    if (isUp) count++;
                    if (isDown) count++;
                    if (isUpRight) count++;
                    if (isUpLeft) count++;
                    if (isDownRight) count++;
                    if (isDownLeft) count++;
                }
                
            }
        }

        return count;
    })
    .then(console.log)

// Puzzle 2
fetch('https://adventofcode.com/2024/day/4/input')
    .then(x => x.text())
    .then(x => x.split('\n'))
    .then(x => x.slice(0, x.length - 1))
    .then(input => {
        const lineLength = input[0].length;
        let count = 0;

        for (let y = 0; y < input.length; y++) {
            for (let x = 0; x < lineLength; x++) {
                if (input[y][x] === 'A') {
                    const isMUpLeft = 
                               input[y-1]?.[x-1] === 'M' 
                            && input[y+1]?.[x+1] === 'S';
                    const isMUpRight = 
                               input[y-1]?.[x+1] === 'M' 
                            && input[y+1]?.[x-1] === 'S';
                    const isMDownLeft = 
                               input[y+1]?.[x-1] === 'M' 
                            && input[y-1]?.[x+1] === 'S';
                    const isMDownRight = 
                               input[y+1]?.[x+1] === 'M' 
                            && input[y-1]?.[x-1] === 'S';

                    const validCount = [
                        isMUpLeft, 
                        isMUpRight, 
                        isMDownLeft, 
                        isMDownRight
                    ].filter(x => x).length;

                    if (validCount === 2) count++;
                }
                
            }
        }

        return count;
    })
    .then(console.log)
