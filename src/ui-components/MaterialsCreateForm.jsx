/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Materials } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MaterialsCreateForm(props) {
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
    Material: "",
    CO2perkg: "",
  };
  const [Material, setMaterial] = React.useState(initialValues.Material);
  const [CO2perkg, setCO2perkg] = React.useState(initialValues.CO2perkg);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setMaterial(initialValues.Material);
    setCO2perkg(initialValues.CO2perkg);
    setErrors({});
  };
  const validations = {
    Material: [],
    CO2perkg: [],
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
          Material,
          CO2perkg,
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
          await DataStore.save(new Materials(modelFields));
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
      {...getOverrideProps(overrides, "MaterialsCreateForm")}
      {...rest}
    >
      <TextField
        label="Material"
        isRequired={false}
        isReadOnly={false}
        value={Material}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Material: value,
              CO2perkg,
            };
            const result = onChange(modelFields);
            value = result?.Material ?? value;
          }
          if (errors.Material?.hasError) {
            runValidationTasks("Material", value);
          }
          setMaterial(value);
        }}
        onBlur={() => runValidationTasks("Material", Material)}
        errorMessage={errors.Material?.errorMessage}
        hasError={errors.Material?.hasError}
        {...getOverrideProps(overrides, "Material")}
      ></TextField>
      <TextField
        label="Co2perkg"
        isRequired={false}
        isReadOnly={false}
        value={CO2perkg}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Material,
              CO2perkg: value,
            };
            const result = onChange(modelFields);
            value = result?.CO2perkg ?? value;
          }
          if (errors.CO2perkg?.hasError) {
            runValidationTasks("CO2perkg", value);
          }
          setCO2perkg(value);
        }}
        onBlur={() => runValidationTasks("CO2perkg", CO2perkg)}
        errorMessage={errors.CO2perkg?.errorMessage}
        hasError={errors.CO2perkg?.hasError}
        {...getOverrideProps(overrides, "CO2perkg")}
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
