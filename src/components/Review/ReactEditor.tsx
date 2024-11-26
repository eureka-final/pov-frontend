import { useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import ReactModule from './ReactModule';
import styled from 'styled-components';

const CustomQuillEditorView = styled.div`
  #toolBar {
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    border: 2px solid black;
    border-radius: 10px;
    background-color: white;

    font-size: 32px;

    .ql-formats {
      display: inline-block;
      position: relative;
      top: -10px;

      .image-btn {
        font-size: 18px;
        cursor: pointer;

        .icon-custom {
          margin-right: 5px;
          font-size: 24px;
        }
      }
    }
  }

  #quillContent {
    border: 2px solid black;
    border-radius: 10px;
    background-color: grey;

    .ql-container {
      box-sizing: border-box;
      height: 500px;
      width: 100%;
      padding: 5px 10px;
      border: none;

      .ql-editor {
        &::-webkit-scrollbar {
          width: 5px;
        }

        &::-webkit-scrollbar-thumb {
          background: gray; /* 스크롤바의 색상 */
          border-radius: 15px;
        }

        &::-webkit-scrollbar-track {
          background: rgba(200, 200, 200, 0.1);
        }
      }
    }
  }
`;

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
    'code-block',
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
