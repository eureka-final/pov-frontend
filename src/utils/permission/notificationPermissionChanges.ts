export function notificationPermissionChanges() {
  navigator.permissions.query({ name: 'notifications' }).then((permissionStatus) => {
    console.log('초기 권한 상태:', permissionStatus.state);

    // 권한 상태 변경 감지
    permissionStatus.onchange = () => {
      console.log('알림 권한이 변경되었습니다:', permissionStatus.state);

      // 상태에 따라 동작 처리
      if (permissionStatus.state === 'granted') {
        console.log('알림 권한이 허용되었습니다. 알림을 보낼 준비가 되었습니다.');
      } else if (permissionStatus.state === 'denied') {
        console.log('알림 권한이 거부되었습니다. 설정 변경을 유도하세요.');
      }
    };
  });
}
