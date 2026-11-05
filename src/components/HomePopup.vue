<template>
  <Teleport to="body">
    <Transition name="popup-fade">
      <div v-if="isOpen" class="popup-overlay">
        <div
          ref="cardRef"
          class="popup-card"
          :class="{ 'is-dragging': isDragging }"
          :style="dragStyle"
          role="dialog"
          aria-modal="true"
          aria-labelledby="home-popup-title"
          @pointerdown="startDrag"
          @pointermove="onDrag"
          @pointerup="endDrag"
          @pointercancel="endDrag"
        >
          <!-- 끌 수 있는 영역(상단 70px). 커서 모양을 보여주기 위한 것이고 실제 판정은 startDrag에서 한다. -->
          <div class="popup-drag-zone" aria-hidden="true"></div>

          <button class="popup-x" @click="close" aria-label="닫기">&times;</button>

          <div class="popup-head">
            <span class="popup-eyebrow">SCHOLARSHIP TO DATE</span>
            <h2 id="home-popup-title" class="popup-title title-serif">장학금 지급 현황</h2>
            <p class="popup-desc">신라문화장학재단이 지금까지 지원해 온 기록입니다.</p>
          </div>

          <div class="popup-figures">
            <div class="popup-figure">
              <span class="popup-figure-num title-serif">{{ awardTotalAmount }}<span class="popup-unit">원</span></span>
              <span class="popup-figure-label">누적 지급액</span>
            </div>
            <div class="popup-figure">
              <span class="popup-figure-num title-serif">{{ awardTotalCount }}<span class="popup-unit">명</span></span>
              <span class="popup-figure-label">누적 선발인원</span>
            </div>
          </div>

          <button class="btn btn-primary popup-more" @click="goToAwards">
            <span>연도별 상세 보기</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          <div class="popup-foot">
            <label class="popup-check">
              <input type="checkbox" v-model="hideToday" />
              <span>오늘 하루 열지 않기</span>
            </label>
            <button class="popup-foot-btn" @click="close">닫기</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { awardTotalAmount, awardTotalCount } from '../data/awards';

const emit = defineEmits<{ (e: 'navigate', view: 'scholarship-sub', subTab: string): void }>();

const STORAGE_KEY = 'cultural_scholarship_popup_hidden';

// 저장값은 '열지 않기'를 누른 날짜(YYYY-MM-DD). 날짜가 바뀌면 다시 뜬다.
// 방문자의 현지 시간 기준이며, 자정이 지나면 자동으로 풀린다.
const todayKey = (): string => {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${mm}-${dd}`;
};

const isOpen = ref(false);
const hideToday = ref(false);

// ----- 드래그로 위치 옮기기 -----
// 버튼·체크박스를 누른 경우는 드래그로 보지 않는다. 그 외 테두리·여백·글자 영역을 잡으면 움직인다.
const DRAG_IGNORE = 'button, input, label, a, select, textarea';
const DRAG_HANDLE_HEIGHT = 70; // 팝업 위쪽 이 높이까지만 잡아 끌 수 있다
const EDGE_GAP = 8; // 화면 밖으로 완전히 빠져나가지 않도록 남겨두는 여백

const cardRef = ref<HTMLElement | null>(null);
const dragPos = ref<{ left: number; top: number } | null>(null);
const isDragging = ref(false);
let grabOffset = { x: 0, y: 0 };

// 드래그를 시작하기 전에는 overlay의 flex 배치(좌측 상단)를 그대로 따른다.
// 좌표는 화면이 아니라 문서 기준이라, 옮긴 뒤에도 스크롤을 따라오지 않는다.
const dragStyle = computed(() =>
  dragPos.value
    ? { position: 'absolute' as const, left: `${dragPos.value.left}px`, top: `${dragPos.value.top}px`, margin: '0' }
    : undefined
);

// 끄는 동안에는 화면 안에 머물도록 가둔다. 문서 좌표이므로 현재 스크롤 위치를 더해 계산한다.
const clamp = (left: number, top: number) => {
  const el = cardRef.value;
  if (!el) return { left, top };
  const minLeft = window.scrollX + EDGE_GAP;
  const minTop = window.scrollY + EDGE_GAP;
  const maxLeft = window.scrollX + window.innerWidth - el.offsetWidth - EDGE_GAP;
  const maxTop = window.scrollY + window.innerHeight - el.offsetHeight - EDGE_GAP;
  return {
    left: Math.min(Math.max(left, minLeft), Math.max(maxLeft, minLeft)),
    top: Math.min(Math.max(top, minTop), Math.max(maxTop, minTop))
  };
};

const startDrag = (e: PointerEvent) => {
  const el = cardRef.value;
  if (!el) return;
  if ((e.target as HTMLElement).closest(DRAG_IGNORE)) return;

  const rect = el.getBoundingClientRect();
  if (e.clientY - rect.top > DRAG_HANDLE_HEIGHT) return;

  grabOffset = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  dragPos.value = { left: rect.left + window.scrollX, top: rect.top + window.scrollY };
  isDragging.value = true;
  el.setPointerCapture(e.pointerId);
  e.preventDefault();
};

const onDrag = (e: PointerEvent) => {
  if (!isDragging.value) return;
  dragPos.value = clamp(
    e.clientX + window.scrollX - grabOffset.x,
    e.clientY + window.scrollY - grabOffset.y
  );
};

const endDrag = (e: PointerEvent) => {
  if (!isDragging.value) return;
  isDragging.value = false;
  cardRef.value?.releasePointerCapture(e.pointerId);
};

// 창 폭이 줄어 팝업이 오른쪽으로 밀려나면 다시 안쪽으로 당긴다.
// 세로는 건드리지 않는다. 스크롤을 내린 상태에서 끌어올려 버리면 '따라오는' 것처럼 보이기 때문이다.
const onResize = () => {
  const el = cardRef.value;
  if (!dragPos.value || !el) return;
  const maxLeft = Math.max(document.documentElement.clientWidth - el.offsetWidth - EDGE_GAP, EDGE_GAP);
  dragPos.value = {
    left: Math.min(Math.max(dragPos.value.left, EDGE_GAP), maxLeft),
    top: dragPos.value.top
  };
};

const close = () => {
  if (hideToday.value) {
    try {
      localStorage.setItem(STORAGE_KEY, todayKey());
    } catch (e) {
      // 시크릿 모드 등 저장이 막힌 환경에서는 이번만 닫힌다.
    }
  }
  isOpen.value = false;
};

const goToAwards = () => {
  close();
  emit('navigate', 'scholarship-sub', 'awards');
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) close();
};

onMounted(() => {
  let hidden: string | null = null;
  try {
    hidden = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    hidden = null;
  }

  if (hidden !== todayKey()) {
    isOpen.value = true;
  }

  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('resize', onResize);
});
</script>

<style scoped>
/* 뒷배경을 가리지 않는다. 겹친 영역 밖의 클릭·스크롤은 그대로 페이지로 전달된다. */
/* fixed가 아니라 absolute라서 스크롤을 내리면 팝업은 제자리에 남고 화면 밖으로 지나간다. */
.popup-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  /* 위쪽 여백은 고정 헤더(--header-height: 80px) 아래로 내리기 위한 값이다. */
  padding: calc(var(--header-height, 80px) + 24px) 24px 24px 40px;
  /* 상단 메뉴바(.header 1000, 모바일 메뉴 999)보다 아래. 본문보다는 위. */
  z-index: 900;
}

.popup-card {
  pointer-events: auto;
  position: relative;
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  /* 어두운 배경이 없으므로 테두리와 그림자로 본문과 분리한다. */
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 18px 50px rgba(12, 21, 36, 0.22);
  overflow: hidden;
}

/* 상단 70px만 잡아 끌 수 있다. 닫기(×) 버튼은 이 위에 떠 있어 그대로 눌린다. */
.popup-drag-zone {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  cursor: move;
  z-index: 1;
}

/* 끌고 있는 동안에는 글자가 선택되거나 전환 효과가 따라붙지 않게 한다. */
.popup-card.is-dragging {
  cursor: grabbing;
  user-select: none;
  transition: none;
}

.popup-card.is-dragging .popup-drag-zone {
  cursor: grabbing;
}

.popup-x {
  position: absolute;
  z-index: 2;
  top: 12px;
  right: 14px;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  font-size: 1.7rem;
  line-height: 1;
  color: var(--text-secondary);
  cursor: pointer;
}

.popup-x:hover { color: var(--text-primary); }

.popup-head {
  padding: 40px 32px 0;
  text-align: center;
}

.popup-eyebrow {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.popup-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.popup-desc {
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--text-secondary);
}

.popup-figures {
  padding: 26px 32px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.popup-figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 20px 16px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: #f3f6fa;
}

.popup-figure-num {
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--primary-color);
}

.popup-unit {
  font-size: 1rem;
  font-weight: 600;
  margin-left: 3px;
}

.popup-figure-label {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.popup-more {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: calc(100% - 64px);
  margin: 22px 32px 26px;
  padding: 13px 0;
  font-size: 0.92rem;
}

.popup-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 10px 0 16px;
  border-top: 1px solid var(--border-color);
  background: #fafbfd;
}

.popup-check {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.86rem;
  font-weight: 400;
  color: var(--text-secondary);
  cursor: pointer;
  user-select: none;
}

.popup-check input {
  width: 15px;
  height: 15px;
  accent-color: var(--primary-color);
  cursor: pointer;
}

.popup-check:hover { color: var(--text-primary); }

.popup-foot-btn {
  padding: 14px 18px;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-secondary);
  cursor: pointer;
}

.popup-foot-btn:hover {
  color: var(--text-primary);
}

.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: opacity 0.25s ease;
}

.popup-fade-enter-active .popup-card,
.popup-fade-leave-active .popup-card {
  transition: transform 0.25s ease;
}

.popup-fade-enter-from,
.popup-fade-leave-to {
  opacity: 0;
}

.popup-fade-enter-from .popup-card,
.popup-fade-leave-to .popup-card {
  transform: translateY(-10px) scale(0.97);
}

@media (max-width: 480px) {
  .popup-overlay {
    padding: calc(var(--header-height, 80px) + 14px) 16px 16px 16px;
  }
  .popup-head { padding: 34px 22px 0; }
  .popup-figures { padding: 20px 22px 0; }
  .popup-more { width: calc(100% - 44px); margin: 18px 22px 22px; }
  .popup-figure-num { font-size: 1.45rem; }
}
</style>
