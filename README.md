# color loggers

Print to console with colors.

## Install

```
yarn add color-loggers
```

## Use

```ts
import { Blue, Green, Red } from 'color-loggers';

const info = new Blue();
const success = new Green();
const error = new Red();

info.log('This is an information.');
success.log('Congratulations!');
error.log('Something is wrong!');
```

## Sample output

![](./img/1.png)

## Change the prefix

```ts
const info = new Blue('👉');
const success = new Green('🎉');
const error = new Red('⛔️');

info.log('This is an information.');
success.log('Congratulations!');
error.log('Something is wrong!');
```

![](./img/2.png)

## Dynamic prefix

```ts
const info = new Blue(() => `[${new Date()}]:`);
info.log('This is an information.');
```

Output:

```
 [Thu Mar 02 2023 11:37:55 GMT-0800 (Pacific Standard Time)]: This is an information.
```
