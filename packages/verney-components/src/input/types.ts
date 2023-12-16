import { ExtractPropTypes } from 'vue';

export const InputType = ['default', 'primary', 'success', 'warning', 'danger'];
export const InputSize = ['large', 'normal', 'small', 'mini'];

// 导出属性类型
export const inputProps = {
    type: {
        type: String,
        validator(value: string) {
            return InputType.includes(value);
        }
    },
    value: [String, Number],
    size: {
        type: String,
        validator(value: string) {
            return InputSize.includes(value);
        }
    }
};

export type InputProps = ExtractPropTypes<typeof inputProps>;
