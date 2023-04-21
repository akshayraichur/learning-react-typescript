// interface PersonProps {
//   name: {
//     first: string;
//     last: string;
//   };
// }
// You can also use interface in place of types whenever appropriate

import { PersonProps } from "./Person.types";

const Person: React.FC<PersonProps> = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};

export default Person;
