/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Logistics } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LogisticsUpdateFormInputValues = {
    Barcode?: string;
    Location?: string;
    Distance?: string;
    Mode?: string;
    Carbon?: string;
};
export declare type LogisticsUpdateFormValidationValues = {
    Barcode?: ValidationFunction<string>;
    Location?: ValidationFunction<string>;
    Distance?: ValidationFunction<string>;
    Mode?: ValidationFunction<string>;
    Carbon?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogisticsUpdateFormOverridesProps = {
    LogisticsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Barcode?: PrimitiveOverrideProps<TextFieldProps>;
    Location?: PrimitiveOverrideProps<TextFieldProps>;
    Distance?: PrimitiveOverrideProps<TextFieldProps>;
    Mode?: PrimitiveOverrideProps<TextFieldProps>;
    Carbon?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LogisticsUpdateFormProps = React.PropsWithChildren<{
    overrides?: LogisticsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    logistics?: Logistics;
    onSubmit?: (fields: LogisticsUpdateFormInputValues) => LogisticsUpdateFormInputValues;
    onSuccess?: (fields: LogisticsUpdateFormInputValues) => void;
    onError?: (fields: LogisticsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LogisticsUpdateFormInputValues) => LogisticsUpdateFormInputValues;
    onValidate?: LogisticsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LogisticsUpdateForm(props: LogisticsUpdateFormProps): React.ReactElement;
