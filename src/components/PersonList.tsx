import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

const PersonList: React.FC<PersonListProps> = (props) => {
  return (
    <div>
      {props.names.map((name) => (
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
