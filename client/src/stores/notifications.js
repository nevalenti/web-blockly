import create from 'zustand';
import { nanoid } from 'nanoid';

export const useNotificationStore = create((set) => ({
  notifications: [],
  addNotification: (notification) => set((state) => ({
    notifications: [...state.notifications, { id: nanoid(), ...notification }],
  })),
  dismissNotification: (id) => set((state) => ({
    notifications: state.notifications.filter((notification) => notification.id !== id),
  })),
}));

export default useNotificationStore;
