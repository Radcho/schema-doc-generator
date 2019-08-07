import NodeType from '../enums/nodeType';
import IConfigNode from '../interfaces/IConfigNode';

export default class ConfigNode implements IConfigNode {
    public name: string;
    public type: NodeType | Array<NodeType>;
    public description: string;
    public optional: boolean;
    public defaultValue?: any;

    constructor(node: IConfigNode) {
        this.name = node.name;
        this.type = node.type;
        this.description = node.description;
        this.optional = node.optional;
        this.defaultValue = node.defaultValue;
    }
}