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
export declare type BasketCreateFormInputValues = {
    Barcode?: string;
    Merchant?: string;
    Name?: string;
    Price?: string;
    Weight?: string;
    Material?: string;
    Carbon?: string;
    owner?: string;
    Category?: string;
};
export declare type BasketCreateFormValidationValues = {
    Barcode?: ValidationFunction<string>;
    Merchant?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
    Price?: ValidationFunction<string>;
    Weight?: ValidationFunction<string>;
    Material?: ValidationFunction<string>;
    Carbon?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
    Category?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BasketCreateFormOverridesProps = {
    BasketCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Barcode?: PrimitiveOverrideProps<TextFieldProps>;
    Merchant?: PrimitiveOverrideProps<TextFieldProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Price?: PrimitiveOverrideProps<TextFieldProps>;
    Weight?: PrimitiveOverrideProps<TextFieldProps>;
    Material?: PrimitiveOverrideProps<TextFieldProps>;
    Carbon?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    Category?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BasketCreateFormProps = React.PropsWithChildren<{
    overrides?: BasketCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BasketCreateFormInputValues) => BasketCreateFormInputValues;
    onSuccess?: (fields: BasketCreateFormInputValues) => void;
    onError?: (fields: BasketCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BasketCreateFormInputValues) => BasketCreateFormInputValues;
    onValidate?: BasketCreateFormValidationValues;
} & React.CSSProperties>;
export default function BasketCreateForm(props: BasketCreateFormProps): React.ReactElement;
