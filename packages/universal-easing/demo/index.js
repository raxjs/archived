
/* eslint-disable import/no-extraneous-dependencies */
import { createElement, render } from 'rax';
import * as DriverDOM from 'driver-dom';
import * as WeexDriver from 'driver-weex';
import { isWeb } from 'universal-env';
import Easing from '../src';


const App = () => {
  console.log(Easing.in(Easing.poly(4))(2, 4));
  return (
    <div>
      <text>{Easing.in(Easing.poly(4))(2, 4)}</text>
    </div>
  );
};

render(<App />, document.body, { driver: isWeb ? DriverDOM : WeexDriver });