import button from './button.vue';

// 很多时候我们在vue中使用一个组件会用的app.use 将组件挂载到全局。
// 要使用app.use函数的话我们需要让我们的每个组件都提供一个install方法，app.use()的时候就会调用这个方法;
import { withInstall } from '@verney-design/utils';

const Button = withInstall(button); // 添加install方法

export default Button;
