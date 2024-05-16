import Button from './button';
import { App } from 'vue';

export {
    Button
}

const components = [Button]

const install = function (app: App<Element>) {
    components.forEach((component) => {
        console.log(component.name);
		if (!component.name) return;
		app.component(component.name as string, component);
	});
};

// 支持使用标签的方式引入
// if (typeof window !== 'undefined' && (window as any).Vue) {
// 	install((window as any).Vue);
// }

const ed  = {
    install
}

/* 
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="./lisp-ui.umd.js"></script>
    <title>Document</title>
</head>

<body>
    <div class="home" id="home"></div>
    <script>
        window.Vue.createApp({
            el: "#home",
            data() {
                return {};
            },
            methods: {},
            mounted() { },
            created() { },
            template: `
                    <lsp-button>lsp</lsp-button>
                `
        }).use(window.LspUi)
            .mount("#home");

    </script>

</body>

</html>
*/

if (typeof window !== 'undefined' && (window as any).Vue) {
    console.log('======',window);
    
    (window as any).LspUi = ed;
}

export const log =  () => {
    console.log('Hello')
}

export default ed;