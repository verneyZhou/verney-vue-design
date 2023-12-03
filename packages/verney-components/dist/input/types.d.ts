import { ExtractPropTypes } from 'vue';
export declare const InputType: string[];
export declare const InputSize: string[];
export declare const inputProps: {
    type: {
        type: StringConstructor;
        validator(value: string): boolean;
    };
    value: (StringConstructor | NumberConstructor)[];
    size: {
        type: StringConstructor;
        validator(value: string): boolean;
    };
};
export type InputProps = ExtractPropTypes<typeof inputProps>;
