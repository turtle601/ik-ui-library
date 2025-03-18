import React from 'react';

interface HelloProps {
  name: string;
}

const Hello = ({ name }: HelloProps) => {
  return <div>Hello World!</div>;
};

export default Hello;
