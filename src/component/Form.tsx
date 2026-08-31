import { useState } from "react";

function Form() {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setText(value);

    console.log("User is writing:", value);
  };

  return (
    <input
      value={text}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
}

export default Form;