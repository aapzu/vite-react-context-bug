import React, { Component, PropsWithChildren } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

// doesn't work
import { FooProvider as FooProviderAlias, useFoo as useFooAlias } from "linked-dependency-package-alias";

// works
import { FooProvider as FooProviderLinked, useFoo as useFooLinked } from "linked-dependency-package";

// works
import { FooContext as FooContextLocal, FooProvider as FooProviderLocal, useFoo as useFooLocal } from "../../linked-dependency-package";

const Consumer = ({ hook }: { hook: typeof useFooLocal }) => {
  const { foo } = hook();
  return <div>{foo}</div>;
};

const Example = ({ title, Provider, hook }: { title: string; Provider: typeof FooProviderLocal; hook: typeof useFooLocal }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ErrorBoundary fallbackRender={({ error }) => <strong style={{ color: "red" }}>{error.message}</strong>}>
        <Provider>
          <Consumer hook={hook} />
        </Provider>
      </ErrorBoundary>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Example title="ExampleAlias" Provider={FooProviderAlias} hook={useFooAlias} />
      <Example title="ExampleLinked" Provider={FooProviderLinked} hook={useFooLinked} />
      <Example title="ExampleLocal" Provider={FooProviderLocal} hook={useFooLocal} />
    </div>
  );
};

const domNode = document.getElementById("root");
const root = createRoot(domNode!);

root.render(<App />);
