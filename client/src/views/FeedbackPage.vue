<script setup lang="ts">
import { ref } from 'vue'

const feedbackType = ref('suggestion')
const feedbackText = ref('')
const submitted = ref(false)

function submitFeedback() {
  if (!feedbackText.value.trim()) return
  const feedbacks = JSON.parse(localStorage.getItem('acl_feedbacks') || '[]')
  feedbacks.push({
    type: feedbackType.value,
    text: feedbackText.value,
    time: new Date().toISOString()
  })
  localStorage.setItem('acl_feedbacks', JSON.stringify(feedbacks))
  submitted.value = true
  feedbackText.value = ''
  setTimeout(() => { submitted.value = false }, 3000)
}
</script>

<template>
  <div class="main">
    <div class="card" style="max-width:700px">
      <div class="card-title">反馈与建议</div>
      <p style="color:#888;font-size:13px;margin-bottom:20px">感谢您的反馈！您的意见将帮助我们改进平台。</p>

      <div style="display:flex;gap:8px;margin-bottom:16px">
        <button class="btn" :class="feedbackType === 'suggestion' ? 'btn-primary' : 'btn-secondary'" @click="feedbackType = 'suggestion'" style="font-size:12px;padding:6px 14px">建议</button>
        <button class="btn" :class="feedbackType === 'bug' ? 'btn-primary' : 'btn-secondary'" @click="feedbackType = 'bug'" style="font-size:12px;padding:6px 14px">问题反馈</button>
        <button class="btn" :class="feedbackType === 'other' ? 'btn-primary' : 'btn-secondary'" @click="feedbackType = 'other'" style="font-size:12px;padding:6px 14px">其他</button>
      </div>

      <textarea
        v-model="feedbackText"
        placeholder="请输入您的反馈内容..."
        rows="6"
        style="width:100%;padding:12px;border:1px solid #404040;border-radius:10px;background:#1e1e1e;color:#e5e5e5;font-size:13px;resize:vertical;margin-bottom:16px;font-family:inherit"
      ></textarea>

      <div style="display:flex;align-items:center;gap:12px">
        <button class="btn btn-primary" @click="submitFeedback" style="font-size:13px;padding:8px 24px">提交反馈</button>
        <span v-if="submitted" style="color:#22c55e;font-size:13px">感谢您的反馈！</span>
      </div>
    </div>

    <div class="card" style="max-width:700px">
      <div class="card-title">平台信息</div>
      <div class="info-list">
        <div class="info-row">
          <span class="info-label">平台</span>
          <span class="info-value">Paper Insight</span>
        </div>
        <div class="info-row">
          <span class="info-label">版本</span>
          <span class="info-value">v2.0.0</span>
        </div>
        <div class="info-row">
          <span class="info-label">框架</span>
          <span class="info-value">Vue 3.5 + Vite 6 + TypeScript 5</span>
        </div>
        <div class="info-row">
          <span class="info-label">图表</span>
          <span class="info-value">ECharts 5.5 + echarts-wordcloud</span>
        </div>
      </div>
    </div>
  </div>
</template>
