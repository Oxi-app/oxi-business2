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
export declare type TransportCreateFormInputValues = {
    Mode?: string;
    CO2perMile?: string;
};
export declare type TransportCreateFormValidationValues = {
    Mode?: ValidationFunction<string>;
    CO2perMile?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransportCreateFormOverridesProps = {
    TransportCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Mode?: PrimitiveOverrideProps<TextFieldProps>;
    CO2perMile?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TransportCreateFormProps = React.PropsWithChildren<{
    overrides?: TransportCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TransportCreateFormInputValues) => TransportCreateFormInputValues;
    onSuccess?: (fields: TransportCreateFormInputValues) => void;
    onError?: (fields: TransportCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TransportCreateFormInputValues) => TransportCreateFormInputValues;
    onValidate?: TransportCreateFormValidationValues;
} & React.CSSProperties>;
export default function TransportCreateForm(props: TransportCreateFormProps): React.ReactElement;
