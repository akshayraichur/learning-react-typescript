type OscarPropTypes = {
  children: React.ReactNode;
};

const Oscar = (props: OscarPropTypes) => {
  return <div>{props.children}</div>;
};

export default Oscar;
