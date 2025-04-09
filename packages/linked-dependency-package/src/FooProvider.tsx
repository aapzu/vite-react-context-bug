import React, {
  createContext,
  FC,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";

export const FooContext = createContext<{ foo: string | undefined; setFoo: (foo: string) => void } | undefined>(undefined);

export const FooProvider = ({ children }: PropsWithChildren) => {
  const [foo, setFoo] = useState<string | undefined>(undefined);

  useEffect(() => {
    setFoo("bar");
  }, []);

  return (
    <FooContext.Provider value={{ foo, setFoo }}>
      {foo ? children : null}
    </FooContext.Provider>
  );
};
