# Vue Storefront Magento Password Reset Extension

Magento password reset module for [vue-storefront](https://github.com/DivanteLtd/vue-storefront).

## Installation

By hand (preferer):

```shell
git clone git@github.com:AbsoluteWebServices/vsf-password-reset.git ./vue-storefront/src/modules/
```

Registration the module. Go to `./vue-storefront/src/modules/index.ts`

```js
...
import { extendModule } from '@vue-storefront/core/lib/module'
import { UserExtend } from './vsf-password-reset'
extendModule(UserExtend)
```

Add following settings to your config file.

```json
  "users": {
    ...
    "createPassword_endpoint": "http://localhost:8080/api/ext/password-reset/create-password"
  },
```

Add ResetPassword component as mixin

```
...
import { ResetPassword } from 'src/modules/vsf-password-reset/components/ResetPassword'

export default {
  ...
  mixins: [ResetPassword],
  ...
}
```

## Reset Password API extension

Install additional extension for `vue-storefront-api`:

```shell
cp -f ./vue-storefront/src/modules/vsf-password-reset/API/password-reset ./vue-storefront-api/src/api/extensions/
```
