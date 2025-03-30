import React, { Component, PropsWithChildren } from "react";
import { createRoot } from "react-dom/client";

// doesn't work
import { FooProvider, useFoo } from "linked-dependency-package-alias";

// works
// import { FooProvider, useFoo } from "linked-dependency-package";

// works
// import { FooProvider, useFoo } from "../../linked-dependency-package";

const Foo = () => {
  const { foo } = useFoo();
  return <div>{foo}</div>;
};

const App = () => {
  return (
    <FooProvider>
      <Foo />
    </FooProvider>
  );
};

const domNode = document.getElementById("root");
const root = createRoot(domNode!);

root.render(<App />);
