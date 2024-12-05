import { useRef, useCallback, useState } from 'react';
import fileUpload from '/fileUpload.svg';
import axios from 'axios';
import { HiddenInput, UploadButton, ImageBox, PreviewImage } from './SettingClubThumbnail.style';

export const SettingClubImage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [uploadImgUrl, setUploadImgUrl] = useState('');

  const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const { files } = e.target;
    const uploadFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile); // 선택한 파일을 url로 변환
    reader.onloadend = () => {
      if (reader.result) {
        setUploadImgUrl(reader.result as string);
      }
      //  console.log(reader.result);
    };
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    // axios({
    //   url: '/images/:username/thumbnail',
    //   method: 'POST',
    //   data: uploadImgUrl,
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);

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
