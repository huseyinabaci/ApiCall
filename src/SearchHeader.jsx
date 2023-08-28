import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValueInput] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    debugger;
    search(valueInput);
  };

  const handleChange = (event) => {
    setValueInput(event.target.value);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input value={valueInput} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
