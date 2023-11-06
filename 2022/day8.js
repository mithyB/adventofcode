fetch('https://adventofcode.com/2022/day/8/input')
    .then(r => r.text())
    .then(r => r.split('\n').map(l => l.split('').map(n => parseInt(n))))
    .then(f => {
        var r = [...Array(f.length)].map(e => Array(f[0].length).fill(''));

        for (var n = 0; n < 4; n++) {
            var maxY = n % 2 === 0 ? f.length : f[0].length;
            var maxX = n % 2 === 0 ? f[0].length : f.length;
            
            for (var y = 0; y < maxY; y++) {
                var max = -1;
                
                for (var x = 0; x < maxX; x++) {
                    var realY = n === 0 ? y
                        : n === 1 ? x
                        : n === 2 ? maxY - 1 - y
                        : maxX - 1 - x;
                    var realX = n === 0 ? x
                        : n === 1 ? y
                        : n === 2 ? maxX - 1 - x
                        : maxY - 1 - y;
                        
                    if (f[realY][realX] > max) {
                        max = f[realY][realX];
                        r[realY][realX] = 'T'
                    }
                }
            }
        }
        
        return r.reduce((a, c) => c.filter(x => x === 'T').length + a, 0);
    })
    .then(console.log)

fetch('https://adventofcode.com/2022/day/8/input')
    .then(r => r.text())
    .then(r => r.split('\n').map(l => l.split('').map(n => parseInt(n))))
    .then(f => {
        var r = [...Array(f.length)].map(e => Array(f[0].length).fill(0));

        for (var y = 0; y < f.length; y++) {
            for (var x = 0; x < f[0].length; x++) {
                var height = f[y][x];
                var maxNorth = false, distanceNorth = 0;
                var maxEast = false, distanceEast = 0;
                var maxSouth = false, distanceSouth = 0;
                var maxWest = false, distanceWest = 0;

                for (var i = 1; i < Math.max(f.length, f[0].length); i++) {                    
                    if (!maxNorth && y-i >= 0) { distanceNorth++; maxNorth = f[y-i][x] >= height; } else { maxNorth = true; }   
                    if (!maxEast && x+i < f[0].length) { distanceEast++; maxEast = f[y][x+i] >= height; } else { maxEast = true; }   
                    if (!maxSouth && y+i < f.length) { distanceSouth++; maxSouth = f[y+i][x] >= height; } else { maxSouth = true; }   
                    if (!maxWest && x-i >= 0) { distanceWest++; maxWest = f[y][x-i] >= height; } else { maxWest = true; }   
                }

                // r[y][x] = { value: distanceNorth * distanceEast * distanceSouth * distanceWest, distanceNorth, distanceEast, distanceSouth, distanceWest, x, y };
                r[y][x] = distanceNorth * distanceEast * (distanceSouth-1) * distanceWest;
            }
        }

        // return r;
        
        return Math.max(...r.map(t => Math.max(...t)))
    })
    .then(console.log)
