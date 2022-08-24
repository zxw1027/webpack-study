import _ from 'lodash';
import printMe from './print.js';
function component() {
    const element = document.createElement('div');

    const btn = document.createElement('button');
    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    // lodash 在当前 script 中使用 import 引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    // 将图像添加到我们已经存在的 div 中。

    element.appendChild(myIcon);


    return element;
}

document.body.appendChild(component());
