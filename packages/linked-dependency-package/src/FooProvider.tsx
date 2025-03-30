import React, {
  createContext,
  FC,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";

export const FooContext = createContext(undefined);

export const FooProvider = ({ children }: PropsWithChildren) => {
  const [foo, setFoo] = useState(undefined);

  useEffect(() => {
    setFoo("bar");
  }, []);

  return (
    <FooContext.Provider value={{ foo, setFoo }}>
      {foo ? children : null}
    </FooContext.Provider>
  );
};
