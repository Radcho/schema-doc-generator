import { readFileSync } from 'fs';

export default class SchemaReader {
    public getJSON = (filename: string) => {
        const file = this.readFile(filename);

        return this.parseFileToJSON(file);
    }

    private readFile(filename: string): string {
        try {
            return readFileSync(filename).toString();
        } catch (e) {
            throw new Error('Specified source file could not be read. It is either corrupted or missing.' + e.toString());
        }
    }

    private parseFileToJSON(file: string): any {
        try {
            return JSON.parse(file);
        } catch (e) {
            throw new Error('Could not parse source file to JSON. ' + e.toString());
        }
    }
}