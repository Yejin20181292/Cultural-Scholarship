import { ref } from 'vue';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'student' | 'sponsor';
  createdAt: string;
}

const STORAGE_KEY = 'cultural_scholarship_user';

const getStoredUser = (): User | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (e) {
    return null;
  }
};

const user = ref<User | null>(getStoredUser());
const isAuthModalOpen = ref(false);
const authModalMode = ref<'login' | 'signup'>('login');
const isMyPageModalOpen = ref(false);

export function useAuth() {
  const openAuthModal = (mode: 'login' | 'signup' = 'login') => {
    authModalMode.value = mode;
    isAuthModalOpen.value = true;
  };

  const closeAuthModal = () => {
    isAuthModalOpen.value = false;
  };

  const openMyPageModal = () => {
    isMyPageModalOpen.value = true;
  };

  const closeMyPageModal = () => {
    isMyPageModalOpen.value = false;
  };

  const login = (userData: User) => {
    user.value = userData;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    closeAuthModal();
  };

  const logout = () => {
    user.value = null;
    localStorage.removeItem(STORAGE_KEY);
    isMyPageModalOpen.value = false;
  };

  const signup = (userData: User) => {
    user.value = userData;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    closeAuthModal();
  };

  return {
    user,
    isAuthModalOpen,
    authModalMode,
    isMyPageModalOpen,
    openAuthModal,
    closeAuthModal,
    openMyPageModal,
    closeMyPageModal,
    login,
    logout,
    signup
  };
}
