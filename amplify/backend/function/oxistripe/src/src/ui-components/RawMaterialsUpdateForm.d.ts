/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RawMaterials } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RawMaterialsUpdateFormInputValues = {
    Barcode?: string;
    Material?: string;
    Mass?: string;
    Carbon?: string;
};
export declare type RawMaterialsUpdateFormValidationValues = {
    Barcode?: ValidationFunction<string>;
    Material?: ValidationFunction<string>;
    Mass?: ValidationFunction<string>;
    Carbon?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RawMaterialsUpdateFormOverridesProps = {
    RawMaterialsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Barcode?: PrimitiveOverrideProps<TextFieldProps>;
    Material?: PrimitiveOverrideProps<TextFieldProps>;
    Mass?: PrimitiveOverrideProps<TextFieldProps>;
    Carbon?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RawMaterialsUpdateFormProps = React.PropsWithChildren<{
    overrides?: RawMaterialsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rawMaterials?: RawMaterials;
    onSubmit?: (fields: RawMaterialsUpdateFormInputValues) => RawMaterialsUpdateFormInputValues;
    onSuccess?: (fields: RawMaterialsUpdateFormInputValues) => void;
    onError?: (fields: RawMaterialsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RawMaterialsUpdateFormInputValues) => RawMaterialsUpdateFormInputValues;
    onValidate?: RawMaterialsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RawMaterialsUpdateForm(props: RawMaterialsUpdateFormProps): React.ReactElement;
