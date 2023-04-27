/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Output } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function OutputCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    CompanyName: "",
    ProductName: "",
    OutputQuantity: "",
    Sources: "",
    CarbonPerOutput: "",
    ProductBarcode: "",
  };
  const [CompanyName, setCompanyName] = React.useState(
    initialValues.CompanyName
  );
  const [ProductName, setProductName] = React.useState(
    initialValues.ProductName
  );
  const [OutputQuantity, setOutputQuantity] = React.useState(
    initialValues.OutputQuantity
  );
  const [Sources, setSources] = React.useState(initialValues.Sources);
  const [CarbonPerOutput, setCarbonPerOutput] = React.useState(
    initialValues.CarbonPerOutput
  );
  const [ProductBarcode, setProductBarcode] = React.useState(
    initialValues.ProductBarcode
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCompanyName(initialValues.CompanyName);
    setProductName(initialValues.ProductName);
    setOutputQuantity(initialValues.OutputQuantity);
    setSources(initialValues.Sources);
    setCarbonPerOutput(initialValues.CarbonPerOutput);
    setProductBarcode(initialValues.ProductBarcode);
    setErrors({});
  };
  const validations = {
    CompanyName: [],
    ProductName: [],
    OutputQuantity: [],
    Sources: [],
    CarbonPerOutput: [],
    ProductBarcode: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          CompanyName,
          ProductName,
          OutputQuantity,
          Sources,
          CarbonPerOutput,
          ProductBarcode,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Output(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "OutputCreateForm")}
      {...rest}
    >
      <TextField
        label="Company name"
        isRequired={false}
        isReadOnly={false}
        value={CompanyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompanyName: value,
              ProductName,
              OutputQuantity,
              Sources,
              CarbonPerOutput,
              ProductBarcode,
            };
            const result = onChange(modelFields);
            value = result?.CompanyName ?? value;
          }
          if (errors.CompanyName?.hasError) {
            runValidationTasks("CompanyName", value);
          }
          setCompanyName(value);
        }}
        onBlur={() => runValidationTasks("CompanyName", CompanyName)}
        errorMessage={errors.CompanyName?.errorMessage}
        hasError={errors.CompanyName?.hasError}
        {...getOverrideProps(overrides, "CompanyName")}
      ></TextField>
      <TextField
        label="Product name"
        isRequired={false}
        isReadOnly={false}
        value={ProductName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompanyName,
              ProductName: value,
              OutputQuantity,
              Sources,
              CarbonPerOutput,
              ProductBarcode,
            };
            const result = onChange(modelFields);
            value = result?.ProductName ?? value;
          }
          if (errors.ProductName?.hasError) {
            runValidationTasks("ProductName", value);
          }
          setProductName(value);
        }}
        onBlur={() => runValidationTasks("ProductName", ProductName)}
        errorMessage={errors.ProductName?.errorMessage}
        hasError={errors.ProductName?.hasError}
        {...getOverrideProps(overrides, "ProductName")}
      ></TextField>
      <TextField
        label="Output quantity"
        isRequired={false}
        isReadOnly={false}
        value={OutputQuantity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompanyName,
              ProductName,
              OutputQuantity: value,
              Sources,
              CarbonPerOutput,
              ProductBarcode,
            };
            const result = onChange(modelFields);
            value = result?.OutputQuantity ?? value;
          }
          if (errors.OutputQuantity?.hasError) {
            runValidationTasks("OutputQuantity", value);
          }
          setOutputQuantity(value);
        }}
        onBlur={() => runValidationTasks("OutputQuantity", OutputQuantity)}
        errorMessage={errors.OutputQuantity?.errorMessage}
        hasError={errors.OutputQuantity?.hasError}
        {...getOverrideProps(overrides, "OutputQuantity")}
      ></TextField>
      <TextField
        label="Sources"
        isRequired={false}
        isReadOnly={false}
        value={Sources}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompanyName,
              ProductName,
              OutputQuantity,
              Sources: value,
              CarbonPerOutput,
              ProductBarcode,
            };
            const result = onChange(modelFields);
            value = result?.Sources ?? value;
          }
          if (errors.Sources?.hasError) {
            runValidationTasks("Sources", value);
          }
          setSources(value);
        }}
        onBlur={() => runValidationTasks("Sources", Sources)}
        errorMessage={errors.Sources?.errorMessage}
        hasError={errors.Sources?.hasError}
        {...getOverrideProps(overrides, "Sources")}
      ></TextField>
      <TextField
        label="Carbon per output"
        isRequired={false}
        isReadOnly={false}
        value={CarbonPerOutput}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompanyName,
              ProductName,
              OutputQuantity,
              Sources,
              CarbonPerOutput: value,
              ProductBarcode,
            };
            const result = onChange(modelFields);
            value = result?.CarbonPerOutput ?? value;
          }
          if (errors.CarbonPerOutput?.hasError) {
            runValidationTasks("CarbonPerOutput", value);
          }
          setCarbonPerOutput(value);
        }}
        onBlur={() => runValidationTasks("CarbonPerOutput", CarbonPerOutput)}
        errorMessage={errors.CarbonPerOutput?.errorMessage}
        hasError={errors.CarbonPerOutput?.hasError}
        {...getOverrideProps(overrides, "CarbonPerOutput")}
      ></TextField>
      <TextField
        label="Product barcode"
        isRequired={false}
        isReadOnly={false}
        value={ProductBarcode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CompanyName,
              ProductName,
              OutputQuantity,
              Sources,
              CarbonPerOutput,
              ProductBarcode: value,
            };
            const result = onChange(modelFields);
            value = result?.ProductBarcode ?? value;
          }
          if (errors.ProductBarcode?.hasError) {
            runValidationTasks("ProductBarcode", value);
          }
          setProductBarcode(value);
        }}
        onBlur={() => runValidationTasks("ProductBarcode", ProductBarcode)}
        errorMessage={errors.ProductBarcode?.errorMessage}
        hasError={errors.ProductBarcode?.hasError}
        {...getOverrideProps(overrides, "ProductBarcode")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
