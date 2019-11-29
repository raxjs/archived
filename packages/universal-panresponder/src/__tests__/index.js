import debug from 'debug';
import PanResponder from '../';

const log = debug('PanResponder');

jest.mock('universal-env', () => {
  return {
    isWeex: true
  };
});

function mockEvent(options) {
  return Object.assign({
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    radiusX: 0,
    radiusY: 0,
    rotationAngle: 0,
    screenX: 0,
    screenY: 0,
    force: false,
    target: null,
    timestamp: new Date().getTime()
  }, options);
}

describe('PanResponder', () => {
  it('test have create method', () => {
    expect(typeof PanResponder.create).toEqual('function');
  });
});

describe('Create method', () => {
  const panResponder = PanResponder.create({
    onPanResponderGrant(e, status) {
      const copyStatus = Object.assign({}, status);
      log('1.onPanResponderGrant', e, '/', copyStatus);
      it('onPanResponderGrant', () => {
        expect(copyStatus.moveX).toEqual(0);
        expect(copyStatus.moveY).toEqual(0);
        expect(copyStatus.x0).toEqual(0);
        expect(copyStatus.y0).toEqual(0);
        expect(copyStatus.dx).toEqual(0);
        expect(copyStatus.dy).toEqual(0);
        expect(copyStatus.vx).toEqual(0);
        expect(copyStatus.vy).toEqual(0);
      });
    },
    onStartShouldSetPanResponder(e, status) {
      const copyStatus = Object.assign({}, status);
      log('2.onStartShouldSetPanResponder', e, '/', copyStatus);
      it('onStartShouldSetPanResponder', () => {
        expect(copyStatus.numberActiveTouches).toEqual(1);
      });
      return true;
    },
    onPanResponderStart(e, status) {
      const copyStatus = Object.assign({}, status);
      log('3.onPanResponderStart', e, '/', copyStatus);
      it('onPanResponderStart', () => {
        expect(copyStatus.numberActiveTouches).toEqual(1);
      });
    },
    onMoveShouldSetPanResponder(e, status) {
      const copyStatus = Object.assign({}, status);
      log('4.onMoveShouldSetPanResponder', e, '/', copyStatus);
      it('onMoveShouldSetPanResponder', () => {
        expect(copyStatus.moveX).toBeGreaterThanOrEqual(15);
        expect(copyStatus.moveY).toBeGreaterThanOrEqual(15);
      });
      return true;
    },
    onPanResponderMove(e, status) {
      const copyStatus = Object.assign({}, status);
      log('5.onPanResponderMove', e, '/', copyStatus);
      it('onPanResponderMove', () => {
        expect(copyStatus.moveX).toBeGreaterThanOrEqual(15);
        expect(copyStatus.moveY).toBeGreaterThanOrEqual(15);
      });
    },
    onPanResponderEnd(e, status) {
      const copyStatus = Object.assign({}, status);
      log('6.onPanResponderEnd', e, '/', copyStatus);
      it('onPanResponderEnd', () => {
        expect(copyStatus.moveX).toEqual(115);
        expect(copyStatus.moveY).toEqual(115);
      });
    },
    onPanResponderRelease(e, status) {
      const copyStatus = Object.assign({}, status);
      log('7.onPanResponderRelease', e, '/', copyStatus);
      it('onPanResponderRelease', () => {
        expect(copyStatus.moveX).toEqual(115);
        expect(copyStatus.moveY).toEqual(115);
      });
    },

    onPanResponderReject(e, status) {
      // PanResponder start fail will trigger
    },
    onStartShouldSetPanResponderCapture(e, status) {
      // TODO not trigger
    },
    onMoveShouldSetPanResponderCapture(e, status) {
      // TODO not trigger
    },
    onPanResponderTerminate(e, status) {
      // TODO not trigger
    },
    onPanResponderTerminationRequest(e, status) {
      // TODO not trigger
    },
    onShouldBlockNativeResponder(e, status) {
      // TODO no e or status
    }
  });

  panResponder.panHandlers.onTouchStart(mockEvent());
  panResponder.panHandlers.onTouchMove(mockEvent({
    clientX: 15,
    clientY: 15,
    pageX: 15,
    pageY: 15,
    radiusX: 15,
    radiusY: 15,
    rotationAngle: 15,
    screenX: 15,
    screenY: 15
  }));
  panResponder.panHandlers.onTouchMove(mockEvent({
    clientX: 115,
    clientY: 115,
    pageX: 115,
    pageY: 115,
    radiusX: 115,
    radiusY: 115,
    rotationAngle: 115,
    screenX: 115,
    screenY: 115
  }));
  panResponder.panHandlers.onTouchEnd(mockEvent());
});