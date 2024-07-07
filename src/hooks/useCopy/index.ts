import { ElMessage } from "element-plus";

export  const useCopy = (text: string) => {
     navigator.clipboard.writeText(text).then(resp =>{
         ElMessage.success('复制成功')
     } );
};

// 虽然document.execCommand('copy')曾经是一种流行的方法，但这个API已经被废弃，不再推荐使用，因为它在现代浏览器中可能会被禁用或行为不稳定。
const useCopyDiscard = (text: string) => {
    // 创建一个临时的textarea元素
    const tempTextarea = document.createElement('textarea');
    // 设置不可见
    tempTextarea.style.position = 'absolute';
    tempTextarea.style.left = '-100%';
    // 设置要复制的文本
    tempTextarea.value = text;
    // 将textarea添加到DOM中
    document.body.appendChild(tempTextarea);
    // 选中textarea中的文本
    tempTextarea.select();
    // 复制选中的文本到剪贴板
    document.execCommand('copy');
    // 移除textarea
    document.body.removeChild(tempTextarea);
    ElMessage.success('复制成功')
};
