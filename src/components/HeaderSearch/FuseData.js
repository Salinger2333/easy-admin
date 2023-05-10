import path from 'path'

/**
 * 把遍历出来的路由表改成fusejs需要的形式
 * @param {routes} 路由表 
 * @param {basePath} 基础路径
 * @param {prefixTitle} 路由表  
 */
export const generateRoutes = (routes, basePath = '/', prefixTitle = []) => {
  // 创建result 数据
  const res = []

  for (const route of routes) {
    // 创建包含path和titile的item
    const data = {
      path: path.resolve(basePath, route.path),
      title: [...prefixTitle]
    }
    // 动态路由不允许被检索
    // 使用正则判断是否为动态路由
    const re = /.*\/:.*/
    if (route.meta && route.meta.title && !re.exec(route.path)) {
      // const i18ntitle = i18n.global.t(`msg.route.${route.meta.title}`)
      // data.title = [...data.title, i18ntitle]
      res.push(data)
    }
  }

  return res
}
