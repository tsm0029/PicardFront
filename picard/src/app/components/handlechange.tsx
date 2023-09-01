import { ChangeEvent, useState } from "react";

function Example() {
    const [inputText, setInputText] = useState("");
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      // 👇 Store the input value to local state
      setInputText(e.target.value);
    };}