/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProcessesCreateFormInputValues = {
    Barcode?: string;
    Electricity?: string;
    Renewable?: string;
    Source?: string;
    Fuel?: string;
    Type?: string;
    Carbon?: string;
    Name?: string;
};
export declare type ProcessesCreateFormValidationValues = {
    Barcode?: ValidationFunction<string>;
    Electricity?: ValidationFunction<string>;
    Renewable?: ValidationFunction<string>;
    Source?: ValidationFunction<string>;
    Fuel?: ValidationFunction<string>;
    Type?: ValidationFunction<string>;
    Carbon?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProcessesCreateFormOverridesProps = {
    ProcessesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Barcode?: PrimitiveOverrideProps<TextFieldProps>;
    Electricity?: PrimitiveOverrideProps<TextFieldProps>;
    Renewable?: PrimitiveOverrideProps<TextFieldProps>;
    Source?: PrimitiveOverrideProps<TextFieldProps>;
    Fuel?: PrimitiveOverrideProps<TextFieldProps>;
    Type?: PrimitiveOverrideProps<TextFieldProps>;
    Carbon?: PrimitiveOverrideProps<TextFieldProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProcessesCreateFormProps = React.PropsWithChildren<{
    overrides?: ProcessesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProcessesCreateFormInputValues) => ProcessesCreateFormInputValues;
    onSuccess?: (fields: ProcessesCreateFormInputValues) => void;
    onError?: (fields: ProcessesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProcessesCreateFormInputValues) => ProcessesCreateFormInputValues;
    onValidate?: ProcessesCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProcessesCreateForm(props: ProcessesCreateFormProps): React.ReactElement;
