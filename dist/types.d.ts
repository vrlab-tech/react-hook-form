import * as React from 'react';
export declare type Primitive = string | boolean | number | symbol | null | undefined;
export declare type FieldValues = Record<string, any>;
export declare type FieldName<FormValues extends FieldValues> = (keyof FormValues & string) | string;
export declare type FieldValue<FormValues extends FieldValues> = FormValues[FieldName<FormValues>];
export declare type Ref = FieldElement;
export declare type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U> ? Array<DeepPartial<U>> : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : DeepPartial<T[P]>;
};
export declare type ValidationMode = {
    onBlur: 'onBlur';
    onChange: 'onChange';
    onSubmit: 'onSubmit';
};
export declare type Mode = keyof ValidationMode;
export declare type OnSubmit<FormValues extends FieldValues> = (data: FormValues, event?: React.BaseSyntheticEvent) => void | Promise<void>;
export declare type SchemaValidateOptions = Partial<{
    strict: boolean;
    abortEarly: boolean;
    stripUnknown: boolean;
    recursive: boolean;
    context: any;
}>;
export declare type ValidationResolver = <FormValues, ValidationContext>(values: FieldValues, validationContext: ValidationContext) => {
    values: FieldValues | {};
    errors: FieldErrors<FormValues> | {};
};
export declare type UseFormOptions<FormValues extends FieldValues = FieldValues, ValidationContext = undefined> = Partial<{
    mode: Mode;
    reValidateMode: Mode;
    defaultValues: DeepPartial<FormValues>;
    validationSchema: any;
    validationResolver: ValidationResolver;
    validationContext: ValidationContext;
    submitFocusError: boolean;
    validateCriteriaMode: 'firstError' | 'all';
}>;
export declare type MutationWatcher = {
    disconnect: VoidFunction;
    observe?: any;
};
declare type ValidationOptionObject<Value> = Value | {
    value: Value;
    message: string;
};
export declare type ValidationValue = boolean | number | string | RegExp;
export declare type ValidateResult = string | boolean | undefined;
export declare type Validate = (data: any) => ValidateResult | Promise<ValidateResult>;
export declare type ValidationOptions = Partial<{
    required: boolean | string | ValidationOptionObject<boolean>;
    min: ValidationOptionObject<number | string>;
    max: ValidationOptionObject<number | string>;
    maxLength: ValidationOptionObject<number | string>;
    minLength: ValidationOptionObject<number | string>;
    pattern: ValidationOptionObject<RegExp>;
    validate: Validate | Record<string, Validate>;
}>;
export declare type MultipleFieldErrors = Record<string, ValidateResult>;
export declare type FieldError = {
    type: string;
    ref?: Ref;
    types?: MultipleFieldErrors;
    message?: string;
    isManual?: boolean;
};
export declare type ManualFieldError<FormValues> = {
    name: FieldName<FormValues>;
    type: string;
    types?: MultipleFieldErrors;
    message?: string;
};
export declare type Field = {
    ref: Ref;
    mutationWatcher?: MutationWatcher;
    options?: RadioOrCheckboxOption[];
} & ValidationOptions;
export declare type FieldRefs<FormValues extends FieldValues> = Partial<Record<FieldName<FormValues>, Field>>;
export declare type NestDataObject<FormValues> = {
    [Key in keyof FormValues]?: FormValues[Key] extends any[] ? FormValues[Key][number] extends object ? FieldErrors<FormValues[Key][number]>[] : FormValues[Key][number] extends string | number ? FieldError[] : FieldError : FormValues[Key] extends Date ? FieldError : FormValues[Key] extends object ? FieldErrors<FormValues[Key]> : FieldError;
};
export declare type FieldErrors<FormValues> = NestDataObject<FormValues>;
export declare type Touched<FormValues> = NestDataObject<FormValues>;
export declare type SubmitPromiseResult<FormValues extends FieldValues> = {
    errors: FieldErrors<FormValues>;
    values: FormValues;
};
export declare type FormStateProxy<FormValues extends FieldValues = FieldValues> = {
    dirty: boolean;
    dirtyFields: Set<FieldName<FormValues>>;
    isSubmitted: boolean;
    submitCount: number;
    touched: Touched<FormValues>;
    isSubmitting: boolean;
    isValid: boolean;
};
export declare type ReadFormState = {
    [P in keyof FormStateProxy]: boolean;
};
export declare type RadioOrCheckboxOption = {
    ref: HTMLInputElement;
    mutationWatcher?: MutationWatcher;
};
export declare type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | CustomElement;
export declare type CustomElement = {
    name: string;
    type?: string;
    value?: any;
    checked?: boolean;
    options?: HTMLOptionsCollection;
    files?: FileList | null;
};
export declare type HandleChange = (evt: Event) => Promise<void | boolean>;
export declare type FormValuesFromErrors<Errors> = Errors extends FieldErrors<infer FormValues> ? FormValues : never;
export declare type EventFunction = (args: any) => any;
export declare type Control<FormValues extends FieldValues = FieldValues> = {
    register<Element extends FieldElement = FieldElement>(): (ref: Element | null) => void;
    register<Element extends FieldElement = FieldElement>(validationOptions: ValidationOptions): (ref: Element | null) => void;
    register<Element extends FieldElement = FieldElement>(name: FieldName<FormValues>, validationOptions?: ValidationOptions): void;
    register<Element extends FieldElement = FieldElement>(namesWithValidationOptions: Record<FieldName<FormValues>, ValidationOptions>): void;
    register<Element extends FieldElement = FieldElement>(ref: Element, validationOptions?: ValidationOptions): void;
    register<Element extends FieldElement = FieldElement>(refOrValidationOptions: ValidationOptions | Element | null, validationOptions?: ValidationOptions): ((ref: Element | null) => void) | void;
    triggerValidation: (payload?: FieldName<FormValues> | FieldName<FormValues>[] | string, shouldRender?: boolean) => Promise<boolean>;
    removeFieldEventListener: (field: Field, forceDelete?: boolean) => void;
    unregister(name: FieldName<FormValues>): void;
    unregister(names: FieldName<FormValues>[]): void;
    unregister(names: FieldName<FormValues> | FieldName<FormValues>[]): void;
    getValues: (payload?: {
        nest: boolean;
    }) => any;
    setValue: <Name extends FieldName<FormValues>>(name: Name, value: FormValues[Name], shouldValidate?: boolean) => void | Promise<boolean>;
    formState: FormStateProxy<FormValues>;
    mode: {
        isOnBlur: boolean;
        isOnSubmit: boolean;
    };
    reValidateMode: {
        isReValidateOnBlur: boolean;
        isReValidateOnSubmit: boolean;
    };
    validateSchemaIsValid?: (fieldsValues: any) => void;
    touchedFieldsRef: React.MutableRefObject<Touched<FormValues>>;
    watchFieldArrayRef: React.MutableRefObject<any>;
    errorsRef: React.MutableRefObject<FieldErrors<FormValues>>;
    fieldsRef: React.MutableRefObject<FieldRefs<FormValues>>;
    resetFieldArrayFunctionRef: React.MutableRefObject<Record<string, (values: any) => void>>;
    fieldArrayNamesRef: React.MutableRefObject<Set<string>>;
    isDirtyRef: React.MutableRefObject<boolean>;
    readFormStateRef: React.MutableRefObject<{
        dirty: boolean;
        isSubmitted: boolean;
        submitCount: boolean;
        touched: boolean;
        isSubmitting: boolean;
        isValid: boolean;
    }>;
    defaultValuesRef: React.MutableRefObject<DeepPartial<FormValues> | FormValues[FieldName<FormValues>]>;
};
export declare type AsProps<As> = As extends undefined ? {} : As extends React.ReactElement ? {
    [key: string]: any;
} : As extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[As] : never;
export declare type ControllerProps<ControlProp extends Control = Control> = {
    name: string;
    as: React.ReactElement | React.ElementType | string;
    rules?: ValidationOptions;
    onChange?: EventFunction;
    onBlur?: EventFunction;
    mode?: Mode;
    onChangeName?: string;
    onBlurName?: string;
    valueName?: string;
    defaultValue?: any;
    control?: ControlProp;
    [key: string]: any;
};
export declare type ErrorMessageProps<Errors extends FieldErrors<any>, Name extends FieldName<FormValuesFromErrors<Errors>>, As extends undefined | React.ReactElement | keyof JSX.IntrinsicElements = undefined> = {
    as?: As;
    errors?: Errors;
    name: Name;
    message?: string;
    children?: (data: {
        message: string;
        messages: MultipleFieldErrors;
    }) => React.ReactNode;
} & AsProps<As>;
export declare type UseFieldArrayProps<KeyName extends string = 'id', ControlProp extends Control = Control> = {
    name: string;
    keyName?: KeyName;
    control?: ControlProp;
};
export declare type ArrayField<FormArrayValues extends FieldValues = FieldValues, KeyName extends string = 'id'> = FormArrayValues & Record<KeyName, string>;
export {};
