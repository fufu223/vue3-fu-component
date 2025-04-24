<template>
  <div class="container">
    <h2 class="title">WebSocket 聊天 Demo</h2>

    <!-- 聊天展示区 -->
    <div class="chat-box">
      <div
          v-for="(msg, index) in chatMessages"
          :key="index"
          class="message"
          :class="msg.type === 'sent' ? 'sent' : 'received'"
      >
        <img
            :src="msg.avatar"
            class="avatar"
            :class="msg.type === 'sent' ? 'avatar-left' : 'avatar-right'"
            alt="avatar"
        />
        <div
            class="message-content"
            :class="msg.type === 'sent' ? 'sent-message' : 'received-message'"
        >
          {{ msg.text }}
        </div>
      </div>
    </div>

    <!-- 输入框区域 -->
    <div class="input-area" ref="inputArea">
      <input
          v-model="message"
          @keyup.enter="sendMessage"
          placeholder="请输入消息"
          class="input-box"
      />
      <!-- 表情按钮和表情选择器容器 -->
      <div class="emoji-container" ref="emojiContainer">
        <button @click="toggleEmojiPicker" class="emoji-button">😊</button>
        <emoji-picker
            v-if="isEmojiPickerVisible"
            @emoji-click="handleEmojiClick"
            class="emoji-picker"
        />
      </div>
      <button @click="sendMessage" class="send-button">发送</button>
    </div>

    <!-- 日志区域 -->
    <div class="log-area">
      <h4 class="log-title">📝 日志输出：</h4>
      <div v-if="logs.length === 0" class="no-logs">暂无日志</div>
      <div v-for="(log, index) in logs" :key="'log-' + index">{{ log }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import 'emoji-picker-element'

const socket = ref(null)
const message = ref('')
const logs = ref([])
const chatMessages = ref([])

// 控制表情选择器的显示状态
const isEmojiPickerVisible = ref(false)

// 切换表情选择器的显示/隐藏
const toggleEmojiPicker = () => {
  isEmojiPickerVisible.value = !isEmojiPickerVisible.value
}

// 处理表情点击事件
const handleEmojiClick = (event) => {
  const unicode = event.detail.unicode
  message.value += unicode // 将选中的表情插入到输入框中
  // isEmojiPickerVisible.value = false // 添加表情后自动关闭表情选择器
}

// 发送消息
const sendMessage = () => {
  if (socket.value && socket.value.readyState === WebSocket.OPEN) {
    socket.value.send(message.value)
    chatMessages.value.push({
      type: 'sent',
      text: message.value,
      avatar: '/avatars/user.jpg',
    })
    log('📤 发送: ' + message.value)
    message.value = ''
  } else {
    log('⚠️ WebSocket 未连接，无法发送消息')
  }
}

// 记录日志
const log = (msg) => {
  logs.value.push(msg)
}

onMounted(() => {
  socket.value = new WebSocket('ws://localhost:8080/ws')

  socket.value.onopen = () => {
    log('✅ WebSocket 连接成功')
  }

  socket.value.onmessage = (event) => {
    const msg = event.data
    chatMessages.value.push({
      type: 'received',
      text: msg,
      avatar: '/avatars/bot.jpg',
    })
    log('📩 收到: ' + msg)
  }

  socket.value.onerror = (error) => {
    log('❌ WebSocket 错误')
    console.error(error)
  }

  socket.value.onclose = () => {
    log('🔌 WebSocket 连接关闭')
  }
})

onBeforeUnmount(() => {
  if (socket.value) {
    socket.value.close()
  }
})
</script>

<style scoped>
.container {
  padding: 1rem;
}

.title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.chat-box {
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background-color: #f9fafb;
  padding: 1rem;
  height: 400px;
  overflow-y: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.message {
  display: flex;
  margin-bottom: 0.75rem;
}

.sent {
  justify-content: flex-start;
}

.received {
  justify-content: flex-end;
}

.message-content {
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  max-width: 20rem;
  word-break: break-word;
}

.sent-message {
  background-color: #d1fae5;
  text-align: left;
}

.received-message {
  background-color: #3b82f6;
  color: white;
  text-align: right;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.avatar-left {
  margin-right: 0.5rem;
}

.avatar-right {
  margin-left: 0.5rem;
  order: 1;
}

.input-area {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  position: relative; /* 确保子元素可以使用绝对定位 */
}

.input-box {
  flex-grow: 1;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  margin-right: 0.5rem;
}

.emoji-container {
  position: relative; /* 父容器设置为相对定位 */
}

.emoji-button {
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.emoji-button:hover {
  transform: scale(1.2);
}

.send-button {
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.send-button:hover {
  background-color: #1d4ed8;
}

/* Emoji Picker 样式 */
.emoji-picker {
  position: absolute;
  top: 0; /* 表情选择器与按钮顶部对齐 */
  left: -360px; /* 设置偏移量，向左移动 */
  z-index: 10; /* 确保表情选择器在其他内容之上 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  background-color: #fff;
}

.log-area {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #4b5563;
}

.log-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.no-logs {
  color: #9ca3af;
}
</style>