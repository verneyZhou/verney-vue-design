// import commandLineArgs from 'command-line-args'; // 进行用户参数解析
// import commandLineUsage from 'command-line-usage'; // 为我们提供帮助命令
// import chalk from 'chalk';
// import prompts from 'prompts';
// import { readFile } from 'fs/promises';

// import gitClone from '../utils/gitClone.js';

// //logs
// const defaultLog = (log) => console.log(chalk.blue(`---------------- ${log} ----------------`));
// const errorLog = (log) => console.log(chalk.red(`---------------- ${log} ----------------`));
// const successLog = (log) => console.log(chalk.green(`---------------- ${log} ----------------`));

// const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url)));
// //配置命令参数
// const optionDefinitions = [
//     { name: 'version', alias: 'v', type: Boolean },
//     { name: 'help', alias: 'h', type: Boolean }
// ];

// //帮助命令
// // verney-cli -h 或者 verney-cli --help
// const helpSections = [
//     {
//         header: '\r\n' + chalk.white.bgBlueBright.bold('verney-cli'),
//         content: '\r\n' + chalk.greenBright('🚀🚀🚀🚀🚀一个快速生成Vue3项目的脚手架🚀🚀🚀🚀🚀')
//     },
//     {
//         header: 'Options',
//         optionList: [
//             {
//                 name: 'version',
//                 alias: 'v',
//                 typeLabel: '{underline boolean}',
//                 description: '版本号'
//             },
//             {
//                 name: 'help',
//                 alias: 'h',
//                 typeLabel: '{underline boolean}',
//                 description: '帮助'
//             }
//         ]
//     }
// ];
// const promptsOptions = [
//     {
//         type: 'text',
//         name: 'name',
//         message: '请输入项目名称'
//     },
//     {
//         type: 'select', //单选
//         name: 'template',
//         message: '请选择一个模板',
//         choices: [
//             { title: 'kitty-ui', value: 1 },
//             { title: 'easyest', value: 2 }
//         ]
//     }
// ];
// const options = commandLineArgs(optionDefinitions);

// const remoteList = {
//     1: 'https://gitee.com/geeksdidi/kittyui.git',
//     2: 'https://github.com/qddidi/easyest.git'
// };
// const getUserInfo = async () => {
//     const res = await prompts(promptsOptions);
//     if (!res.name || !res.template) return;
//     gitClone(`direct:${remoteList[res.template]}`, res.name, { clone: true });
// };
// const runOptions = () => {
//     console.log('options', options);
//     if (options.version) {
//         console.log(`v${pkg.version}`);
//         return;
//     }
//     if (options.help) {
//         console.log(commandLineUsage(helpSections));
//         return;
//     }
//     getUserInfo();
// };

// runOptions();
