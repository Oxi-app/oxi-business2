/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Electricity } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ElectricityUpdateFormInputValues = {
    Source?: string;
    CO2perkWh?: string;
};
export declare type ElectricityUpdateFormValidationValues = {
    Source?: ValidationFunction<string>;
    CO2perkWh?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ElectricityUpdateFormOverridesProps = {
    ElectricityUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Source?: PrimitiveOverrideProps<TextFieldProps>;
    CO2perkWh?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ElectricityUpdateFormProps = React.PropsWithChildren<{
    overrides?: ElectricityUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    electricity?: Electricity;
    onSubmit?: (fields: ElectricityUpdateFormInputValues) => ElectricityUpdateFormInputValues;
    onSuccess?: (fields: ElectricityUpdateFormInputValues) => void;
    onError?: (fields: ElectricityUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ElectricityUpdateFormInputValues) => ElectricityUpdateFormInputValues;
    onValidate?: ElectricityUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ElectricityUpdateForm(props: ElectricityUpdateFormProps): React.ReactElement;
