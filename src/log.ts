import colors from 'colors/safe';

class Log {
    public newLine(): void {
        console.log('');
    }

    public debug(message: string): void {
        console.log(colors.cyan(message));
    }

    public log(message: string): void {
        console.log(message);
    }

    public warn(message: string): void {
        console.error(colors.yellow(message));
    }

    public error(message: string): void {
        console.error(colors.red(message));
    }

    public severe(message: string): void {
        console.error(colors.bgRed(message));
    }
}

export default new Log();