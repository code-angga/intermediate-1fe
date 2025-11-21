import { useState } from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import IconButton from "../atoms/IconButton";

const PasswordField = ({ label, ...props }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-3">
      <Label>{label}</Label>

      <div className="relative">
        <Input type={show ? "text" : "password"} {...props} />

        <IconButton type="button" onClick={() => setShow(!show)}>
          👁️
        </IconButton>
      </div>
    </div>
  );
};

export default PasswordField;
