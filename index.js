const fs = require('fs');

const people = {
    John: 54,
    Patrick: 53,
    Jeremy: 50,
    Philip: 49,
    Cameron: 49,
    Russel: 49,
    Chris: 46,
    Mike: 46,
    CA: 45,
    Ben: 45,
    Jose: 43,
    Gilly: 40,
    Peter: 40
};

const sortedPeople = Object.entries(people).sort((a, b) => b[1] - a[1]);

const rankedPeople = {};
sortedPeople.forEach(([name, value], index) => {
    rankedPeople[name] = index + 1;
});

let output = '| Rank | Name | Points |\n|------|------|--------|\n';
sortedPeople.forEach(([name, value], index) => {
    output += `| ${rankedPeople[name]} | ${name} | ${value} |\n`;
});

fs.writeFileSync('/Users/joe/Documents/GitHub/PL_Tips/index.md', output);

console.log('%cRanked People:', 'font-weight: bold;');
sortedPeople.forEach(([name, value], index) => {
    let style = '';
    if (index === 0) {
        style = 'color: green;';
    } else if (index >= sortedPeople.length - 2) {
        style = 'color: red;';
    }
    console.log(`%c${rankedPeople[name]} ${name} ${value}`, style);
});