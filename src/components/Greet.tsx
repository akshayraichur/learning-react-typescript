type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn?: boolean;
};

const Greet: React.FC<GreetProps> = (props) => {
  const { messageCount = 0, isLoggedIn = true } = props; // assigning default values, since they are optional
  return (
    <div>
      <h2>
        {props.isLoggedIn ? ` Welcome ${props.name}! You have ${props.messageCount} unread messages` : `Hello guest`}
      </h2>
    </div>
  );
};

export default Greet;
