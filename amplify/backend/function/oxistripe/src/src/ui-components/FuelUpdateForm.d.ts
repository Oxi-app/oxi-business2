/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Fuel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FuelUpdateFormInputValues = {
    Type?: string;
    CO2perkg?: string;
};
export declare type FuelUpdateFormValidationValues = {
    Type?: ValidationFunction<string>;
    CO2perkg?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FuelUpdateFormOverridesProps = {
    FuelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Type?: PrimitiveOverrideProps<TextFieldProps>;
    CO2perkg?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FuelUpdateFormProps = React.PropsWithChildren<{
    overrides?: FuelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fuel?: Fuel;
    onSubmit?: (fields: FuelUpdateFormInputValues) => FuelUpdateFormInputValues;
    onSuccess?: (fields: FuelUpdateFormInputValues) => void;
    onError?: (fields: FuelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FuelUpdateFormInputValues) => FuelUpdateFormInputValues;
    onValidate?: FuelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FuelUpdateForm(props: FuelUpdateFormProps): React.ReactElement;
