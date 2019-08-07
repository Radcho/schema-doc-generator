import ConfigNode from './configNode';
import IConfigArrayNode from '../interfaces/IConfigArrayNode';
import IConfigNode from '../interfaces/IConfigNode';

export default class ConfigArrayNode extends ConfigNode implements IConfigArrayNode {
    public items: Array<IConfigNode>;

    constructor(node: IConfigArrayNode) {
        super(node);
        this.items = node.items;
    }
}