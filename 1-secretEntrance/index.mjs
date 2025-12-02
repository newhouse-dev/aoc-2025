import fs from 'node:fs';

const input = fs.readFileSync('./input.txt', 'utf8').replace(/\r/g, '').trim();
const inputArr = input.split('\n');

let pos = 50;
let part1 = 0;
let part2 = 0;

for (const cmd of inputArr) {
    let num = parseInt(cmd.slice(1), 10);
    if (cmd[0] === 'L') num = -num;

    const old = pos;

    part2 += num > 0
        ? Math.floor((old + num) / 100) - Math.floor(old / 100)
        : Math.floor((old - 1) / 100) - Math.floor((old - 1 + num) / 100);

    pos = (pos + num + 100) % 100;

    if (pos === 0) part1++;
}

console.log(part1, part2);
