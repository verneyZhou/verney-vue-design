const path = require('path');
const program = require('commander'); // 命令行交互工具
// 扩展一下输出的样式
const chalk = require('chalk');
const ora = require('ora'); // 用于输出loading样式
const fsExtra = require('fs-extra'); // fs-extra 是对 fs 模块的扩展，支持 promise 语法
const { exec } = require('child_process'); // 子进程

const pkg = require('../package.json'); // 引入package.json
const { inquirerPrompt } = require('./inquirer'); // 引入用户配置信息
const { install } = require('./install');
const remoteUrl = 'https://github.com/verneyZhou/vue3-vite-admin.git'; // 模板地址
const remoteTempName = 'vue3-vite-admin'; // 远程模板名称

//定义logs样式
const defaultLog = (log) => console.log(chalk.blue(`---------------- ${log} ----------------`));
const errorLog = (log) => console.log(chalk.red(`---------------- ${log} ----------------`));
// const successLog = (log) => console.log(chalk.green(`---------------- ${log} ----------------`));

// 初始化
const init = () => {
    defaultLog(`欢迎使用 ${pkg.name} 脚手架工具`);
    program
        .name(pkg.name)
        .usage('<command> [options]') // 定义命令的使用方法
        .description(chalk.greenBright('🚀🚀🚀🚀🚀一个快速生成Vue3项目的脚手架🚀🚀🚀🚀🚀'))
        .version(pkg.version)
        .option('-V, --version', '版本号')
        .option('-h, --help', '帮助');
};

// 帮助命令: verney-vite-cli --help 时的输出
const help = () => {
    program.on('--help', () => {
        console.log('\r\n' + chalk.white.bgBlueBright.bold(pkg.name));
        console.log(`\r\nRun ${chalk.cyan(`${pkg.name} create [name]`)} 创建新项目\r\n`);
    });
};

// 创建命令: verney-vite-cli create <name>
// 参数可为必选的（尖括号表示，例如<required>）或可选的（方括号表示，例如[optional]）。
const create = () => {
    program
        .command('create [name]')
        .description('创建一个新项目')
        .action(async (name) => {
            try {
                // 提示用户输入
                const opts = await inquirerPrompt(name);
                // console.log('====opts', opts);
                // 安装依赖
                // const installRes = await install(res);
                // console.log('installRes', installRes);

                // 直接先直接clone固定模板, 以后再兼容多模板
                cloneTemp(opts);
            } catch (error) {
                // console.log('error', error);
                errorLog(error);
                // process.exit(); //退出流程
            }
        });
};

// 克隆模板
const cloneTemp = (opts = {}) => {
    const cmdPath = path.resolve(process.cwd(), opts.projectName); // 项目路径
    // console.log('cmdPath', cmdPath);
    if (fsExtra.existsSync(cmdPath)) {
        errorLog('文件夹已存在，请重新输入');
        return;
    }
    fsExtra.mkdirSync(cmdPath); // 创建项目
    const cmd = `cd ${opts.projectName} && git clone ${remoteUrl}`;
    const spinner = ora();
    spinner.start(`正在创建中，请稍等...`);
    exec(
        cmd,
        {
            cwd: process.cwd()
        },
        function (error) {
            if (error) {
                spinner.fail(`项目创建失败：`, error);
                fsExtra.removeSync(cmdPath); // 删除文件
                return;
            }
            const copyDir = path.resolve(process.cwd(), `./${opts.projectName}/${remoteTempName}`);
            if (!fsExtra.existsSync(copyDir)) {
                errorLog('项目创建失败，请重试');
                return;
            }
            fsExtra.copySync(copyDir, cmdPath); // 复制文件
            // fsExtra.moveSync(copyDir, cmdPath, { overwrite: true }); // 移动文件
            fsExtra.removeSync(copyDir); // 删除文件
            spinner.succeed(`🚀🚀🚀🚀🚀项目创建成功🚀🚀🚀🚀🚀`);
        }
    );
};

// 初始化
const cli = () => {
    // console.log('==process.argv', process.argv, process.cwd());
    // process.cwd() 方法返回 Node.js 进程的当前工作目录
    // path.dirname 获取当前文件的父级目录
    // const target = path.resolve(process.cwd(), `./src/pages/index.js`);
    // console.log('==target', target, path.dirname(target));

    init();
    help();
    create(); // 创建项目

    // const opts = program.opts();
    // console.log('====opts', opts);
    program.parse(process.argv); // 这一步必不可少，否则上面的定义都不会生效
};

module.exports = {
    cli
};
