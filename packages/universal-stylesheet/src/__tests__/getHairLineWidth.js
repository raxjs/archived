describe('getHairlineWidth', () => {
  jest.mock('universal-env', () => {
    return {
      isWeb: true
    };
  });
  const getHairlineWidth = require('../getHairlineWidth').default;
  it('should return 1px in web', () => {
    expect(getHairlineWidth()).toBe('1px');
  });
});