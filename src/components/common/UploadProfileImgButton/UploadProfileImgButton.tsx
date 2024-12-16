import { useRef } from 'react';
import { Avatar, Icon } from 'pov-design-system';
import { UploadProfileImgButtonContainer, UploadImgButton } from './UploadProfileImgButton.style';
import { putProfileImage } from '../../../apis/member/putMember';

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
      const response = await putProfileImage(targetFile);
      if (response) {
        handleChangeProfileImage(response.data.data.profileImage);
      }
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
      <UploadImgButton>
        <Icon icon="camera" css={{ width: '16px' }} />
      </UploadImgButton>
    </UploadProfileImgButtonContainer>
  );
};

export default UploadProfileImgButton;
