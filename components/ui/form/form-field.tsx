// DONE REVIEWING: GITHUB COMMIT 1️⃣

import {createContext, useMemo} from "react"
import {Controller, ControllerProps, FieldPath, FieldValues} from "react-hook-form"

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {name: TName}

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({...props}: ControllerProps<TFieldValues, TName>) {
  const value = useMemo(() => ({name: props.name}), [props.name])
  return (
    <FormFieldContext.Provider value={value}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

export default FormField
