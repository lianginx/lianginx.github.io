---
tags:
  - Nuxt
  - Node.js
  - JWT
---

# JSON Web Token 鉴权

## JSON Web Token

::: tip Nuxt 3 项目实例
这里提供了一个使用 Nuxt 3 开发的项目实例，你可以结合文章和项目实例来学习如何相对安全地存储用户密码。

[查看项目实例 —— lianginx/jwt](https://github.com/lianginx/jwt)
:::

JSON Web Token 是一种基于 JSON 的开放标准（RFC 7519），用于在各个层面上向用户提供身份验证。

> 以下内容中将简称为 JWT 或 Token

JWT 由三部分组成：

- Header
- Payload
- Signature

其中，Header 和 Payload 都是 JSON 对象，Signature 是 Header 和 Payload 的签名，用于验证 Token 的完整性。

### Header

Header 部分包含了 Token 签名所用的算法。

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

```ts
export interface JWTHeader {
  alg: string
  typ: string
}
```

### Payload

Payload 部分包含了用户的身份信息，例如用户 ID、用户名、权限等。

```json
{
  "userId": "1234567890",
  "username": "admin",
  "write": true,
  "exp": 1516239022
}
```

```ts
export interface JWTPayload {
  userId: string // 用户ID
  username: string // 用户名
  write?: boolean // 管理界面权限
  exp?: number // 过期时间（暂未用到）
}
```

### Signature

Signature 部分是 Header 和 Payload 的签名，用于验证 Token 的完整性。

首先将 Header 和 Payload 进行 Base64url 编码，然后使用 Header 中的签名算法进行签名，得出 Signature，最后将 Header、Payload 和 Signature 这三个 Base64url 字符串使用 `.` 进行拼接，就得到了完整的 Token。

```ts
import { Buffer } from 'node:buffer'

/** Object 转 Base64url 字符串 */
function objectToBase64url(obj: object): string {
  return Buffer.from(JSON.stringify(obj)).toString('base64url')
}

const header = { alg: 'HS256', typ: 'JWT' }
const headerString = objectToBase64url(header)
const payloadString = objectToBase64url(payload)

const signatureString = crypto
  .createHmac('sha256', secret)
  .update(headerString)
  .update(payloadString)
  .digest('base64url')

return `${headerString}.${payloadString}.${signatureString}`
```

### 验证 Token

服务端验证 Token 是否有效，需要先解析 Header 获取到加密所用的算法，然后使用该算法对 Header、Payload 重新进行签名，然后比对新的签名是否与第三段签名一致，不一致则表示签名已被篡改。

```ts
const [headerString, payloadString, oldSignatureString] = token.split('.')

const newSignatureString = crypto
  .createHmac('sha256', secret)
  .update(headerString)
  .update(payloadString)
  .digest('base64url')

if (newSignatureString !== oldSignatureString)
  throw new Error('无效签名')
```

## 认证流程

### 1. 用户登录/注册

用户在登录/注册页面输入用户名和密码，点击登录/注册按钮，服务端将用户名和密码在数据库中进行验证/创建，验证通过后使用用户身份信息生成一个 Token，并将 Token 返回给客户端。

### 2. 客户端保存并使用 Token

客户端将 Token 保存在 Cookie 中。

客户端每次请求都会自动带上 Cookie，服务器可以通过验证 Cookie 中 Token 的有效性来判断用户的身份。

### 3. 服务端验证 Token

服务端首先检查请求的 Cookie 中是否有 Token，如果没有则返回错误信息。

如果有 Token，则通过解析 Token 验证它的有效性，没有通过验证则返回错误信息。

验证 Token 的有效性包括但不限于：

- Token 是否被篡改
- Token 是否过期

如果验证通过，则继续返回用户需要的资源。

## 权限控制

目前实现比较简单，通过解析 JWT Payload 对象，获取并校验 `write` 字段来判断用户是否有权限访问管理界面。

```ts
if (!payload.write) {
  // 处理没有权限的情况
}
```

## 常见问题

### 1. 如何防止 Token 被篡改？

在生成 JSON Web Token 时，服务器会使用一个只存在于服务端的密钥 `secret` 来生成每个 Token 的第三段的签名。

当客户端使用 Token 时，服务端会使用相同的密钥根据 Token 的第一段和第二段重新生成 Token 的签名，如果两个签名不一致，则说明 Token 被篡改了。

**所以存在服务端的密钥 `secret` 很关键，一定不要泄漏它！**
