export default class Dialog {
    constructor(name, nodes) {
        this._name = name;
        this._nodes = nodes;
    }

    setName(name) {
        this._name = name
    }
    get name() {
        return this._name
    }

    setNodes(nodes) {
        this._nodes = nodes
    }
    get nodes() {
        return this._nodes
    }
}