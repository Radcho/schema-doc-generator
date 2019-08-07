import NodeType from '../enums/nodeType';
import { DefaultNodeValue } from './types';

export default interface IConfigNode {
	name: string;
	type: NodeType | Array<NodeType>;
	description: string;
	optional: boolean;
	defaultValue?: DefaultNodeValue;
}
