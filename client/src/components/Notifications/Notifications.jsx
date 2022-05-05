import React from 'react';

import { useNotificationStore } from '../../stores/notifications';
import { Notification } from './Notification';

export function Notifications() {
  const { notifications, dismissNotification } = useNotificationStore();

  return (
    <div>
      {notifications.map((notificationData) => (
        <Notification
          notificationData={notificationData}
          dismissNotification={dismissNotification}
          key={notificationData?.id}
        />
      ))}
    </div>
  );
}

export default Notifications;
