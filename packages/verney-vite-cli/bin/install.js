const path = require('path');
const { exec } = require('child_process');
const ora = require('ora');
const fsExtra = require('fs-extra');

const LibraryMap = {
    'Ant Design': 'antd',
    iView: 'view-ui-plus',
    'Ant Design Vue': 'ant-design-vue',
    Element: 'element-plus'
};

const cmdInfo = (pkg = 'npm', pkgNames = '', isDev = false) => {
    const env = isDev ? '--save-dev' : '--save';
    if (!pkgNames) return '';
    if (pkg === 'npm') {
        return `npm install ${pkgNames} ${env}`;
    }
    if (pkg === 'yarn') {
        return `yarn add ${pkgNames} ${env}`;
    }
    if (pkg === 'pnpm') {
        return `pnpm add ${pkgNames} ${env}`;
    }
};

function install(options) {
    const { frame, library, pkg } = options;
    const cmdPath = path.resolve(process.cwd(), options.projectName);
    console.log('cmdPath', cmdPath);
    const commandDev = cmdInfo(pkg, '', true);
    const command = cmdInfo(pkg, '', false);
    console.log('command', command, commandDev);
    // || `pnpm add ${frame} && pnpm add ${LibraryMap[library]}`;
    return new Promise(function (resolve, reject) {
        if (fsExtra.existsSync(cmdPath)) {
            reject('文件夹已存在，请重新输入');
            return;
        }
        fsExtra.mkdirSync(cmdPath); // 创建项目
        resolve(true);

        // const spinner = ora();
        // spinner.start(`正在安装依赖，请稍等`);
        // exec(
        //     command,
        //     {
        //         cwd: path.resolve(cmdPath)
        //     },
        //     function (error) {
        //         if (error) {
        //             reject();
        //             spinner.fail(`依赖安装失败`);
        //             return;
        //         }
        //         spinner.succeed(`依赖安装成功`);
        //         resolve();
        //     }
        // );
    });
}

exports.install = install;
