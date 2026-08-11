<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isAuthModalOpen" class="modal-backdrop" @click.self="closeAuthModal">
        <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <!-- Close Button -->
          <button class="close-btn" @click="closeAuthModal" aria-label="닫기">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <!-- Modal Header Tabs -->
          <div class="modal-header">
            <div class="tab-group">
              <button 
                class="tab-btn" 
                :class="{ 'active': authModalMode === 'login' }"
                @click="switchMode('login')"
              >
                로그인
              </button>
              <button 
                class="tab-btn" 
                :class="{ 'active': authModalMode === 'signup' }"
                @click="switchMode('signup')"
              >
                회원가입
              </button>
            </div>
          </div>

          <!-- Alert message -->
          <div v-if="alertMessage" class="alert-box" :class="alertType">
            <span>{{ alertMessage }}</span>
          </div>

          <!-- LOGIN FORM -->
          <div v-if="authModalMode === 'login'" class="form-container">
            <div class="demo-notice">
              <div class="demo-notice-title">💡 빠른 체험용 데모 계정</div>
              <div class="demo-btn-group">
                <button type="button" class="demo-chip" @click="fillDemo('student')">
                  🎓 장학생(홍길동)
                </button>
                <button type="button" class="demo-chip" @click="fillDemo('sponsor')">
                  🤝 후원자(김신라)
                </button>
              </div>
            </div>

            <form @submit.prevent="handleLogin" class="auth-form">
              <div class="form-group">
                <label for="login-email">이메일 주소</label>
                <div class="input-wrapper">
                  <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <input 
                    id="login-email"
                    v-model="loginEmail"
                    type="email" 
                    placeholder="example@silla.or.kr" 
                    required 
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="login-password">비밀번호</label>
                <div class="input-wrapper">
                  <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input 
                    id="login-password"
                    v-model="loginPassword"
                    :type="showLoginPassword ? 'text' : 'password'" 
                    placeholder="비밀번호 입력" 
                    required 
                  />
                  <button type="button" class="password-toggle" @click="showLoginPassword = !showLoginPassword">
                    <svg v-if="!showLoginPassword" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="form-options">
                <label class="checkbox-label">
                  <input type="checkbox" v-model="rememberMe" />
                  <span>아이디 저장</span>
                </label>
                <a href="#" class="forgot-link" @click.prevent="showFindAlert">아이디/비밀번호 찾기</a>
              </div>

              <button type="submit" class="btn btn-primary submit-btn" :disabled="isLoading">
                <span v-if="isLoading" class="spinner"></span>
                <span v-else>로그인</span>
              </button>
            </form>

            <div class="divider">
              <span>또는 간편 로그인</span>
            </div>

            <div class="social-login">
              <button class="social-btn kakao" @click="handleSocialLogin('카카오')">
                <span class="social-icon">💬</span>
                <span>카카오 로그인</span>
              </button>
              <button class="social-btn naver" @click="handleSocialLogin('네이버')">
                <span class="social-icon">N</span>
                <span>네이버 로그인</span>
              </button>
              <button class="social-btn google" @click="handleSocialLogin('구글')">
                <span class="social-icon">G</span>
                <span>구글 로그인</span>
              </button>
            </div>

            <div class="form-footer">
              아직 회원이 아니신가요? 
              <button type="button" class="link-btn" @click="switchMode('signup')">회원가입하기</button>
            </div>
          </div>

          <!-- SIGNUP FORM -->
          <div v-else class="form-container">
            <form @submit.prevent="handleSignup" class="auth-form">
              <!-- Member Type Selection -->
              <div class="form-group">
                <label>회원 유형 선택</label>
                <div class="user-type-selector">
                  <button 
                    type="button" 
                    class="type-btn"
                    :class="{ 'selected': signupType === 'student' }"
                    @click="signupType = 'student'"
                  >
                    <span class="type-icon">🎓</span>
                    <span class="type-title">장학생 신청자</span>
                    <span class="type-desc">대학생 / 고등학생</span>
                  </button>
                  <button 
                    type="button" 
                    class="type-btn"
                    :class="{ 'selected': signupType === 'sponsor' }"
                    @click="signupType = 'sponsor'"
                  >
                    <span class="type-icon">🤝</span>
                    <span class="type-title">후원자 / 일반</span>
                    <span class="type-desc">개인 / 기업 후원회원</span>
                  </button>
                </div>
              </div>

              <div class="form-group">
                <label for="signup-name">이름</label>
                <input 
                  id="signup-name"
                  v-model="signupName"
                  type="text" 
                  placeholder="성함 입력" 
                  required 
                />
              </div>

              <div class="form-group">
                <label for="signup-email">이메일 (아이디)</label>
                <input 
                  id="signup-email"
                  v-model="signupEmail"
                  type="email" 
                  placeholder="example@domain.com" 
                  required 
                />
              </div>

              <div class="form-group">
                <label for="signup-phone">휴대폰 번호</label>
                <input 
                  id="signup-phone"
                  v-model="signupPhone"
                  type="tel" 
                  placeholder="010-0000-0000" 
                  required 
                />
              </div>

              <div class="form-row">
                <div class="form-group flex-1">
                  <label for="signup-password">비밀번호</label>
                  <input 
                    id="signup-password"
                    v-model="signupPassword"
                    type="password" 
                    placeholder="8자 이상 영문/숫자 조합" 
                    required 
                  />
                </div>
                <div class="form-group flex-1">
                  <label for="signup-password-confirm">비밀번호 확인</label>
                  <input 
                    id="signup-password-confirm"
                    v-model="signupPasswordConfirm"
                    type="password" 
                    placeholder="비밀번호 재입력" 
                    required 
                  />
                </div>
              </div>

              <div v-if="signupPasswordConfirm" class="validation-msg" :class="{ 'valid': passwordsMatch, 'invalid': !passwordsMatch }">
                <span v-if="passwordsMatch">✓ 비밀번호가 일치합니다.</span>
                <span v-else>✗ 비밀번호가 일치하지 않습니다.</span>
              </div>

              <!-- Terms Agreement -->
              <div class="terms-group">
                <label class="checkbox-label all-agree">
                  <input type="checkbox" v-model="allAgreed" @change="toggleAllAgreements" />
                  <span><strong>전체 동의하기</strong></span>
                </label>
                <div class="sub-agreements">
                  <label class="checkbox-label">
                    <input type="checkbox" v-model="agreeTerms" />
                    <span>(필수) 이용약관 동의</span>
                  </label>
                  <label class="checkbox-label">
                    <input type="checkbox" v-model="agreePrivacy" />
                    <span>(필수) 개인정보 수집 및 이용 동의</span>
                  </label>
                  <label class="checkbox-label">
                    <input type="checkbox" v-model="agreeMarketing" />
                    <span>(선택) 장학금 공모 안내 및 정보 수신 동의</span>
                  </label>
                </div>
              </div>

              <button type="submit" class="btn btn-primary submit-btn" :disabled="isLoading">
                <span v-if="isLoading" class="spinner"></span>
                <span v-else>회원가입 완료</span>
              </button>
            </form>

            <div class="form-footer">
              이미 계정이 있으신가요? 
              <button type="button" class="link-btn" @click="switchMode('login')">로그인하기</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useAuth, User } from '../composables/useAuth';

const { isAuthModalOpen, authModalMode, closeAuthModal, login, signup } = useAuth();

const isLoading = ref(false);
const alertMessage = ref('');
const alertType = ref<'success' | 'error'>('error');

// Login State
const loginEmail = ref('');
const loginPassword = ref('');
const showLoginPassword = ref(false);
const rememberMe = ref(false);

// Signup State
const signupType = ref<'student' | 'sponsor'>('student');
const signupName = ref('');
const signupEmail = ref('');
const signupPhone = ref('');
const signupPassword = ref('');
const signupPasswordConfirm = ref('');
const agreeTerms = ref(false);
const agreePrivacy = ref(false);
const agreeMarketing = ref(false);

const passwordsMatch = computed(() => {
  return signupPassword.value.length > 0 && signupPassword.value === signupPasswordConfirm.value;
});

const allAgreed = computed({
  get: () => agreeTerms.value && agreePrivacy.value && agreeMarketing.value,
  set: (val: boolean) => {
    agreeTerms.value = val;
    agreePrivacy.value = val;
    agreeMarketing.value = val;
  }
});

const toggleAllAgreements = (e: Event) => {
  const target = e.target as HTMLInputElement;
  agreeTerms.value = target.checked;
  agreePrivacy.value = target.checked;
  agreeMarketing.value = target.checked;
};

const switchMode = (mode: 'login' | 'signup') => {
  authModalMode.value = mode;
  alertMessage.value = '';
};

const fillDemo = (role: 'student' | 'sponsor') => {
  if (role === 'student') {
    loginEmail.value = 'hong@silla.or.kr';
    loginPassword.value = 'scholarship1234!';
  } else {
    loginEmail.value = 'kim@silla.or.kr';
    loginPassword.value = 'sponsor1234!';
  }
  alertType.value = 'success';
  alertMessage.value = `${role === 'student' ? '장학생(홍길동)' : '후원자(김신라)'} 데모 정보를 입력했습니다. [로그인] 버튼을 누르세요.`;
};

const showFindAlert = () => {
  alertType.value = 'success';
  alertMessage.value = '비밀번호 재설정 링크가 입력하신 이메일로 발송됩니다. (안내 메시지)';
};

const handleSocialLogin = (provider: string) => {
  isLoading.value = true;
  alertMessage.value = '';
  
  setTimeout(() => {
    isLoading.value = false;
    const demoUser: User = {
      id: 'soc_' + Date.now(),
      name: `${provider} 사용자`,
      email: `user_${provider.toLowerCase()}@social.com`,
      phone: '010-1234-5678',
      type: 'student',
      createdAt: new Date().toLocaleDateString('ko-KR')
    };
    login(demoUser);
  }, 600);
};

const handleLogin = () => {
  if (!loginEmail.value || !loginPassword.value) {
    alertType.value = 'error';
    alertMessage.value = '이메일과 비밀번호를 입력해주세요.';
    return;
  }

  isLoading.value = true;
  alertMessage.value = '';

  setTimeout(() => {
    isLoading.value = false;
    const isSponsor = loginEmail.value.includes('kim') || loginEmail.value.includes('sponsor');
    const name = isSponsor ? '김신라' : (loginEmail.value.includes('hong') ? '홍길동' : loginEmail.value.split('@')[0]);
    
    const userObj: User = {
      id: 'usr_' + Date.now(),
      name: name,
      email: loginEmail.value,
      phone: '010-9876-5432',
      type: isSponsor ? 'sponsor' : 'student',
      createdAt: new Date().toLocaleDateString('ko-KR')
    };

    login(userObj);
  }, 700);
};

const handleSignup = () => {
  if (!agreeTerms.value || !agreePrivacy.value) {
    alertType.value = 'error';
    alertMessage.value = '필수 이용약관 및 개인정보 동의 항목에 체크해주세요.';
    return;
  }

  if (!passwordsMatch.value) {
    alertType.value = 'error';
    alertMessage.value = '비밀번호가 일치하지 않습니다.';
    return;
  }

  isLoading.value = true;
  alertMessage.value = '';

  setTimeout(() => {
    isLoading.value = false;
    const userObj: User = {
      id: 'usr_' + Date.now(),
      name: signupName.value,
      email: signupEmail.value,
      phone: signupPhone.value,
      type: signupType.value,
      createdAt: new Date().toLocaleDateString('ko-KR')
    };

    signup(userObj);
  }, 800);
};

// Listen to Escape key to close modal
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isAuthModalOpen.value) {
    closeAuthModal();
  }
};

watch(isAuthModalOpen, (val) => {
  if (val) {
    window.addEventListener('keydown', handleKeyDown);
  } else {
    window.removeEventListener('keydown', handleKeyDown);
  }
});
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
  max-width: 440px;
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

.modal-header {
  margin-bottom: 24px;
}

.tab-group {
  display: flex;
  background: #f1f5f9;
  padding: 4px;
  border-radius: 10px;
}

.tab-btn {
  flex: 1;
  padding: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-secondary);
  border-radius: 8px;
  transition: all var(--transition-fast);
}

.tab-btn.active {
  background: #ffffff;
  color: var(--primary-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.alert-box {
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.85rem;
  margin-bottom: 18px;
  line-height: 1.4;
}

.alert-box.error {
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
}

.alert-box.success {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  color: #166534;
}

.demo-notice {
  background: #f0f9ff;
  border: 1px dashed #bae6fd;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 20px;
}

.demo-notice-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: #0369a1;
  margin-bottom: 8px;
}

.demo-btn-group {
  display: flex;
  gap: 8px;
}

.demo-chip {
  background: #ffffff;
  border: 1px solid #7dd3fc;
  color: #0284c7;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 500;
  transition: all var(--transition-fast);
}

.demo-chip:hover {
  background: #e0f2fe;
  transform: translateY(-1px);
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 12px;
  color: #94a3b8;
  pointer-events: none;
}

.auth-form input[type="text"],
.auth-form input[type="email"],
.auth-form input[type="tel"],
.auth-form input[type="password"] {
  width: 100%;
  padding: 11px 14px;
  font-size: 0.9rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  outline: none;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.input-wrapper input {
  padding-left: 38px;
}

.auth-form input:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(6, 91, 137, 0.15);
}

.password-toggle {
  position: absolute;
  right: 12px;
  color: #94a3b8;
  padding: 4px;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.82rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: var(--text-secondary);
}

.forgot-link {
  color: var(--primary-color);
  font-weight: 500;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  font-size: 0.95rem;
  border-radius: 8px;
  margin-top: 6px;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0 16px;
  color: #94a3b8;
  font-size: 0.78rem;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #e2e8f0;
}

.divider span {
  padding: 0 10px;
}

.social-login {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 500;
  transition: opacity var(--transition-fast);
}

.social-btn:hover {
  opacity: 0.9;
}

.social-btn.kakao {
  background: #fee500;
  color: #000000;
}

.social-btn.naver {
  background: #03c75a;
  color: #ffffff;
}

.social-btn.google {
  background: #ffffff;
  color: #333333;
  border: 1px solid #cbd5e1;
}

.social-icon {
  font-weight: bold;
}

.form-footer {
  text-align: center;
  margin-top: 20px;
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.link-btn {
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: underline;
  margin-left: 4px;
}

/* User Type Selector */
.user-type-selector {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 4px;
}

.type-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 8px;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  background: #fafafa;
  transition: all var(--transition-fast);
}

.type-btn.selected {
  border-color: var(--primary-color);
  background: #f0f7fc;
}

.type-icon {
  font-size: 1.3rem;
  margin-bottom: 4px;
}

.type-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
}

.type-desc {
  font-size: 0.72rem;
  color: var(--text-muted);
}

.form-row {
  display: flex;
  gap: 10px;
}

.flex-1 {
  flex: 1;
}

.validation-msg {
  font-size: 0.78rem;
  margin-top: -8px;
}

.validation-msg.valid {
  color: #16a34a;
}

.validation-msg.invalid {
  color: #dc2626;
}

.terms-group {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.all-agree {
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 8px;
}

.sub-agreements {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-left: 6px;
  font-size: 0.78rem;
}

/* Spinner */
.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 0.8s linear infinite;
  display: inline-block;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
