import React from "react";
// why still import React when it's not being explicitly used in out new jsx code?
// because we MUST have React in scope whereever we use jsx
// ok, but why must we?
// because jsx is translating our markup into React.createElement() calls

export default function Pet({ name, animal, breed }) {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, name),
  //     React.createElement("h2", {}, animal),
  //     React.createElement("h2", {}, breed)
  //   ]);

  // we used jsx to transate this ▲ to ▼

  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );

  // jsx lets us skip the step of writing javascript that React can use that mimics the markup we want
  // instead with jsx we can just write the markup we want and it will translate it into JS that React can use
  // this: <h1>{name}</h1> is translated into this: React.createElement("h1", {}, name)

  // react requires you to only return one thing (often wrapping multiple things in a react fragment or a div)
  // because JS can't return multiple things

  // {} -- tells jsx that the contents of the curly braces is a js expression
}
