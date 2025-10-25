<template>
  <div class="local-html-container" ref="htmlContainer"></div>
  <div class="homepage01-main" >

    
  </div>


</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const htmlContainer = ref<HTMLDivElement | null>(null)

onMounted(async () => {
  try {
    // 加载 HTML
    const response = await fetch('/homebackground/index.html')
    if (!response.ok) throw new Error('加载HTML文件失败')

    const htmlText = await response.text()
    if (htmlContainer.value) {
      htmlContainer.value.innerHTML = htmlText
    }

    await nextTick()

    // 手动执行 index.html 中的 <script> 标签
    const container = htmlContainer.value
    const scripts = container?.querySelectorAll('script')

    if (scripts && scripts.length > 0) {
      for (const oldScript of scripts) {
        const newScript = document.createElement('script')
        if (oldScript.src) {
          // 处理相对路径，确保从 public 加载
          const src = oldScript.src.startsWith('http')
            ? oldScript.src
            : `/homebackground/${oldScript.getAttribute('src')}`
          newScript.src = src
        } else {
          newScript.textContent = oldScript.textContent
        }
        newScript.async = false
        document.body.appendChild(newScript)
      }
    }

    //等待脚本加载完成后再手动执行 init()
    setTimeout(() => {
      const gameInit = (window as { init?: () => void }).init
      if (typeof gameInit === 'function') {
        console.log('🚀 手动启动游戏 init()')
        gameInit()
      } else {
        console.warn('⚠️ 未找到 init() 函数，请检查 game.js 是否已加载')
      }
    }, 1200)
  } catch (error) {
    console.error('加载本地HTML出错：', error)
  }
})

onBeforeUnmount(() => {
  // 清空容器
  if (htmlContainer.value) {
    htmlContainer.value.innerHTML = ''
  }
  // 移除动态插入的脚本（只清理 homebackground 下的）
  document.querySelectorAll('script[src*="/homebackground/"]').forEach((s) => s.remove())
})
</script>

<style scoped>
.local-html-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}
</style>
