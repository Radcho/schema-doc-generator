import NodeType from '../enums/nodeType';

export default interface IConfigNode {
    name: string;
    type: NodeType | Array<NodeType>;
    description: string;
    optional: boolean;
    defaultValue?: any;
}