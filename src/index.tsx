import React from 'react';
import ReactDOM from 'react-dom';

// doesn't work
import { FooProvider } from '@monorepo/aliased-dependency-package/FooProvider';
import { useFoo } from '@monorepo/aliased-dependency-package/useFoo';

// works
// import { FooProvider } from '@monorepo/dependency-package/src/FooProvider';
// import { useFoo } from '@monorepo/dependency-package/src/useFoo';

// works
// import { FooProvider } from './linked-dependency-package/FooProvider';
// import { useFoo } from './linked-dependency-package/useFoo';

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

ReactDOM.render(<App />, document.getElementById('root'));