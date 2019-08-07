import IConfigNode from './IConfigNode';

export default interface IConfigObjectNode extends IConfigNode {
    properties: {
        [name: string]: IConfigNode
    }
}