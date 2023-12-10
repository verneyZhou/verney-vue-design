import { ExtractPropTypes } from 'vue' // ExtractPropTypes是vue3中内置的类型声明

// 定义属性值
export const ButtonType = ['default', 'primary', 'success', 'warning', 'danger']
export const ButtonSize = ['large', 'normal', 'small', 'mini'];

// 导出属性类型
export const buttonProps = {
    type: {
        type: String,
        validator(value: string) { // 校验属性值
            return ButtonType.includes(value)
        }
    },
    plain: Boolean,
    round: Boolean,
    disabled: Boolean,
    icon: String,
    iconPosition: String,
    size: {
        type: String,
        validator(value: string) {
            return ButtonSize.includes(value)
        }
    }
}

// 导出组件属性配置信息
// ExtractPropTypes会接收一个类型，然后把对应的vue3所接收的props类型提供出来，后面有需要可以直接使用
export type ButtonProps = ExtractPropTypes<typeof buttonProps>