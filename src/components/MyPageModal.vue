<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isMyPageModalOpen" class="modal-backdrop" @click.self="closeMyPageModal">
        <div class="modal-card" role="dialog" aria-modal="true">
          <!-- Close Button -->
          <button class="close-btn" @click="closeMyPageModal" aria-label="닫기">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div v-if="user" class="mypage-content">
            <!-- Header User Card -->
            <div class="profile-header">
              <div class="avatar-large">
                {{ user.name.charAt(0) }}
              </div>
              <div class="user-meta">
                <h3 class="user-name">{{ user.name }} 님</h3>
                <p class="user-email">{{ user.email }}</p>
                <div class="tag-group">
                  <span class="role-tag" :class="user.type">
                    {{ user.type === 'student' ? '🎓 장학생 회원' : '🤝 후원자 회원' }}
                  </span>
                  <span class="date-tag">가입일: {{ user.createdAt }}</span>
                </div>
              </div>
            </div>

            <!-- Scholarship Application Status Section -->
            <div class="section-block">
              <div class="block-title">
                <span>📋 나의 장학금 신청 현황</span>
                <span class="status-badge progress">서류 심사 중</span>
              </div>
              <div class="application-card">
                <div class="app-info">
                  <h4 class="app-title">2026년도 상반기 신라문화장학재단 우수장학생 지원</h4>
                  <div class="app-details">
                    <p><span>접수 번호:</span> <strong>SL-2026-08119</strong></p>
                    <p><span>신청 일시:</span> 2026.08.10 14:22</p>
                    <p><span>지원 분야:</span> 학업우수 장학금 (성적우수)</p>
                  </div>
                </div>
                <div class="app-timeline">
                  <div class="step completed">
                    <span class="step-icon">✓</span>
                    <span class="step-label">서류 접수</span>
                  </div>
                  <div class="step active">
                    <span class="step-icon">2</span>
                    <span class="step-label">서류 심사</span>
                  </div>
                  <div class="step">
                    <span class="step-icon">3</span>
                    <span class="step-label">면접 심사</span>
                  </div>
                  <div class="step">
                    <span class="step-icon">4</span>
                    <span class="step-label">최종 선발</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Member Info Details -->
            <div class="section-block">
              <div class="block-title">
                <span>👤 회원 기본 정보</span>
              </div>
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">이름</span>
                  <span class="info-value">{{ user.name }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">연락처</span>
                  <span class="info-value">{{ user.phone || '010-9876-5432' }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">이메일</span>
                  <span class="info-value">{{ user.email }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">계정 상태</span>
                  <span class="info-value text-success">정상 인증회원</span>
                </div>
              </div>
            </div>

            <!-- Footer Actions -->
            <div class="modal-footer-actions">
              <button class="btn btn-outline" @click="closeMyPageModal">닫기</button>
              <button class="btn btn-logout" @click="handleLogout">로그아웃</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useAuth } from '../composables/useAuth';

const { user, isMyPageModalOpen, closeMyPageModal, logout } = useAuth();

const handleLogout = () => {
  logout();
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-card {
  background: #ffffff;
  border: 1px solid rgba(6, 91, 137, 0.15);
  box-shadow: 0 25px 50px -12px rgba(6, 91, 137, 0.25);
  border-radius: 16px;
  width: 100%;
  max-width: 520px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 32px 28px;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  color: var(--text-muted);
  padding: 6px;
  border-radius: 50%;
  transition: all var(--transition-fast);
}

.close-btn:hover {
  background: rgba(0, 0, 0, 0.05);
  color: var(--text-primary);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 24px;
}

.avatar-large {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px var(--primary-glow);
}

.user-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.user-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
}

.user-email {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.tag-group {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
}

.role-tag {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 6px;
}

.role-tag.student {
  background: #e0f2fe;
  color: #0369a1;
}

.role-tag.sponsor {
  background: #fef3c7;
  color: #b45309;
}

.date-tag {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.section-block {
  margin-bottom: 24px;
}

.block-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.status-badge.progress {
  background: #eff6ff;
  color: #2563eb;
  border: 1px solid #bfdbfe;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: 600;
}

.application-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
}

.app-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 8px;
}

.app-details {
  font-size: 0.82rem;
  color: var(--text-secondary);
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
}

.app-timeline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  text-align: center;
  position: relative;
  padding-top: 8px;
  border-top: 1px dashed #cbd5e1;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.step-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #e2e8f0;
  color: #64748b;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step.completed .step-icon {
  background: #10b981;
  color: #ffffff;
}

.step.active .step-icon {
  background: var(--primary-color);
  color: #ffffff;
  box-shadow: 0 0 0 4px rgba(6, 91, 137, 0.2);
}

.step-label {
  font-size: 0.72rem;
  color: var(--text-muted);
}

.step.active .step-label {
  color: var(--primary-color);
  font-weight: 700;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.info-label {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.info-value {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-primary);
}

.text-success {
  color: #16a34a;
}

.modal-footer-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 24px;
}

.btn-logout {
  background: #fee2e2;
  color: #dc2626;
  border: 1px solid #fca5a5;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.88rem;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.btn-logout:hover {
  background: #fecaca;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
