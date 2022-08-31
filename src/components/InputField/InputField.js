import { InputWrapper, NumberInput, Input, Label } from "./InputField.styled";

export default function InputField({
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
