type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// const Input = (props: InputProps) => { // without destructuring
const Input = ({ value, handleChange }: InputProps) => {
  // with destructuring
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    handleChange(e);
  };
  return <input type="text" value={value} onChange={handleInputChange} />;
};

export default Input;
