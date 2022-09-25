const Node = require('../Node');

describe('test node', () => {
    it('test create node', () => {
        const node = new Node(1);
        expect(node).toBeDefined();
        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual(1);
        expect(node.next).toBeNull();
    })

});