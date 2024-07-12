import React from 'react';

const Greeting = ({ name, message }) => {
  return (
    <div>
      <h1>welcome ,{name}</h1>
      <p>this is message ,{message}</p>
    </div>
  );
};

export default Greeting;
