import React from "react";

const useForm = () => {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState('Preencha um valor.');
  
    function validate(value: string) {
      if (value.length === 0) {
        setError("Preencha um valor.");
        return false;
      } else {
        setError('');
        return true;
      }
    }
  
    // function onChange({ target }) {
    //   if (error) validate(target.value);
    //   setValue(target.value);
    // }
  
    return {
      value,
      setValue,
    //   onChange,
      error,
      validate: () => validate(value),
    };
  };
  
  export default useForm;