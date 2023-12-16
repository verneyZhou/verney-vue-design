/**
 * 安装工具：npm yarn pnpm
 * 脚手架：vite vue-cli webpack
 * js / ts
 * css / scss / less
 * eslint / prettier
 * h5 / pc
 * ui库：element-plus ant-design-vue vant-ui
 * 状态管理工具：vuex / pinia
 * 是否使用 axios
 * 是否使用 mock
 * 是否全局引入svg-icons
 * husky / lint-staged / commitlint
 */
const inquirer = require('inquirer');

function inquirerPrompt(name) {
    return new Promise((resolve, reject) => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'projectName',
                    message: '模板名称',
                    default: name || '',
                    validate: function (val) {
                        if (!val) {
                            return '模板名称不能为空';
                        }
                        if (!/^[a-zA-Z]+$/.test(val)) {
                            return '模板名称只能含有英文';
                        }
                        // if (!/^[A-Z]/.test(val)) {
                        //     return '模板名称首字母必须大写';
                        // }
                        return true;
                    }
                }
                // {
                //     type: 'list',
                //     name: 'pkg',
                //     message: '选择包管理工具',
                //     choices: ['pnpm', 'yarn', 'npm'],
                //     default: 'pnpm'
                // },
                // {
                //     type: 'list',
                //     name: 'language',
                //     message: 'JS or TS',
                //     choices: ['TypeScript', 'JavaScript'],
                //     default: 'TypeScript',
                //     filter: function (value) {
                //         return {
                //             JavaScript: 'js',
                //             TypeScript: 'ts'
                //         }[value];
                //     }
                // },
                // {
                //     type: 'list',
                //     name: 'css',
                //     message: '选择css预处理器',
                //     choices: ['less', 'scss', 'stylus', 'none'],
                //     default: 'less',
                //     filter: function (value) {
                //         return value === 'none' ? '' : value;
                //     }
                // },
                // {
                //     type: 'confirm',
                //     name: 'vuex',
                //     message: '是否使用vuex'
                // },
                // {
                //     type: 'confirm',
                //     name: 'h5',
                //     message: '是否是移动端项目'
                // },
                // {
                //     type: 'checkbox',
                //     name: 'codeRule',
                //     message: '是否配置代码规范',
                //     choices: ['eslint', 'prettier'],
                //     default: ['eslint', 'prettier']
                // },
                // // {
                // //     type: 'checkbox',
                // //     name: 'commitRule',
                // //     message: '是否配置代码提交规范',
                // //     choices: ['husky', 'lint-staged', 'commitlint'],
                // //     default: ['']
                // // },
                // {
                //     type: 'confirm',
                //     name: 'axios',
                //     message: '是否安装axios'
                // },
                // {
                //     type: 'confirm',
                //     name: 'mock',
                //     message: '是否配置mock'
                // },
                // {
                //     type: 'confirm',
                //     name: 'svgIcons',
                //     message: '是否配置全局svg-icons组件'
                // },
                // {
                //     type: 'confirm',
                //     name: 'h5',
                //     message: '是否是移动端项目'
                // }
            ])
            .then((answers) => {
                // console.log('answers', answers);
                resolve(answers);
                // const { h5 } = answers;
                // const choices = !h5 ? ['Ant Design Vue', 'Element Plus', 'none'] : ['Vant', 'none'];
                // inquirer
                //     .prompt([
                //         {
                //             type: 'list',
                //             message: '选择UI库',
                //             choices,
                //             name: 'library'
                //         }
                //     ])
                //     .then((answers2) => {
                //         resolve({
                //             ...answers,
                //             ...answers2
                //         });
                //     })
                //     .catch((error) => {
                //         reject(error);
                //     });
            })
            .catch((error) => {
                console.log('error', error);
                reject(error);
            });
    });
}

exports.inquirerPrompt = inquirerPrompt;
