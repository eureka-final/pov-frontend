import { useRef, useCallback } from 'react';
import fileUpload from '/fileUpload.svg';
import { HiddenInput, UploadButton, ImageBox, PreviewImage } from './SettingClubImage.style';
import axios from 'axios';

interface ClubImageProps {
  uploadImgUrl: string;
  onUploadImgUrl: (value: string) => void;
}

// eslint-disable-next-line react/prop-types
export const SettingClubImage: React.FC<ClubImageProps> = ({ uploadImgUrl, onUploadImgUrl }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }

      const { files } = e.target;
      const uploadFile = files[0];

      // FormData 객체 api 전송
      const formData = new FormData();
      formData.append('image', uploadFile);
      axios({
        url: '/images/:username/thumbnail',
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

      // 미리보기를 위한 base64 처리
      const reader = new FileReader();
      reader.readAsDataURL(uploadFile); // 선택한 파일을 url로 변환
      reader.onloadend = () => {
        if (reader.result) {
          onUploadImgUrl(reader.result as string);
        }
      };
    },
    [onUploadImgUrl]
  );

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <>
      {/* 파일 입력 */}
      <HiddenInput type="file" accept="image/*" ref={inputRef} onChange={onUploadImage} />

      {/* 업로드 버튼 */}
      {!uploadImgUrl && <UploadButton src={fileUpload} alt="File Upload" onClick={onUploadImageButtonClick} />}

      {/* 이미지 미리보기 */}
      {uploadImgUrl && (
        <ImageBox>
          <PreviewImage src={uploadImgUrl} alt="Preview" />
        </ImageBox>
      )}
    </>
  );
};
