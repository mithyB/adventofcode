fetch('https://adventofcode.com/2022/day/9/input')
    .then(r => r.text())
    .then(t => t.split('\n'))
    .then(t => {
        var r = {'0|0': true};
        var hX = 0;
        var hY = 0;
        var tX = 0;
        var tY = 0;
        
        t.forEach(l => {
            c = l.split(' ');

            for (var i = 0; i < parseInt(c[1]); i++) {
                hX = c[0] === 'R' ? hX + 1 : c[0] === 'L' ? hX - 1 : hX;
                hY = c[0] === 'D' ? hY + 1 : c[0] === 'U' ? hY - 1 : hY;

                if (Math.abs(hX - tX) > 1) {
                    tX = tX + (hX - tX)/Math.abs(hX - tX);
                    tY = hY;
                }
                if (Math.abs(hY - tY) > 1) {
                    tY = tY + (hY - tY)/Math.abs(hY - tY);
                    tX = hX;
                }
                r[`${tX}|${tY}`] = true;
            }
        });

        return r;
    })
    .then(o => Object.keys(o).length)
    .then(console.log)
