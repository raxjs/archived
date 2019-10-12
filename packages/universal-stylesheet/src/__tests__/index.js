import StyleSheet from '../';

describe('StyleSheet', () => {
  it('test StyleSheet', () => {
    expect(StyleSheet).toHaveProperty('absoluteFillObject');
    expect(StyleSheet).toHaveProperty('flatten');
    // expect(StyleSheet).toHaveProperty('hairlineWidth');
    expect(typeof StyleSheet.create).toBe('function');
  });
});
