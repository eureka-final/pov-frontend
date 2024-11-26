import { useMemo, useState, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import 'react-quill/dist/quill.snow.css';
import { CustomQuillEditorView } from './ReactEditor.style';
import ReactModule from './ReactModule';
import dompurify from 'dompurify';
import axios from 'axios';

Quill.register('modules/imageResize', ImageResize);

const ReactEditor = () => {
  const [content, setContent] = useState<string>('');

  // 스크립트를 활용하여 javascript와 HTML로 악성 코드를 웹 브라우저에 심어,
  // 사용자 접속시 그 악성코드가 실행되는 것을 XSS, 보안을 위해 sanitize 추가
  const sanitizer = dompurify.sanitize;

  const formats: string[] = [
    'header',
    'size',
    'font',
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
    'script',
    'clean',
  ];

  const quillRef = useRef<ReactQuill | null>(null);

  const imageHandler = (): void => {
    const input: HTMLInputElement = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.setAttribute('multiple', 'multiple');
    input.click();

    input.onchange = async (): Promise<void> => {
      const file: FileList | null = input.files;
      if (quillRef.current) {
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();

        if (range && file !== null) {
          const reader = new FileReader();
          for (let i = 0; i < file.length; i++) {
            reader.readAsDataURL(file[i]);

            reader.onloadend = () => {
              // 현재 인덱스가 안전하게 설정되었는지 확인
              const index = range.index !== undefined ? range.index : editor.getLength();

              // 에디터에 이미지 삽입
              editor.insertEmbed(index, 'image', reader.result);

              // 커서를 삽입한 이미지 바로 뒤로 설정
              const newRange = {
                index: index + 1, // 이미지를 붙여넣고 나면 커서를 현재 위치의 바로 옆으로 이동시킨다.
                length: 0, // 선택 없이 커서만 설정
              };

              // 새로운 range로 커서 위치 설정
              editor.setSelection(newRange);
            };

            const formData = new FormData();
            formData.append('files', file[i]);

            // 이미지 업로드 시 서버로 전송
            try {
              await axios.post('/board/boardUploadImage', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
              });
            } catch (err) {
              console.error(err);
            }
          }
        } else {
          console.warn('Editor가 포커스되지 않았거나 선택된 range가 없습니다');
        }
      }
    };
  };

  const modules: object = useMemo(
    () => ({
      toolbar: {
        container: '#toolBar',
        handlers: { image: imageHandler },
      },
      imageResize: {
        // https://www.npmjs.com/package/quill-image-resize-module-react 참고
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize', 'Toolbar'],
      },
    }),
    []
  );

  return (
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
        value={content}
        onChange={setContent}
        placeholder={'영화에 대한 리뷰를 남겨주세요!'}
      />

      <div id="content">
        {content}
        <div dangerouslySetInnerHTML={{ __html: sanitizer(`${content}`) }} />
      </div>
    </CustomQuillEditorView>
  );
};

export default ReactEditor;
