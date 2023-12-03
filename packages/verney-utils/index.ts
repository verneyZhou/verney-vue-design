


import withInstall from "./src/withinstall"

function addFn(a: number, b: number): number {
    return a + b
}


// 导出公共方法
export {
    addFn,
    withInstall
}