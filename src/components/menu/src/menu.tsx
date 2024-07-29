import {defineComponent, PropType, useAttrs} from "vue";
import {MenuItem} from "./type";
import * as Icons from "@element-plus/icons"
import './styles/index.scss'

export default defineComponent({
    props: {
        // 菜单数据
        data: {
            type: Array as PropType<MenuItem[]>,
            required: true
        },
        // 默认选中的菜单
        defaultActive: {
            type: String,
            default: ''
        },
        // 是否是路由模式
        router: {
            type: Boolean,
            default: false
        },
        // 键名
        name : {
            type: String,
            default: 'name'
        },
        // 菜单标识的键名
        index : {
            type: String,
            default: 'index'
        },
        // 菜单图标的键名
        icon : {
            type: String,
            default: 'icon'
        },
        // 菜单子菜单的键名
        children : {
            type: String,
            default: 'children'
        }
    },
    setup(props, ctx) {
        // 封装一个渲染无限层级菜单的方法,函数会返回一个jsx的代码
        let renderMenu = (data: MenuItem[]) => {
            return data.map((item: MenuItem) => {
                // 处理菜单图标
                // item.jsxIcon = `fu-icon-${toLine(item[props.icon])}`
                item.jsxIcon = (Icons as any) [item[props.icon!]]
                console.log((Icons as any) [item[props.icon!]])
                console.log(item.jsxIcon)
                // 处理el-sub-menu的插槽
                let slots = {
                    title: () => {
                        return <>
                            <item.jsxIcon />
                            <span>{item[props.name]}</span>
                        </>
                    }
                }
                // 递归渲染子菜单
                if (item[props.children] && item[props.children].length) {
                    return (
                        <el-sub-menu index={item[props.index]} v-slots={slots}>
                            {renderMenu(item[props.children])}
                        </el-sub-menu>
                    )
                }
                // 正常渲染普通菜单
                return (
                    <el-menu-item index={item[props.index]}>
                        <item.jsxIcon/>
                        <span>{item[props.name]}</span>
                    </el-menu-item>
                )
            })
        }

        return () => {
            return (
                <el-menu
                    default-active={props.defaultActive}
                    router={props.router}
                    {...useAttrs()}
                >
                    {renderMenu(props.data)}
                </el-menu>
            )
        }
    }
})
