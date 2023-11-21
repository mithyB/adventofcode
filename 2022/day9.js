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

fetch('https://adventofcode.com/2022/day/9/input')
    .then(r => r.text())
    .then(t => t.split('\n'))
    .then(t => {
        var r = {'0|0': true};
        var rope = [];
        for(var i = 0; i < 10; i++) { rope.push([0,0]); }
        
        t.forEach(l => {
            c = l.split(' ');

            for (var i = 0; i < parseInt(c[1]); i++) {
                rope[rope.length-1][0] = c[0] === 'R' ? rope[rope.length-1][0] + 1 : c[0] === 'L' ? rope[rope.length-1][0] - 1 : rope[rope.length-1][0];
                rope[rope.length-1][1] = c[0] === 'D' ? rope[rope.length-1][1] + 1 : c[0] === 'U' ? rope[rope.length-1][1] - 1 : rope[rope.length-1][1];
                
                for (var k = rope.length - 1; k > 0; k--) {
    
                    if (Math.abs(rope[k][0] - rope[k-1][0]) > 1) {
                        rope[k-1][0] = rope[k-1][0] + (rope[k][0] - rope[k-1][0])/Math.abs(rope[k][0] - rope[k-1][0]);
                        rope[k-1][1] = rope[k][1];
                    }
                    if (Math.abs(rope[k][1] - rope[k-1][1]) > 1) {
                        rope[k-1][1] = rope[k-1][1] + (rope[k][1] - rope[k-1][1])/Math.abs(rope[k][1] - rope[k-1][1]);
                        rope[k-1][0] = rope[k][0];
                    }
                }

                r[`${rope[0][0]}|${rope[0][1]}`] = true;
            }
        });

        return r;
    })
    .then(o => Object.keys(o).length)
    .then(console.log)
