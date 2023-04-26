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
export declare type PointsCreateFormInputValues = {
    Points?: string;
    owner?: string;
};
export declare type PointsCreateFormValidationValues = {
    Points?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PointsCreateFormOverridesProps = {
    PointsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Points?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PointsCreateFormProps = React.PropsWithChildren<{
    overrides?: PointsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PointsCreateFormInputValues) => PointsCreateFormInputValues;
    onSuccess?: (fields: PointsCreateFormInputValues) => void;
    onError?: (fields: PointsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PointsCreateFormInputValues) => PointsCreateFormInputValues;
    onValidate?: PointsCreateFormValidationValues;
} & React.CSSProperties>;
export default function PointsCreateForm(props: PointsCreateFormProps): React.ReactElement;
