import { describe, expect, it } from 'vitest';

// describe 和 it 指示了在进行 case test:
// describe 是对 case test 的描述，而 it 则是对 case test 的具体实现。
describe('hello venney-ui-test', () => {
    it('should be hello venney-ui-test', () => {
        // expect用于验证代码的行为和输出是否符合预期的方式
        expect('hello ' + 'venney-ui-test').toBe('hello venney-ui-test');
    });
});
