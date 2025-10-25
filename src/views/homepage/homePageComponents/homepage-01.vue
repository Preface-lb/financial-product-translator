<template>
  <div class="local-html-container" ref="htmlContainer"></div>
  <div class="homepage01-main">
    <div>
      <div class="homepage01-title">
        <h1 class="animated-title">FINANCIAL PRODUCT TRANSLATOR</h1>
        <h2 class="animated-text">
          AI-powered financial analysis platform: Turns complex data into actionable insights.
          Guides smarter investments, market moves—fast, precise, trusted. Your edge in volatile
          finance, simplified.
        </h2>
      </div>

      <div>
        <router-link to="/login">
          <button class="animated-button login-button">START</button>
        </router-link>
        <router-link to="/about">
          <button class="animated-button about-button">ABOUT</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const htmlContainer = ref<HTMLDivElement | null>(null)

onMounted(async () => {
  try {
    const response = await fetch('/homebackground/index.html')
    if (!response.ok) throw new Error('加载HTML文件失败')

    const htmlText = await response.text()
    if (htmlContainer.value) {
      htmlContainer.value.innerHTML = htmlText
    }

    await nextTick()
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
    setTimeout(() => {
      const gameInit = (window as { init?: () => void }).init
      if (typeof gameInit === 'function') {
        console.log('🚀 手动启动游戏 init()')
        gameInit()
      } else {
        console.warn('未找到 init() 函数，请检查 game.js 是否已加载')
      }
    }, 1200)
  } catch (error) {
    console.error('加载本地HTML出错：', error)
  }
})

onBeforeUnmount(() => {
  if (htmlContainer.value) {
    htmlContainer.value.innerHTML = ''
  }
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
.homepage01-main {
  z-index: 9;
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.homepage01-main > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 10px;
}

.homepage01-title {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.animated-title {
  width: 730px;
  color: #5196f0;
  -webkit-background-clip: text;
  background-clip: text;
  font-family:
    Koh Santepheap,
    sans-serif;
  font-size: 64px;
  font-weight: bold;
  margin-top: -160px;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}
.animated-text {
  width: 730px;
  color: #8ba9f6;
  -webkit-background-clip: text;
  background-clip: text;
  font-family:
    Kiwi Maru,
    sans-serif;
  font-size: 20px;
  font-weight: bold;
  opacity: 0;
  margin-top: -30px;
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-button {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 9999px;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease,
    color 0.3s ease;
}

.animated-button:hover {
  transform: translateY(-3px);
}

.animated-button:active {
  transform: translateY(0);
}

.homepage01-main > div > div:last-child {
  display: flex;
  gap: 1.5rem;
}

.login-button {
  width: 100%;
  max-width: 180px;
  padding: 0.75rem 1.5rem;
  padding-bottom: 0.5rem;
  background-color: #ffffff00;
  border: 3px solid #ffffff;
  font-size: 20px;
  font-family: Kalam, sans-serif;
  color: #ffffff;
  border-radius: 9999px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.login-button:hover {
  background-color: #5196f0;
}

.about-button {
  width: 100%;
  max-width: 180px;
  padding: 0.75rem 1.5rem;
  padding-bottom: 0.5rem;
  background-color: #ffffff00;
  border: 3px solid #ffffff;
  font-size: 20px;
  font-family: Kalam, sans-serif;
  color: #ffffff;
  border-radius: 9999px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.about-button:hover {
  background-color: #5196f0;
}
</style>
