---
tags:
  - clash
---

# Clash for windows Mixin 配置

> 详细教程请查看 [官方文档](https://docs.cfw.lbyczf.com/contents/mixin.html#javascript)

## YAML

找到 `General` -> `Mixin` 开启选项，点击小齿轮编写配置文件：

```yaml
mixin: # object
  rules:
  # ...
  dns:
  # ...
```

保存后会将 Mixin 中的自定义配置规则项覆盖原有文件规则，没有修改的不会覆盖。

例如上面修改了 `rules` 和 `dns` 配置项，则只会覆盖这两项，其他没有修改的不会被覆盖，继续保持原有规则。

::: tip
原有的配置文件不会被修改，这里的覆盖是指在内存中生成一份新的配置文件并使用它，关闭 Mixin 选项则恢复使用原有配置。
:::

::: tip
点击 `General` -> `Clash Core` 的第一个芯片状小图标预览最终提交给 Clash Core 的配置文件。
:::

## JavaScrip

如果我们想更灵活的修改或追加配置文件内容，可以使用 JavaScrip 进行混合生成。

找到 `Setting` -> `Mixin` 选项组，将 `Type` 修改为 `JavaScrip` 选项，点击 `JavaScrip` -> `Edit` 编辑：

```js
module.exports.parse = async (
  { content, name, url }, // [!code focus]
  { axios, yaml, notify }
) => {
  const extra = { // [!code focus:8]
    rules: [
      'DOMAIN-SUFFIX,bing.com,🚀 节点选择',
      'IP-CIDR,8.288.176.170/32,🚀 节点选择',
      ...content.rules,
    ],
  }
  return { ...content, ...extra }
}
```

参数 `content` 表示将原有配置 YAML 配置文件序列化之后的 JavaScrip 对象，函数内定义的 `extra` 对象表示自定义配置的规则对象。

这里我想要修改 `rules` 配置项，它接收的值包含规则的字符串数组。

因为我想要追加规则，而不是像之前 YAML 配置中那样覆盖规则，所以我将自定义规则结合使用 `content.rules` 获取原有的 `rules` 项，合并为一个新的数组。

最后将 `content` 和 `extra` 合并成一个新对象返回出去，CFW 会将返回的对象序列化后直接载入。
