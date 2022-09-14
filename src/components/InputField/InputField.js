import {
  InputWrapper,
  FieldWrapper,
  NumberInput,
  Input,
  Label,
  Select,
  Option,
} from "./InputField.styled";

export function InputField({
  label,
  type,
  name,
  placeholder,
  children,
  ...props
}) {
  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      {type === "number" ? (
        <NumberInput name={name} type={type} {...props}>
          {children}
        </NumberInput>
      ) : (
        <Input name={name} type={type} {...props} placeholder={placeholder}>
          {children}
        </Input>
      )}
    </InputWrapper>
  );
}

export function SelectField({ label, name, options, ...props }) {
  return (
    <FieldWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Select name={name} {...props}>
        <Option value="0">Select option</Option>
        {options.map((option) => (
          <Option key={`cover-${option.id}`} value={option.id}>
            {option.name}
          </Option>
        ))}
      </Select>
    </FieldWrapper>
  );
}
