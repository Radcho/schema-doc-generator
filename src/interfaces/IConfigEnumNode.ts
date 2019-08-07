import IConfigNode from './IConfigNode';

export default interface IConfigEnumNode extends IConfigNode {
	possibleValues: Array<string | number>;
}
