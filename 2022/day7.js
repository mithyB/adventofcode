fetch('https://adventofcode.com/2022/day/7/input')
    .then(r => r.text())
    .then(t => t.split('\n'))
    .then(t => {
        var d = [];
        var r = {};
        t.forEach(l => {
            if (l === '$ ls') {}
            else if (l === '$ cd ..') {
                d.pop();
            }
            else if (l.startsWith('$ cd')) {
                d.push(l.substring(5));
                r[d.join('/')] = 0
            }
            else if (l.startsWith('dir')) {}
            else {
                var s = parseInt(l.split(' ')[0]);
                var p = [];
                for (var dir of d) {
                    p.push(dir);
                    r[p.join('/')] += s;
                }
            }
        });
        return r;
    })
    .then(r => Object.values(r))
    .then(r => r.filter(d => d <= 100_000))
    .then(r => r.reduce((a, c) => a + c, 0))
    .then(console.log)

fetch('https://adventofcode.com/2022/day/7/input')
    .then(r => r.text())
    .then(t => t.split('\n'))
    .then(t => {
        var d = [];
        var r = {};
        t.forEach(l => {
            if (l === '$ ls') {}
            else if (l === '$ cd ..') {
                d.pop();
            }
            else if (l.startsWith('$ cd')) {
                d.push(l.substring(5));
                r[d.join('/')] = 0
            }
            else if (l.startsWith('dir')) {}
            else {
                if (l.split(' ')[0]) {
                    var s = parseInt(l.split(' ')[0]);
                    var p = [];
                    for (var dir of d) {
                        p.push(dir);
                        r[p.join('/')] += s;
                    }
                }
            }
        });
        return r;
    })
    .then(r => Object.values(r).sort((a,b) => b-a))
    .then(r => r.filter(d => d >= 30_000_000 - 70_000_000 + r[0]))
    .then(r => r.sort((a,b) => a-b)[0])
    .then(console.log)