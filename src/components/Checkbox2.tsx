import React from "react";

type Props = { checked: boolean };

const Checkbox2 = ({ checked }: Props) => {
  return <input type="checkbox" checked={checked} />;
};

export default Checkbox2;
