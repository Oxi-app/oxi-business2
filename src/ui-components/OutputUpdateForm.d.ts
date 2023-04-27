/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Output } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OutputUpdateFormInputValues = {
    CompanyName?: string;
    ProductName?: string;
    OutputQuantity?: string;
    Sources?: string;
    CarbonPerOutput?: string;
    ProductBarcode?: string;
};
export declare type OutputUpdateFormValidationValues = {
    CompanyName?: ValidationFunction<string>;
    ProductName?: ValidationFunction<string>;
    OutputQuantity?: ValidationFunction<string>;
    Sources?: ValidationFunction<string>;
    CarbonPerOutput?: ValidationFunction<string>;
    ProductBarcode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OutputUpdateFormOverridesProps = {
    OutputUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    CompanyName?: PrimitiveOverrideProps<TextFieldProps>;
    ProductName?: PrimitiveOverrideProps<TextFieldProps>;
    OutputQuantity?: PrimitiveOverrideProps<TextFieldProps>;
    Sources?: PrimitiveOverrideProps<TextFieldProps>;
    CarbonPerOutput?: PrimitiveOverrideProps<TextFieldProps>;
    ProductBarcode?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OutputUpdateFormProps = React.PropsWithChildren<{
    overrides?: OutputUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    output?: Output;
    onSubmit?: (fields: OutputUpdateFormInputValues) => OutputUpdateFormInputValues;
    onSuccess?: (fields: OutputUpdateFormInputValues) => void;
    onError?: (fields: OutputUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OutputUpdateFormInputValues) => OutputUpdateFormInputValues;
    onValidate?: OutputUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OutputUpdateForm(props: OutputUpdateFormProps): React.ReactElement;
