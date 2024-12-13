import { useRef } from 'react';
import { Avatar, Icon } from 'pov-design-system';
import { UploadProfileImgButtonContainer, UploadImgButton } from './UploadProfileImgButton.style';

interface UploadProfileImgButtonProps {
  profileImageUrl: string;
  handleChangeProfileImage: (profileImageUrl: string) => void;
}

const UploadProfileImgButton = ({ profileImageUrl, handleChangeProfileImage }: UploadProfileImgButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 사진 파일 선택창 표시
  const handleUploadProfileImg = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  };

  // 사진을 S3에 업로드 후 URL을 상태에 업데이트
  const handleFileInputSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // 파일이 존재하지 않을 경우 return
    const targetFile = event.target.files?.[0];
    if (!targetFile) return;

    // 파일을 업로드하고 URL을 받아와 상태에 저장
    try {
      const profileImgUrl = 'https://cdn2.ppomppu.co.kr/zboard/data3/2024/0927/m_20240927130534_2fRINwJ70R.jpg'; // TODO 프로필 이미지 업로드 API 개발되면 수정
      // const profileImgUrl = await uploadProfileImg(targetFile);
      handleChangeProfileImage(profileImgUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UploadProfileImgButtonContainer onClick={handleUploadProfileImg}>
      <Avatar size="large" src={profileImageUrl}></Avatar>
      <input
        ref={fileInputRef}
        type="file"
        accept=".jpg .png .jpeg"
        onChange={handleFileInputSubmit}
        style={{ width: '160px', height: '160px', display: 'none' }}
      />
      {/* TODO UploadImgButton 카메라 아이콘으로 수정 */}
      <UploadImgButton>
        <Icon icon="camera" css={{ width: '16px' }} />
      </UploadImgButton>
    </UploadProfileImgButtonContainer>
  );
};

export default UploadProfileImgButton;
