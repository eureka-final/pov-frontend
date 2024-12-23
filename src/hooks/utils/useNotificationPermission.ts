import { useEffect, useState } from 'react';
import { putMemberNotice } from '@/apis/member/putMember';

const useNotificationPermission = () => {
  const [permission, setPermission] = useState<string | null>('');
  const currentPermission = localStorage.getItem('notification');

  useEffect(() => {
    setPermission(currentPermission);
  }, []);

  // NoticeToggle로 변경하는 경우
  const handlePermissionChange = async () => {
    const currentPermission = localStorage.getItem('notification');

    // denied -> granted로 변경하는 경우
    if (currentPermission === 'denied') {
      // 브라우저 알림 권한이 granted인 경우 알림 true로 변경 요청
      if (Notification.permission === 'granted') {
        const response = await putMemberNotice(true);
        if (response) {
          setPermission('granted');
          localStorage.setItem('notification', 'granted');
        }
        return;
      }
    } else {
      // granted -> denied로 변경하는 경우
      const response = await putMemberNotice(false);
      if (response) {
        setPermission('denied');
        localStorage.setItem('notification', 'denied');
      }
    }
  };

  // 브라우저에서 직접 변경하는 경우
  const detectPermissionChanges = () => {
    navigator.permissions.query({ name: 'notifications' }).then((permissionStatus) => {
      permissionStatus.onchange = () => {
        console.log('알림 권한이 변경되었습니다:', permissionStatus.state);

        if (permissionStatus.state === 'granted') {
          if (localStorage.getItem('notification') === 'denied') {
            putMemberNotice(true);
            setPermission('granted');
            localStorage.setItem('notification', 'granted');
          }
        } else {
          putMemberNotice(false);
          setPermission('denied');
          localStorage.setItem('notification', 'denied');
        }
      };
    });
  };
  return { permission, handlePermissionChange, detectPermissionChanges };
};

export default useNotificationPermission;
