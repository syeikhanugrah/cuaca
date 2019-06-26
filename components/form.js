import React, { useState } from 'react';

const Form = ({ handleSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={e => handleSubmit(e, input)}>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            name="input"
            type="text"
            className="input"
            placeholder="Kota"
            value={input}
            onChange={e => handleChange(e)}
            required />
        </div>
        <div className="control">
          <button type="submit" className="button is-primary">Cari</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
