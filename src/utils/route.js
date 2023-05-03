
/**
 * 所有子集路由
 */
const getChildrenRoutes = routes => {
  const result = []
  routes.forEach(route => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}
/**
 * 处理脱离层级的路由
 */
export const filterRoutes = routes => {
  // 子集路由
  const childrenRoutes = getChildrenRoutes(routes)
  // 开始查重,剔除重复路由表
  return routes.filter(route => {
    // find方法时找到第一个符合条件的数值返回
    return !childrenRoutes.find(childrenRoute => {
      return childrenRoute.path === route.path
    })
  })
}

function isNull(data) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
}

/**
 *根据routes数据返回对应的menu规则数据
 */
export const generateMenus = (routes) => {
  const menu = []
  routes.forEach((route) => {
    generateMenue(route, menu)
  })
  return menu
}

/**
 * 递归遍历路由表
 * @param {*} route 当前节点
 * @param {*} parent 父级节点
 */
const generateMenue = (route, parent) => {
  // 递归终止条件, 该路由是最后一级，即没有children
  if (!route.children) {
    // 如果存在meta，也就是符合成为menu的规则，直接挂载给上一级
    if (route.meta && route.meta.title && route.meta.icon) {
      // 首先判断上一级是Array(顶层)还是route，Array代表是顶层数组直接push，否则加入到parent子节点
      // 为了符合视频的写法，此处给route加上一个空childen(也可以不加，后续渲染时判断route没有这个属性即为最后一级)
      route.children = []
      parent instanceof Array ? parent.push(route) : parent.children.push(route)
    }
  } else {
    // 来到这里证明该路由还有children，我们需要去过滤children（过滤掉meta不符合要求的children）
    // 首先判断当前节点是否符合 route.meta && route.meta.title && route.meta.icon 的要求
    const isMenu = route.meta && route.meta.title && route.meta.icon
    if (isMenu) {
      // 如果符合要求需要将当前节点加入到父节点
      parent instanceof Array ? parent.push(route) : parent.children.push(route)
      // 拷贝当前点的children用于遍历(为何要拷贝？因为在下一层会push过滤后的children进去)
      const tmpChildren = [...route.children]
      // 然后清空当前节点的children（为何要清空？上面已经解释了）
      route.children = []
      // 接着遍历子节点
      tmpChildren.forEach((child) => {
        generateMenue(child, route)
      })
    } else {
      // 来到这儿表示当前节点不属于menu，那么就遍历当前节点的子节点，并传入当前节点的父节点
      route.children.forEach((child) => {
        generateMenue(child, parent)
      })
    }
  }
}

/**
 * 老师的方法过于复杂,上面是简易的实现版本
 * 根据routes数据,返回对应的menu规则数据
 * 方法本质为创建一个递归
 * @param {*} routes - 需要解析的路由表
 * @param {*} basePath - 解析过程中需要处理的基础路径
 * @return 返回一个数组,该数组会在SidebarMunu中被v-for循环用于sidebar-item的渲染
 */
// export const generateMenus = (routes, basePath = '') => {
//   // 最终返回值
//   const result = []
//   // 遍历路由表
//   routes.forEach(item => {
//     // 不存在children && 不存在meta
//     if (isNull(item.children) && isNull(item.meta)) return
//     // 存在children && 不存在meta, 迭代generateMenus
//     if (isNull(item.meta) && !isNull(item.children)) {
//       result.push(...generateMenus(item.children)) 
//       return
//     }
//     // 不存在children,存在meta || 存在children && 存在meta
//     const routePath = path.resolve(basePath, item.path)
//     // 路由分离之后,可能存在同名父路由有的情况
//     let route = result.find(item => item.path === routePath)
//     // 当前路由尚未加入到result
//     if (!route) {
//       route = {
//         ...item,
//         path: routePath,
//         children: []
//       }
//       // icon与title必须全部存在 才认为它是一个需要在munu item中展示的数据
//       if (route.meta.icon && route.meta.title) {
//         // meta 存在生成route对象,放入arr 
//         result.push(route)
//       }

//       // 存在children进入迭代到children
//       if (item.children) {
//         route.children.push(...generateMenus(item.children, route.path))
//       }
//     }
//   })
//   return result
// }
