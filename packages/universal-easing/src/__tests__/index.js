import Easing from '../index';

describe('Easing', () => {
  it('test Easing method `poly` and `poly`', () => {
    expect(Easing.in(Easing.poly(4))(2, 4)).toEqual(16);
  });
});