import { FieldWrapper, Select, Option, Label } from "./SelectField.styled";
export default function SelectField({ label, name, options, ...props }) {
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
