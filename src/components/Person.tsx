interface PersonProps {
  name: {
    first: string;
    last: string;
  };
}

const Person: React.FC<PersonProps> = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};

export default Person;
