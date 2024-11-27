import styled from '@emotion/styled';

export const CustomQuillEditorView = styled.div`
  #toolBar {
    box-sizing: border-box;
    height: 60%;
    width: 100%;
    border-radius: 8px;
    margin-top: 3%;
  }

  /* .ql-formats {
      display: inline-block;
      position: relative;
      top: 5px;
  } */
  .ql-toolbar {
    .ql-stroke {
      stroke: ${({ theme }) => theme.primary};
    }

    .ql-fill {
      fill: ${({ theme }) => theme.primary};
    }

    .ql-picker {
      color: ${({ theme }) => theme.primary};
    }
    .ql-picker-item {
      color: black;
    }
  }

  #quillContent {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.backgroundElevated};

    .ql-container {
      box-sizing: border-box;
      height: 500px;
      width: 100%;
      padding: 5px 10px;
      border: none;

      .ql-editor {
        font-size: ${({ theme }) => theme.typography.paragraph.fontSize};
        line-height: ${({ theme }) => theme.typography.paragraph.lineHeight};
        font-weight: ${({ theme }) => theme.typography.paragraph.fontWeight};

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

      & .ql-editor strong {
      font-weight: bold;
      }

      & .ql-editor em {
      font-style: italic;
      }

      .ql-editor::before {
        color: ${({ theme }) => theme.muted};
        font-style: italic;
      }
    }
  }
`;