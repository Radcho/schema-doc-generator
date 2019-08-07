import NodeType from '../enums/nodeType';
import IConfigNode from '../interfaces/IConfigNode';
import { DefaultNodeValue } from '../interfaces/types';

export default class ConfigNode implements IConfigNode {
	public name: string;
	public type: NodeType | Array<NodeType>;
	public description: string;
	public optional: boolean;
	public defaultValue?: DefaultNodeValue;

	constructor(node: IConfigNode) {
		this.name = node.name;
		this.type = node.type;
		this.description = node.description;
		this.optional = node.optional;
		this.defaultValue = node.defaultValue;
	}
}
