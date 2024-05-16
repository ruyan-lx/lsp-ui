import Button from './index.vue';
import type { App } from 'vue';
// 注册组件
Button.install = (Vue: App) => {
	Vue.component(Button.name as string, Button);
};

export default Button;
