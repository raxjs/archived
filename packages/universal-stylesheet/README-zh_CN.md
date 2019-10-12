# universal-stylesheet [![npm](https://img.shields.io/npm/v/universal-stylesheet.svg)](https://www.npmjs.com/package/universal-stylesheet)

## 支持
<img alt="browser" src="https://gw.alicdn.com/tfs/TB1uYFobGSs3KVjSZPiXXcsiVXa-200-200.svg" width="25px" height="25px" /> <img alt="weex" src="https://gw.alicdn.com/tfs/TB1jM0ebMaH3KVjSZFjXXcFWpXa-200-200.svg" width="25px" height="25px" /> <img alt="miniApp" src="https://gw.alicdn.com/tfs/TB1bBpmbRCw3KVjSZFuXXcAOpXa-200-200.svg" width="25px" height="25px" />

## 安装

```sh
npm install --save universal-stylesheet
```

## 使用

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

## 方法

### `create(styles)`
给定的对象创建样式引用

#### 入参
| 成员   | 类型     | 描述              | 默认值 |
| ------ | -------- | ----------------- | :----: |
| styles | `object` | Stylesheet object |   -    |

#### 返回值
| 成员   | 类型     | 描述              |
| ------ | -------- | ----------------- |
| result | `object` | Stylesheet object |

### `flatten(styles)`
将样式对象数组合并成一个聚合样式对象

#### 属性
| 成员   | 类型     | 描述              | 默认值 |
| ------ | -------- | ----------------- | :----: |
| styles | `array` | Stylesheet array |   -    |

### `hairlineWidth`
定义了当前运行设备平台上的最细的宽度。

### `absoluteFillObject`
绝对定位的覆盖
