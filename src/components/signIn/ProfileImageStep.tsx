import UploadProfileImgButton from '../common/UploadProfileImgButton/UploadProfileImgButton';

interface GenreStepProps {
  profileImageUrl: string;
  handleChangeProfileImageUrl: (url: string) => void;
}

const ProfileImageStep = ({ profileImageUrl, handleChangeProfileImageUrl }: GenreStepProps) => {
  return <UploadProfileImgButton profileImageUrl={profileImageUrl} handleChangeProfileImage={handleChangeProfileImageUrl}></UploadProfileImgButton>;
};
export default ProfileImageStep;
