// extracting types
export type Name = {
  first: string;
  last: string;
};

export type PersonProps = {
  name: Name;
};

// previous version
// export type PersonProps = {
//   name: {
//     first: string;
//     last: string;
//   };
// };
