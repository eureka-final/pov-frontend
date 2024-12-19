import { useMemo, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import 'react-quill/dist/quill.snow.css';
import { CustomQuillEditorView } from './ReactEditor.style';
import ReactModule from './ReactModule';
import { useToast } from '../../../hooks/common/useToast';
import { axiosInstance } from '../../../apis/axiosInstance';
import { Input } from 'pov-design-system';
import Parchment from 'parchment';

Quill.register('modules/imageResize', ImageResize);
Quill.register('parchment', Parchment);

interface ReactEditorProps {
  title: string;
  content: string;
  onChangeTitle: (title: string) => void;
  onChangeContent: (content: string) => void;
}
// eslint-disable-next-line react/prop-types
const ReactEditor: React.FC<ReactEditorProps> = ({ title, content, onChangeTitle, onChangeContent }) => {
  // 스크립트를 활용하여 javascript와 HTML로 악성 코드를 웹 브라우저에 심어,
  // 사용자 접속시 그 악성코드가 실행되는 것을 XSS, 보안을 위해 sanitize 추가
  const { movieId } = useParams<{ movieId: string }>();

  const { createToast } = useToast();

  const formats: string[] = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'background',
    'align',
  ];

  const quillRef = useRef<ReactQuill | null>(null);

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const currentContent = editor.root.innerHTML;

      // 현재 내용과 상태의 content가 다른 경우에만 업데이트
      if (currentContent !== content) {
        editor.setContents(editor.clipboard.convert(content)); // 상태 반영
      }
    }
  }, [content]);

  const imageHandler = (): void => {
    const input: HTMLInputElement = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/jpg,image/png,image/jpeg');
    input.setAttribute('multiple', 'multiple');
    input.click();

    input.onchange = async (): Promise<void> => {
      const files: FileList | null = input.files;
      if (!files) return;

      // 단일 파일 크기 제한 검사
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > 2 * 1024 * 1024) {
          // 2MB
          createToast(`파일 사이즈를 2MB 이하로 업로드해주세요.`);
          return;
        }
      }

      // 전체 파일 크기 제한 검사
      const totalSize = Array.from(files).reduce((acc, file) => acc + file.size, 0);
      if (totalSize > 10 * 1024 * 1024) {
        // 10MB
        createToast('전체 파일 크기가 10MB를 초과했습니다.');
        return;
      }

      // 최대 업로드 개수 제한 검사
      if (files.length > 5) {
        createToast('최대 5개의 파일만 업로드할 수 있습니다.');
        return;
      }

      if (quillRef.current) {
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();

        if (!range) {
          console.warn('Editor가 포커스되지 않았거나 선택된 range가 없습니다');
          return;
        }

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          formData.append('files', files[i]); // 여러 파일 추가
        }

        // reviewImageMutation.mutate(
        //   { movieId: movieId!, formData },
        //   {
        //     onSuccess: (data) => {
        //       const { imageUrls } = data.data;

        //       if (imageUrls && Array.isArray(imageUrls)) {
        //         imageUrls.forEach((url) => {
        //           const index = range.index !== undefined ? range.index : editor.getLength();
        //           editor.insertEmbed(index, 'image', url);
        //           editor.setSelection(index + 1, 0); // 커서를 이미지 뒤로 이동
        //         });
        //       }
        //     },
        //   }
        // );

        try {
          const res = await axiosInstance.post(`https://www.point-of-views.com/api/movies/${movieId}/reviews/images`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          const { imageUrls } = res.data.data;

          if (imageUrls && Array.isArray(imageUrls)) {
            imageUrls.forEach((url) => {
              const index = range.index !== undefined ? range.index : editor.getLength();
              editor.insertEmbed(index, 'image', url);
              editor.setSelection(index + 1, 0); // 커서를 이미지 뒤로 이동
            });
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          // 에러 처리
          if (err.response) {
            const { status, data } = err.response;

            if (status === 400) {
              createToast(data.message || '지원하지 않는 파일 형식입니다.');
            } else if (status === 413) {
              createToast(data.message || '파일 크기가 제한을 초과했습니다.');
            } else {
              createToast('이미지 업로드 중 문제가 발생했습니다.');
            }
          } else {
            console.error('요청 중 오류 발생:', err);
          }
        }
      }
    };
  };

  // 모듈은 이미지핸들러를 참조하고 있으므로 이미지핸들러 함수는 모듈보다 위에 위치해야 함을 유의하자.
  const modules: object = useMemo(
    () => ({
      toolbar: {
        container: '#toolBar',
        handlers: { image: imageHandler },
      },
      imageResize: {
        // https://www.npmjs.com/package/quill-image-resize-module-react 참고
        modules: ['Resize', 'DisplaySize', 'Toolbar'],
      },
    }),
    []
  );

  // TODO: 제목 글자수 제한 설정
  return (
    <>
      <Input
        id="title"
        name="title"
        value={title}
        placeholder="제목을 입력해 주세요"
        supportingText="85자 내로 입력해주세요"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const newTitle = e.target.value;
          if (newTitle.length <= 85) {
            onChangeTitle(newTitle);
          }
        }}
      />

      <CustomQuillEditorView>
        <div id="toolBar">
          <ReactModule />
        </div>
        <ReactQuill
          theme="snow"
          ref={quillRef}
          modules={modules}
          formats={formats}
          id="quillContent"
          value={content} // 상태와 연결
          onChange={(html) => onChangeContent(html)}
          placeholder={'...영화에 대한 리뷰를 남겨주세요!'}
        />
      </CustomQuillEditorView>
    </>
  );
};

export default ReactEditor;
