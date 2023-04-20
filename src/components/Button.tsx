type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return <button onClick={(event) => props.handleClick(event, 1)}>Click here</button>;
};

export default Button;