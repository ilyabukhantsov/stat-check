import { useState } from "react";
import './Form.css';

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
      className="my-form"
    />
  );
}

export default Form;