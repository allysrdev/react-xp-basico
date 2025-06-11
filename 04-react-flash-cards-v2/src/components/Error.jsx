import React from 'react';

function Error({ children: errorMessage }) {
  return <div className="bg-red-200 text-red-800 p-3">{errorMessage}</div>;
}

export default Error;
