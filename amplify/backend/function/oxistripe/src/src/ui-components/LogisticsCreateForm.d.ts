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
export declare type LogisticsCreateFormInputValues = {
    Barcode?: string;
    Location?: string;
    Distance?: string;
    Mode?: string;
    Carbon?: string;
};
export declare type LogisticsCreateFormValidationValues = {
    Barcode?: ValidationFunction<string>;
    Location?: ValidationFunction<string>;
    Distance?: ValidationFunction<string>;
    Mode?: ValidationFunction<string>;
    Carbon?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogisticsCreateFormOverridesProps = {
    LogisticsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Barcode?: PrimitiveOverrideProps<TextFieldProps>;
    Location?: PrimitiveOverrideProps<TextFieldProps>;
    Distance?: PrimitiveOverrideProps<TextFieldProps>;
    Mode?: PrimitiveOverrideProps<TextFieldProps>;
    Carbon?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LogisticsCreateFormProps = React.PropsWithChildren<{
    overrides?: LogisticsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LogisticsCreateFormInputValues) => LogisticsCreateFormInputValues;
    onSuccess?: (fields: LogisticsCreateFormInputValues) => void;
    onError?: (fields: LogisticsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LogisticsCreateFormInputValues) => LogisticsCreateFormInputValues;
    onValidate?: LogisticsCreateFormValidationValues;
} & React.CSSProperties>;
export default function LogisticsCreateForm(props: LogisticsCreateFormProps): React.ReactElement;
