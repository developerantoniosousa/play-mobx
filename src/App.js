import React from 'react';
import { Text, Button } from 'react-native';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

const ContadorState = observable({
  count: 0,
});

ContadorState.increment = function () {
  this.count++;
};

ContadorState.decrement = function () {
  this.count++;
};

const Contador = observer(({ ContadorState }) => {
  const increment = () => {
    ContadorState.increment();
  };

  const decrement = () => {
    ContadorState.decrement();
  };

  return (
    <>
      <Text>{ContadorState.count}</Text>
      <Button title="-" onPress={decrement} />
      <Button title="+" onPress={increment} />
    </>
  );
});

export default function App() {
  return (
    <>
      <Text>Hello World</Text>
      <Contador ContadorState={ContadorState} />
    </>
  );
}
