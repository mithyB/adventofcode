// Puzzle 1
fetch('https://adventofcode.com/2024/day/5/input')
    .then(r => r.text())
    .then(t => t.split('\n\n').map(x => x.split('\n')))
    .then(([a,b]) => ({
        rules: a.map(x => x.split('|').map(x => parseInt(x, 10))),
        manuals: b.slice(0, b.length - 1).map(x => x.split(',').map(x => parseInt(x, 10)))
    }))
    .then(({ rules, manuals }) => {
        function isCorrectOrder(list, rules) {
            for (const rule of rules) {
                const [n1, n2] = rule;
                const i1 = list.indexOf(n1), i2 = list.indexOf(n2);

                if (i1 > -1 && i2 > -1 && i1 > i2) {
                    return false;
                }
            }

            return true;
        }

        return manuals
            .map(m => ({ isValid: isCorrectOrder(m, rules), pages: m }))
            .filter(x => x.isValid)
            .map(x => x.pages);
    })
    .then(m => m.map(x => x.splice(x.length/2, 1)[0]))
    .then(x => x.reduce((a,b) => a + b))
    .then(console.log)

// Puzzle 2
fetch('https://adventofcode.com/2024/day/5/input')
    .then(r => r.text())
    .then(t => t.split('\n\n').map(x => x.split('\n')))
    .then(([a,b]) => ({
        rules: a.map(x => x.split('|').map(x => parseInt(x, 10))),
        manuals: b.slice(0, b.length - 1).map(x => x.split(',').map(x => parseInt(x, 10)))
    }))
    .then(({ rules, manuals }) => {
        function isCorrectOrder(list, rules) {
            for (const rule of rules) {
                const [n1, n2] = rule;
                const i1 = list.indexOf(n1), i2 = list.indexOf(n2);

                if (i1 > -1 && i2 > -1 && i1 > i2) {
                    return false;
                }
            }

            return true;
        }
        function sortPages(a, b, rules) {
            for (const rule of rules) {
                const [n1, n2] = rule;
                const i1 = [a,b].indexOf(n1), i2 = [a,b].indexOf(n2);

                if (i1 > -1 && i2 > -1) {
                    if (i1 > i2) {
                        return 1;
                    }

                    return -1;
                }
            }

            return 0;
        }

        return manuals
            .map(m => ({ isValid: isCorrectOrder(m, rules), pages: m }))
            .filter(x => !x.isValid)
            .map(x => x.pages.sort((a, b) => sortPages(a,b,rules)));
    })
    .then(m => m.map(x => x.splice(x.length/2, 1)[0]))
    .then(x => x.reduce((a,b) => a + b))
    .then(console.log)
