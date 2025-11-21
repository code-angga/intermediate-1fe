import Label from "../atoms/Label";
import Input from "../atoms/Input";

const InputField = ({ label, ...props }) => {
  return (
    <div className="mb-3">
      <Label>{label}</Label>
      <Input {...props} />
    </div>
  );
};

export default InputField;
