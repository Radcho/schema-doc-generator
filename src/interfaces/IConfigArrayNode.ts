import IConfigNode from './IConfigNode';

export default interface IConfigArrayNode extends IConfigNode {
	items: Array<IConfigNode>;
}
