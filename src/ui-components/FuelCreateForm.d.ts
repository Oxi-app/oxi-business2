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
export declare type FuelCreateFormInputValues = {
    Type?: string;
    CO2perkg?: string;
};
export declare type FuelCreateFormValidationValues = {
    Type?: ValidationFunction<string>;
    CO2perkg?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FuelCreateFormOverridesProps = {
    FuelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Type?: PrimitiveOverrideProps<TextFieldProps>;
    CO2perkg?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FuelCreateFormProps = React.PropsWithChildren<{
    overrides?: FuelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FuelCreateFormInputValues) => FuelCreateFormInputValues;
    onSuccess?: (fields: FuelCreateFormInputValues) => void;
    onError?: (fields: FuelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FuelCreateFormInputValues) => FuelCreateFormInputValues;
    onValidate?: FuelCreateFormValidationValues;
} & React.CSSProperties>;
export default function FuelCreateForm(props: FuelCreateFormProps): React.ReactElement;
