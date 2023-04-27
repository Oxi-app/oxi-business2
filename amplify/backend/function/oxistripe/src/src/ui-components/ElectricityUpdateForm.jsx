/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Electricity } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ElectricityUpdateForm(props) {
  const {
    id: idProp,
    electricity: electricityModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Source: "",
    CO2perkWh: "",
  };
  const [Source, setSource] = React.useState(initialValues.Source);
  const [CO2perkWh, setCO2perkWh] = React.useState(initialValues.CO2perkWh);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = electricityRecord
      ? { ...initialValues, ...electricityRecord }
      : initialValues;
    setSource(cleanValues.Source);
    setCO2perkWh(cleanValues.CO2perkWh);
    setErrors({});
  };
  const [electricityRecord, setElectricityRecord] =
    React.useState(electricityModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Electricity, idProp)
        : electricityModelProp;
      setElectricityRecord(record);
    };
    queryData();
  }, [idProp, electricityModelProp]);
  React.useEffect(resetStateValues, [electricityRecord]);
  const validations = {
    Source: [],
    CO2perkWh: [],
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
          Source,
          CO2perkWh,
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
          await DataStore.save(
            Electricity.copyOf(electricityRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ElectricityUpdateForm")}
      {...rest}
    >
      <TextField
        label="Source"
        isRequired={false}
        isReadOnly={false}
        value={Source}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Source: value,
              CO2perkWh,
            };
            const result = onChange(modelFields);
            value = result?.Source ?? value;
          }
          if (errors.Source?.hasError) {
            runValidationTasks("Source", value);
          }
          setSource(value);
        }}
        onBlur={() => runValidationTasks("Source", Source)}
        errorMessage={errors.Source?.errorMessage}
        hasError={errors.Source?.hasError}
        {...getOverrideProps(overrides, "Source")}
      ></TextField>
      <TextField
        label="Co2perk wh"
        isRequired={false}
        isReadOnly={false}
        value={CO2perkWh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Source,
              CO2perkWh: value,
            };
            const result = onChange(modelFields);
            value = result?.CO2perkWh ?? value;
          }
          if (errors.CO2perkWh?.hasError) {
            runValidationTasks("CO2perkWh", value);
          }
          setCO2perkWh(value);
        }}
        onBlur={() => runValidationTasks("CO2perkWh", CO2perkWh)}
        errorMessage={errors.CO2perkWh?.errorMessage}
        hasError={errors.CO2perkWh?.hasError}
        {...getOverrideProps(overrides, "CO2perkWh")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || electricityModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || electricityModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
