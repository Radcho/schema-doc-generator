type PrimitiveNodeValue = null | string | boolean | number | object;
type ExtendedNodeValue = PrimitiveNodeValue | Array<PrimitiveNodeValue>;

export type DefaultNodeValue = ExtendedNodeValue | Array<ExtendedNodeValue>;
