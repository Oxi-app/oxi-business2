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
export declare type ElectricityCreateFormInputValues = {
    Source?: string;
    CO2perkWh?: string;
};
export declare type ElectricityCreateFormValidationValues = {
    Source?: ValidationFunction<string>;
    CO2perkWh?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ElectricityCreateFormOverridesProps = {
    ElectricityCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Source?: PrimitiveOverrideProps<TextFieldProps>;
    CO2perkWh?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ElectricityCreateFormProps = React.PropsWithChildren<{
    overrides?: ElectricityCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ElectricityCreateFormInputValues) => ElectricityCreateFormInputValues;
    onSuccess?: (fields: ElectricityCreateFormInputValues) => void;
    onError?: (fields: ElectricityCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ElectricityCreateFormInputValues) => ElectricityCreateFormInputValues;
    onValidate?: ElectricityCreateFormValidationValues;
} & React.CSSProperties>;
export default function ElectricityCreateForm(props: ElectricityCreateFormProps): React.ReactElement;
