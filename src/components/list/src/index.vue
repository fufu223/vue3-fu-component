<template>
  <div class="fu-list-tabs__item">
    <el-tabs>
      <el-tab-pane v-for="(pane,index) in list" :key="index" :label="pane.title">
        <el-scrollbar max-height="400px">
          <div class="list-container" @click="clickItem(item,index)" v-for="(item,index) in pane.content" :key="index">
            <div class="item-avatar" v-if="item.avatar">
              <el-avatar :src="item.avatar" size="default"/>
            </div>
            <div class="item-content">
              <div class="title">
                <div style="font-family: '黑体';font-size: 16px">{{ item.title }}</div>
                <el-tag v-if="item.tag" :type="item.tagType">{{ item.tag }}</el-tag>
              </div>
              <div v-if="item.desc">{{ item.desc }}</div>
              <div class="time" v-if="item.time">{{ item.time }}</div>
            </div>
          </div>
          <div class="list-action">
            <div class="action-item" :class="{'border': i !== actions.length - 1}" @click="clickAction(action,i)" v-for="(action, i) in actions" :key="i">
              <div class="action-icon" v-if="action.icon">
                <el-icon>
                  <component :is="`fu-icon-${ toLine(action.icon) }`"></component>
                </el-icon>
              </div>
              <div class="action-text">{{ action.text }}</div>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script lang="ts" setup>
import {PropType} from "vue";
import {ActionOptions, ListOptions} from "@/components/list/src/types";
import {toLine} from "@/util";
import {actions} from "@/views/notification/data";

let props = defineProps({
  /**
   * 列表的内容
   */
  list: {
    type: Array as PropType<ListOptions>,
    required: true
  },
  /**
   * 操作项
   */
  actions: {
    type: Array as PropType<ActionOptions>,
    default: () => []
  }
})

const emit = defineEmits(['clickItem', 'clickAction'])

const clickItem = (item: ListOptions, index: number) =>{
  emit('clickItem', { item, index })
}

const clickAction = (action: ActionOptions, index: number) =>{
  emit('clickAction', { action, index })
}
console.log(props.list)
</script>

<style lang="scss" scoped>
.list-container {
  display: flex;
  padding: 10px 12px;
  align-items: center;
  &:hover {
    background-color: #e6f6ff;
    cursor: pointer;
  }
  .item-avatar {
    flex: 1;
  }

  .item-content {
    flex: 3;

    .time {
      color: #999;
    }

    div {
      margin-bottom: 4px;
    }

    .title {
      display: flex;
      justify-content: space-between;
    }
  }
}

.list-action {
  padding: 15px 0 15px 0;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  .action-item {
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      color: #42bef3;
      cursor: pointer;
    }
    .action-icon {
      display: flex;
      svg {
        align-items: center;
      }
    }
  }
}

.border {
  border-right: 2px solid #afa8a8;
}
</style>
