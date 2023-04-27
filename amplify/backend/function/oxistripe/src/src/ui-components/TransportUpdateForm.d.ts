/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Transport } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TransportUpdateFormInputValues = {
    Mode?: string;
    CO2perMile?: string;
};
export declare type TransportUpdateFormValidationValues = {
    Mode?: ValidationFunction<string>;
    CO2perMile?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransportUpdateFormOverridesProps = {
    TransportUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Mode?: PrimitiveOverrideProps<TextFieldProps>;
    CO2perMile?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TransportUpdateFormProps = React.PropsWithChildren<{
    overrides?: TransportUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    transport?: Transport;
    onSubmit?: (fields: TransportUpdateFormInputValues) => TransportUpdateFormInputValues;
    onSuccess?: (fields: TransportUpdateFormInputValues) => void;
    onError?: (fields: TransportUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TransportUpdateFormInputValues) => TransportUpdateFormInputValues;
    onValidate?: TransportUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TransportUpdateForm(props: TransportUpdateFormProps): React.ReactElement;
