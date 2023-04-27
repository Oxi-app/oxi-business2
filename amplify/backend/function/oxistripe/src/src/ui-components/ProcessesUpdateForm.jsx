/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Processes } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProcessesUpdateForm(props) {
  const {
    id: idProp,
    processes: processesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Barcode: "",
    Electricity: "",
    Renewable: "",
    Source: "",
    Fuel: "",
    Type: "",
    Carbon: "",
    Name: "",
  };
  const [Barcode, setBarcode] = React.useState(initialValues.Barcode);
  const [Electricity, setElectricity] = React.useState(
    initialValues.Electricity
  );
  const [Renewable, setRenewable] = React.useState(initialValues.Renewable);
  const [Source, setSource] = React.useState(initialValues.Source);
  const [Fuel, setFuel] = React.useState(initialValues.Fuel);
  const [Type, setType] = React.useState(initialValues.Type);
  const [Carbon, setCarbon] = React.useState(initialValues.Carbon);
  const [Name, setName] = React.useState(initialValues.Name);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = processesRecord
      ? { ...initialValues, ...processesRecord }
      : initialValues;
    setBarcode(cleanValues.Barcode);
    setElectricity(cleanValues.Electricity);
    setRenewable(cleanValues.Renewable);
    setSource(cleanValues.Source);
    setFuel(cleanValues.Fuel);
    setType(cleanValues.Type);
    setCarbon(cleanValues.Carbon);
    setName(cleanValues.Name);
    setErrors({});
  };
  const [processesRecord, setProcessesRecord] =
    React.useState(processesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Processes, idProp)
        : processesModelProp;
      setProcessesRecord(record);
    };
    queryData();
  }, [idProp, processesModelProp]);
  React.useEffect(resetStateValues, [processesRecord]);
  const validations = {
    Barcode: [],
    Electricity: [],
    Renewable: [],
    Source: [],
    Fuel: [],
    Type: [],
    Carbon: [],
    Name: [],
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
          Barcode,
          Electricity,
          Renewable,
          Source,
          Fuel,
          Type,
          Carbon,
          Name,
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
            Processes.copyOf(processesRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ProcessesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Barcode"
        isRequired={false}
        isReadOnly={false}
        value={Barcode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode: value,
              Electricity,
              Renewable,
              Source,
              Fuel,
              Type,
              Carbon,
              Name,
            };
            const result = onChange(modelFields);
            value = result?.Barcode ?? value;
          }
          if (errors.Barcode?.hasError) {
            runValidationTasks("Barcode", value);
          }
          setBarcode(value);
        }}
        onBlur={() => runValidationTasks("Barcode", Barcode)}
        errorMessage={errors.Barcode?.errorMessage}
        hasError={errors.Barcode?.hasError}
        {...getOverrideProps(overrides, "Barcode")}
      ></TextField>
      <TextField
        label="Electricity"
        isRequired={false}
        isReadOnly={false}
        value={Electricity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Electricity: value,
              Renewable,
              Source,
              Fuel,
              Type,
              Carbon,
              Name,
            };
            const result = onChange(modelFields);
            value = result?.Electricity ?? value;
          }
          if (errors.Electricity?.hasError) {
            runValidationTasks("Electricity", value);
          }
          setElectricity(value);
        }}
        onBlur={() => runValidationTasks("Electricity", Electricity)}
        errorMessage={errors.Electricity?.errorMessage}
        hasError={errors.Electricity?.hasError}
        {...getOverrideProps(overrides, "Electricity")}
      ></TextField>
      <TextField
        label="Renewable"
        isRequired={false}
        isReadOnly={false}
        value={Renewable}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Electricity,
              Renewable: value,
              Source,
              Fuel,
              Type,
              Carbon,
              Name,
            };
            const result = onChange(modelFields);
            value = result?.Renewable ?? value;
          }
          if (errors.Renewable?.hasError) {
            runValidationTasks("Renewable", value);
          }
          setRenewable(value);
        }}
        onBlur={() => runValidationTasks("Renewable", Renewable)}
        errorMessage={errors.Renewable?.errorMessage}
        hasError={errors.Renewable?.hasError}
        {...getOverrideProps(overrides, "Renewable")}
      ></TextField>
      <TextField
        label="Source"
        isRequired={false}
        isReadOnly={false}
        value={Source}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Electricity,
              Renewable,
              Source: value,
              Fuel,
              Type,
              Carbon,
              Name,
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
        label="Fuel"
        isRequired={false}
        isReadOnly={false}
        value={Fuel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Electricity,
              Renewable,
              Source,
              Fuel: value,
              Type,
              Carbon,
              Name,
            };
            const result = onChange(modelFields);
            value = result?.Fuel ?? value;
          }
          if (errors.Fuel?.hasError) {
            runValidationTasks("Fuel", value);
          }
          setFuel(value);
        }}
        onBlur={() => runValidationTasks("Fuel", Fuel)}
        errorMessage={errors.Fuel?.errorMessage}
        hasError={errors.Fuel?.hasError}
        {...getOverrideProps(overrides, "Fuel")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={Type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Electricity,
              Renewable,
              Source,
              Fuel,
              Type: value,
              Carbon,
              Name,
            };
            const result = onChange(modelFields);
            value = result?.Type ?? value;
          }
          if (errors.Type?.hasError) {
            runValidationTasks("Type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("Type", Type)}
        errorMessage={errors.Type?.errorMessage}
        hasError={errors.Type?.hasError}
        {...getOverrideProps(overrides, "Type")}
      ></TextField>
      <TextField
        label="Carbon"
        isRequired={false}
        isReadOnly={false}
        value={Carbon}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Electricity,
              Renewable,
              Source,
              Fuel,
              Type,
              Carbon: value,
              Name,
            };
            const result = onChange(modelFields);
            value = result?.Carbon ?? value;
          }
          if (errors.Carbon?.hasError) {
            runValidationTasks("Carbon", value);
          }
          setCarbon(value);
        }}
        onBlur={() => runValidationTasks("Carbon", Carbon)}
        errorMessage={errors.Carbon?.errorMessage}
        hasError={errors.Carbon?.hasError}
        {...getOverrideProps(overrides, "Carbon")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Barcode,
              Electricity,
              Renewable,
              Source,
              Fuel,
              Type,
              Carbon,
              Name: value,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
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
          isDisabled={!(idProp || processesModelProp)}
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
              !(idProp || processesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
