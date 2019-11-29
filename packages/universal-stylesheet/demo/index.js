
/* eslint-disable import/no-extraneous-dependencies */
import { createElement, render } from 'rax';
import * as DriverDOM from 'driver-dom';
import * as WeexDriver from 'driver-weex';
import { isWeb } from 'universal-env';
import Text from 'rax-text';
import View from 'rax-view';
import StyleSheet from '../src/index';

const App = () => {
  const styles: any = StyleSheet.create({
    container: {
      width: 750,
      height: 500,
      backgroundColor: 'red'
    },
    header: {
      width: 750,
      height: 100,
      borderRadius: 10,
      borderWidth: 10,
      borderColor: '#ddd',
      borderStyle: 'solid',
      backgroundColor: 'blue'
    },
    row: {
      flexDirection: 'row'
    }
  });

  return (
    <View style={styles.container}>
      <View style={Object.assign(styles.row, styles.header)}>
        <Text>Hello world</Text>
      </View>
    </View>
  );
};

render(<App />, document.body, { driver: isWeb ? DriverDOM : WeexDriver });