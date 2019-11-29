# universal-stylesheet [![npm](https://img.shields.io/npm/v/universal-stylesheet.svg)](https://www.npmjs.com/package/universal-stylesheet)

## Supported
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />

## Installation

### To install universal-stylesheet from NPM, run:

```sh
npm install --save universal-stylesheet
```

## Usage

```js
import StyleSheet from 'universal-stylesheet';

const styles = StyleSheet.create({
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

<View style={styles.container}>
  <View style={Object.assign(styles.row, styles.header)}>
    <Text>Hello world</Text>
  </View>
</View>

// Use flatten
const styles = StyleSheet.create({
  container: {
    width: 750,
    height: 500,
    backgroundColor: 'red'
  },
  header: {
    width: 750,
    height: 30,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#ddd'
  },
  row: {
    flexDirection: 'row'
  },
  listA: {
    width: 750,
    flex: 1,
    backgroundColor: 'red'
  },
  listB: {
    backgroundColor: 'green'
  }
});

StyleSheet.flatten([styles.listA, styles.listB]) // => { width: 750, flex: 1, backgroundColor: 'green' }
```

## Methods

### `create(styles)`
The given object creation style reference

#### Arguments
| Property | Type     | Description       | Default |
| -------- | -------- | ----------------- | :-----: |
| styles   | `object` | Stylesheet object |    -    |

#### Returns
| Property | Type     | Description       |
| -------- | -------- | ----------------- |
| result   | `object` | Stylesheet object |

### `flatten(style)`
Merges an array of style objects into an aggregate style object

#### Arguments
| Property | Type    | Description      | Default |
| -------- | ------- | ---------------- | :-----: |
| styles   | `array` | Stylesheet array |    -    |

## Property

### `hairlineWidth`
Defines the thinnest width on the current running device platform.

### `absoluteFillObject`
Absolute location coverage
