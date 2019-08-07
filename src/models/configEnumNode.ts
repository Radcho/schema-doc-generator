import IConfigEnumNode from '../interfaces/IConfigEnumNode';
import ConfigNode from './configNode';

export default class ConfigEnumNode extends ConfigNode implements IConfigEnumNode {
	public possibleValues: Array<string | number>;

	constructor(node: IConfigEnumNode) {
		super(node);
		this.possibleValues = node.possibleValues;
	}
}
