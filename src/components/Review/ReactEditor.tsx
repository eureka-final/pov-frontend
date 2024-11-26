import { useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CustomQuillEditorView } from './ReactEditor.style';
import ReactModule from './ReactModule';

const ReactEditor = () => {
  const [content, setContent] = useState<string>('');

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
    </CustomQuillEditorView>
  );
};

export default ReactEditor;
