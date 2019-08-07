import IArguments from './interfaces/IArguments';
import log from './log';
import SchemaReader from './schemaReader';

export default class Program {
	public run(options: IArguments) {
		const sourceFilename = options.file;
		const outputFilename = options.output;

		const errors = [];
		if (!sourceFilename) {
			errors.push('Source file was not specified. Use the --file parameter to specify a source file.');
		}
		if (!outputFilename) {
			errors.push('Output filename was not specified. Use the --output parameter to specify an output file name.');
		}
		if (errors.length > 0) {
			errors.forEach((error) => log.error(error));
			log.newLine();
			log.severe('Failed to run program. See errors above for more details.');

			return;
		}

		const reader = new SchemaReader();
	}
}
