import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import button from '../button.vue';

// 测试组件
describe('test button', () => {
    // case1: 测试组件是否正常渲染
    it('should render slot', () => {
        const wrapper = mount(button, {
            slots: {
                default: 'verney-button-test'
            }
        });
        expect(wrapper.text()).toContain('verney-button-test');
    });
    // case2: 当我们传入的type为primary的时候,期望组件的类名为ea-button--primary
    it('should have class', () => {
        const wrapper = mount(button, {
            props: {
                type: 'primary'
            }
        });
        expect(wrapper.classes()).toContain('vn-button__primary');
    });
});
