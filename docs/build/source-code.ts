import * as path from 'path'
import * as fsPromises from 'fs/promises' // 异步读取文件

const Prism = require('prismjs') // 引入代码高亮插件
const loadLanguages = require('prismjs/components/index')

loadLanguages(['markup', 'css', 'javascript']) // 限制语言类型

// 代码示例目录
const packagesPath = path.resolve(__dirname, '../demo/')

const sourceCode = () => {
  return {
    // 会在每个传入模块请求时被调用
    // src: 源代码字符串，id: 模块的绝对路径
    async transform (src: string, id: string) {
      const mdFile = '.md'
      if (!id.includes(mdFile)) return // 仅处理 .md 文件

      const reg = /source-code="(.*)"/g // 匹配 source-code="xxx"

      if (!src.match(reg)) return

    //   console.log('=====sourceCode',src, id, src.match(reg))
   
      // 封装match方法：读取导入模块的源代码，遍历匹配到的 source-code="xxx"
      // 例：[ 'source-code="ui:::input"','source-code="ui:::button"' ]
      const match = src.match(reg)?.map(_ => {
        let [packageName, compPath] = sourceSplit(_) // 获取组件名称
        // console.log(packageName, compPath)
        // const suffix = packageName.includes('ant') ? 'jsx' : 'vue'
        // return fsPromises.readFile(path.resolve(packagesPath, `${packageName}/demo/${compPath}.${suffix}`), 'utf-8')

        // 获取组件示例路径
        const demoPath = path.resolve(packagesPath, `${compPath}.vue`)
        // 读取组件示例源代码
        return fsPromises.readFile(demoPath, 'utf-8')
      })

      const filesRes = await Promise.all(match) // 异步执行

      let i = 0
      // 将匹配到的 source-code="xxx" 替换为 <pre><code>xxx</code></pre>  
      return src.replace(reg, (str) => {
        console.log('=====replace', str)
        const [packageName, compPath] = sourceSplit(str)
        const compPathStrArr = compPath.split('/')
        const iframeSrc = compPathStrArr[compPathStrArr.length - 1]
        const file = filesRes[i]
        i++
        // 返回添加了 source-code 等属性的新的代码字符串，替换原来的 source-code="xxx" 代码片段
        return `source-code="${encodeURIComponent(wrap(Prism.highlight(file, Prism.languages.markup, 'markup')))}" raw-source="${encodeURIComponent(file)}" lib-type="${packageName}" iframe-src="${iframeSrc}"`
      })
    }
  }
}

// 将代码包裹在 <pre><code>xxx</code></pre> 中
const wrap = code => `<pre v-pre><code>${code}</code></pre>`

// source-code="ui:::input" => ['ui', 'input']
function sourceSplit (_: string) {
  const result = /.*?source-code="(.*)"/.exec(_) // 获取匹配参数
//   console.log('=====sourceSplit', result)
    /**
     * 例：result => 
            [
            'source-code="ui:::input"',
            'ui:::input',
            index: 0,
            input: 'source-code="ui:::input"',
            groups: undefined
            ]
    */
  const originPath = (result && result[1]) ?? ''
  return originPath.split(':::')

}

// 导出插件
export default sourceCode