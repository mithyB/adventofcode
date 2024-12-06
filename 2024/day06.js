// Puzzle 1
fetch('https://adventofcode.com/2024/day/6/input')
    .then(r => r.text())
    .then(t => t.split('\n').map(r => r.split('')))
    .then(map => {
        let y = map.findIndex(r => r.includes('^'));
        let x = map[y].findIndex(c => c === '^');
        let failsafe = 1_000_000;

        while(x>0 && y>0 && x<map[0].length-1 && y<map.length-1 && failsafe>-1) {
            failsafe--;
            if (map[y][x]==='^') {
                if (map[y-1][x]==='#') {
                    map[y][x] = '>' 
                } else {
                    map[y-1][x] = map[y][x];
                    map[y][x] = 'X';
                    y--;
                }
            } else if (map[y][x]==='>') {
                if (map[y][x+1]==='#') {
                    map[y][x] = 'v' 
                } else {
                    map[y][x+1] = map[y][x];
                    map[y][x] = 'X';
                    x++;
                }
            } else if (map[y][x]==='v') {
                if (map[y+1][x]==='#') {
                    map[y][x] = '<' 
                } else {
                    map[y+1][x] = map[y][x];
                    map[y][x] = 'X';
                    y++;
                }
            } else if (map[y][x]==='<') {
                if (map[y][x-1]==='#') {
                    map[y][x] = '^' 
                } else {
                    map[y][x-1] = map[y][x];
                    map[y][x] = 'X';
                    x--;
                }
            }
            
        }

        return map;
    })
    .then(map => map.map(r => r.filter(c => c==='X').length))
    .then(c => c.reduce((a,b) => a+b)+1)
    .then(console.log)

// Puzzle 2 (WIP)
fetch('https://adventofcode.com/2024/day/6/input')
    .then(r => r.text())
    .then(t => t.split('\n').map(r => r.split('')))
    .then(ogMap => {
        const solutions = [];

        function findObstacleToTheRight(dir, x, y, map) {
            if (dir==='^') {
                for (let i = 0; !!map[y]?.[x+i+1]; i++) {
                    if (map[y][x+i]==='X' && map[y][x+i+1]==='#') {
                        return true;
                    }
                }
                return false;
            }
            if (dir==='>') {
                for (let i = 0; !!map[y+i+1]?.[x]; i++) {
                    if (map[y+i][x]==='X' && map[y+i+1][x]==='#') {
                        return true;
                    }
                }
                return false;
            }
            if (dir==='v') {
                for (let i = 0; !!map[y]?.[x-i-1]; i++) {
                    if (map[y][x-i]==='X' && map[y][x-i-1]==='#') {
                        return true;
                    }
                }
                return false;
            }
            if (dir==='<') {
                for (let i = 0; !!map[y-i-1]?.[x]; i++) {
                    if (map[y-i][x]==='X' && map[y-i-1][x]==='#') {
                        return true;
                    }
                }
                return false;
            }
        }

        function findWay(solutions) {
            const map = [...ogMap.map(c => [...c])];
            let y = map.findIndex(r => r.includes('^'));
            let x = map[y].findIndex(c => c === '^');
            let failsafe = 5_500;
            let skips = solutions.length;
            
            while(x>0 && y>0 && x<map[0].length-1 && y<map.length-1 && failsafe>-1) {
                failsafe--;
                //console.log(map.map(c => c.join('')).join('\n'))
                //debugger;
                
                if (map[y][x]==='^') {
                    if (findObstacleToTheRight(map[y][x], x, y, map)) {
                        if (skips<=0){
                            map[y-1][x] = map[y-1][x]==='#' ? '#' : 'O'
                        }
                        skips--;
                    }
                    
                    if (['#', 'O'].includes(map[y-1][x])) {
                        map[y][x] = '>' 
                    } else {
                        map[y-1][x] = map[y][x];
                        map[y][x] = 'X';
                        y--;
                    }
                } else if (map[y][x]==='>') {
                    if (findObstacleToTheRight(map[y][x], x, y, map)) {
                        if (skips<=0){
                            map[y][x+1] = map[y][x+1]==='#' ? '#' : 'O'
                        }
                        skips--;
                    }
                    
                    if (['#', 'O'].includes(map[y][x+1])) {
                        map[y][x] = 'v' 
                    } else {
                        map[y][x+1] = map[y][x];
                        map[y][x] = 'X';
                        x++;
                    }
                } else if (map[y][x]==='v') {
                    if (findObstacleToTheRight(map[y][x], x, y, map)) {
                        if (skips<=0){
                            map[y+1][x] = map[y+1][x]==='#' ? '#' : 'O'
                        }
                        skips--;
                    }
                    
                    if (['#', 'O'].includes(map[y+1][x])) {
                        map[y][x] = '<' 
                    } else {
                        map[y+1][x] = map[y][x];
                        map[y][x] = 'X';
                        y++;
                    }
                } else if (map[y][x]==='<') {
                    if (findObstacleToTheRight(map[y][x], x, y, map)) {
                        if (skips<=0){
                            map[y][x-1] = map[y][x-1]==='#' ? '#' : 'O'
                        }
                        skips--;
                    }

                    if (['#', 'O'].includes(map[y][x-1])) {
                        map[y][x] = '^' 
                    } else {
                        map[y][x-1] = map[y][x];
                        map[y][x] = 'X';
                        x--;
                    }
                }
            }
            
            //console.log(map.map(c => c.join('')).join('\n'));     
            //debugger;
            
            solutions.push(map);

            return failsafe>-1;
        }

        let isStuck = true;
        let abort = 1_000;
        while(isStuck && abort>-1) {
            isStuck = !findWay(solutions);
            abort--;
        }

        return solutions.map(x => x.map(c => c.join('')).join('\n'));
    })
    //.then(map => map.map(c => c.join('')).join('\n'))
    .then(console.log)
