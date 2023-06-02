import { ChangeEvent } from "react";
import "./Checkbox.css";

type Props = {
  onChange: (checked: boolean) => void;
  checked: boolean;
};

const Checkbox = ({ onChange, checked }: Props) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onChange(isChecked);
  };

  return (
    <>
      <input
        className={"custom-checkbox"}
        onChange={handleCheckboxChange}
        type="checkbox"
        checked={checked}
      />
    </>
  );
};

export default Checkbox;
