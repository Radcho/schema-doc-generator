import commander from 'commander';
import Program from './program';

commander
    .version('0.0.1')
    .option('-f, --file', 'JSON Schema file to read.')
    .option('-o, --output', 'Name of the outputted HTML file')
    .parse(process.argv);

new Program().run({
    file: commander.file,
    output: commander.output
});