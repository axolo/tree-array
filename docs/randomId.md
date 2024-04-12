# 随机字符串

```js
randomId(prefix = '')
```

生成一个由小写字母和数字组成的自定义前缀（`prefix`）的随机字符串，如：`i_fang05da21`。

::: danger 碰撞几率
基于`Math.random()`生成，碰撞几率取决于`Math.random()`的随机性，可能不适用于大数据场景。
:::

## 参数

|   参数   |   类型   | 默认 |           说明           |
| -------- | -------- | ---- | ------------------------ |
| `prefix` | `string` | `''` | 随机字符串前缀，如：`i_` |

## 返回

| 参数 |   类型   |              说明              |
| ---- | -------- | ------------------------------ |
|  *   | `string` | 随机字符串，如：`i_fang05da21` |

## 示例

::: code-group
```js [调用]
import { randomId } from '@axolo/tree-array'

randomId('i_') // i_fang05da21
```

```text [返回]
i_fang05da21
```
:::
