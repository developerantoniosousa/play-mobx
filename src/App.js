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

@observer
class Contador extends React.Component {
  increment = () => {
    this.props.ContadorState.increment();
  };

  decrement = () => {
    this.props.ContadorState.decrement();
  };

  render() {
    return (
      <>
        <Text>{this.props.ContadorState.count}</Text>
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
      <Contador ContadorState={ContadorState} />
    </>
  );
}
