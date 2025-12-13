import { atom } from 'nanostores';

export type IslandState = 'idle' | 'notification' | 'expanded' | 'call';

export type NotificationData = {
  title: string;
  description: string;
  icon?: string;
};

export const $islandState = atom<IslandState>('idle');
export const $notificationData = atom<NotificationData | null>(null);

// Helper to trigger a notification
export function showNotification(data: NotificationData) {
  $notificationData.set(data);
  $islandState.set('notification');
  
  // Auto dismiss after 3s
  setTimeout(() => {
    if ($islandState.get() === 'notification') {
      $islandState.set('idle');
      $notificationData.set(null);
    }
  }, 3000);
}
