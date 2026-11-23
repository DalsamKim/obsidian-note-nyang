# NoteNyang (노트냥이)

[한국어 사용설명서](USER-GUIDE.ko.md) · [English user guide](USER-GUIDE.en.md)

NoteNyang은 Obsidian에서 마크다운과 PDF에 주석을 달고, 같은 사이드바에서 두 종류의 주석을 편집하고 내보내는 플러그인입니다. PDF의 특정 영역을 이미지로 캡처해 주석에 첨부할 수 있으며, 인터페이스는 한국어와 영어를 지원합니다.

PDF를 열면 표시되는 고급 도구에서 색상 형광펜, 메모지, 손글씨, 목차, 인쇄 쪽수 보정, 선택 주석 내보내기를 사용할 수 있습니다.

## 수동 설치

1. 이 저장소의 **Releases**에서 같은 버전의 `main.js`, `manifest.json`, `styles.css`를 받습니다.
2. Obsidian 볼트의 `.obsidian/plugins/note-nyang/` 폴더에 세 파일을 넣습니다. 폴더가 없으면 만듭니다.
3. Obsidian을 다시 연 뒤 **설정 → 커뮤니티 플러그인**에서 NoteNyang을 켭니다. 언어는 **설정 → NoteNyang → 인터페이스 언어**에서 바꿀 수 있습니다.

## 출처 및 라이선스

- **Siden**에서 마크다운과 PDF에 주석을 다는 기능과 작성한 주석을 사이드바에서 확인하는 기능을 가져왔습니다. [원본 저장소](https://github.com/giustto/siden) · [Siden MIT 라이선스](LICENSE-Siden)
- **HiNote**에서 NoteNyang의 UI 구성을 가져왔습니다. [원본 저장소](https://github.com/CatMuse/HiNote) · [HiNote MIT 라이선스](LICENSE-HiNote)
- **PDF Research Reader 1.0.1**에서 고급 PDF 도구를 가져와 NoteNyang에 연결했습니다. [MIT 라이선스](LICENSE-PDF-Research-Reader) · [PDF.js 관련 고지](THIRD-PARTY-NOTICES.txt)

각 라이선스 파일에는 원본 프로젝트의 저작권 표시와 MIT 라이선스 전문이 들어 있습니다.

## English

NoteNyang is an Obsidian plugin for annotating Markdown notes and PDFs and editing or exporting both types of annotations in one sidebar. It supports capturing PDF regions as images and offers both English and Korean interfaces.

Open any PDF to use the advanced toolbar for per-annotation highlight colors, sticky notes, handwriting, outlines, printed page numbering, and batch citation export.

### Manual installation

1. Download `main.js`, `manifest.json`, and `styles.css` from the same release under **Releases**.
2. Put the three files in `.obsidian/plugins/note-nyang/` inside your vault. Create the folder if needed.
3. Restart Obsidian and enable NoteNyang under **Settings → Community plugins**. To change the language, go to **Settings → NoteNyang → Interface language**.

### Credits and licenses

- **Siden** is the source of the Markdown and PDF annotation features and the sidebar for reviewing saved annotations. [Upstream repository](https://github.com/giustto/siden) · [Siden MIT license](LICENSE-Siden)
- **HiNote** is the source of the interface design used in NoteNyang. [Upstream repository](https://github.com/CatMuse/HiNote) · [HiNote MIT license](LICENSE-HiNote)
- **PDF Research Reader 1.0.1** is the source of the advanced PDF tools adapted for NoteNyang. [MIT license](LICENSE-PDF-Research-Reader) · [PDF.js notices](THIRD-PARTY-NOTICES.txt)

Each license file preserves the upstream copyright notice and the full MIT license text.
