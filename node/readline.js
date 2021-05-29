const { clearLine, cursorTo } = require('readline');

console.log();
function printProgress(total, progress, x, message) {

    const BAR_SIZE = 70;
    const progressBar = new Array(BAR_SIZE).fill(' ');
    const progressPoints = Math.floor((progress * BAR_SIZE) / total);

    for (let i = 0; i < progressPoints; i++)
        progressBar[i] = '\u2588';

    cursorTo(process.stdout, x);
    clearLine(process.stdout, -1);
    clearLine(process.stdout, 1);
    process.stdout.write(' [ ' + progressBar.join('') + ' ] ' + Math.round(progress / total * 10000) / 100 + '% ' + message);

}

let i = 0;

setInterval( () => {

    const message = `(${ i }/100)`;
    printProgress( 130, i, 0, message );
    i++;

}, 500 );

