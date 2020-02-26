import React from 'react';
import { Text, Button } from 'react-native';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Contador extends React.Component {
  @observable count = 0;

  increment = () => {
    this.count++;
  };

  decrement = () => {
    this.count--;
  };

  render() {
    return (
      <>
        <Text>{this.count}</Text>
        <Button title="-" onPress={() => this.decrement()} />
        <Button title="+" onPress={() => this.increment()} />
      </>
    );
  }
}

export default function App() {
  return (
    <>
      <Text>Hello World</Text>
      <Contador />
    </>
  );
}
