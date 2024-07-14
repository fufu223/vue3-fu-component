/**
 * 列表项
 */
export interface ListItem {
    /**
     * 头像
     */
    avatar?: string,
    /**
     * 标题
     */
    title?: string,
    /**
     * 描述
     */
    desc?: string,
    /**
     * 时间
     */
    time?: string,
    /**
     * 标签内容
     */
    tag?: string,
    /**
     * 标签类型
     */
    tagType?: '' | 'success' | 'warning' | 'danger' | 'info'
}

/**
 * 列表操作项
 */
export interface ListOptions {
    /**
     * 操作项标题
     */
    title: string,
    /**
     * 对应的内容
     */
    content: ListItem[]
}

/**
 * 操作选项
 */
export interface ActionOptions {
    /**
     *  操作标题
     */
    text: string,
    /**
     * 标签名称
     */
    icon?: string
}
