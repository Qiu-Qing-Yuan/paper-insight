<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{ visible: boolean }>()
const emit = defineEmits<{ close: [] }>()

const feedbackType = ref('suggestion')
const feedbackText = ref('')
const submitted = ref(false)

watch(() => props.visible, (v) => {
  if (v) {
    feedbackType.value = 'suggestion'
    feedbackText.value = ''
    submitted.value = false
  }
})

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

function onBackdrop(e: MouseEvent) {
  if ((e.target as HTMLElement).classList.contains('modal-backdrop')) {
    emit('close')
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="modal-backdrop" @click="onBackdrop">
        <div class="modal-dialog">
          <div class="modal-header">
            <div class="card-title" style="margin-bottom:0">反馈与建议</div>
            <button class="modal-close" @click="emit('close')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <p class="modal-desc">感谢您的反馈！您的意见将帮助我们改进平台。</p>

          <div class="modal-type-btns">
            <button class="btn" :class="feedbackType === 'suggestion' ? 'btn-primary' : 'btn-secondary'" @click="feedbackType = 'suggestion'">建议</button>
            <button class="btn" :class="feedbackType === 'bug' ? 'btn-primary' : 'btn-secondary'" @click="feedbackType = 'bug'">问题反馈</button>
            <button class="btn" :class="feedbackType === 'other' ? 'btn-primary' : 'btn-secondary'" @click="feedbackType = 'other'">其他</button>
          </div>

          <textarea
            v-model="feedbackText"
            placeholder="请输入您的反馈内容..."
            rows="5"
            class="modal-textarea"
          ></textarea>

          <div class="modal-footer">
            <button class="btn btn-secondary" @click="emit('close')">取消</button>
            <div style="display:flex;align-items:center;gap:12px">
              <button class="btn btn-primary" @click="submitFeedback">提交反馈</button>
              <Transition name="fade"><span v-if="submitted" class="modal-success">感谢您的反馈！</span></Transition>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
