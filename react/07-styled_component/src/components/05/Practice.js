import React from "react";
import Input from "./PracticeInput";

export function Practice(props) {
  return (
    <div>
      <h1>Size</h1>
      <Input size="small" />
      <Input size="medium" />
      <Input size="large" />
      <h1>Round</h1>
      <Input $inputBorder />
      <h1>Error</h1>
      <Input $inputColor />
    </div>
  );
}
