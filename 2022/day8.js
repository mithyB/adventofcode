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
