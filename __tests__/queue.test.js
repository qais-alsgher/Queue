const Queue = require('../Queue');

describe('test queue', () => {
    it('test create queue', () => {
        const qq = new Queue();
        expect(qq).toBeDefined();
        expect(qq).toBeInstanceOf(Queue);
    });

    it('test enqueue', () => {
        const qq = new Queue();

        qq.enqueue(1);
        qq.enqueue(2);
        qq.enqueue(3);
        qq.enqueue(4);
        expect(qq.head.value).toEqual(1);
        expect(qq.tail.value).toEqual(4);
        expect(qq.peek()).toEqual(1);
    });

    it('test dequeue', () => {
        const qq = new Queue();
        qq.enqueue(1);
        qq.enqueue(2);
        qq.enqueue(3);
        qq.enqueue(4);
        qq.dequeue();
        expect(qq.head.value).toEqual(2);
        expect(qq.deleteN.value).toEqual(1);
        qq.dequeue();
        expect(qq.head.value).toEqual(3);
        qq.dequeue();
        expect(qq.peek()).toEqual(4);
    });

    it('test enpty queue', () => {
        const qq = new Queue();
        expect(qq.isEmpty()).toEqual(true);
        expect(qq.dequeue()).toEqual("Queue is Empty");
    })
})