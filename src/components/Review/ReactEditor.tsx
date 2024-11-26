import { useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CustomQuillEditorView } from './ReactEditor.style';
import ReactModule from './ReactModule';
import dompurify from 'dompurify';

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

  const modules: object = useMemo(
    () => ({
      toolbar: {
        container: '#toolBar',
      },
    }),
    []
  );

  return (
    <CustomQuillEditorView>
      <div id="toolBar">
        <ReactModule />
      </div>
      <ReactQuill theme="snow" modules={modules} formats={formats} id="quillContent" value={content} onChange={setContent} />

      <div id="content">
        <div dangerouslySetInnerHTML={{ __html: sanitizer(`${content}`) }} />
      </div>
    </CustomQuillEditorView>
  );
};

export default ReactEditor;
