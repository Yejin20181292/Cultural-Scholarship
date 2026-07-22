<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="#" class="logo">
            <img src="../assets/logo.png" alt="재단법인 신라문화장학재단" class="logo-img" />
          </a>
          <p class="brand-credo">
            문화와 예술의 미래를 이끌어갈 창의적인 인재를 발굴하고 육성하여 
            풍요롭고 품격 있는 사회를 만들어 갑니다.
          </p>
        </div>

        <div class="footer-links-group">
          <div class="footer-links-col">
            <h4 class="col-title title-serif">SITEMAP</h4>
            <ul>
              <li><a href="#about">재단 소개</a></li>
              <li><a href="#programs">장학 사업</a></li>
              <li><a href="#notices">재단 소식</a></li>
            </ul>
          </div>
          
          <div class="footer-links-col">
            <h4 class="col-title title-serif">SUPPORT</h4>
            <ul>
              <li><a href="#programs">지원자격 진단</a></li>
              <li><a href="#programs">온라인 장학 신청</a></li>
              <li><a href="#">FAQ / 문의</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <div class="footer-info">
          <p>재단법인 신라문화장학재단 | 이사장 : 홍길동 | 사업자등록번호 : 123-45-67890</p>
          <p>주소 : 서울특별시 종로구 대학로 123 예술인회관 5층 | 대표전화 : 02-123-4567 | 이메일 : contact@culturalfoundation.or.kr</p>
          <p class="copyright">© 2026 Silla Cultural Scholarship Foundation. All Rights Reserved.</p>
        </div>

        <div class="footer-socials-privacy">
          <div class="footer-privacy">
            <a href="#" class="privacy-link bold-gold">개인정보처리방침</a>
            <span class="privacy-divider">|</span>
            <a href="#">이용약관</a>
            <span class="privacy-divider">|</span>
            <a href="#">이메일무단수집거부</a>
          </div>
          
          <div class="social-icons">
            <a href="#" aria-label="Instagram" class="social-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="Youtube" class="social-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a href="#" aria-label="Facebook" class="social-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Static footer component
</script>

<style scoped>
.footer {
  background-color: #0c1524;
  color: rgba(255, 255, 255, 0.6);
  padding: 80px 0 50px;
  border-top: 1px solid var(--border-color);
  font-size: 0.9rem;
}

.footer-container {
  display: flex;
  flex-direction: column;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 40px;
}

.footer-brand {
  max-width: 450px;
}

.logo {
  display: flex;
  align-items: center;
  transition: transform var(--transition-fast);
  margin-bottom: 20px;
  max-width: fit-content;
}

.logo:hover {
  transform: scale(1.02);
}

.logo-img {
  height: 40px;
  width: auto;
  display: block;
}

.brand-credo {
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 300;
  word-break: keep-all;
}

.footer-links-group {
  display: flex;
  gap: 80px;
}

.footer-links-col h4 {
  color: var(--primary-color);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  margin-bottom: 20px;
}

.footer-links-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links-col a {
  color: rgba(255, 255, 255, 0.75);
  transition: color var(--transition-fast);
  font-weight: 300;
}

.footer-links-col a:hover {
  color: var(--primary-color);
}

.footer-divider {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.08);
  margin-bottom: 40px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 700px;
  text-align: left;
}

.footer-info p {
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.5;
  font-weight: 300;
  word-break: keep-all;
}

.footer-info .copyright {
  margin-top: 10px;
  font-size: 0.85rem;
}

.footer-socials-privacy {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
}

.footer-privacy {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
}

.footer-privacy a {
  color: rgba(255, 255, 255, 0.45);
  transition: color var(--transition-fast);
}

.footer-privacy a:hover {
  color: #ffffff;
}

.bold-gold {
  color: var(--primary-color) !important;
  font-weight: 500;
}

.privacy-divider {
  color: rgba(255, 255, 255, 0.1);
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: all var(--transition-normal);
}

.social-btn:hover {
  background-color: var(--primary-color);
  color: var(--bg-color);
  border-color: var(--primary-color);
  transform: translateY(-3px);
}

@media (max-width: 1024px) {
  .footer-top {
    flex-direction: column;
    gap: 40px;
  }
  
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
  
  .footer-socials-privacy {
    align-items: flex-start;
    width: 100%;
  }
}
</style>
