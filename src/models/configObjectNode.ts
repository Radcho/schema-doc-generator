import ConfigNode from './configNode';
import IConfigNode from '../interfaces/IConfigNode';
import IConfigObjectNode from '../interfaces/IConfigObjectNode';

export default class ConfigArrayNode extends ConfigNode implements IConfigObjectNode {
    public properties: {
        [name: string]: IConfigNode
    };

    constructor(node: IConfigObjectNode) {
        super(node);
        this.properties = node.properties;
    }
}