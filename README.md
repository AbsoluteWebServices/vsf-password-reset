# Vue Storefront Password Reset Extension

Password reset module for [vue-storefront](https://github.com/DivanteLtd/vue-storefront).

## Installation

By hand (preferer):

```shell
git clone git@github.com:AbsoluteWebServices/vsf-password-reset.git ./vue-storefront/src/modules/
```

Add following settings to your config file.

```json
  "users": {
    ...
    "createPassword_endpoint": "http://localhost:8080/api/user/create-password"
  },
```

Register module and add CreatePassword mixin

```
...
import { registerModule } from '@vue-storefront/core/lib/modules'
import { PasswordResetModule } from 'src/modules/vsf-password-reset'
import { CreatePassword } from 'src/modules/vsf-password-reset/mixins/CreatePassword'

export default {
  ...
  mixins: [CreatePassword],
  beforeCreate () {
    registerModule(PasswordResetModule)
  },
  ...
}
```
