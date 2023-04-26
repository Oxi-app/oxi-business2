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
export declare type RawMaterialsCreateFormInputValues = {
    Barcode?: string;
    Material?: string;
    Mass?: string;
    Carbon?: string;
};
export declare type RawMaterialsCreateFormValidationValues = {
    Barcode?: ValidationFunction<string>;
    Material?: ValidationFunction<string>;
    Mass?: ValidationFunction<string>;
    Carbon?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RawMaterialsCreateFormOverridesProps = {
    RawMaterialsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Barcode?: PrimitiveOverrideProps<TextFieldProps>;
    Material?: PrimitiveOverrideProps<TextFieldProps>;
    Mass?: PrimitiveOverrideProps<TextFieldProps>;
    Carbon?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RawMaterialsCreateFormProps = React.PropsWithChildren<{
    overrides?: RawMaterialsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RawMaterialsCreateFormInputValues) => RawMaterialsCreateFormInputValues;
    onSuccess?: (fields: RawMaterialsCreateFormInputValues) => void;
    onError?: (fields: RawMaterialsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RawMaterialsCreateFormInputValues) => RawMaterialsCreateFormInputValues;
    onValidate?: RawMaterialsCreateFormValidationValues;
} & React.CSSProperties>;
export default function RawMaterialsCreateForm(props: RawMaterialsCreateFormProps): React.ReactElement;
