<template>
  <div class="login-container">
    <div class="background-overlay"></div>

    <div class="logo-section fade-in-down">
      <a href="/" class="inline-block">
        <img class="logo-png" src="../../assets/logotext.png" alt="Logo" />
      </a>
    </div>

    <div class="main-content">
      <div class="title-section fade-in-left">
        <h1 class="title">
          <span class="title-highlight">服务外包</span>与<span class="title-highlight"
            >软件设计</span
          ><br />
          官方知识博客<br />
          <span class="title-en"
            >Official Knowledge<br />
            Sharing Blog</span
          >
        </h1>
        <div class="title-decoration"></div>
      </div>

      <div class="content-section fade-in-right">
        <div class="animation-wrapper">
          <Vue3Lottie
            width="400px"
            height="400px"
            :animation-data="animationData"
            :loop="true"
            :speed="0.8"
          />
        </div>

        <div class="login-card-wrapper">
          <div class="login-card">
            <div class="card-header">
              <h1>欢迎回来<br />Welcome Back</h1>
            </div>

            <div class="form-container">
              <div class="form-group">
                <label>
                  <span class="label-text">用户名</span>
                  <div class="input-container">
                    <el-icon class="input-icon">
                      <User />
                    </el-icon>
                    <input type="text" placeholder="请输入用户名" />
                  </div>
                </label>
              </div>

              <div class="form-group">
                <label>
                  <span class="label-text">密码</span>
                  <div class="input-container">
                    <el-icon class="input-icon">
                      <Lock />
                    </el-icon>
                    <input type="password" placeholder="请输入密码" />
                    <span class="toggle-password">
                      <i class="el-icon-view"></i>
                    </span>
                  </div>
                </label>
              </div>

              <button class="login-btn">
                <span>LOG IN</span>
                <i class="el-icon-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import animationJson from '@/assets/lottie/login.json'

export default {
  data() {
    return {
      animationData: animationJson,
    }
  },
  mounted() {
    // Add staggered animation to decorative elements
    const decorElements = document.querySelectorAll('.decorative-elements > div')
    decorElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate')
      }, 100 * index)
    })
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.login-container {
  width: 100%;
  min-height: 100vh;
  background: url(../../assets/login-bg.png) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', Arial, sans-serif;
  position: relative;
  overflow: hidden;
  color: #2b2d42; /* 使用原 text-color 的值 */
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
  backdrop-filter: blur(1px);
  z-index: 1;
}

/* Logo 图标 */
.logo-section {
  position: absolute;
  top: 30px;
  left: 50px;
  z-index: 10;
}

.logo-png {
  height: 120px;
  object-fit: contain;
}
/* 主内容 */

.main-content {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
}

/* 标题 */
.title-section {
  min-width: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.title {
  color: #2b2d42; /* 使用原 text-color 的值 */
  font-size: 3.8rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
  position: relative;
}

.title-highlight {
  position: relative;
  display: inline-block;
  color: #4361ee; /* 使用原 primary-color 的值 */
  z-index: 1;
}

.title-highlight::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: rgba(67, 97, 238, 0.2);
  z-index: -1;
}

.title-en {
  font-size: 3rem;
  margin-top: 10px;
  font-weight: 700;
  z-index: 100;
}

.title-decoration {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 80px;
  height: 4px;
  background: linear-gradient(
    to right,
    #4361ee,
    #f72585
  ); /* 使用原 primary-color 和 secondary-color 的值 */
  border-radius: 2px;
}

/* Content section */
.content-section {
  display: flex;
  gap: 30px;
}

.animation-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Login card */
.login-card-wrapper {
  min-width: 380px;
}

.login-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px; /* 使用原 border-radius 的值 */
  padding: 50px;
  margin-left: 25px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* 使用原 shadow-color 的值 */
  backdrop-filter: blur(10px);
  border: 3px solid rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease; /* 使用原 transition 的值 */
}

.login-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.card-header {
  color: #2b2d42;
  font-size: 20px;
  font-weight: 800;
  color: #0f2171;
  text-align: center;
}

.form-container {
  margin-top: 35px;
}

.form-group {
  margin-bottom: 30px;
}

.label-text {
  display: block;
  font-size: 1rem;
  font-weight: 800;
  color: #3a56d4;
  margin-bottom: 10px;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.916);
  border: 1px solid rgba(6, 49, 122, 0.3);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.input-container:focus-within {
  border-color: #4361ee;
  box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.15);
}

.input-icon {
  padding-left: 5px;
  width: 30px;
  height: 30px;
  color: #1b0594;
  font-weight: bold;
}

.input-container input {
  flex: 1;
  padding: 12px 15px 12px 0;
  border: none;
  background: transparent;
  font-size: 0.95rem;
  color: #2b2d42; /* 使用原 text-color 的值 */
  outline: none;
}

.input-container input::placeholder {
  color: #8d99ae; /* 使用原 text-light 的值 */
  opacity: 0.7;
}

.toggle-password {
  padding: 0 15px;
  cursor: pointer;
  color: #4577ce; /* 使用原 text-light 的值 */
  transition: all 0.3s ease; /*使用原 transition 的值 */
}

.toggle-password:hover {
  color: #4361ee; /* 使用原 primary-color 的值 */
}

.captcha-container {
  display: flex;
  gap: 10px;
}

.captcha-container .input-container {
  flex: 1;
}

.refresh-captcha:hover {
  color: #4361ee; /* 使用原 primary-color 的值 */
}

.remember-me {
  margin: 20px 0;
}

.checkbox-container {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #2b2d42; /* 使用原 text-color 的值 */
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(141, 153, 174, 0.3);
  border-radius: 4px;
  transition: all 0.3s ease; /*使用原 transition 的值 */
}

.checkbox-container:hover input ~ .checkmark {
  background-color: rgba(255, 255, 255, 0.9);
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #4361ee;
  border-color: #4361ee;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.login-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, #4361ee, #3a56d4);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(67, 97, 238, 0.3);
  position: relative;
  overflow: hidden;
}

.login-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: 0.5s;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(67, 97, 238, 0.4);
}

.login-btn i {
  transition: transform 0.3s ease;
}

.login-btn:hover i {
  transform: translateX(3px);
}

.forgot-password {
  display: block;
  text-align: center;
  margin-top: 15px;
  color: #4361ee;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

/* Animations */
.fade-in-down {
  animation: fadeInDown 0.8s ease forwards;
}

.fade-in-left {
  animation: fadeInLeft 0.8s ease forwards;
  margin-left: -40px;
}

.fade-in-right {
  animation: fadeInRight 0.8s ease forwards;
  background-color: rgba(141, 153, 174, 0.55);
  padding: 20px;
  border-radius: 20px;
  margin-top: 20px;
  width: 120%;
  position: relative;
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive design */
@media (max-width: 1200px) {
  .main-content {
    flex-direction: column;
    align-items: center;
    padding: 80px 20px 40px;
  }

  .title-section {
    text-align: center;
    margin-bottom: 40px;
  }

  .title-decoration {
    left: 50%;
    transform: translateX(-50%);
  }

  .content-section {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .logo-section {
    top: 20px;
    left: 20px;
  }

  .title {
    font-size: 2.2rem;
  }

  .title-en {
    font-size: 2.4rem;
  }

  .animation-wrapper {
    display: none;
  }

  .login-card {
    padding: 25px;
  }
}

@media (max-width: 480px) {
  .login-card {
    padding: 20px 15px;
  }

  .captcha-container {
    flex-direction: column;
  }

  .captcha {
    width: 100%;
    padding: 12px;
  }
}
</style>
