export interface MenuItem {
    // 导航图标
    icon?: string,
    // jsx图标(因为jsx里无法像js里直接用toLine做图标名称拼接)
    jsxIcon?: any,
    // 导航名称
    name: string,
    // 导航标识
    index: string,
    // 子导航
    children?: MenuItem[]
}
