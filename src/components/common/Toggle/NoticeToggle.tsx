import { useEffect } from 'react';

import { SwitchToggle } from 'pov-design-system';

import { ToggleWrapper, Label } from '@/components/common/Toggle/Toggle.styles';
import useNotificationPermission from '@/hooks/utils/useNotificationPermission';
import { useToast } from '@/hooks/common/useToast';

const NoticeToggle = () => {
  const { permission, handlePermissionChange, detectPermissionChanges } = useNotificationPermission();
  const { createToast } = useToast();

  useEffect(() => {
    detectPermissionChanges();
  }, []); // 컴포넌트 마운트 시 실행

  const handleToggleClick = () => {
    if (Notification.permission !== 'granted') {
      createToast('브라우저 알림 권한을 허용으로 변경해주세요.');
      console.log('알림이 허용되지 않았습니다. 브라우저에서 알림 권한을 허용으로 변경해주세요.');
      return;
    }
    handlePermissionChange();
  };

  return (
    <ToggleWrapper>
      <Label size="xLarge">{permission === 'granted' ? '알림 켜짐' : '알림 꺼짐'}</Label>
      <SwitchToggle
        onChange={handleToggleClick}
        checkedState={permission === 'granted'} // 알림 허용 상태가 granted이면 스위치 켜짐
      />
    </ToggleWrapper>
  );
};

export default NoticeToggle;
