import { useState, useCallback } from 'react';
import { ToastConfig } from '../../components/molecules/Toast/Toast.types';

interface ToastState extends ToastConfig {
  id: string;
  visible: boolean;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const showToast = useCallback((config: ToastConfig) => {
    const id = Date.now().toString();
    const newToast: ToastState = {
      ...config,
      id,
      visible: true,
    };

    setToasts(prev => [...prev, newToast]);

    setTimeout(() => {
      hideToast(id);
    }, config.duration || 3000);

    return id;
  }, []);

  const hideToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const hideAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  const showSuccess = useCallback((message: string, duration?: number) => {
    return showToast({ message, type: 'success', duration });
  }, [showToast]);

  const showError = useCallback((message: string, duration?: number) => {
    return showToast({ message, type: 'error', duration });
  }, [showToast]);

  const showWarning = useCallback((message: string, duration?: number) => {
    return showToast({ message, type: 'warning', duration });
  }, [showToast]);

  const showInfo = useCallback((message: string, duration?: number) => {
    return showToast({ message, type: 'info', duration });
  }, [showToast]);

  return {
    toasts,
    showToast,
    hideToast,
    hideAllToasts,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };
};
