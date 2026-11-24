"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => NoteNyangPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian7 = require("obsidian");

const NOTENYANG_SWATCHES = Object.freeze({
  yellow: { en: "Yellow", ko: "노랑", hex: "#f3c949", icon: "🟨" },
  green: { en: "Green", ko: "초록", hex: "#65c994", icon: "🟩" },
  blue: { en: "Blue", ko: "파랑", hex: "#66adf1", icon: "🟦" },
  pink: { en: "Pink", ko: "분홍", hex: "#ed86b5", icon: "🩷" },
  purple: { en: "Purple", ko: "보라", hex: "#b59aef", icon: "🟪" }
});

function markdownSwatch(annotation) {
  return NOTENYANG_SWATCHES[annotation.anchor.markdownColor]?.hex;
}

function setMarkdownMarkColor(element, annotation) {
  const color = markdownSwatch(annotation);
  if (color) element.style.setProperty("--notenyang-mark-color", color);
  else element.style.removeProperty("--notenyang-mark-color");
}



// NoteNyang interface strings, ordered English then Korean.
var UI_TEXT = {
  pdfToolsOpen: ["Open NoteNyang PDF tools", "NoteNyang PDF 도구 열기"],
  pdfToolsClose: ["Close advanced PDF tools", "고급 PDF 도구 닫기"],
  pdfToolsList: ["Open PDF note list", "PDF 노트 목록 열기"],
  pdfToolsOutline: ["Open PDF outline", "PDF 목차 열기"],
  pdfToolsDraw: ["Draw on the current PDF", "현재 PDF에 손글씨 쓰기"],
  pdfToolsHeading: ["Advanced PDF tools", "고급 PDF 도구"],
  pdfToolsHelp: ["PDF tools appear automatically when you open a PDF. Reopen the tools in a tab from the book ribbon or the command palette.", "PDF를 열면 도구 막대가 자동으로 표시됩니다. 현재 탭에서 도구를 닫았다면 책 모양 리본이나 명령 팔레트에서 다시 열 수 있습니다."],
  pdfToolsColor: ["Default PDF highlight color", "PDF 형광펜 기본 색상"],
  pdfToolsMobile: ["Single-page view for large PDFs on mobile", "모바일 대용량 PDF 한 쪽씩 보기"],
  pdfToolsDiagnostics: ["Save PDF troubleshooting logs", "PDF 문제 해결 기록 저장"],
  pdfToolsDiagnosticsInfo: ["Records PDF paths and device or viewer state. Note text and comments are excluded.", "PDF 경로와 기기 및 뷰어 상태를 기록합니다. 노트 원문과 메모는 기록하지 않습니다."],
  pdfToolsFailed: ["Could not open the advanced PDF tools.", "고급 PDF 도구를 열지 못했습니다."],
  pdfToolsDeleteQuestion: ["Delete this PDF note?", "이 PDF 노트를 삭제할까요?"],
  pdfToolsImageKept: ["Remove this note? Its image stays available to notes that link to it.", "이 노트를 삭제할까요? 이 이미지를 연결한 노트에서 계속 볼 수 있습니다."],
  markdownToolbar: ["NoteNyang Markdown tools", "노트냥이 마크다운 도구"],
  previousHeading: ["Previous heading", "이전 제목으로 이동"],
  nextHeading: ["Next heading", "다음 제목으로 이동"],
  readingTools: ["Reading toolbars", "읽기 도구 막대"],
  showMarkdownToolbar: ["Show Markdown toolbar", "마크다운 도구 막대 표시"],
  showMarkdownToolbarDescription: ["Show heading navigation, note commands, and colors above Markdown notes.", "마크다운 노트 위에 제목 이동, 노트 버튼, 색상 팔레트를 표시합니다."],
  autoPdfTools: ["Open PDF tools automatically", "PDF 도구 막대 자동 표시"],
  autoPdfToolsDescription: ["Show the advanced toolbar in newly opened PDFs. The command palette can also open the tools manually.", "새로 연 PDF에 도구 막대를 표시합니다. 명령 팔레트로도 직접 열 수 있습니다."],
  showPdfToolsRibbon: ["Show PDF tools in the ribbon", "왼쪽에 PDF 도구 버튼 표시"],
  showPdfToolsRibbonDescription: ["Add a shortcut for opening the advanced PDF toolbar.", "고급 PDF 도구 막대를 여는 바로가기를 추가합니다."],
  markdownDefaultColor: ["Markdown highlight color", "마크다운 형광펜 색"],
  markdownDefaultColorDescription: ["Choose the color for new Markdown notes. The toolbar palette updates this preference.", "새 마크다운 노트의 색을 고릅니다. 도구 막대에서 색을 골라도 이 설정이 바뀝니다."],
  defaultHighlightColor: ["Default highlight color", "기본 하이라이트 색"],
  markdownOutline: ["Open Markdown outline", "마크다운 목차 열기"],
  markdownSelectionUnlocated: ["Could not locate that selection in the Markdown source. Try selecting it in Live Preview.", "마크다운 원문에서 선택한 위치를 찾지 못했습니다. 라이브 미리보기에서 선택해 보세요."],
  language: ["Interface language", "인터페이스 언어"],
  languageDescription: ["Choose the language for NoteNyang.", "NoteNyang에 표시할 언어를 선택합니다."],
  followObsidian: ["Follow Obsidian", "Obsidian 언어 따르기"],
  languageSaveFailed: ["Could not save the language preference.", "언어 설정을 저장하지 못했습니다."],
  sidebarCards: ["Sidebar cards", "사이드바 노트 카드"],
  showLocation: ["Show source location", "원문 위치 표시"],
  showLocationDescription: ["Show Markdown line numbers or PDF page numbers on cards and in drafts.", "카드와 입력창에 마크다운 줄 번호 또는 PDF 쪽수를 표시합니다."],
  showDate: ["Show creation date", "작성 시간 표시"],
  showDateDescription: ["Show when the note was created below its comment.", "코멘트 아래에 노트를 처음 작성한 날짜와 시간을 표시합니다."],
  wrapWords: ["Wrap long words and links", "긴 단어와 링크 줄바꿈"],
  wrapWordsDescription: ["Wrap long words, links, and code that exceed the width of a card.", "카드 너비를 넘는 긴 단어, 링크, 코드를 줄바꿈합니다."],
  pdfAreaCapture: ["PDF area capture", "PDF 영역 캡처"],
  showCaptureRibbon: ["Show capture button in the ribbon", "왼쪽에 캡처 버튼 표시"],
  showCaptureRibbonDescription: ["You can also run “{command}” from the command palette.", "명령 팔레트에서 ‘{command}’을 실행할 수도 있습니다."],
  draggingIntoNotes: ["Insert quotes by dragging", "드래그로 노트에 인용 넣기"],
  expandCapture: ["Expand inserted captures by default", "삽입한 캡처 이미지 기본 펼침"],
  expandCaptureDescription: ["Set the initial state of inserted captures. Click the callout title in the note to collapse or expand it.", "삽입한 PDF 캡처의 처음 상태를 정합니다. 노트에서 인용 상자 제목을 눌러 접거나 펼칠 수 있습니다."],
  includeComment: ["Include the comment", "코멘트 포함"],
  includeCommentDescription: ["Include your comment in newly inserted quotes.", "새로 삽입하는 인용 상자에 작성한 코멘트를 넣습니다."],
  includeSource: ["Include a source link", "출처 링크 포함"],
  includeSourceDescription: ["Link to the note in Markdown or the corresponding PDF page.", "마크다운의 노트 위치 또는 PDF의 해당 쪽으로 이동하는 링크를 넣습니다."],
  highlights: ["Highlights", "본문 하이라이트"],
  showHighlights: ["Show highlights", "하이라이트 표시"],
  showHighlightsDescription: ["Mark annotated passages in Markdown and PDFs.", "마크다운과 PDF에서 노트가 달린 위치를 표시합니다."],
  showResolved: ["Show resolved highlights", "해결된 노트 표시"],
  showResolvedDescription: ["Keep resolved notes highlighted in the source. Use the status filter to find them in the sidebar.", "해결된 노트의 하이라이트를 원문에 유지합니다. 사이드바에서는 상태 필터로 찾을 수 있습니다."],
  highlightColor: ["Highlight without a preset", "색상을 지정하지 않은 노트의 색"],
  highlightColorDescription: ["Use this color for saved notes without a palette color and when Markdown uses the default.", "색을 지정하지 않은 기존 노트와 마크다운에서 기본 색을 선택한 경우에 적용합니다."],
  highlightOpacity: ["Highlight opacity", "하이라이트 불투명도"],
  highlightOpacityDescription: ["Adjust the intensity of the highlight color.", "하이라이트 색의 진하기를 조절합니다."],
  highlightStyle: ["Markdown highlight style", "마크다운 표시 방식"],
  highlightStyleDescription: ["Choose how highlights appear in Markdown.", "마크다운 본문에서 하이라이트를 어떻게 표시할지 선택합니다."],
  background: ["Background color", "배경색"],
  underline: ["Underline", "밑줄"],
  both: ["Background color and underline", "배경색과 밑줄"],
  margins: ["Markdown margin cards", "마크다운 여백 카드"],
  showMargins: ["Show cards in the margin", "본문 옆에 카드 표시"],
  showMarginsDescription: ["Show cards in Live Preview and Reading view when the NoteNyang sidebar is closed.", "라이브 미리보기와 읽기 모드에서 NoteNyang 사이드바를 닫으면 여백 카드를 표시합니다."],
  marginSide: ["Margin side", "카드 위치"],
  marginSideDescription: ["Choose which side of the text to place cards on.", "본문의 어느 쪽 여백에 카드를 놓을지 선택합니다."],
  automatic: ["Automatic", "자동"],
  left: ["Left", "왼쪽"],
  right: ["Right", "오른쪽"],
  marginWidth: ["Maximum card width", "카드 최대 너비"],
  marginWidthDescription: ["Cards shrink to fit the available margin space.", "사용 가능한 여백에 맞춰 카드 너비를 줄입니다."],
  minimumPaneWidth: ["Minimum pane width", "본문 창의 최소 너비"],
  minimumPaneWidthDescription: ["Hide margin cards when the pane is narrower than this value.", "본문 창이 이 값보다 좁으면 여백 카드를 숨깁니다."],
  currentValue: ["Current value: {value}", "현재 값 {value}"],
  currentFile: ["Current file", "현재 파일"],
  entireVault: ["Entire vault", "볼트 전체"],
  chooseScope: ["Choose which file to show notes for · {scope}", "노트를 볼 파일 선택 · {scope}"],
  filterStatus: ["Filter by note status", "노트 상태 필터"],
  open: ["Open", "미해결"],
  resolved: ["Resolved", "해결됨"],
  orphaned: ["Unlocated", "위치 없음"],
  all: ["All", "전체"],
  search: ["Search notes", "노트 검색"],
  searchPlaceholder: ["Search notes…", "노트 검색…"],
  noAnnotations: ["No notes match the current view.", "현재 보기 조건에 맞는 노트가 없습니다."],
  line: ["Line {number}", "{number}줄"],
  page: ["p. {number}", "{number}쪽"],
  document: ["Document", "문서 전체"],
  pdfCapture: ["PDF capture", "PDF 캡처"],
  annotationText: ["Note comment", "노트 코멘트"],
  addComment: ["Add a comment…", "코멘트 입력…"],
  cancel: ["Cancel", "취소"],
  save: ["Save", "저장"],
  discard: ["Discard", "버리기"],
  discardTitle: ["Discard draft?", "초안을 버릴까요?"],
  discardMessage: ["Discard the unsaved note draft?", "저장하지 않은 노트 초안을 버립니다."],
  edit: ["Edit", "편집"],
  editComment: ["Edit comment", "코멘트 편집"],
  resolve: ["Resolve", "해결로 표시"],
  reopen: ["Reopen", "미해결로 되돌리기"],
  delete: ["Delete", "삭제"],
  deleteTitle: ["Delete note?", "노트를 삭제할까요?"],
  deleteMessage: ["The note will be moved to NoteNyang’s hidden trash folder.", "노트를 NoteNyang의 숨김 휴지통으로 이동합니다."],
  deleteWithCapture: ["The note and its linked image will be moved to NoteNyang’s hidden trash folder. Image links in other notes may stop working.", "노트와 연결된 이미지를 NoteNyang의 숨김 휴지통으로 이동합니다. 다른 노트에 삽입한 이미지 링크가 끊길 수 있습니다."],
  deleted: ["Note deleted.", "노트를 삭제했습니다."],
  deleteFailed: ["Could not delete the note.", "노트를 삭제하지 못했습니다."],
  deleteCaptureFailed: ["Could not move the image. The note was kept.", "이미지를 옮기지 못해 노트를 보관했습니다."],
  deleteRestoreFailed: ["Could not move the capture. The note is in {path}.", "캡처를 옮기지 못했습니다. 노트는 {path}에 있습니다."],
  openAnnotation: ["Open note: {body}", "노트 열기 · {body}"],
  openAnnotationIn: ["Open note in {path}", "{path}의 노트 열기"],
  dragAnnotation: ["Drag note into a note", "노트를 노트로 끌어넣기"],
  annotationActions: ["Note actions", "노트 메뉴"],
  created: ["Created", "작성 시간"],
  ribbonAnnotations: ["Open NoteNyang notes", "NoteNyang 노트 열기"],
  ribbonCapture: ["Capture PDF area", "PDF 영역 캡처"],
  commandOpen: ["Open notes", "노트 열기"],
  commandMarkdown: ["Add note to selection", "선택한 텍스트에 노트 추가"],
  commandDocument: ["Add note to current document", "현재 문서 전체에 노트 추가"],
  commandPdf: ["Add note to PDF selection", "PDF에서 선택한 텍스트에 노트 추가"],
  commandCapture: ["Capture PDF area as note", "PDF 영역을 캡처해 노트 추가"],
  commandExport: ["Export all notes to Markdown", "모든 노트를 마크다운으로 내보내기"],
  addAnnotation: ["Add NoteNyang note", "NoteNyang 노트 추가"],
  copySelection: ["Copy selected text", "선택한 텍스트 복사"],
  openPdfFirst: ["Open a PDF first.", "먼저 PDF를 열어 주세요."],
  noPdfPage: ["No visible PDF page found. Click the PDF and try again.", "화면에 표시된 PDF 페이지를 찾을 수 없습니다. PDF를 클릭하고 다시 시도해 주세요."],
  captureCancelled: ["PDF capture cancelled.", "PDF 캡처를 취소했습니다."],
  captureInstructions: ["Drag to select an area on the PDF page. Press Esc to cancel.", "PDF 페이지에서 드래그해 영역을 선택하세요. Esc를 누르면 취소합니다."],
  captureAreaTooSmall: ["Select a larger area.", "더 넓은 영역을 선택해 주세요."],
  capturePageUnavailable: ["This PDF page cannot be captured in its current view.", "현재 보기에서는 이 PDF 페이지를 캡처할 수 없습니다."],
  captureOutsidePage: ["Select an area inside one PDF page.", "PDF 한 페이지 안에서 영역을 선택해 주세요."],
  captureAreaUnavailable: ["Unable to capture this area.", "이 영역을 캡처할 수 없습니다."],
  capturePagePositionMissing: ["Could not determine the position on the PDF page.", "PDF 페이지에서 선택한 위치를 확인할 수 없습니다."],
  captureFailed: ["PDF capture failed.", "PDF를 캡처하지 못했습니다."],
  captureSaveFailed: ["Could not save the PDF capture.", "PDF 캡처를 저장하지 못했습니다."],
  annotationSaveFailed: ["Could not save the note.", "노트를 저장하지 못했습니다."],
  pdfNotFound: ["PDF not found: {path}", "PDF를 찾을 수 없습니다 · {path}"],
  linkedAnnotationMissing: ["Could not find the linked NoteNyang note.", "연결된 NoteNyang 노트를 찾을 수 없습니다."],
  linkedSourceFailed: ["Could not open the note’s source.", "노트의 원문을 열지 못했습니다."],
  sourceMissing: ["Source file not found: {path}", "원문 파일을 찾을 수 없습니다 · {path}"],
  sourceLocationMissing: ["Opened the source, but the document has changed and the quoted passage could not be found.", "원문을 열었습니다. 문서가 바뀌어 인용 위치를 찾을 수 없습니다."],
  invalidAnnotation: ["NoteNyang skipped {count} invalid note file.", "형식이 올바르지 않은 노트 파일 {count}개를 건너뛰었습니다."],
  invalidAnnotations: ["NoteNyang skipped {count} invalid note files.", "형식이 올바르지 않은 노트 파일 {count}개를 건너뛰었습니다."],
  openDocumentFirst: ["Open a Markdown or PDF file first.", "먼저 마크다운이나 PDF 파일을 열어 주세요."],
  sidebarUnavailable: ["NoteNyang could not open its note sidebar.", "NoteNyang 노트 사이드바를 열지 못했습니다."],
  storageMigrationConflict: ["Both notenyang and .notenyang exist. NoteNyang opens .notenyang. Check the other folder for older notes.", "notenyang과 .notenyang 폴더가 모두 있습니다. NoteNyang은 .notenyang을 엽니다. 이전 노트는 다른 폴더도 확인하세요."],
  storageMigrationFailed: ["Could not move NoteNyang storage. Close Obsidian, check the notenyang folder, then reopen it to retry.", "NoteNyang 저장 폴더를 옮기지 못했습니다. Obsidian을 닫고 notenyang 폴더를 확인한 뒤 다시 열어 주세요."],
  quote: ["Quote", "인용"],
  captureImage: ["Capture image", "캡처 이미지"],
  comment: ["Comment", "코멘트"],
  source: ["Source", "출처"],
  exportTitle: ["NoteNyang note export", "NoteNyang 노트 내보내기"],
  exportGenerated: ["Generated: {date}", "생성 시간: {date}"],
  status: ["Status", "상태"],
  type: ["Type", "유형"],
  id: ["ID", "ID"],
  markdown: ["Markdown", "마크다운"],
  pdf: ["PDF", "PDF"],
  exported: ["Notes exported to {path}", "노트를 내보냈습니다 · {path}"],
  exportFailed: ["Could not export the notes.", "노트를 내보내지 못했습니다."]
};
function uiLanguage(settings) {
  if (settings.language === "en" || settings.language === "ko") return settings.language;
  const language = import_obsidian7.getLanguage?.() ?? import_obsidian7.moment?.locale?.() ?? globalThis.navigator?.language ?? "en";
  return /^ko(?:[-_]|$)/i.test(language) ? "ko" : "en";
}
function uiText(settings, key, values) {
  const text = UI_TEXT[key][uiLanguage(settings) === "ko" ? 1 : 0];
  return values ? text.replace(/\{(\w+)\}/g, (_, name) => values[name]) : text;
}

// src/editor/markdown-extension.ts
var import_state = require("@codemirror/state");
var import_view = require("@codemirror/view");
var import_obsidian = require("obsidian");
function markdownPathForEditor(editorView, plugin) {
  let path = null;
  plugin.app.workspace.iterateAllLeaves((leaf) => {
    if (path || !(leaf.view instanceof import_obsidian.MarkdownView) || !leaf.view.file) return;
    const codeMirror = leaf.view.editor.cm;
    if (codeMirror === editorView) path = leaf.view.file.path;
  });
  return path;
}
function visibleAnnotations(view, plugin) {
  const path = markdownPathForEditor(view, plugin);
  if (!path) return [];
  return plugin.store.forSource(path).filter(
    (annotation) => annotation.anchor.kind === "markdown" && (annotation.status !== "resolved" || plugin.settings.showResolved)
  ).sort(
    (a, b) => a.anchor.startOffset - b.anchor.startOffset
  );
}
function buildHighlights(view, plugin, annotations) {
  const builder = new import_state.RangeSetBuilder();
  if (!plugin.settings.showHighlights) return builder.finish();
  for (const annotation of annotations) {
    const anchor = annotation.anchor;
    const from = Math.max(0, Math.min(anchor.startOffset, view.state.doc.length));
    const to = Math.max(from, Math.min(anchor.endOffset, view.state.doc.length));
    if (to <= from) continue;
    builder.add(
      from,
      to,
      import_view.Decoration.mark({
        class: `notenyang-highlight notenyang-highlight-${plugin.settings.highlightStyle}`,
        attributes: {
          "data-notenyang-id": annotation.id,
          ...(markdownSwatch(annotation) ? { style: "--notenyang-mark-color:" + markdownSwatch(annotation) } : {})
        }
      })
    );
  }
  return builder.finish();
}
function measureContentColumn(view) {
  const sizer = view.dom.querySelector(".cm-sizer") ?? view.contentDOM;
  const sizerRect = sizer.getBoundingClientRect();
  const editorRect = view.dom.getBoundingClientRect();
  return new DOMRect(
    Math.max(editorRect.left, sizerRect.left),
    sizerRect.top,
    Math.min(editorRect.right, sizerRect.right) - Math.max(editorRect.left, sizerRect.left),
    sizerRect.height
  );
}
function choosePlacement(view, plugin) {
  const editorRect = view.dom.getBoundingClientRect();
  const contentRect = measureContentColumn(view);
  const gap = 10;
  const edge = 8;
  const leftWidth = Math.max(0, contentRect.left - editorRect.left - gap - edge);
  const rightWidth = Math.max(
    0,
    editorRect.right - contentRect.right - gap - edge
  );
  const side = plugin.settings.marginSide === "auto" ? leftWidth > rightWidth ? "left" : "right" : plugin.settings.marginSide;
  const available = side === "left" ? leftWidth : rightWidth;
  if (available < 72) return null;
  const width = Math.min(plugin.settings.marginWidth, available);
  return {
    side,
    width,
    left: side === "left" ? contentRect.left - editorRect.left - gap - width : contentRect.right - editorRect.left + gap
  };
}
function createMarginCard(annotation, plugin, width) {
  const card = createDiv();
  card.className = "notenyang-margin-card notenyang-margin-card-live";
  card.classList.toggle(
    "notenyang-force-word-breaks",
    plugin.settings.forceLongWordBreaks
  );
  card.dataset.notenyangId = annotation.id;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.textContent = annotation.body;
  card.style.width = `${Math.floor(width)}px`;
  card.setAttribute("aria-label", plugin.t("openAnnotation", { body: annotation.body }));
  card.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    void plugin.activateAnnotation(annotation.id);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    event.stopPropagation();
    void plugin.activateAnnotation(annotation.id);
  });
  return card;
}
function renderMargins(view, plugin, layer) {
  layer.empty();
  if (!plugin.settings.showMargins || plugin.areMarginsSuppressed() || view.dom.clientWidth < plugin.settings.narrowPaneThreshold) {
    return;
  }
  const placement = choosePlacement(view, plugin);
  if (!placement) return;
  const editorRect = view.dom.getBoundingClientRect();
  const entries = visibleAnnotations(view, plugin).filter(
    (annotation) => annotation.status !== "orphaned" && annotation.anchor.kind === "markdown" && annotation.anchor.startOffset <= view.state.doc.length
  ).map((annotation) => {
    const anchor = annotation.anchor;
    const coordinates = view.coordsAtPos(anchor.startOffset);
    return coordinates ? {
      annotation,
      desiredTop: coordinates.top - editorRect.top
    } : null;
  }).filter(
    (entry) => Boolean(entry)
  ).sort((a, b) => a.desiredTop - b.desiredTop);
  let nextTop = 6;
  for (const entry of entries) {
    if (entry.desiredTop < -200 || entry.desiredTop > editorRect.height + 200) {
      continue;
    }
    const card = createMarginCard(entry.annotation, plugin, placement.width);
    card.style.left = `${Math.floor(placement.left)}px`;
    layer.appendChild(card);
    const top = Math.max(6, entry.desiredTop, nextTop);
    card.style.top = `${Math.floor(top)}px`;
    nextTop = top + card.getBoundingClientRect().height + 8;
  }
}
async function mapChangedAnchors(update, plugin) {
  if (!update.docChanged) return;
  const path = markdownPathForEditor(update.view, plugin);
  if (!path) return;
  for (const annotation of plugin.store.forSource(path)) {
    if (annotation.anchor.kind !== "markdown") continue;
    const anchor = annotation.anchor;
    if (anchor.startOffset < 0 || anchor.endOffset > update.startState.doc.length || anchor.endOffset < anchor.startOffset) continue;
    const startOffset = update.changes.mapPos(anchor.startOffset, 1);
    const endOffset = update.changes.mapPos(anchor.endOffset, -1);
    const selected = update.state.sliceDoc(startOffset, endOffset);
    const isOrphaned = endOffset <= startOffset || selected.length === 0;
    const status = isOrphaned ? "orphaned" : annotation.status;
    const quote = isOrphaned ? anchor.quote : {
      exact: selected,
      prefix: update.state.sliceDoc(Math.max(0, startOffset - 64), startOffset),
      suffix: update.state.sliceDoc(endOffset, Math.min(update.state.doc.length, endOffset + 64))
    };
    const startLine = update.state.doc.lineAt(startOffset);
    const endLine = update.state.doc.lineAt(endOffset);
    const position = {
      startOffset,
      endOffset,
      startLine: startLine.number - 1,
      startCharacter: startOffset - startLine.from,
      endLine: endLine.number - 1,
      endCharacter: endOffset - endLine.from
    };
    if (status === annotation.status && Object.keys(position).every((key) => position[key] === anchor[key]) &&
        quote.exact === anchor.quote.exact && quote.prefix === anchor.quote.prefix && quote.suffix === anchor.quote.suffix) continue;
    await plugin.store.update(annotation.id, {
      status,
      anchor: {
        ...anchor,
        ...position,
        quote
      }
    });
  }
}
function createMarkdownExtension(plugin) {
  return import_view.ViewPlugin.fromClass(
    class {
      constructor(view) {
        this.view = view;
        this.revision = plugin.editorRevision;
        this.refreshDecorations();
        this.marginLayer = view.dom.createDiv({
          cls: "notenyang-editor-margin-layer"
        });
        this.resizeObserver = new ResizeObserver(() => this.scheduleMargins());
        this.resizeObserver.observe(view.dom);
        view.scrollDOM.addEventListener("scroll", this.handleScroll, {
          passive: true
        });
        this.scheduleMargins();
      }
      decorations;
      revision;
      marginLayer;
      resizeObserver;
      renderFrame = 0;
      update(update) {
        if (update.docChanged) void mapChangedAnchors(update, plugin);
        const revisionChanged = this.revision !== plugin.editorRevision;
        if (update.docChanged || revisionChanged) {
          this.revision = plugin.editorRevision;
          this.refreshDecorations();
        }
        if (update.docChanged || update.viewportChanged || revisionChanged) this.scheduleMargins();
      }
      refreshDecorations() {
        const annotations = visibleAnnotations(this.view, plugin);
        this.hasMarginAnnotations = annotations.some((annotation) => annotation.status !== "orphaned");
        this.decorations = buildHighlights(this.view, plugin, annotations);
      }
      destroy() {
        cancelAnimationFrame(this.renderFrame);
        this.resizeObserver.disconnect();
        this.view.scrollDOM.removeEventListener("scroll", this.handleScroll);
        this.marginLayer.remove();
      }
      handleScroll = () => this.scheduleMargins();
      scheduleMargins() {
        window.cancelAnimationFrame(this.renderFrame);
        if (!this.hasMarginAnnotations || !plugin.settings.showMargins) {
          if (this.marginLayer.firstChild) this.marginLayer.empty();
          return;
        }
        this.renderFrame = window.requestAnimationFrame(
          () => renderMargins(this.view, plugin, this.marginLayer)
        );
      }
    },
    {
      decorations: (instance) => instance.decorations,
      eventHandlers: {
        click(event) {
          const target = event.target;
          const highlight = target.closest("[data-notenyang-id]");
          if (!highlight?.dataset.notenyangId) return false;
          void plugin.activateAnnotation(highlight.dataset.notenyangId);
          return true;
        }
      }
    }
  );
}

// src/pdf/pdf-adapter.ts
var import_obsidian2 = require("obsidian");

// src/pdf/geometry.ts
function clamp(value, minimum = 0, maximum = 1) {
  return Math.min(maximum, Math.max(minimum, value));
}
function normalizeRectangle(rectangle, page) {
  const width = page.right - page.left;
  const height = page.bottom - page.top;
  if (width <= 0 || height <= 0) return null;
  const left = clamp((rectangle.left - page.left) / width);
  const top = clamp((rectangle.top - page.top) / height);
  const right = clamp((rectangle.right - page.left) / width);
  const bottom = clamp((rectangle.bottom - page.top) / height);
  if (right <= left || bottom <= top) return null;
  return { left, top, right, bottom };
}
function rectangleCss(rectangle, coordinateSpace) {
  if (coordinateSpace === "normalized") {
    const percent = (value) => `${Number((value * 100).toFixed(6))}%`;
    return {
      left: percent(rectangle.left),
      top: percent(rectangle.top),
      width: percent(rectangle.right - rectangle.left),
      height: percent(rectangle.bottom - rectangle.top)
    };
  }
  return {
    left: `${rectangle.left}px`,
    top: `${rectangle.top}px`,
    width: `${rectangle.right - rectangle.left}px`,
    height: `${rectangle.bottom - rectangle.top}px`
  };
}

// src/pdf/pdf-adapter.ts
function isPdfSelectionMarker(node) {
  return node.nodeType === 1 && node.classList.contains("endOfContent");
}

var PdfAdapter = class {
  constructor(plugin) {
    this.plugin = plugin;
  }
  observer = null;
  observedViewer = null;
  renderFrame = null;
  activeId = null;
  layers = new Map();
  legacyMigrations = /* @__PURE__ */ new Set();
  cancelRegionSelection = null;
  start() {
    this.observer = new MutationObserver(records => {
      const changed = records.some(record => [...record.addedNodes, ...record.removedNodes].some(node => !isPdfSelectionMarker(node)));
      if (changed) this.renderVisibleHighlights();
    });
    this.plugin.register(() => {
      this.observer?.disconnect();
      if (this.renderFrame !== null) window.cancelAnimationFrame(this.renderFrame);
      this.clearHighlightLayers();
      this.cancelRegionSelection?.();
    });
  }
  startRegionSelection(onCapture) {
    const notice = (key) => new import_obsidian2.Notice(this.plugin.t(key));
    const file = this.plugin.app.workspace.getActiveFile();
    if (!file || file.extension !== "pdf") {
      notice("openPdfFirst");
      return;
    }
    this.cancelRegionSelection?.();
    const activeContainer = this.plugin.app.workspace.activeLeaf?.view.containerEl;
    const pages = Array.from((activeContainer ?? document).querySelectorAll(
      ".page[data-page-number], .pdf-page[data-page-number]"
    )).filter((page) => {
      const rect = page.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < window.innerHeight;
    });
    if (pages.length === 0) {
      notice("noPdfPage");
      return;
    }
    const pageOverlays = pages.map((page) => {
      const overlay = document.createElement("div");
      overlay.className = "notenyang-capture-overlay";
      page.appendChild(overlay);
      return overlay;
    });
    const box = document.createElement("div");
    box.className = "notenyang-region-selection";
    document.body.appendChild(box);
    let start = null;
    const cleanup = () => {
      for (const overlay of pageOverlays) {
        overlay.removeEventListener("pointerdown", down);
        overlay.remove();
      }
      document.removeEventListener("pointermove", move, true);
      document.removeEventListener("pointerup", up, true);
      document.removeEventListener("keydown", keydown, true);
      box.remove();
      this.cancelRegionSelection = null;
    };
    const keydown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        cleanup();
        notice("captureCancelled");
      }
    };
    const down = (event) => {
      if (event.button !== 0 || !(event.target instanceof Element)) return;
      const page = event.target.closest(
        ".page[data-page-number], .pdf-page[data-page-number], [data-page-number]"
      );
      if (!page || this.plugin.app.workspace.getActiveFile()?.path !== file.path) return;
      event.preventDefault();
      event.stopPropagation();
      start = { x: event.clientX, y: event.clientY, page };
      box.style.display = "block";
    };
    const move = (event) => {
      if (!start) return;
      event.preventDefault();
      event.stopPropagation();
      const left = Math.min(start.x, event.clientX);
      const top = Math.min(start.y, event.clientY);
      box.style.left = `${left}px`;
      box.style.top = `${top}px`;
      box.style.width = `${Math.abs(event.clientX - start.x)}px`;
      box.style.height = `${Math.abs(event.clientY - start.y)}px`;
    };
    const up = (event) => {
      if (!start) return;
      event.preventDefault();
      event.stopPropagation();
      const selection = {
        left: Math.min(start.x, event.clientX),
        top: Math.min(start.y, event.clientY),
        right: Math.max(start.x, event.clientX),
        bottom: Math.max(start.y, event.clientY)
      };
      const page = start.page;
      cleanup();
      try {
        if (selection.right - selection.left < 5 || selection.bottom - selection.top < 5) {
          return void notice("captureAreaTooSmall");
        }
        const canvases = Array.from(page.querySelectorAll("canvas")).filter((canvas2) => canvas2.width > 0 && canvas2.height > 0);
        if (canvases.length !== 1) return void notice("capturePageUnavailable");
        const canvas = canvases[0];
        const bounds = canvas.getBoundingClientRect();
        const rectangle = normalizeRectangle(selection, bounds);
        if (!rectangle) return void notice("captureOutsidePage");
        const x = Math.floor(rectangle.left * canvas.width);
        const y = Math.floor(rectangle.top * canvas.height);
        const right = Math.min(canvas.width, Math.ceil(rectangle.right * canvas.width));
        const bottom = Math.min(canvas.height, Math.ceil(rectangle.bottom * canvas.height));
        const image = document.createElement("canvas");
        image.width = right - x;
        image.height = bottom - y;
        const context = image.getContext("2d");
        if (!context || image.width < 1 || image.height < 1) return void notice("captureAreaUnavailable");
        context.drawImage(canvas, x, y, image.width, image.height, 0, 0, image.width, image.height);
        const pageRect = page.getBoundingClientRect();
        const pageArea = normalizeRectangle(selection, pageRect);
        const pageNumber = this.readPageNumber(page);
        if (!pageArea || !Number.isFinite(pageNumber)) return void notice("capturePagePositionMissing");
        onCapture({
          sourcePath: file.path,
          imageDataUrl: image.toDataURL("image/png"),
          anchor: { kind: "pdf", page: pageNumber, coordinateSpace: "normalized", quote: { exact: "" }, rectangles: [pageArea] }
        });
      } catch (error) {
        console.error("NoteNyang PDF capture failed", error);
        notice("captureFailed");
      }
    };
    this.cancelRegionSelection = cleanup;
    for (const overlay of pageOverlays) overlay.addEventListener("pointerdown", down);
    document.addEventListener("pointermove", move, true);
    document.addEventListener("pointerup", up, true);
    document.addEventListener("keydown", keydown, true);
    new import_obsidian2.Notice(this.plugin.t("captureInstructions"), 8e3);
  }
  captureSelection() {
    const file = this.plugin.app.workspace.getActiveFile();
    const selection = window.getSelection();
    if (!file || file.extension !== "pdf" || !selection || selection.rangeCount === 0) {
      return null;
    }
    const exact = selection.toString().trim();
    if (!exact) return null;
    const range = selection.getRangeAt(0);
    const commonElement = range.commonAncestorContainer.instanceOf(HTMLElement) ? range.commonAncestorContainer : range.commonAncestorContainer.parentElement;
    const startElement = range.startContainer.instanceOf(HTMLElement) ? range.startContainer : range.startContainer.parentElement;
    const page = (commonElement ?? startElement)?.closest(
      ".page[data-page-number], .pdf-page[data-page-number], [data-page-number]"
    );
    if (!page) return null;
    const pageNumber = this.readPageNumber(page);
    if (!Number.isFinite(pageNumber)) return null;
    const pageRect = page.getBoundingClientRect();
    const rectangles = Array.from(range.getClientRects()).filter((rect) => rect.width > 0 && rect.height > 0).map(
      (rect) => normalizeRectangle(rect, {
        left: pageRect.left,
        top: pageRect.top,
        right: pageRect.right,
        bottom: pageRect.bottom
      })
    ).filter(
      (rectangle) => rectangle !== null
    );
    const context = range.commonAncestorContainer.textContent ?? exact;
    const occurrence = context.indexOf(exact);
    return {
      sourcePath: file.path,
      anchor: {
        kind: "pdf",
        page: pageNumber,
        coordinateSpace: "normalized",
        quote: {
          exact,
          prefix: occurrence >= 0 ? context.slice(Math.max(0, occurrence - 48), occurrence) : "",
          suffix: occurrence >= 0 ? context.slice(occurrence + exact.length, occurrence + exact.length + 48) : ""
        },
        rectangles
      }
    };
  }
  isPdfContext(target) {
    return target instanceof HTMLElement && Boolean(
      target.closest(
        '[data-type="pdf"], .pdf-viewer, .pdf-viewer-container, .pdf-container, .pdf-embed, .pdf-page, .page[data-page-number]'
      )
    );
  }
  async navigate(annotation) {
    if (annotation.anchor.kind !== "pdf") return;
    const file = this.plugin.app.vault.getAbstractFileByPath(annotation.sourcePath);
    if (!(file instanceof import_obsidian2.TFile)) {
      new import_obsidian2.Notice(this.plugin.t("pdfNotFound", { path: annotation.sourcePath }));
      return;
    }
    const workspace = this.plugin.app.workspace;
    const leaf = workspace.getLeavesOfType("pdf").find(candidate => candidate.view.file?.path === file.path)
      || workspace.getLeaf(workspace.activeLeaf?.view instanceof NoteNyangSidebarView ? "tab" : false);
    await leaf.openFile(file, { active: true, eState: { subpath: `#page=${annotation.anchor.page}` } });
    this.renderVisibleHighlights(annotation.id);
  }
  renderVisibleHighlights(activeId) {
    if (activeId !== undefined) this.activeId = activeId;
    if (this.renderFrame !== null) return;
    this.renderFrame = window.requestAnimationFrame(() => {
      this.renderFrame = null;
      this.syncHighlightLayers();
    });
  }
  syncHighlightLayers() {
    const workspace = this.plugin.app.workspace;
    const file = workspace.getActiveFile();
    const annotations = this.plugin.settings.showHighlights && file?.extension === "pdf"
      ? this.plugin.store.forSource(file.path).filter((annotation) =>
        annotation.anchor.kind === "pdf" && !annotation.readerDocId &&
        (annotation.status !== "resolved" || this.plugin.settings.showResolved)
      ) : [];
    const activeView = workspace.activeLeaf?.view;
    const pdfView = annotations.length === 0 ? null
      : activeView?.getViewType() === "pdf" && activeView.file?.path === file.path ? activeView
      : workspace.getLeavesOfType("pdf").find(({ view }) =>
        view.file?.path === file.path && view.containerEl.getClientRects().length > 0
      )?.view;
    const viewer = pdfView?.containerEl ?? null;
    if (viewer !== this.observedViewer) {
      this.observer?.disconnect();
      this.observedViewer = viewer;
      this.clearHighlightLayers();
    }
    if (!viewer) return;
    // Ignore changes made by our own overlays. Observe only this PDF pane.
    this.observer?.disconnect();
    try {
      const present = new Set();
      for (const annotation of annotations) {
        const page = viewer.querySelector(`.page[data-page-number="${annotation.anchor.page}"], .pdf-page[data-page-number="${annotation.anchor.page}"]`);
        if (!page) continue;
        const existing = this.layers.get(annotation.id);
        const canReuse = existing?.layer.parentElement === page && existing.anchor === annotation.anchor;
        const retryLegacy = canReuse && annotation.anchor.coordinateSpace !== "normalized" &&
          !existing.recovered && !this.legacyMigrations.has(annotation.id);
        if (canReuse && !retryLegacy) {
          existing.layer.classList.toggle("is-active", this.activeId === annotation.id);
        } else {
          existing?.layer.remove();
          this.layers.set(annotation.id, this.renderAnnotation(page, annotation, this.activeId));
        }
        present.add(annotation.id);
      }
      for (const [id, { layer }] of this.layers) {
        if (present.has(id)) continue;
        layer.remove();
        this.layers.delete(id);
      }
    } finally {
      this.observer?.observe(viewer, { childList: true, subtree: true });
    }
  }
  clearHighlightLayers() {
    for (const { layer } of this.layers.values()) layer.remove();
    this.layers.clear();
  }
  readPageNumber(page) {
    const fromData = Number(page.dataset.pageNumber);
    if (Number.isFinite(fromData) && fromData > 0) return fromData;
    const labelled = page.getAttribute("aria-label")?.match(/\d+/)?.[0];
    if (labelled) return Number(labelled);
    const fromId = page.id.match(/(\d+)$/)?.[1];
    return fromId ? Number(fromId) : Number.NaN;
  }
  renderAnnotation(page, annotation, activeId) {
    const recovered = annotation.anchor.coordinateSpace === "normalized" ? null : this.recoverLegacyGeometry(page, annotation);
    const rectangles = recovered ?? annotation.anchor.rectangles;
    const coordinateSpace = recovered ? "normalized" : annotation.anchor.coordinateSpace ?? "css-pixels";
    const layer = page.createDiv({
      cls: `notenyang-pdf-highlight-layer${activeId === annotation.id ? " is-active" : ""}`,
      attr: { "data-notenyang-pdf-id": annotation.id }
    });
    for (const rectangle of rectangles) {
      const mark = layer.createDiv({ cls: "notenyang-pdf-highlight" });
      const style = rectangleCss(rectangle, coordinateSpace);
      mark.style.left = style.left;
      mark.style.top = style.top;
      mark.style.width = style.width;
      mark.style.height = style.height;
    }
    layer.addEventListener("click", () => void this.plugin.activateAnnotation(annotation.id));
    return { layer, anchor: annotation.anchor, recovered: Boolean(recovered) };
  }
  recoverLegacyGeometry(page, annotation) {
    if (annotation.anchor.kind !== "pdf" || this.legacyMigrations.has(annotation.id)) {
      return null;
    }
    const textLayer = page.querySelector(".textLayer") ?? page;
    const walker = document.createTreeWalker(
      textLayer,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          return node.parentElement?.closest(".notenyang-pdf-highlight-layer") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }
      }
    );
    const nodes = [];
    let text = "";
    let current;
    while (current = walker.nextNode()) {
      const value = current.nodeValue ?? "";
      nodes.push({
        node: current,
        start: text.length,
        end: text.length + value.length
      });
      text += value;
    }
    const start = this.locateQuote(text, annotation.anchor.quote);
    if (start < 0) return null;
    const end = start + annotation.anchor.quote.exact.length;
    const startNode = nodes.find(
      (entry) => entry.start <= start && entry.end > start
    );
    const endNode = nodes.find(
      (entry) => entry.start < end && entry.end >= end
    );
    if (!startNode || !endNode) return null;
    const range = document.createRange();
    range.setStart(startNode.node, start - startNode.start);
    range.setEnd(endNode.node, end - endNode.start);
    const pageRect = page.getBoundingClientRect();
    const rectangles = Array.from(range.getClientRects()).map(
      (rectangle) => normalizeRectangle(rectangle, {
        left: pageRect.left,
        top: pageRect.top,
        right: pageRect.right,
        bottom: pageRect.bottom
      })
    ).filter(
      (rectangle) => rectangle !== null
    );
    if (rectangles.length === 0) return null;
    this.legacyMigrations.add(annotation.id);
    void this.plugin.store.update(annotation.id, {
      anchor: {
        ...annotation.anchor,
        coordinateSpace: "normalized",
        rectangles
      }
    }).finally(() => this.legacyMigrations.delete(annotation.id));
    return rectangles;
  }
  locateQuote(text, quote) {
    const candidates = [];
    let cursor = 0;
    while (cursor <= text.length) {
      const found = text.indexOf(quote.exact, cursor);
      if (found < 0) break;
      candidates.push(found);
      cursor = found + Math.max(1, quote.exact.length);
    }
    const contextual = candidates.filter((candidate) => {
      const prefix = quote.prefix ?? "";
      const suffix = quote.suffix ?? "";
      return (!prefix || text.slice(Math.max(0, candidate - prefix.length), candidate).endsWith(prefix)) && (!suffix || text.slice(
        candidate + quote.exact.length,
        candidate + quote.exact.length + suffix.length
      ).startsWith(suffix));
    });
    if (contextual.length === 1) return contextual[0];
    return candidates.length === 1 ? candidates[0] : -1;
  }
};

// src/reading/reading-renderer.ts
var previewStates = /* @__PURE__ */ new Set();
function textSegments(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node2) {
      const parent = node2.parentElement;
      if (!parent || parent.closest(
        ".notenyang-reading-margin-layer, code, pre, script, style, .math"
      )) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const segments = [];
  let text = "";
  let node;
  while (node = walker.nextNode()) {
    const value = node.nodeValue ?? "";
    segments.push({
      node,
      start: text.length,
      end: text.length + value.length
    });
    text += value;
  }
  return { text, segments };
}
function locateQuote(text, quote) {
  const candidates = [];
  let cursor = 0;
  while (cursor <= text.length) {
    const found = text.indexOf(quote.exact, cursor);
    if (found < 0) break;
    candidates.push(found);
    cursor = found + Math.max(1, quote.exact.length);
  }
  const contextual = candidates.filter((candidate) => {
    const prefix = quote.prefix ?? "";
    const suffix = quote.suffix ?? "";
    return (!prefix || text.slice(Math.max(0, candidate - prefix.length), candidate).endsWith(prefix)) && (!suffix || text.slice(
      candidate + quote.exact.length,
      candidate + quote.exact.length + suffix.length
    ).startsWith(suffix));
  });
  if (contextual.length === 1) return contextual[0];
  return candidates.length === 1 ? candidates[0] : -1;
}
function highlightOccurrence(root, annotation, plugin) {
  if (annotation.anchor.kind !== "markdown") return null;
  const existing = root.querySelector(
    `[data-notenyang-id="${annotation.id}"]`
  );
  if (existing) return existing;
  const { text, segments } = textSegments(root);
  const start = locateQuote(text, annotation.anchor.quote);
  if (start < 0) return null;
  const end = start + annotation.anchor.quote.exact.length;
  let firstMark = null;
  for (const segment of segments) {
    const from = Math.max(start, segment.start);
    const to = Math.min(end, segment.end);
    if (from >= to || !segment.node.parentNode) continue;
    const range = document.createRange();
    range.setStart(segment.node, from - segment.start);
    range.setEnd(segment.node, to - segment.start);
    const mark = createEl("mark");
    mark.className = `notenyang-highlight notenyang-highlight-${plugin.settings.highlightStyle}`;
    mark.dataset.notenyangId = annotation.id;
    setMarkdownMarkColor(mark, annotation);
    mark.addEventListener(
      "click",
      () => void plugin.activateAnnotation(annotation.id)
    );
    range.surroundContents(mark);
    firstMark ??= mark;
  }
  return firstMark;
}
function findAnchor(root, annotation, readText) {
  const highlighted = root.querySelector(
    `[data-notenyang-id="${annotation.id}"]`
  );
  if (highlighted) return highlighted;
  if (annotation.anchor.kind !== "markdown") return null;
  const { text, segments } = readText();
  const start = locateQuote(text, annotation.anchor.quote);
  const segment = segments.find(
    (candidate) => candidate.start <= start && candidate.end > start
  );
  return segment?.node.parentElement ?? null;
}
function ensurePreviewState(preview, plugin) {
  const existing = [...previewStates].find(
    (state2) => state2.preview === preview
  );
  if (existing) return existing;
  preview.addClass("notenyang-reading-preview");
  const layer = preview.createDiv({ cls: "notenyang-reading-margin-layer" });
  const state = {
    plugin,
    preview,
    layer,
    observer: new ResizeObserver(() => schedulePreview(state)),
    frame: 0
  };
  state.observer.observe(preview);
  previewStates.add(state);
  return state;
}
function destroyPreviewState(state) {
  cancelAnimationFrame(state.frame);
  state.observer.disconnect();
  state.layer.remove();
  previewStates.delete(state);
}
function schedulePreview(state) {
  window.cancelAnimationFrame(state.frame);
  state.frame = window.requestAnimationFrame(() => renderPreviewMargins(state));
}
function measurePlacement(state) {
  const { preview, plugin } = state;
  const previewRect = preview.getBoundingClientRect();
  const sizer = preview.querySelector(".markdown-preview-sizer") ?? preview;
  const contentRect = sizer.getBoundingClientRect();
  const gap = 10;
  const edge = 8;
  const leftWidth = Math.max(
    0,
    contentRect.left - previewRect.left - gap - edge
  );
  const rightWidth = Math.max(
    0,
    previewRect.right - contentRect.right - gap - edge
  );
  const side = plugin.settings.marginSide === "auto" ? leftWidth > rightWidth ? "left" : "right" : plugin.settings.marginSide;
  const available = side === "left" ? leftWidth : rightWidth;
  if (available < 72) return null;
  const width = Math.min(plugin.settings.marginWidth, available);
  return {
    width,
    left: side === "left" ? contentRect.left - previewRect.left - gap - width : contentRect.right - previewRect.left + gap
  };
}
function renderPreviewMargins(state) {
  const { preview, layer, plugin } = state;
  if (!preview.isConnected) {
    destroyPreviewState(state);
    return;
  }
  if (layer.firstChild) layer.empty();
  if (!plugin.settings.showMargins || plugin.areMarginsSuppressed() || preview.clientWidth < plugin.settings.narrowPaneThreshold) return;
  const placement = measurePlacement(state);
  if (!placement) return;
  const filePath = preview.dataset.notenyangSourcePath;
  if (!filePath) return;
  layer.style.height = `${preview.scrollHeight}px`;
  const previewRect = preview.getBoundingClientRect();
  let previewText;
  const readText = () => previewText ??= textSegments(preview);
  const entries = plugin.store.forSource(filePath).filter(
    (annotation) => annotation.anchor.kind === "markdown" && annotation.status !== "orphaned" && (annotation.status !== "resolved" || plugin.settings.showResolved)
  ).map((annotation) => {
    const anchor = findAnchor(preview, annotation, readText);
    return anchor ? {
      annotation,
      desiredTop: anchor.getBoundingClientRect().top - previewRect.top + preview.scrollTop
    } : null;
  }).filter(
    (entry) => Boolean(entry)
  ).sort((a, b) => a.desiredTop - b.desiredTop);
  let nextTop = 6;
  for (const entry of entries) {
    const card = layer.createDiv({
      cls: `notenyang-margin-card notenyang-margin-card-reading${plugin.settings.forceLongWordBreaks ? " notenyang-force-word-breaks" : ""}`,
      text: entry.annotation.body,
      attr: {
        "data-notenyang-id": entry.annotation.id,
        tabindex: "0",
        role: "button",
        "aria-label": plugin.t("openAnnotation", { body: entry.annotation.body })
      }
    });
    card.style.left = `${Math.floor(placement.left)}px`;
    card.style.width = `${Math.floor(placement.width)}px`;
    const top = Math.max(entry.desiredTop, nextTop);
    card.style.top = `${Math.floor(top)}px`;
    card.addEventListener(
      "click",
      () => void plugin.activateAnnotation(entry.annotation.id)
    );
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      void plugin.activateAnnotation(entry.annotation.id);
    });
    nextTop = top + card.getBoundingClientRect().height + 8;
  }
}
function refreshReadingMargins(plugin) {
  for (const state of previewStates) {
    if (state.plugin !== plugin) continue;
    for (const mark of state.preview.querySelectorAll("mark.notenyang-highlight[data-notenyang-id]")) {
      const annotation = plugin.store.get(mark.dataset.notenyangId);
      if (annotation) setMarkdownMarkColor(mark, annotation);
    }
    schedulePreview(state);
  }
}
function processReadingView(element, context, plugin) {
  if (context.sourcePath.startsWith(STORAGE_DIRECTORY + "/")) return;
  const annotations = plugin.store.forSource(context.sourcePath).filter(
    (annotation) => annotation.anchor.kind === "markdown" && (annotation.status !== "resolved" || plugin.settings.showResolved)
  );
  if (annotations.length === 0) {
    const preview = element.closest(".notenyang-reading-preview");
    if (preview) {
      const oldState = [...previewStates].find((state) => state.preview === preview);
      if (oldState) destroyPreviewState(oldState);
      preview.classList.remove("notenyang-reading-preview");
    }
    return;
  }
  for (const annotation of annotations) {
    if (plugin.settings.showHighlights) {
      highlightOccurrence(element, annotation, plugin);
    }
  }
  const preview = element.closest(".markdown-preview-view");
  if (!preview) return;
  preview.dataset.notenyangSourcePath = context.sourcePath;
  schedulePreview(ensurePreviewState(preview, plugin));
}

// src/settings.ts
var import_obsidian3 = require("obsidian");
const PDF_IMAGE_FOLDER = "NoteNyang 이미지";
const LEGACY_CAPTURE_FOLDER = "NoteNyang 캡처";
const PDF_IMAGE_SUBFOLDERS = Object.freeze({ capture: "캡처", drawing: "그리기" });
var DEFAULT_SETTINGS = {
  language: "auto",
  showHighlights: true,
  showMargins: true,
  showResolved: false,
  marginSide: "right",
  marginWidth: 200,
  narrowPaneThreshold: 900,
  highlightColor: "#ffd54f",
  highlightOpacity: 0.35,
  highlightStyle: "both",
  forceLongWordBreaks: true,
  showCardLocation: true,
  showCardDate: true,
  showMarkdownToolbar: true,
  autoPdfTools: true,
  showPdfToolsRibbon: false,
  showPdfCaptureRibbon: false,
  markdownDefaultColor: "yellow",
  expandInsertedCapture: true,
  includeInsertedComment: true,
  includeInsertedSource: true
};
var NoteNyangSettingTab = class extends import_obsidian3.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    const { plugin } = this;
    const { t } = plugin;
    const row = (name, description) =>
      new import_obsidian3.Setting(containerEl).setName(name).setDesc(description);
    const section = (name) =>
      new import_obsidian3.Setting(containerEl).setName(name).setHeading();
    const toggle = (key, name, description) => row(name, description).addToggle(
      (control) => control.setValue(plugin.settings[key]).onChange((value) =>
        plugin.updateSettings({ [key]: value })
      )
    );
    const dropdown = (key, name, description, options) => row(name, description).addDropdown(
      (control) => control.addOptions(options).setValue(plugin.settings[key]).onChange((value) =>
        plugin.updateSettings({ [key]: value })
      )
    );
    const slider = (key, name, description, min, max, step, format) => {
      const label = (value) => `${description} ${t("currentValue", { value: format(value) })}`;
      const setting = row(name, label(plugin.settings[key]));
      setting.addSlider((control) =>
        control.setLimits(min, max, step).setValue(plugin.settings[key]).setDynamicTooltip()
          .onChange((value) => {
            setting.setDesc(label(value));
            return plugin.updateSettings({ [key]: value });
          })
      );
    };

    row(t("language"), t("languageDescription")).addDropdown((control) => {
      control.addOptions({ auto: t("followObsidian"), en: "English", ko: "한국어" })
        .setValue(plugin.settings.language).onChange(async (language) => {
          control.setDisabled(true);
          try {
            await plugin.updateSettings({ language });
          } catch (error) {
            console.error("Could not save the NoteNyang language preference", error);
            new import_obsidian3.Notice(t("languageSaveFailed"));
          }
          if (containerEl.isConnected) this.display();
        });
    });

    section(t("sidebarCards"));
    toggle("showCardLocation", t("showLocation"), t("showLocationDescription"));
    toggle("showCardDate", t("showDate"), t("showDateDescription"));
    toggle("forceLongWordBreaks", t("wrapWords"), t("wrapWordsDescription"));

    section(t("readingTools"));
    toggle("showMarkdownToolbar", t("showMarkdownToolbar"), t("showMarkdownToolbarDescription"));
    toggle("autoPdfTools", t("autoPdfTools"), t("autoPdfToolsDescription"));
    toggle("showPdfToolsRibbon", t("showPdfToolsRibbon"), t("showPdfToolsRibbonDescription"));
    toggle("showPdfCaptureRibbon", t("showCaptureRibbon"), t("showCaptureRibbonDescription", { command: t("commandCapture") }));

    section(t("draggingIntoNotes"));
    toggle("expandInsertedCapture", t("expandCapture"), t("expandCaptureDescription"));
    toggle("includeInsertedComment", t("includeComment"), t("includeCommentDescription"));
    toggle("includeInsertedSource", t("includeSource"), t("includeSourceDescription"));

    section(t("highlights"));
    toggle("showHighlights", t("showHighlights"), t("showHighlightsDescription"));
    toggle("showResolved", t("showResolved"), t("showResolvedDescription"));
    dropdown("markdownDefaultColor", t("markdownDefaultColor"), t("markdownDefaultColorDescription"), {
      "": t("defaultHighlightColor"),
      ...Object.fromEntries(Object.entries(NOTENYANG_SWATCHES).map(([id, color]) => [id, color[uiLanguage(plugin.settings)]]))
    });
    row(t("highlightColor"), t("highlightColorDescription")).addColorPicker(
      (control) => control.setValue(plugin.settings.highlightColor).onChange((value) =>
        plugin.updateSettings({ highlightColor: value })
      )
    );
    slider("highlightOpacity", t("highlightOpacity"), t("highlightOpacityDescription"), 0.1, 1, 0.05, (value) => `${Math.round(value * 100)}%`);
    dropdown("highlightStyle", t("highlightStyle"), t("highlightStyleDescription"), {
      background: t("background"), underline: t("underline"), both: t("both")
    });

    section(t("margins"));
    toggle("showMargins", t("showMargins"), t("showMarginsDescription"));
    dropdown("marginSide", t("marginSide"), t("marginSideDescription"), {
      auto: t("automatic"), left: t("left"), right: t("right")
    });
    slider("marginWidth", t("marginWidth"), t("marginWidthDescription"), 160, 420, 10, (value) => `${value}px`);
    slider("narrowPaneThreshold", t("minimumPaneWidth"), t("minimumPaneWidthDescription"), 600, 1400, 50, (value) => `${value}px`);
    this.plugin.pdfTools?.settingsUI(containerEl);
  }
};

// src/storage/annotation-store.ts
var import_obsidian4 = require("obsidian");

// src/domain/annotation.ts
var ANNOTATION_SCHEMA_VERSION = 1;
function assertAnnotation(value) {
  if (!value || typeof value !== "object") {
    throw new Error("Annotation must be an object.");
  }
  const annotation = value;
  if (annotation.schemaVersion !== ANNOTATION_SCHEMA_VERSION) {
    throw new Error(`Unsupported annotation schema: ${annotation.schemaVersion}`);
  }
  if (!annotation.id || typeof annotation.id !== "string") {
    throw new Error("Annotation id is required.");
  }
  if (!annotation.sourcePath || typeof annotation.sourcePath !== "string") {
    throw new Error("Annotation source path is required.");
  }
  if (annotation.sourceType !== "markdown" && annotation.sourceType !== "pdf") {
    throw new Error("Annotation source type is invalid.");
  }
  if (!["open", "resolved", "orphaned"].includes(annotation.status ?? "")) {
    throw new Error("Annotation status is invalid.");
  }
  if (typeof annotation.body !== "string") {
    throw new Error("Annotation body must be a string.");
  }
  if (!annotation.anchor || typeof annotation.anchor !== "object") {
    throw new Error("Annotation anchor is required.");
  }
  if (annotation.anchor.kind !== "markdown" && annotation.anchor.kind !== "pdf" && annotation.anchor.kind !== "document") {
    throw new Error("Annotation anchor kind is invalid.");
  }
  if (annotation.sourceType === "markdown" && annotation.anchor.kind === "pdf") {
    throw new Error("A Markdown source cannot use a PDF anchor.");
  }
  if (annotation.sourceType === "pdf" && annotation.anchor.kind === "markdown") {
    throw new Error("A PDF source cannot use a Markdown anchor.");
  }
}

// src/storage/annotation-markdown.ts
var ANCHOR_START = "<!-- notenyang:anchor -->";
var ANCHOR_END = "<!-- /notenyang:anchor -->";
function scalar(value) {
  return typeof value === "number" ? String(value) : JSON.stringify(value);
}
function parseScalar(value) {
  const trimmed = value.trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    return trimmed;
  }
}
function requiredString(metadata, key) {
  const value = metadata[key];
  if (typeof value !== "string") {
    throw new Error(`Annotation metadata "${key}" must be a string.`);
  }
  return value;
}
function parseFrontmatter(source) {
  if (!source.startsWith("---\n")) {
    throw new Error("Annotation file is missing frontmatter.");
  }
  const end = source.indexOf("\n---\n", 4);
  if (end < 0) {
    throw new Error("Annotation frontmatter is not closed.");
  }
  const metadata = {};
  for (const line of source.slice(4, end).split("\n")) {
    if (!line.trim()) continue;
    const separator = line.indexOf(":");
    if (separator < 1) {
      throw new Error(`Invalid frontmatter line: ${line}`);
    }
    metadata[line.slice(0, separator).trim()] = parseScalar(
      line.slice(separator + 1)
    );
  }
  return { metadata, remainder: source.slice(end + 5) };
}
function serializeAnnotation(annotation) {
  assertAnnotation(annotation);
  const frontmatter = [
    "---",
    `notenyang-schema: ${annotation.schemaVersion}`,
    `id: ${scalar(annotation.id)}`,
    `source: ${scalar(annotation.sourcePath)}`,
    `source-type: ${scalar(annotation.sourceType)}`,
    `status: ${scalar(annotation.status)}`,
    `created: ${scalar(annotation.createdAt)}`,
    `updated: ${scalar(annotation.updatedAt)}`,
    "---"
  ].join("\n");
  return `${frontmatter}

# Annotation

${annotation.body.trimEnd()}

${ANCHOR_START}

## Anchor metadata

\`\`\`json
${JSON.stringify(annotation.anchor, null, 2)}
\`\`\`

${ANCHOR_END}
`;
}
function parseAnnotation(source) {
  const { metadata, remainder } = parseFrontmatter(
    source.replaceAll("\r\n", "\n")
  );
  const anchorStart = remainder.lastIndexOf(ANCHOR_START);
  const anchorEnd = remainder.lastIndexOf(ANCHOR_END);
  if (anchorStart < 0 || anchorEnd <= anchorStart) {
    throw new Error("Annotation anchor metadata is missing.");
  }
  const anchorSection = remainder.slice(anchorStart, anchorEnd);
  const codeStart = anchorSection.indexOf("```json\n");
  const codeEnd = anchorSection.lastIndexOf("\n```");
  if (codeStart < 0 || codeEnd <= codeStart) {
    throw new Error("Annotation anchor JSON is missing.");
  }
  const anchor = JSON.parse(
    anchorSection.slice(codeStart + "```json\n".length, codeEnd)
  );
  const content = remainder.slice(0, anchorStart).trim();
  const heading = "# Annotation";
  if (!content.startsWith(heading)) {
    throw new Error("Annotation body heading is missing.");
  }
  const annotation = {
    schemaVersion: Number(metadata["notenyang-schema"]),
    id: requiredString(metadata, "id"),
    sourcePath: requiredString(metadata, "source"),
    sourceType: requiredString(metadata, "source-type"),
    status: requiredString(metadata, "status"),
    createdAt: requiredString(metadata, "created"),
    updatedAt: requiredString(metadata, "updated"),
    body: content.slice(heading.length).replace(/^\s*\n/, "").trimEnd(),
    anchor
  };
  assertAnnotation(annotation);
  return annotation;
}

// src/storage/annotation-store.ts
var STORAGE_DIRECTORY = ".notenyang";
var PREVIOUS_STORAGE_DIRECTORY = "notenyang";
var DEFAULT_ANNOTATION_DIRECTORY = STORAGE_DIRECTORY + "/annotations";
var DEFAULT_EXPORT_DIRECTORY = STORAGE_DIRECTORY + "/exports";
var DEFAULT_TRASH_DIRECTORY = STORAGE_DIRECTORY + "/.trash";
var CaptureTrashError = class extends Error {
  constructor(cause, path) {
    super("Could not move the NoteNyang capture to the trash.", { cause });
    this.path = path;
  }
};
var AnnotationStore = class {
  constructor(app, directory = DEFAULT_ANNOTATION_DIRECTORY, onChange = () => void 0) {
    this.app = app;
    this.directory = directory;
    this.onChange = onChange;
  }
  byId = /* @__PURE__ */ new Map();
  idsBySource = /* @__PURE__ */ new Map();
  diagnostics = [];
  deletionQueue = Promise.resolve();
  async load() {
    this.byId.clear();
    this.idsBySource.clear();
    this.diagnostics = [];
    await this.ensureDirectory();
    const listing = await this.app.vault.adapter.list(this.directory);
    for (const path of listing.files.filter((file) => file.endsWith(".md"))) {
      try {
        const annotation = parseAnnotation(
          await this.app.vault.adapter.read(path)
        );
        if (this.byId.has(annotation.id)) {
          this.diagnostics.push({
            path,
            message: `Duplicate annotation id ${annotation.id}; both files were preserved.`
          });
          continue;
        }
        this.index(annotation);
      } catch (error) {
        this.diagnostics.push({
          path,
          message: error instanceof Error ? error.message : String(error)
        });
      }
    }
    this.onChange();
  }
  all() {
    return [...this.byId.values(), ...(this.research?.store.noteViews() ?? [])];
  }
  forSource(sourcePath) {
    const ids = this.idsBySource.get((0, import_obsidian4.normalizePath)(sourcePath));
    const existing = [...(ids || [])].map(id => this.byId.get(id)).filter(Boolean);
    return [...existing, ...(this.research?.store.noteViews(sourcePath) ?? [])];
  }
  hasSource(sourcePath) {
    return this.idsBySource.has((0, import_obsidian4.normalizePath)(sourcePath)) || Boolean(this.research?.store.noteViews(sourcePath).length);
  }
  get(id) {
    return this.byId.get(id) ?? this.research?.getAnnotation(id);
  }
  getDiagnostics() {
    return [...this.diagnostics];
  }
  async create(input) {
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const annotation = {
      ...input,
      schemaVersion: ANNOTATION_SCHEMA_VERSION,
      id: input.id ?? crypto.randomUUID(),
      sourcePath: (0, import_obsidian4.normalizePath)(input.sourcePath),
      createdAt: input.createdAt ?? now,
      updatedAt: now
    };
    if (this.byId.has(annotation.id)) {
      throw new Error(`Annotation ${annotation.id} already exists.`);
    }
    await this.write(annotation);
    this.index(annotation);
    this.onChange();
    return annotation;
  }
  async update(id, changes) {
    if (this.research?.getAnnotation(id)) return this.research.updateAnnotation(id, changes);
    const current = this.require(id);
    const updated = {
      ...current,
      ...changes,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    await this.write(updated);
    this.index(updated);
    this.onChange();
    return updated;
  }
  resolve(id) {
    return this.setStatus(id, "resolved");
  }
  reopen(id) {
    return this.setStatus(id, "open");
  }
  queueCaptureChange(operation) {
    const pending = this.deletionQueue.then(operation);
    this.deletionQueue = pending.catch(() => {});
    return pending;
  }

  delete(id) {
    return this.queueCaptureChange(() => {
      const annotation = this.get(id);
      if (annotation?.readerDocId) return this.moveReaderNoteToTrash(annotation);
      return this.moveToTrash(id);
    });
  }

  capturePathToTrash(annotation) {
    const { anchor } = annotation;
    if (anchor.kind !== "pdf" || !captureTrashPath(anchor.imagePath)) return null;
    const path = anchor.imagePath.toLowerCase();
    const shared = this.all().some(other => other.id !== annotation.id &&
      other.anchor.kind === "pdf" && typeof other.anchor.imagePath === "string" && other.anchor.imagePath.toLowerCase() === path);
    return shared ? null : anchor.imagePath;
  }

  async savePdfImage(kind, sourcePath, page, bytes) {
    const folder = PDF_IMAGE_FOLDER + "/" + PDF_IMAGE_SUBFOLDERS[kind];
    return this.queueCaptureChange(async () => {
      const { adapter } = this.app.vault;
      await this.ensureDirectoryPath(folder);
      const path = await availableCapturePath(folder, sourcePath, page, async candidate =>
        await adapter.exists(candidate) || await adapter.exists(captureTrashPath(candidate))
      );
      await this.app.vault.createBinary(path, bytes);
      return path;
    });
  }

  async trashCapture(path) {
    const { adapter } = this.app.vault;
    const target = captureTrashPath(path);
    if (!target || (await adapter.stat(path))?.type !== "file") return null;
    await this.ensureDirectoryPath(target.slice(0, target.lastIndexOf("/")));
    if (await adapter.exists(target)) throw new CaptureTrashError(new Error("An archived capture already uses this filename."));
    try { await adapter.rename(path, target); }
    catch (error) { throw new CaptureTrashError(error); }
    return target;
  }

  async moveReaderNoteToTrash(annotation) {
    const capture = this.capturePathToTrash(annotation);
    const archived = await this.trashCapture(capture);
    try {
      await this.research.deleteAnnotation(annotation.id);
    } catch (error) {
      if (archived) {
        try { await this.app.vault.adapter.rename(archived, capture); }
        catch (restoreError) { throw new CaptureTrashError(new AggregateError([error, restoreError])); }
      }
      throw error;
    }
  }

  async restoreCaptureImages(paths, onRestore) {
    return this.queueCaptureChange(async () => {
      const { adapter } = this.app.vault;
      const restored = [];
      try {
        for (const image of new Set(paths)) {
          const archived = captureTrashPath(image);
          if (!archived || await adapter.exists(image) || !(await adapter.exists(archived))) continue;
          await this.ensureDirectoryPath(image.slice(0, image.lastIndexOf("/")));
          await adapter.rename(archived, image);
          restored.push({ image, archived });
        }
        return await onRestore();
      } catch (error) {
        for (const { image, archived } of restored.reverse()) await adapter.rename(image, archived);
        throw error;
      }
    });
  }
  async moveToTrash(id) {
    const annotation = this.require(id);
    const adapter = this.app.vault.adapter;
    const annotationPath = this.pathFor(annotation.id);
    const capturePath = this.capturePathToTrash(annotation);
    const hasCapture = capturePath && (await adapter.stat(capturePath))?.type === "file";
    await this.ensureDirectoryPath(DEFAULT_TRASH_DIRECTORY);
    const trashBase = (0, import_obsidian4.normalizePath)(
      `${DEFAULT_TRASH_DIRECTORY}/${annotation.id}-${Date.now()}`
    );
    const trashPath = `${trashBase}.md`;
    await adapter.rename(annotationPath, trashPath);
    if (hasCapture) {
      try {
        await this.trashCapture(capturePath);
      } catch (error) {
        try {
          await adapter.rename(trashPath, annotationPath);
        } catch (restoreError) {
          this.unindex(annotation);
          this.onChange();
          throw new CaptureTrashError(new AggregateError([error, restoreError]), trashPath);
        }
        throw new CaptureTrashError(error);
      }
    }
    this.unindex(annotation);
    this.onChange();
  }
  async renameSource(oldPath, newPath) {
    const annotations = this.forSource(oldPath).filter(annotation => !annotation.readerDocId);
    for (const annotation of annotations) {
      this.unindex(annotation);
      const updated = {
        ...annotation,
        sourcePath: (0, import_obsidian4.normalizePath)(newPath),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      await this.write(updated);
      this.index(updated);
    }
    if (annotations.length > 0) this.onChange();
  }
  async reconcileMarkdownSource(sourcePath, documentText) {
    for (const annotation of this.forSource(sourcePath)) {
      if (annotation.anchor.kind !== "markdown") continue;
      const anchor = annotation.anchor;
      const atStoredOffsets = documentText.slice(
        anchor.startOffset,
        anchor.endOffset
      );
      if (atStoredOffsets === anchor.quote.exact) continue;
      const candidates = [];
      let cursor = 0;
      while (cursor <= documentText.length) {
        const found = documentText.indexOf(anchor.quote.exact, cursor);
        if (found < 0) break;
        candidates.push(found);
        cursor = found + Math.max(1, anchor.quote.exact.length);
      }
      const contextual = candidates.filter((candidate) => {
        const prefix = anchor.quote.prefix ?? "";
        const suffix = anchor.quote.suffix ?? "";
        return (!prefix || documentText.slice(Math.max(0, candidate - prefix.length), candidate).endsWith(prefix)) && (!suffix || documentText.slice(
          candidate + anchor.quote.exact.length,
          candidate + anchor.quote.exact.length + suffix.length
        ).startsWith(suffix));
      });
      const resolved = contextual.length === 1 ? contextual[0] : candidates.length === 1 ? candidates[0] : null;
      if (resolved === null) {
        if (annotation.status !== "orphaned") {
          await this.update(annotation.id, { status: "orphaned" });
        }
        continue;
      }
      const endOffset = resolved + anchor.quote.exact.length;
      const beforeStart = documentText.slice(0, resolved);
      const beforeEnd = documentText.slice(0, endOffset);
      const startLine = beforeStart.split("\n").length - 1;
      const endLine = beforeEnd.split("\n").length - 1;
      const startCharacter = resolved - (beforeStart.lastIndexOf("\n") + 1);
      const endCharacter = endOffset - (beforeEnd.lastIndexOf("\n") + 1);
      await this.update(annotation.id, {
        status: annotation.status === "orphaned" ? "open" : annotation.status,
        anchor: {
          ...anchor,
          startOffset: resolved,
          endOffset,
          startLine,
          startCharacter,
          endLine,
          endCharacter
        }
      });
    }
  }
  setStatus(id, status) {
    return this.update(id, { status });
  }
  require(id) {
    const annotation = this.byId.get(id);
    if (!annotation) throw new Error(`Unknown annotation: ${id}`);
    return annotation;
  }
  index(annotation) {
    const existing = this.byId.get(annotation.id);
    if (existing) this.unindex(existing);
    this.byId.set(annotation.id, annotation);
    const ids = this.idsBySource.get(annotation.sourcePath) ?? /* @__PURE__ */ new Set();
    ids.add(annotation.id);
    this.idsBySource.set(annotation.sourcePath, ids);
  }
  unindex(annotation) {
    this.byId.delete(annotation.id);
    const ids = this.idsBySource.get(annotation.sourcePath);
    ids?.delete(annotation.id);
    if (ids?.size === 0) this.idsBySource.delete(annotation.sourcePath);
  }
  async write(annotation) {
    await this.ensureDirectory();
    await this.app.vault.adapter.write(
      this.pathFor(annotation.id),
      serializeAnnotation(annotation)
    );
  }
  pathFor(id) {
    return (0, import_obsidian4.normalizePath)(`${this.directory}/${id}.md`);
  }
  async ensureDirectory() {
    await this.ensureDirectoryPath(this.directory);
  }
  async ensureDirectoryPath(directory) {
    const segments = (0, import_obsidian4.normalizePath)(directory).split("/");
    let current = "";
    for (const segment of segments) {
      current = current ? `${current}/${segment}` : segment;
      if (!await this.app.vault.adapter.exists(current)) {
        await this.app.vault.adapter.mkdir(current);
      }
    }
  }
};

// src/ui/sidebar-view.ts
var import_obsidian6 = require("obsidian");

// src/domain/annotation-drag.ts
var ANNOTATION_URI_ACTION = "notenyang-annotation";
function formatAnnotationForDrag(annotation, settings = DEFAULT_SETTINGS, vaultName) {
  const t = (key, values) => uiText(settings, key, values);
  const parts = [`[!quote] ${t("quote")}`];
  if (annotation.anchor.kind === "pdf" && annotation.anchor.imagePath) {
    const fold = settings.expandInsertedCapture ? "+" : "-";
    parts.push(`> [!note]${fold} ${t("captureImage")}
> ![[${annotation.anchor.imagePath}]]`);
  } else if (annotation.anchor.kind !== "document") {
    parts.push(annotation.anchor.quote.exact);
  }
  if (settings.includeInsertedComment && annotation.body.trim()) parts.push(`**${t("comment")}**
${annotation.body.trim()}`);
  if (settings.includeInsertedSource) {
    const path = annotation.sourcePath.replace(/\.md$/i, "");
    if (annotation.anchor.kind === "markdown" && vaultName) {
      const filename = (path.split("/").pop() || path).replace(/[\\\[\]]/g, "\\$&");
      const uri = `obsidian://${ANNOTATION_URI_ACTION}?vault=${encodeURIComponent(vaultName)}&id=${encodeURIComponent(annotation.id)}`;
      const line = t("line", { number: annotation.anchor.startLine + 1 });
      parts.push(`${t("source")}: [${filename} · ${line}](<${uri}>)`);
    } else {
      const target = annotation.anchor.kind === "pdf" ? `${path}#page=${annotation.anchor.page}` : path;
      parts.push(`${t("source")}: [[${target}]]`);
    }
  }
  return parts.join("\n\n").split(/\r?\n/).map((line) => line ? `> ${line}` : ">").join("\n");
}

// src/domain/capture-filename.ts
const LEGACY_CAPTURE_TRASH_DIRECTORY = DEFAULT_TRASH_DIRECTORY + "/captures";
const PDF_IMAGE_TRASH_DIRECTORY = DEFAULT_TRASH_DIRECTORY + "/images";

function captureTrashPath(imagePath) {
  if (typeof imagePath !== "string") return null;
  const [root, ...relative] = imagePath.split("/");
  if (root !== PDF_IMAGE_FOLDER && root !== LEGACY_CAPTURE_FOLDER) return null;
  const filename = relative.pop();
  if (!/^[^\\:\x00-\x1f]+\.png$/i.test(filename || "")) return null;
  if (relative.length && (relative.length > 1 || !Object.values(PDF_IMAGE_SUBFOLDERS).includes(relative[0]))) return null;
  const trash = root === PDF_IMAGE_FOLDER ? PDF_IMAGE_TRASH_DIRECTORY : LEGACY_CAPTURE_TRASH_DIRECTORY;
  return [trash, ...relative, filename].join("/");
}

function captureBaseName(sourcePath, page) {
  const filename = sourcePath.split(/[\\/]/).pop() ?? "";
  const safe = filename.replace(/\.pdf$/i, "").replace(/[<>:"/\\|?*\x00-\x1f]/g, "_").replace(/[.\s]+$/g, "").trim();
  const shortened = Array.from(safe).slice(0, 100).join("").replace(/[.\s]+$/g, "");
  const name = shortened || "PDF";
  return `${name}_${page}\uCABD`;
}
async function availableCapturePath(folder, sourcePath, page, exists) {
  const base = captureBaseName(sourcePath, page);
  for (let index = 1; index < 1e4; index++) {
    const suffix = index === 1 ? "" : `_${index}`;
    const path = `${folder}/${base}${suffix}.png`;
    if (!await exists(path)) return path;
  }
  throw new Error("Could not find an available capture filename.");
}

// src/ui/confirm-modal.ts
var import_obsidian5 = require("obsidian");
var ConfirmModal = class extends import_obsidian5.Modal {
  constructor(app, title, message, confirmLabel, cancelLabel, onConfirm) {
    super(app);
    this.message = message;
    this.confirmLabel = confirmLabel;
    this.cancelLabel = cancelLabel;
    this.onConfirm = onConfirm;
    this.setTitle(title);
  }
  onOpen() {
    this.contentEl.createEl("p", { text: this.message });
    new import_obsidian5.Setting(this.contentEl).addButton(
      (button) => button.setButtonText(this.cancelLabel).onClick(() => this.close())
    ).addButton(
      (button) => button.setButtonText(this.confirmLabel).then((component) => component.buttonEl.addClass("mod-warning")).onClick(async () => {
        await this.onConfirm();
        this.close();
      })
    );
  }
};

// src/ui/sidebar-view.ts
var NOTENYANG_VIEW_TYPE = "notenyang-annotations";
function formatAnchorLocation(anchor, t) {
  if (anchor.kind === "markdown") return t("line", { number: anchor.startLine + 1 });
  if (anchor.kind === "pdf") return t("page", { number: anchor.page });
  return t("document");
}
var NoteNyangSidebarView = class extends import_obsidian6.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
  }
  viewScope = "current";
  status = "open";
  query = "";
  activeId = null;
  draft = null;
  savingDraft = false;
  toolbarEl;
  searchEl;
  draftEl;
  listEl;
  getViewType() {
    return NOTENYANG_VIEW_TYPE;
  }
  getDisplayText() {
    return "NoteNyang";
  }
  getIcon() {
    return "message-square-text";
  }
  async onOpen() {
    this.render();
    this.plugin.refreshContext();
  }
  async onClose() {
    this.plugin.refreshContext();
  }
  refresh() {
    if (this.containerEl.isConnected) this.render();
  }
  setActiveAnnotation(id) {
    this.activeId = id;
    this.containerEl.querySelectorAll(".notenyang-card.is-active").forEach((element) => element.removeClass("is-active"));
    if (id) {
      const card = this.containerEl.querySelector(`[data-notenyang-id="${id}"]`);
      card?.addClass("is-active");
      card?.scrollIntoView({ block: "nearest" });
    }
  }
  beginCreate(input, imageDataUrl) {
    this.switchDraft({ mode: "create", input, body: "", imageDataUrl });
  }
  beginEdit(annotation) {
    if (this.draft?.mode === "edit" && this.draft.annotation.id === annotation.id) {
      this.focusDraft();
      return;
    }
    this.switchDraft({ mode: "edit", annotation, body: annotation.body });
  }
  render() {
    const root = this.containerEl.children[1];
    if (this.toolbarEl?.parentElement !== root) {
      root.empty();
      root.addClass("notenyang-sidebar");
      this.toolbarEl = root.createDiv({ cls: "notenyang-toolbar" });
      this.searchEl = this.createSearch(root);
      this.draftEl = root.createDiv({ cls: "notenyang-draft-host" });
      this.listEl = root.createDiv({ cls: "notenyang-list" });
    }
    root.toggleClass(
      "notenyang-force-word-breaks",
      this.plugin.settings.forceLongWordBreaks
    );
    this.searchEl.placeholder = this.plugin.t("searchPlaceholder");
    this.searchEl.setAttribute("aria-label", this.plugin.t("search"));
    this.renderToolbar(this.toolbarEl);
    this.renderResults();
  }
  renderResults() {
    const list = this.listEl;
    const annotations = this.visibleAnnotations();
    this.draftEl.empty();
    list.empty();
    if (this.draft && (this.draft.mode === "create" ||
      !annotations.some((annotation) => annotation.id === this.draft.annotation.id))) {
      this.renderDraft(this.draftEl);
    }
    if (annotations.length === 0) {
      list.createDiv({
        cls: "notenyang-empty",
        text: this.plugin.t("noAnnotations")
      });
      return;
    }
    for (const annotation of annotations) this.renderCard(list, annotation);
  }
  renderDraft(root) {
    if (!this.draft) return;
    const { t } = this.plugin;
    const draft = this.draft;
    const form = root.createDiv({ cls: "notenyang-draft" });
    const anchor = draft.mode === "create" ? draft.input.anchor : draft.annotation.anchor;
    const location = formatAnchorLocation(anchor, t);
    const header = form.createDiv({ cls: "notenyang-card-header" });
    header.createSpan({ cls: "notenyang-card-location", text: this.plugin.settings.showCardLocation ? location : "" });
    const imageUrl = draft.mode === "create" && draft.imageDataUrl ? draft.imageDataUrl : anchor.kind === "pdf" && anchor.imagePath ? this.app.vault.adapter.getResourcePath(anchor.imagePath) : null;
    if (imageUrl) {
      form.createEl("img", { cls: "notenyang-capture", attr: { src: imageUrl, alt: t("pdfCapture") } });
    } else if (anchor.kind !== "document") {
      form.createEl("blockquote", {
        cls: "notenyang-card-quote",
        text: anchor.quote.exact
      });
    }
    this.renderDraftEditor(form, draft);
  }
  renderDraftEditor(form, draft) {
    const { t } = this.plugin;
    const textarea = form.createEl("textarea", {
      cls: "notenyang-draft-textarea",
      attr: {
        "aria-label": t("annotationText"),
        placeholder: t("addComment"),
        rows: "1"
      }
    });
    textarea.value = draft.body;
    const resizeTextarea = () => {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    };
    resizeTextarea();
    textarea.addEventListener("input", () => {
      draft.body = textarea.value;
      resizeTextarea();
    });
    textarea.addEventListener("keydown", (event) => {
      if (event.isComposing) return;
      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
        event.preventDefault();
        void this.saveDraft();
      } else if (event.key === "Escape") {
        event.preventDefault();
        this.cancelDraft();
      }
    });
    const actions = form.createDiv({ cls: "notenyang-draft-actions" });
    const cancel = actions.createEl("button", { text: t("cancel") });
    cancel.addEventListener("click", () => this.cancelDraft());
    const save = actions.createEl("button", {
      cls: "mod-cta",
      text: t("save")
    });
    save.addEventListener("click", () => void this.saveDraft());
  }
  async saveDraft() {
    const draft = this.draft;
    if (!draft || this.savingDraft) return;
    const capture = draft.mode === "create" ? draft.imageDataUrl : draft.annotation.anchor.imagePath;
    if (!draft.body.trim() && !capture && !draft.annotation?.readerDocId) return;
    this.savingDraft = true;
    let annotation;
    try {
      annotation = await this.persistDraft(draft);
    } catch (error) {
      console.error("Could not save the NoteNyang annotation", error);
      new import_obsidian6.Notice(this.plugin.t("annotationSaveFailed"));
      return;
    } finally {
      this.savingDraft = false;
    }
    if (!annotation) return;
    this.draft = null;
    this.activeId = annotation.id;
    this.render();
    await this.plugin.activateAnnotation(annotation.id);
  }
  async persistDraft(draft) {
    if (draft.mode === "create") {
      if (draft.input.readerSelection) return this.plugin.pdfTools.saveReaderDraft(draft.input.readerSelection, draft.body.trim(), draft.imageDataUrl);
      if (draft.imageDataUrl && draft.input.anchor.kind === "pdf" && !draft.input.anchor.imagePath) {
        try {
          const encoded = draft.imageDataUrl.split(",")[1];
          if (!encoded) throw new Error("Invalid captured image.");
          const bytes = Uint8Array.from(atob(encoded), char => char.charCodeAt(0));
          draft.input.anchor.imagePath = await this.plugin.store.savePdfImage("capture", draft.input.sourcePath, draft.input.anchor.page, bytes.buffer);
        } catch (error) {
          console.error("Could not save the NoteNyang PDF capture", error);
          new import_obsidian6.Notice(this.plugin.t("captureSaveFailed"));
          return;
        }
      }
      return this.plugin.store.create({
        ...draft.input,
        body: draft.body.trim()
      });
    }
    return this.plugin.store.update(draft.annotation.id, {
      body: draft.body.trim()
    });
  }
  cancelDraft() {
    this.switchDraft(null);
  }
  switchDraft(next) {
    if (this.savingDraft) return;
    const current = this.draft;
    const hasChanges = current?.mode === "edit"
      ? current.body !== current.annotation.body
      : current && (current.body.trim() || current.imageDataUrl);
    const apply = () => {
      if (this.savingDraft || this.draft !== current) return;
      this.draft = next;
      this.render();
      if (next) this.focusDraft();
    };
    if (!hasChanges) {
      apply();
      return;
    }
    const { t } = this.plugin;
    new ConfirmModal(
      this.app,
      t("discardTitle"),
      t("discardMessage"),
      t("discard"),
      t("cancel"),
      apply
    ).open();
  }
  focusDraft() {
    window.setTimeout(
      () => this.containerEl.querySelector(".notenyang-draft-textarea")?.focus()
    );
  }
  renderToolbar(toolbar) {
    const { t } = this.plugin;
    toolbar.empty();
    const scopes = [
      { value: "current", label: t("currentFile") },
      { value: "vault", label: t("entireVault") }
    ];
    const paths = [...new Set(this.plugin.store.all().map((annotation) => annotation.sourcePath))]
      .sort((a, b) => a.localeCompare(b));
    const files = paths.map((path) => ({
      value: `file:${path}`, label: path.split("/").pop() || path, path
    }));
    const names = new Map();
    for (const { label } of files) names.set(label, (names.get(label) ?? 0) + 1);
    for (const file of files) {
      if (names.get(file.label) > 1) file.label = file.path;
    }
    const selected = [...scopes, ...files].find(({ value }) => value === this.viewScope) ?? scopes[0];
    this.viewScope = selected.value;
    const scope = toolbar.createEl("button", {
      cls: "notenyang-scope",
      attr: {
        type: "button",
        "aria-label": t("chooseScope", { scope: selected.label }),
        "aria-haspopup": "menu",
        title: selected.path ?? selected.label
      }
    });
    scope.createSpan({ cls: "notenyang-scope-label", text: selected.label });
    (0, import_obsidian6.setIcon)(scope.createSpan({ cls: "notenyang-scope-icon" }), "chevron-down");
    scope.addEventListener("click", () => {
      const menu = new import_obsidian6.Menu().setUseNativeMenu(false);
      const addScope = ({ value, label }) => menu.addItem((item) =>
        item.setTitle(label).setChecked(value === this.viewScope).onClick(() => {
          this.viewScope = value;
          this.render();
          this.containerEl.querySelector(".notenyang-scope")?.focus();
        })
      );
      scopes.forEach(addScope);
      if (files.length) menu.addSeparator();
      files.forEach(addScope);
      const { left, bottom } = scope.getBoundingClientRect();
      menu.showAtPosition({ x: left, y: bottom });
    });
    const filter = toolbar.createEl("select", {
      attr: { "aria-label": t("filterStatus") }
    });
    for (const value of ["open", "resolved", "orphaned", "all"]) {
      filter.createEl("option", { value, text: t(value) });
    }
    filter.value = this.status;
    filter.addEventListener("change", () => {
      this.status = filter.value;
      this.renderResults();
    });
  }
  createSearch(root) {
    const search = root.createEl("input", {
      cls: "notenyang-search",
      type: "search"
    });
    search.value = this.query;
    let composing = false;
    const updateQuery = () => {
      if (this.query === search.value) return;
      this.query = search.value;
      this.renderResults();
    };
    search.addEventListener("compositionstart", () => {
      composing = true;
    });
    search.addEventListener("compositionend", () => {
      composing = false;
      updateQuery();
    });
    search.addEventListener("input", (event) => {
      if (!composing && !event.isComposing) updateQuery();
    });
    return search;
  }
  visibleAnnotations() {
    const path = this.viewScope === "current"
      ? this.app.workspace.getActiveFile()?.path
      : this.viewScope.slice(5);
    let annotations = this.viewScope === "vault"
      ? this.plugin.store.all()
      : path ? this.plugin.store.forSource(path) : [];
    if (this.status !== "all") {
      annotations = annotations.filter((item) => item.status === this.status);
    }
    const normalize = (value) => value.normalize("NFC").toLocaleLowerCase();
    const query = normalize(this.query.trim());
    if (query) {
      annotations = annotations.filter((item) => {
        const quote = item.anchor.kind === "document" ? "" : item.anchor.quote.exact;
        return normalize(`${item.body}
${quote}
${item.sourcePath}`).includes(query);
      });
    }
    return annotations.sort((a, b) => {
      const aTime = Date.parse(a.createdAt);
      const bTime = Date.parse(b.createdAt);
      const aCreated = Number.isNaN(aTime) ? -Infinity : aTime;
      const bCreated = Number.isNaN(bTime) ? -Infinity : bTime;
      if (aCreated !== bCreated) return bCreated - aCreated;
      if (a.sourcePath !== b.sourcePath) {
        return a.sourcePath.localeCompare(b.sourcePath);
      }
      const aPosition = a.anchor.kind === "markdown" ? a.anchor.startOffset : a.anchor.kind === "pdf" ? a.anchor.page : 0;
      const bPosition = b.anchor.kind === "markdown" ? b.anchor.startOffset : b.anchor.kind === "pdf" ? b.anchor.page : 0;
      return aPosition - bPosition;
    });
  }
  renderCard(parent, annotation) {
    const { t } = this.plugin;
    const card = parent.createDiv({
      cls: `notenyang-card notenyang-status-${annotation.status}${annotation.id === this.activeId ? " is-active" : ""}`,
      attr: {
        "data-notenyang-id": annotation.id,
        tabindex: "0",
        role: "group",
        "aria-label": t("openAnnotationIn", { path: annotation.sourcePath })
      }
    });
    const header = card.createDiv({ cls: "notenyang-card-header" });
    const dragHandle = header.createEl("span", {
      cls: "notenyang-drag-handle",
      attr: {
        draggable: "true",
        title: t("dragAnnotation"),
        "aria-label": t("dragAnnotation")
      }
    });
    (0, import_obsidian6.setIcon)(dragHandle, "grip-vertical");
    dragHandle.addEventListener("click", (event) => event.stopPropagation());
    dragHandle.addEventListener("dragstart", (event) => {
      if (!event.dataTransfer) return;
      event.dataTransfer.effectAllowed = "copy";
      const text = formatAnnotationForDrag(annotation, this.plugin.settings, this.app.vault.getName());
      event.dataTransfer.setData("text/plain", text);
      event.stopPropagation();
    });
    const location = formatAnchorLocation(annotation.anchor, t);
    header.createSpan({ cls: "notenyang-card-location", text: this.plugin.settings.showCardLocation ? location : "" });
    if (annotation.status !== "open") {
      header.createSpan({
        cls: "notenyang-card-status",
        text: t(annotation.status)
      });
    }
    const menuButton = header.createEl("button", {
      cls: "clickable-icon",
      attr: { "aria-label": t("annotationActions") }
    });
    (0, import_obsidian6.setIcon)(menuButton, "ellipsis");
    menuButton.addEventListener("click", (event) => {
      event.stopPropagation();
      this.openMenu(event, annotation);
    });
    if (annotation.anchor.kind === "pdf" && annotation.anchor.imagePath) {
      card.createEl("img", {
        cls: "notenyang-capture",
        attr: { src: this.app.vault.adapter.getResourcePath(annotation.anchor.imagePath), alt: t("pdfCapture") }
      });
    } else if (annotation.anchor.kind !== "document") {
      card.createEl("blockquote", {
        cls: "notenyang-card-quote",
        text: annotation.anchor.quote.exact
      });
    }
    const comment = card.createDiv({ cls: "notenyang-card-comment" });
    const editing = this.draft?.mode === "edit" && this.draft.annotation.id === annotation.id;
    comment.addEventListener("click", (event) => {
      if (editing || event.target?.closest?.("a, button, input, textarea, select, [contenteditable]")) return;
      const selection = comment.ownerDocument.getSelection();
      if (selection && !selection.isCollapsed && comment.contains(selection.anchorNode)) return;
      this.beginEdit(annotation);
    });
    if (editing) {
      this.renderDraftEditor(comment, this.draft);
    } else {
      comment.tabIndex = 0;
      comment.setAttribute("role", "button");
      comment.setAttribute("aria-label", t("editComment"));
      comment.title = t("editComment");
      comment.addEventListener("keydown", (event) => {
        if (event.target === comment && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          event.stopPropagation();
          this.beginEdit(annotation);
        }
      });
      const body = comment.createDiv({ cls: "notenyang-card-body markdown-rendered" });
      void import_obsidian6.MarkdownRenderer.render(this.app, annotation.body, body, annotation.sourcePath, this);
    }
    if (this.plugin.settings.showCardDate) {
      const created = new Date(annotation.createdAt);
      comment.createEl("time", {
        cls: "notenyang-card-date",
        text: Number.isNaN(created.getTime()) ? annotation.createdAt : created.toLocaleString(uiLanguage(this.plugin.settings)),
        attr: { datetime: annotation.createdAt, "aria-label": t("created") }
      });
    }
    const activate = () => void this.plugin.navigateToAnnotation(annotation);
    card.addEventListener("click", (event) => {
      if (!comment.contains(event.target)) activate();
    });
    card.addEventListener("keydown", (event) => {
      if (event.target === card && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        activate();
      }
    });
  }
  openMenu(event, annotation) {
    const { t } = this.plugin;
    const menu = new import_obsidian6.Menu();
    menu.addItem(
      (item) => item.setTitle(t("edit")).setIcon("pencil").onClick(() => this.beginEdit(annotation))
    );
    menu.addItem(
      (item) => item.setTitle(t(annotation.status === "resolved" ? "reopen" : "resolve")).setIcon(annotation.status === "resolved" ? "rotate-ccw" : "check").onClick(async () => {
        if (annotation.status === "resolved") {
          await this.plugin.store.reopen(annotation.id);
        } else {
          await this.plugin.store.resolve(annotation.id);
        }
      })
    );
    menu.addSeparator();
    menu.addItem(
      (item) => item.setTitle(t("delete")).setIcon("trash-2").setWarning(true).onClick(() => {
        const capturePath = this.plugin.store.capturePathToTrash(annotation);
        new ConfirmModal(
          this.app,
          t("deleteTitle"),
          t(capturePath ? "deleteWithCapture" : annotation.readerDocId && annotation.anchor.imagePath ? "pdfToolsImageKept" : annotation.readerDocId ? "pdfToolsDeleteQuestion" : "deleteMessage"),
          t("delete"),
          t("cancel"),
          async () => {
            try {
              await this.plugin.store.delete(annotation.id);
              if (this.draft?.mode === "edit" && this.draft.annotation.id === annotation.id) {
                this.draft = null;
                this.renderResults();
              }
              new import_obsidian6.Notice(t("deleted"));
            } catch (error) {
              console.error("Could not delete NoteNyang annotation", error);
              let message = t("deleteFailed");
              if (error instanceof CaptureTrashError) {
                message = error.path ? t("deleteRestoreFailed", { path: error.path }) : t("deleteCaptureFailed");
              }
              new import_obsidian6.Notice(message);
            }
          }
        ).open();
      })
    );
    menu.showAtMouseEvent(event);
  }
};

// src/main.ts
// Markdown reading controls use the same annotation sidebar as PDFs.
function markdownHeadings(app, file) {
  return app.metadataCache?.getFileCache(file)?.headings ?? [];
}
async function openMarkdownHeading(app, file, heading, knownLeaf) {
  const workspace = app.workspace;
  const leaves = workspace.getLeavesOfType("markdown").filter(item => item.view.file?.path === file.path);
  const leaf = leaves.find(item => item === knownLeaf)
    || leaves.find(item => item === workspace.activeLeaf || item === workspace.getMostRecentLeaf?.())
    || leaves.find(item => item.view.contentEl.getClientRects().length)
    || leaves[0];
  const state = { subpath: "#" + heading.heading, line: heading.position.start.line };
  if (!leaf) {
    await workspace.getLeaf("tab").openFile(file, { active: true, eState: state });
    return;
  }
  await workspace.revealLeaf(leaf);
  if (leaf.view.getMode() === "preview") {
    leaf.view.setEphemeralState(state);
    return;
  }
  const position = { line: heading.position.start.line, ch: heading.position.start.col };
  leaf.view.editor.setCursor(position);
  leaf.view.editor.scrollIntoView({ from: position, to: position }, true);
}

class MarkdownTools {
  constructor(plugin) {
    this.plugin = plugin;
    this.app = plugin.app;
    this.views = new Map();
  }

  sync() {
    if (!this.plugin.settings.showMarkdownToolbar) { this.close(); return; }
    const seen = new Set();
    this.app.workspace.iterateAllLeaves(leaf => {
      const view = leaf.view;
      if (!(view instanceof import_obsidian7.MarkdownView) || !view.file || !view.contentEl) return;
      seen.add(view);
      const entry = this.views.get(view) ?? this.attach(leaf, view);
      if (entry.bar.parentElement !== view.contentEl) view.contentEl.prepend(entry.bar);
      if (entry.path !== view.file.path) entry.index = -1;
      entry.path = view.file.path;
      this.update(entry);
    });
    for (const [view, entry] of this.views) if (!seen.has(view)) this.detach(view, entry);
  }

  attach(leaf, view) {
    const host = view.contentEl;
    const bar = host.ownerDocument.createElement("div");
    bar.className = "notenyang-md-toolbar";
    bar.setAttribute("role", "toolbar");
    host.classList.add("notenyang-md-toolbar-host");
    const entry = { leaf, view, bar, index: -1 };
    const makeButton = (icon, key, action) => {
      const node = bar.ownerDocument.createElement("button");
      node.type = "button";
      node.className = "clickable-icon notenyang-md-icon";
      import_obsidian7.setIcon(node, icon);
      node.addEventListener("pointerdown", event => {
        if (event.pointerType !== "touch") event.preventDefault();
      });
      node.addEventListener("click", () => {
        Promise.resolve().then(action).catch(error => {
          console.error("[NoteNyang]", error);
          new import_obsidian7.Notice(this.plugin.t("linkedSourceFailed"));
        });
      });
      bar.append(node);
      this.label(node, key);
      return node;
    };
    entry.previous = makeButton("chevron-left", "previousHeading", () => this.move(entry, -1));
    entry.next = makeButton("chevron-right", "nextHeading", () => this.move(entry, 1));
    entry.list = makeButton("list", "commandOpen", () => this.openPanel(view.file, "annotations"));
    entry.outline = makeButton("list-tree", "markdownOutline", () => this.openPanel(view.file, "outline", leaf));
    entry.add = makeButton("message-square-plus", "addAnnotation", () => this.add(view));
    const palette = bar.ownerDocument.createElement("div");
    palette.className = "rp-palette notenyang-toolbar-palette notenyang-md-palette";
    palette.setAttribute("role", "group");
    palette.setAttribute("aria-label", this.plugin.t("markdownDefaultColor"));
    bar.append(palette);
    entry.colors = new Map();
    for (const [id, color] of Object.entries(NOTENYANG_SWATCHES)) {
      const swatch = bar.ownerDocument.createElement("button");
      swatch.type = "button";
      swatch.className = "notenyang-md-swatch";
      swatch.style.setProperty("--notenyang-swatch-color", color.hex);
      swatch.addEventListener("pointerdown", event => {
        if (event.pointerType !== "touch") event.preventDefault();
      });
      swatch.addEventListener("click", () => {
        this.plugin.updateSettings({ markdownDefaultColor: id }).then(() => this.update(entry)).catch(error => console.error("[NoteNyang]", error));
      });
      entry.colors.set(id, swatch);
      palette.append(swatch);
    }
    const win = host.ownerDocument.defaultView;
    const controller = new win.AbortController();
    let frame = null;
    const refreshPosition = () => {
      if (frame !== null) return;
      frame = win.requestAnimationFrame(() => {
        frame = null;
        if (view.file && this.views.has(view)) this.update(entry);
      });
    };
    host.addEventListener("scroll", refreshPosition, { capture: true, passive: true, signal: controller.signal });
    host.addEventListener("pointerup", refreshPosition, { signal: controller.signal });
    host.addEventListener("keyup", refreshPosition, { signal: controller.signal });
    entry.stop = () => {
      controller.abort();
      if (frame !== null) win.cancelAnimationFrame(frame);
    };
    this.views.set(view, entry);
    return entry;
  }

  label(node, key) {
    const title = this.plugin.t(key);
    node.title = title;
    node.setAttribute("aria-label", title);
  }

  currentHeading(entry, headings) {
    const { view } = entry;
    if (view.getMode() !== "preview") {
      const line = view.editor.getCursor().line;
      return headings.findLastIndex(heading => heading.position.start.line <= line);
    }
    const preview = view.contentEl.querySelector(".markdown-preview-view");
    if (!preview) return entry.index;
    const top = preview.getBoundingClientRect().top + 24;
    const visible = [...preview.querySelectorAll(":is(h1,h2,h3,h4,h5,h6)[data-heading]")]
      .filter(node => !node.closest(".internal-embed"))
      .filter(node => node.getBoundingClientRect().top <= top).at(-1);
    const index = visible ? headings.findIndex(heading => heading.heading === visible.dataset.heading) : -1;
    return index >= 0 ? index : entry.index;
  }

  update(entry) {
    const { view } = entry;
    entry.bar.setAttribute("aria-label", this.plugin.t("markdownToolbar"));
    const headings = markdownHeadings(this.app, view.file);
    const index = this.currentHeading(entry, headings);
    entry.previous.disabled = index <= 0;
    entry.next.disabled = index + 1 >= headings.length;
    this.label(entry.previous, "previousHeading");
    this.label(entry.next, "nextHeading");
    this.label(entry.list, "commandOpen");
    this.label(entry.outline, "markdownOutline");
    this.label(entry.add, "addAnnotation");
    for (const [id, button] of entry.colors) {
      const label = NOTENYANG_SWATCHES[id][uiLanguage(this.plugin.settings)];
      const { markdownDefaultColor, highlightColor } = this.plugin.settings;
      const defaultPaletteColor = !markdownDefaultColor && highlightColor === DEFAULT_SETTINGS.highlightColor ? "yellow" : markdownDefaultColor;
      const active = defaultPaletteColor === id;
      button.title = label;
      button.setAttribute("aria-label", label);
      button.setAttribute("aria-pressed", String(active));
      button.classList.toggle("is-active", active);
    }
  }

  async move(entry, direction) {
    const file = entry.view.file;
    const headings = markdownHeadings(this.app, file);
    const index = this.currentHeading(entry, headings) + direction;
    if (!headings[index]) return;
    entry.index = index;
    await openMarkdownHeading(this.app, file, headings[index], entry.leaf);
    this.update(entry);
  }

  async openPanel(file, tab, leaf) {
    if (!file) return;
    const sidebar = await this.plugin.openSidebar();
    if (tab === "outline" && sidebar?.sourcePath?.() !== file.path) {
      sidebar?.setScope?.("current");
    }
    if (tab === "outline" && sidebar) sidebar.markdownOutlineLeaf = leaf;
    await sidebar?.setTab?.(tab);
  }

  add(view) {
    const { editor, file } = view;
    if (!file || !editor) return;
    if (view.getMode() !== "preview" && editor.somethingSelected()) {
      this.plugin.beginMarkdownAnnotation(editor, view);
      return;
    }

    const selection = view.contentEl.ownerDocument.getSelection();
    const start = selection?.anchorNode?.parentElement;
    const end = selection?.focusNode?.parentElement;
    const preview = start?.closest(".markdown-preview-view");
    if (!selection?.isCollapsed && preview && view.contentEl.contains(preview) && preview.contains(end)) {
      const quote = selection.toString().trim();
      const text = editor.getValue();
      const block = selection.getRangeAt(0).commonAncestorContainer;
      const nearby = (block.parentElement?.closest("p, li, blockquote, h1, h2, h3, h4, h5, h6")?.textContent || "").trim();
      const offsetInBlock = nearby.indexOf(quote);
      const offset = quote && locateQuote(text, {
        exact: quote,
        prefix: offsetInBlock >= 0 ? nearby.slice(Math.max(0, offsetInBlock - 40), offsetInBlock) : "",
        suffix: offsetInBlock >= 0 ? nearby.slice(offsetInBlock + quote.length, offsetInBlock + quote.length + 40) : ""
      });
      if (typeof offset === "number" && offset >= 0) {
        this.plugin.beginMarkdownAnnotation(editor, view, offset, offset + quote.length);
      } else {
        new import_obsidian7.Notice(this.plugin.t("markdownSelectionUnlocated"));
      }
      return;
    }

    void this.plugin.beginSidebarDraft({ sourcePath: file.path, sourceType: "markdown", status: "open", body: "", anchor: { kind: "document" } });
  }

  detach(view, entry) {
    entry.stop();
    entry.bar.remove();
    view.contentEl.classList.remove("notenyang-md-toolbar-host");
    this.views.delete(view);
  }

  close() {
    for (const [view, entry] of this.views) this.detach(view, entry);
  }
}



var NoteNyangPlugin = class extends import_obsidian7.Plugin {
  store;
  settings = DEFAULT_SETTINGS;
  settingsQueue = Promise.resolve();
  t = (key, values) => uiText(this.settings, key, values);
  editorRevision = 0;
  pdfAdapter;
  annotationsRibbon;
  pdfCaptureRibbon;
  refreshFrame = null;
  contentRefreshPending = false;
  lastActivePath = null;
  lastMarginsSuppressed = false;
  refreshedEditors = new WeakSet();
  unloaded = false;
  async onload() {
    const savedSettings = await this.loadData();
    this.settings = {
      ...DEFAULT_SETTINGS,
      ...savedSettings && typeof savedSettings === "object" ? savedSettings : {}
    };
    if (!Object.hasOwn(NOTENYANG_SWATCHES, this.settings.markdownDefaultColor)) this.settings.markdownDefaultColor = "";
    if (this.settings.language !== "en" && this.settings.language !== "ko") {
      this.settings.language = "auto";
    }
    await this.migrateStorageDirectory();
    this.applyCssSettings();
    this.store = new AnnotationStore(this.app, void 0, () => this.refresh());
    await this.store.load();
    try {
      this.pdfTools = createNoteNyangPdfTools(this);
      await this.pdfTools.start();
      if (this.unloaded) return;
      this.store.research = this.pdfTools;
      this.pdfToolsRibbon = this.addRibbonIcon("book-open", "NoteNyang PDF", () => this.runPdfTools(tools => tools.pickPdf()));
      this.pdfToolsRibbon.toggleClass("notenyang-ribbon-hidden", !this.settings.showPdfToolsRibbon);
    } catch (error) {
      this.pdfTools?.close();
      this.pdfTools = null;
      console.error("Could not initialize NoteNyang PDF tools", error);
      new import_obsidian7.Notice(this.t("pdfToolsFailed"));
    }
    this.registerObsidianProtocolHandler(ANNOTATION_URI_ACTION, async ({ id }) => {
      const annotation = this.store.get(id);
      if (!annotation) {
        new import_obsidian7.Notice(this.t("linkedAnnotationMissing"));
        return;
      }
      try {
        await this.navigateToAnnotation(annotation);
      } catch (error) {
        console.error("Failed to open NoteNyang annotation", error);
        new import_obsidian7.Notice(this.t("linkedSourceFailed"));
      }
    });
    this.markdownTools = new MarkdownTools(this);
    this.pdfAdapter = new PdfAdapter(this);
    this.pdfAdapter.start();
    this.registerView(
      NOTENYANG_VIEW_TYPE,
      (leaf) => this.pdfTools?.createSidebar(leaf) ?? new NoteNyangSidebarView(leaf, this)
    );
    this.app.workspace.onLayoutReady(() => this.pdfTools?.migratePdfSidebar().catch(error => console.error("[NoteNyang]", error)));
    this.registerEditorExtension(createMarkdownExtension(this));
    this.registerMarkdownPostProcessor(
      (element, context) => processReadingView(element, context, this)
    );
    this.addSettingTab(new NoteNyangSettingTab(this.app, this));
    this.annotationsRibbon = this.addRibbonIcon(
      "message-square-text",
      UI_TEXT.ribbonAnnotations[0],
      () => void this.openSidebar()
    );
    this.pdfCaptureRibbon = this.addRibbonIcon("scan", UI_TEXT.ribbonCapture[0], () => this.beginPdfRegionCapture());
    this.pdfCaptureRibbon.toggleClass("notenyang-ribbon-hidden", !this.settings.showPdfCaptureRibbon);
    this.updateRibbonLabels();
    this.registerCommands();
    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, editor, view) => {
        if (!editor.somethingSelected() || !(view instanceof import_obsidian7.MarkdownView) || !view.file) {
          return;
        }
        menu.addItem(
          (item) => item.setTitle(this.t("addAnnotation")).setIcon("message-square-plus").onClick(() => this.beginMarkdownAnnotation(editor, view))
        );
      })
    );
    const pdfContextHandler = (event) => this.addPdfContextAction(event);
    document.addEventListener("contextmenu", pdfContextHandler, true);
    this.register(
      () => document.removeEventListener("contextmenu", pdfContextHandler, true)
    );
    this.registerEvent(
      this.app.vault.on("rename", async (file, oldPath) => {
        if (!(file instanceof import_obsidian7.TFile)) return;
        if (file.extension !== "md" && file.extension !== "pdf") return;
        await this.store.renameSource(oldPath, file.path);
      })
    );
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", () => this.refreshContext())
    );
    this.registerEvent(
      this.app.workspace.on("layout-change", () => this.refreshContext())
    );
    this.registerEvent(
      this.app.workspace.on("file-open", (file) => {
        this.refreshContext();
        if (file?.extension === "md") void this.reconcileFile(file);
      })
    );
    this.registerEvent(
      this.app.vault.on("modify", (file) => {
        if (file instanceof import_obsidian7.TFile && file.extension === "md") {
          void this.reconcileFile(file);
        }
      })
    );
    if (this.app.metadataCache?.on) this.registerEvent(this.app.metadataCache.on("changed", file => {
      if (file.extension === "md") this.refresh();
    }));
    this.refreshContext();
    const diagnostics = this.store.getDiagnostics();
    if (diagnostics.length > 0) {
      new import_obsidian7.Notice(
        this.t(diagnostics.length === 1 ? "invalidAnnotation" : "invalidAnnotations", { count: diagnostics.length })
      );
      console.warn("NoteNyang annotation diagnostics", diagnostics);
    }
  }
  async migrateStorageDirectory() {
    const { adapter } = this.app.vault;
    const previousAnnotations = PREVIOUS_STORAGE_DIRECTORY + "/annotations";
    if ((await adapter.stat(previousAnnotations))?.type !== "folder") return;
    if (await adapter.exists(STORAGE_DIRECTORY)) {
      new import_obsidian7.Notice(this.t("storageMigrationConflict"), 1e4);
      return;
    }
    try {
      await adapter.rename(PREVIOUS_STORAGE_DIRECTORY, STORAGE_DIRECTORY);
    } catch (error) {
      if (!await adapter.exists(PREVIOUS_STORAGE_DIRECTORY) &&
          (await adapter.stat(DEFAULT_ANNOTATION_DIRECTORY))?.type === "folder") return;
      new import_obsidian7.Notice(this.t("storageMigrationFailed"), 1e4);
      throw error;
    }
  }
  async runPdfTools(action) {
    try {
      await action(this.pdfTools);
    } catch (error) {
      console.error("NoteNyang PDF", error);
      new import_obsidian7.Notice(this.t("pdfToolsFailed") + " " + (error?.message || ""));
    }
  }
  updateRibbonLabels() {
    // Keep the ribbon registration titles stable so Obsidian keeps the saved ribbon layout.
    (0, import_obsidian7.setTooltip)(this.annotationsRibbon, this.t("ribbonAnnotations"));
    (0, import_obsidian7.setTooltip)(this.pdfCaptureRibbon, this.t("ribbonCapture"));
    if (this.pdfToolsRibbon) import_obsidian7.setTooltip(this.pdfToolsRibbon, this.t("pdfToolsOpen"));
  }
  registerCommands(replace = false) {
    const commands = [
      {
        id: "open-annotations",
        name: this.t("commandOpen"),
        callback: () => void this.openSidebar()
      },
      {
        id: "add-markdown-annotation",
        name: this.t("commandMarkdown"),
        editorCheckCallback: (checking, editor, view) => {
          if (!editor.somethingSelected() || !(view instanceof import_obsidian7.MarkdownView) || !view.file) return false;
          if (!checking) this.beginMarkdownAnnotation(editor, view);
          return true;
        }
      },
      {
        id: "add-note-annotation",
        name: this.t("commandDocument"),
        callback: () => this.beginDocumentAnnotation()
      },
      {
        id: "add-pdf-annotation",
        name: this.t("commandPdf"),
        checkCallback: (checking) => {
          const captured = this.capturePdfSelection();
          if (!captured) return false;
          if (!checking) this.beginPdfAnnotation(captured);
          return true;
        }
      },
      {
        id: "capture-pdf-region",
        name: this.t("commandCapture"),
        checkCallback: (checking) => {
          if (this.app.workspace.getActiveFile()?.extension !== "pdf") return false;
          if (!checking) this.beginPdfRegionCapture();
          return true;
        }
      },
      {
        id: "export-annotations",
        name: this.t("commandExport"),
        callback: async () => {
          try {
            await this.exportAnnotations();
          } catch (error) {
            console.error("Could not export NoteNyang annotations", error);
            new import_obsidian7.Notice(this.t("exportFailed"));
          }
        }
      }
    ];
    if (this.pdfTools) {
      for (const [id, name, action] of [
        ["pdf-tools", "pdfToolsOpen", tools => tools.pickPdf()],
        ["pdf-tool-list", "pdfToolsList", tools => tools.showCurrentPanel("annotations")],
        ["pdf-outline", "pdfToolsOutline", tools => tools.showCurrentPanel("outline")],
        ["pdf-drawing", "pdfToolsDraw", tools => tools.runTool("draw")]
      ]) commands.push({ id, name: this.t(name), callback: () => this.runPdfTools(action) });
    }
    for (const command of commands) {
      if (replace) this.removeCommand(command.id);
      this.addCommand(command);
    }
  }
  onunload() {
    this.unloaded = true;
    this.markdownTools?.close();
    this.pdfTools?.close();
    if (this.refreshFrame !== null) window.cancelAnimationFrame(this.refreshFrame);
    for (const state of previewStates) {
      if (state.plugin === this) destroyPreviewState(state);
    }
    document.body.style.removeProperty("--notenyang-margin-width");
    document.body.style.removeProperty("--notenyang-highlight-color");
    document.body.style.removeProperty("--notenyang-highlight-opacity");
    delete document.body.dataset.notenyangForceWordBreaks;
  }
  updateSettings(changes) {
    const update = this.settingsQueue.then(async () => {
      const previous = this.settings;
      const next = { ...previous, ...(typeof changes === 'function' ? changes(previous) : changes) };
      await this.saveData(next);
      this.settings = next;
      if (uiLanguage(next) !== uiLanguage(previous)) {
        this.registerCommands(true);
        this.updateRibbonLabels();
      }
      this.applyCssSettings();
      this.pdfTools?.redraw();
      this.pdfCaptureRibbon?.toggleClass("notenyang-ribbon-hidden", !next.showPdfCaptureRibbon);
      this.pdfToolsRibbon?.toggleClass("notenyang-ribbon-hidden", !next.showPdfToolsRibbon);
      if (next.autoPdfTools && !previous.autoPdfTools) this.pdfTools?.scheduleScan();
      if (next.showMarkdownToolbar !== previous.showMarkdownToolbar) this.markdownTools?.sync();
      this.refresh();
    });
    this.settingsQueue = update.catch(() => {});
    return update;
  }
  async openSidebar() {
    const workspace = this.app.workspace;
    let leaf = workspace.getLeavesOfType(NOTENYANG_VIEW_TYPE)[0];
    if (!leaf) {
      if (!this.sidebarOpening) {
        this.sidebarOpening = (async () => {
          const rightLeaf = workspace.getRightLeaf(false) || workspace.getLeaf("tab");
          await rightLeaf?.setViewState({ type: NOTENYANG_VIEW_TYPE, active: true });
          return rightLeaf;
        })();
      }
      try { leaf = await this.sidebarOpening; }
      finally { this.sidebarOpening = null; }
    }
    if (!leaf) return null;
    await workspace.revealLeaf(leaf);
    this.refreshContext();
    return leaf.view instanceof NoteNyangSidebarView ? leaf.view : null;
  }
  areMarginsSuppressed() {
    const workspace = this.app.workspace;
    return workspace.getLeavesOfType(NOTENYANG_VIEW_TYPE).some((leaf) => {
      let dock = leaf.parent;
      while (dock && dock !== workspace.rightSplit && dock !== workspace.leftSplit) {
        dock = dock.parent;
      }
      if (dock?.collapsed) return false;
      const element = leaf.view.containerEl;
      if (!element.isConnected) return false;
      const { width, height } = element.getBoundingClientRect();
      return width > 0 && height > 0;
    });
  }
  async activateAnnotation(id, options) {
    const annotation = this.store.get(id);
    if (!annotation) return;
    const sidebar = await this.openSidebar();
    sidebar?.setActiveAnnotation(id, options);
    this.pdfAdapter.renderVisibleHighlights(id);
  }
  async navigateToAnnotation(annotation) {
    if (annotation.sourceType === "pdf" && annotation.anchor.kind === "pdf") {
      if (annotation.readerDocId) await this.pdfTools.navigate(annotation);
      else await this.pdfAdapter.navigate(annotation);
      await this.activateAnnotation(annotation.id);
      return;
    }
    const file = this.app.vault.getAbstractFileByPath(annotation.sourcePath);
    if (!(file instanceof import_obsidian7.TFile)) {
      new import_obsidian7.Notice(this.t("sourceMissing", { path: annotation.sourcePath }));
      return;
    }
    const workspace = this.app.workspace;
    const type = annotation.sourceType === "pdf" ? "pdf" : "markdown";
    const leaf = workspace.getLeavesOfType(type).find(candidate => candidate.view.file?.path === file.path)
      || workspace.getLeaf(workspace.activeLeaf?.view instanceof NoteNyangSidebarView ? "tab" : false);
    const anchor = annotation.anchor;
    await leaf.openFile(file, anchor.kind === "markdown" ? { active: true, state: { mode: "source" } } : { active: true });
    const view = leaf.view;
    await this.activateAnnotation(annotation.id);
    if (!(view instanceof import_obsidian7.MarkdownView) || anchor.kind !== "markdown") return;
    const editor = view.editor;
    const text = editor.getValue();
    const quote = anchor.quote.exact;
    const start = quote && text.slice(anchor.startOffset, anchor.startOffset + quote.length) === quote
      ? anchor.startOffset : quote ? locateQuote(text, anchor.quote) : -1;
    if (start < 0) {
      new import_obsidian7.Notice(this.t("sourceLocationMissing"));
      return;
    }
    const from = editor.offsetToPos(start);
    const to = editor.offsetToPos(start + quote.length);
    editor.setSelection(from, to);
    editor.scrollIntoView({ from, to }, true);
  }
  refresh() {
    this.contentRefreshPending = true;
    this.refreshContext();
  }
  refreshContext() {
    if (this.unloaded || this.refreshFrame !== null) return;
    this.refreshFrame = window.requestAnimationFrame(() => {
      this.refreshFrame = null;
      this.applyPendingRefresh();
    });
  }
  applyPendingRefresh() {
    const workspace = this.app.workspace;
    const currentPath = workspace.getActiveFile()?.path ?? null;
    const pathChanged = this.lastActivePath !== currentPath;
    this.markdownTools?.sync();
    const suppressed = this.areMarginsSuppressed();
    const marginsChanged = this.lastMarginsSuppressed !== suppressed;
    const contentChanged = this.contentRefreshPending;
    this.lastActivePath = currentPath;
    this.lastMarginsSuppressed = suppressed;
    this.contentRefreshPending = false;
    if (contentChanged || pathChanged) {
      for (const { view } of workspace.getLeavesOfType(NOTENYANG_VIEW_TYPE)) {
        if (view instanceof NoteNyangSidebarView && (contentChanged || view.viewScope === "current")) view.refresh();
      }
    }
    if (contentChanged || marginsChanged || pathChanged && currentPath && this.store.hasSource(currentPath)) {
      this.editorRevision += 1;
      workspace.iterateAllLeaves(({ view }) => {
        if (!(view instanceof import_obsidian7.MarkdownView)) return;
        const cm = view.editor.cm;
        if (!cm) return;
        if (view.file && this.store.hasSource(view.file.path)) {
          this.refreshedEditors.add(cm);
        } else if (!this.refreshedEditors.delete(cm)) {
          return;
        }
        cm.dispatch({});
      });
      refreshReadingMargins(this);
    }
    this.pdfAdapter?.renderVisibleHighlights();
  }
  beginMarkdownAnnotation(editor, view, startOffset = editor.posToOffset(editor.getCursor('from')), endOffset = editor.posToOffset(editor.getCursor('to'))) {
    if (!view.file) return;
    const documentText = editor.getValue();
    const exact = documentText.slice(startOffset, endOffset);
    if (!exact.trim()) return;
    const from = editor.offsetToPos(startOffset);
    const to = editor.offsetToPos(endOffset);
    const anchor = {
      kind: "markdown",
      markdownColor: this.settings.markdownDefaultColor || undefined,
      startOffset,
      endOffset,
      startLine: from.line,
      startCharacter: from.ch,
      endLine: to.line,
      endCharacter: to.ch,
      quote: {
        exact,
        prefix: documentText.slice(Math.max(0, startOffset - 64), startOffset),
        suffix: documentText.slice(endOffset, endOffset + 64)
      },
      quoteHash: this.hash(exact)
    };
    void this.beginSidebarDraft({
      sourcePath: view.file.path,
      sourceType: "markdown",
      status: "open",
      body: "",
      anchor
    });
  }
  beginDocumentAnnotation() {
    const file = this.app.workspace.getActiveFile();
    if (!file || file.extension !== "md" && file.extension !== "pdf") {
      new import_obsidian7.Notice(this.t("openDocumentFirst"));
      return;
    }
    void this.beginSidebarDraft({
      sourcePath: file.path,
      sourceType: file.extension === "pdf" ? "pdf" : "markdown",
      status: "open",
      body: "",
      anchor: { kind: "document" }
    });
  }
  capturePdfSelection(target) {
    return this.pdfTools?.selectionForTarget(target) ?? this.pdfAdapter.captureSelection();
  }
  beginPdfAnnotation(captured) {
    if (!captured) return;
    void this.beginSidebarDraft({
      sourcePath: captured.sourcePath,
      sourceType: "pdf",
      status: "open",
      body: "",
      anchor: captured.anchor,
      readerSelection: captured.readerSelection
    });
  }
  beginPdfRegionCapture() {
    this.pdfAdapter.startRegionSelection((captured) => {
      void this.beginSidebarDraft({
        sourcePath: captured.sourcePath,
        sourceType: "pdf",
        status: "open",
        body: "",
        anchor: captured.anchor
      }, captured.imageDataUrl);
    });
  }
  addPdfContextAction(event) {
    if (!this.pdfAdapter.isPdfContext(event.target)) return;
    const captured = this.capturePdfSelection(event.target);
    if (!captured) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    this.showPdfSelectionMenu(captured, event);
  }
  showPdfSelectionMenu(captured, event, position) {
    const menu = new import_obsidian7.Menu();
    menu.addItem(item => item.setTitle(this.t("addAnnotation")).setIcon("message-square-plus").onClick(() => {
      if (captured.readerSelection) this.pdfTools.clearSelection(captured.readerSelection.docId);
      this.beginPdfAnnotation(captured);
    }));
    menu.addItem(item => item.setTitle(this.t("copySelection")).setIcon("copy").onClick(() => {
      const clipboard = (event?.view?.navigator || window.navigator).clipboard;
      void clipboard?.writeText(captured.anchor.quote.exact);
    }));
    if (event) menu.showAtMouseEvent(event);
    else menu.showAtPosition(position);
  }
  async exportAnnotations() {
    const { t } = this;
    const lines = [
      `# ${t("exportTitle")}`,
      "",
      t("exportGenerated", { date: new Date().toISOString() }),
      ""
    ];
    for (const annotation of this.store.all()) {
      lines.push(
        `## ${annotation.sourcePath}`,
        "",
        `- ${t("status")}: ${t(annotation.status)}`,
        `- ${t("type")}: ${t(annotation.sourceType)}`,
        `- ${t("id")}: \`${annotation.id}\``,
        ""
      );
      if (annotation.anchor.kind === "pdf" && annotation.anchor.imagePath) {
        lines.push(`![[${annotation.anchor.imagePath}]]`, "");
      } else if (annotation.anchor.kind !== "document") {
        lines.push("> " + annotation.anchor.quote.exact.replaceAll("\n", "\n> "), "");
      }
      lines.push(annotation.body, "", "---", "");
    }
    const directory = DEFAULT_EXPORT_DIRECTORY;
    if (!await this.app.vault.adapter.exists(directory)) {
      await this.app.vault.adapter.mkdir(directory);
    }
    const path = (0, import_obsidian7.normalizePath)(
      `${directory}/annotations-${(/* @__PURE__ */ new Date()).toISOString().replaceAll(/[:.]/g, "-")}.md`
    );
    await this.app.vault.adapter.write(path, lines.join("\n"));
    new import_obsidian7.Notice(t("exported", { path }));
  }
  async beginSidebarDraft(input, imageDataUrl) {
    const sidebar = await this.openSidebar();
    if (!sidebar) {
      new import_obsidian7.Notice(this.t("sidebarUnavailable"));
      return;
    }
    sidebar.beginCreate(input, imageDataUrl);
  }
  async reconcileFile(file) {
    if (file.path.startsWith(STORAGE_DIRECTORY + "/") || !this.store.hasSource(file.path)) return;
    await this.store.reconcileMarkdownSource(
      file.path,
      await this.app.vault.cachedRead(file)
    );
  }
  applyCssSettings() {
    document.body.style.setProperty(
      "--notenyang-margin-width",
      `${this.settings.marginWidth}px`
    );
    document.body.style.setProperty(
      "--notenyang-highlight-color",
      this.settings.highlightColor
    );
    document.body.style.setProperty(
      "--notenyang-highlight-opacity",
      String(this.settings.highlightOpacity)
    );
    document.body.dataset.notenyangMarginSide = this.settings.marginSide;
    document.body.dataset.notenyangForceWordBreaks = String(
      this.settings.forceLongWordBreaks
    );
  }
  hash(value) {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(16).padStart(8, "0");
  }
};


/* NoteNyang PDF tools include adaptations from PDF Research Reader 1.0.1.
MIT License

Copyright (c) 2026 PDF Research Reader contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

PDF Research Reader uses the PDF.js library supplied by Obsidian at runtime.
The scoped text-layer CSS and mobile-page viewport geometry are adapted from Mozilla PDF.js.
Copyright Mozilla Foundation and contributors. Licensed under Apache-2.0.
Source: https://github.com/mozilla/pdf.js


                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS
*/
function createNoteNyangPdfTools(owner) {
  const { Component, ItemView, Modal, Notice, Menu, FuzzySuggestModal, Setting, TFile, Platform, setIcon } = require('obsidian');
  const LT = (ko, en) => uiLanguage(owner.settings) === "ko" ? ko : en;
  const C = (() => { const module = { exports: {} };
  'use strict';

  const COLORS = Object.freeze(Object.fromEntries(Object.entries(NOTENYANG_SWATCHES).map(([id, color]) => [id, {
    get label() { return LT(color.ko, color.en); }, hex: color.hex, icon: color.icon
  }])));
  const KINDS = Object.freeze({ get highlight() { return LT("형광펜", "Highlight"); }, get note() { return LT("메모", "Note"); }, get capture() { return LT("영역 캡처", "Area capture"); }, get drawing() { return LT("드로잉", "Drawing"); } });
  const EXPORT_FORMATS = Object.freeze({ get callout() { return LT("콜아웃", "Callout"); }, get quote() { return LT("인용문", "Quote"); }, get text() { return LT("원문 + 메모", "Text and note"); }, get link() { return LT("출처 링크", "Source link"); }, get table() { return LT("표", "Table"); } });
  const DEFAULTS = Object.freeze({ defaultColor: 'yellow', pageOffset: 0, copyFormat: 'callout', mobileSinglePage: true });
  function uid() { return globalThis.crypto?.randomUUID?.() || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`; }
  function hash(text) {
    let a = 2166136261, b = 3339675911;
    for (let i = 0; i < text.length; i++) { a = Math.imul(a ^ text.charCodeAt(i), 16777619); b = Math.imul(b ^ text.charCodeAt(i), 2246822519); }
    return (a >>> 0).toString(16).padStart(8, '0') + (b >>> 0).toString(16).padStart(8, '0');
  }
  function normalizeFolder(value) {
    const p = String(value || '').replace(/\\/g, '/').replace(/^\/+|\/+$/g, '');
    if (!p || p.split('/').some(x => !x || x === '.' || x === '..' || x.startsWith('.')) || /[:\x00-\x1f]/.test(p)) throw new Error(LT("보관함 안의 일반 폴더 경로를 입력하세요.", "Enter a folder path inside the vault."));
    return p;
  }
  function validateDocument(raw) {
    if (!raw || raw.schema !== 1 || typeof raw.id !== 'string' || typeof raw.path !== 'string' || !Array.isArray(raw.annotations) || !Array.isArray(raw.deleted)) throw new Error(LT("지원하지 않거나 손상된 노트 데이터입니다. 원본 데이터를 덮어쓰지 않았습니다.", "The note data is unsupported or damaged. The original data was preserved."));
    const ids = new Set();
    for (const a of raw.annotations) {
      if (!a || typeof a.id !== 'string' || ids.has(a.id) || !KINDS[a.kind] || !COLORS[a.color] || typeof a.text !== 'string' || typeof a.comment !== 'string' || !Array.isArray(a.anchors) || !a.anchors.length) throw new Error(LT("노트 데이터 형식이 올바르지 않습니다.", "Invalid note data."));
      ids.add(a.id);
      for (const anchor of a.anchors) {
        if (!Number.isInteger(anchor.page) || anchor.page < 1 || !Array.isArray(anchor.rects) || !anchor.rects.length || anchor.rects.some(r => !Array.isArray(r) || r.length !== 4 || r.some(n => !Number.isFinite(n)))) throw new Error(LT("노트 위치 정보가 올바르지 않습니다.", "Invalid note coordinates."));
      }
      if (a.image != null && (typeof a.image !== 'string' || a.image.split(/[\\/]/).some(p => p === '..'))) throw new Error(LT("잘못된 이미지 경로입니다.", "Invalid image path."));
      if (a.kind === 'drawing') { if (!Array.isArray(a.ink) || !a.ink.length) throw new Error(LT("드로잉 획이 없습니다.", "The drawing has no strokes.")); a.ink.forEach(validateInkStroke); }
    }
    if (raw.inkDrafts != null && !Array.isArray(raw.inkDrafts)) throw new Error(LT("드로잉 임시 저장 형식이 올바르지 않습니다.", "Invalid drawing draft data."));
    const inkIds = new Set();
    for (const stroke of raw.inkDrafts || []) { validateInkStroke(stroke); if (inkIds.has(stroke.id)) throw new Error(LT("드로잉 획 ID가 중복되었습니다.", "Duplicate drawing stroke IDs.")); inkIds.add(stroke.id); }
    if (raw.deletedInkDrafts != null && !Array.isArray(raw.deletedInkDrafts)) throw new Error(LT("드로잉 삭제 기록이 올바르지 않습니다.", "Invalid drawing deletion record."));
    for (const d of raw.deletedInkDrafts || []) if (!d || typeof d.id !== 'string' || typeof d.deletedAt !== 'string') throw new Error(LT("드로잉 삭제 기록이 올바르지 않습니다.", "Invalid drawing deletion record."));
    for (const d of raw.deleted) if (!d || typeof d.id !== 'string' || typeof d.deletedAt !== 'string') throw new Error(LT("삭제 기록이 올바르지 않습니다.", "Invalid deletion record."));
    if (raw.outline != null && !Array.isArray(raw.outline)) throw new Error(LT("사용자 개요 형식이 올바르지 않습니다.", "Invalid custom outline data."));
    const outlineIds = new Set();
    for (const item of raw.outline || []) {
      if (!item || typeof item.id !== 'string' || outlineIds.has(item.id) || typeof item.title !== 'string' || !item.title.trim() || !Number.isInteger(item.page) || item.page < 1 || (item.parentId != null && typeof item.parentId !== 'string')) throw new Error(LT("사용자 개요 항목이 올바르지 않습니다.", "Invalid custom outline item."));
      outlineIds.add(item.id);
    }
    if (raw.deletedOutline != null && !Array.isArray(raw.deletedOutline)) throw new Error(LT("개요 삭제 기록이 올바르지 않습니다.", "Invalid outline deletion record."));
    for (const d of raw.deletedOutline || []) if (!d || typeof d.id !== 'string' || typeof d.deletedAt !== 'string') throw new Error(LT("개요 삭제 기록이 올바르지 않습니다.", "Invalid outline deletion record."));
    return raw;
  }
  function newDocument(path, stat = {}) {
    return { schema: 1, id: `doc-${hash(path)}`, path, stat: { size: stat.size || 0, mtime: stat.mtime || 0 }, pageOffset: 0, annotations: [], deleted: [], outline: [], deletedOutline: [], updatedAt: new Date().toISOString() };
  }
  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function stateMap(doc) { return new Map([...doc.annotations.map(a => [a.id, { a }]), ...doc.deleted.map(d => [d.id, { d }])]); }
  function equal(a, b) { return JSON.stringify(a) === JSON.stringify(b); }
  function mergeRecords(base, local, remote) {
    const bm = stateMap(base), lm = stateMap(local), rm = stateMap(remote);
    const annotations = [], deleted = [], conflicts = [];
    for (const id of new Set([...bm.keys(), ...lm.keys(), ...rm.keys()])) {
      const b = bm.get(id), l = lm.get(id), r = rm.get(id);
      let selected;
      if (equal(l, b)) selected = r;
      else if (equal(r, b) || equal(l, r)) selected = l;
      else {
        conflicts.push(id);
        if (l?.a && r?.a) {
          selected = l;
          const copy = clone(r.a);
          copy.id = `${id}-conflict-${hash(JSON.stringify(r.a))}`;
          copy.conflictOf = id;
          annotations.push(copy);
        } else {
          const survivor = l?.a || r?.a;
          if (survivor) selected = { a: { ...survivor, conflictOf: id } };
          else selected = l || r;
        }
      }
      if (selected?.a) annotations.push(clone(selected.a));
      else if (selected?.d) deleted.push(clone(selected.d));
    }
    return { annotations: [...new Map(annotations.map(a => [a.id, a])).values()], deleted, conflicts };
  }
  function mergeDocuments(base, local, remote) {
    const notes = mergeRecords(base, local, remote);
    const outlineRecords = doc => ({ annotations: doc.outline || [], deleted: doc.deletedOutline || [] });
    const outline = mergeRecords(outlineRecords(base), outlineRecords(local), outlineRecords(remote));
    const inkRecords = doc => ({ annotations: doc.inkDrafts || [], deleted: doc.deletedInkDrafts || [] });
    const ink = mergeRecords(inkRecords(base), inkRecords(local), inkRecords(remote));
    const merged = { ...clone(remote), ...clone(local), annotations: notes.annotations, deleted: notes.deleted, outline: outline.annotations, deletedOutline: outline.deleted, updatedAt: new Date().toISOString() };
    if ([base, local, remote].some(doc => doc.inkDrafts || doc.deletedInkDrafts)) { merged.inkDrafts = ink.annotations; merged.deletedInkDrafts = ink.deleted; }
    if (local.pageOffset === base.pageOffset) merged.pageOffset = remote.pageOffset;
    return { document: merged, conflicts: [...notes.conflicts, ...outline.conflicts, ...ink.conflicts] };
  }
  function validateInkStroke(stroke) {
    if (!stroke || typeof stroke.id !== 'string' || !Number.isInteger(stroke.page) || stroke.page < 1 || !Number.isFinite(stroke.width) || stroke.width <= 0 || stroke.width > 40 || !/^#[a-f\d]{6}$/i.test(stroke.color) || !Array.isArray(stroke.points) || !stroke.points.length || stroke.points.length > 4096 || stroke.points.some(p => !Array.isArray(p) || p.length !== 2 || p.some(n => !Number.isFinite(n)))) throw new Error(LT("드로잉 획 데이터가 올바르지 않습니다.", "Invalid drawing stroke."));
    return stroke;
  }
  function inkBounds(stroke) {
    let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
    for (const [x, y] of stroke.points) { x1 = Math.min(x1, x); y1 = Math.min(y1, y); x2 = Math.max(x2, x); y2 = Math.max(y2, y); }
    const pad = stroke.width / 2;
    return [x1 - pad, y1 - pad, x2 + pad, y2 + pad];
  }
  function inkStrokeHit(stroke, from, to, radius, cachedBounds) {
    const b = cachedBounds || inkBounds(stroke);
    if (Math.max(from[0], to[0]) + radius < b[0] || Math.min(from[0], to[0]) - radius > b[2] || Math.max(from[1], to[1]) + radius < b[1] || Math.min(from[1], to[1]) - radius > b[3]) return false;
    const distance = (p, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy || 1))); return Math.hypot(p[0] - a[0] - t * dx, p[1] - a[1] - t * dy); };
    const cross = (a, b, p) => (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
    const limit = radius + stroke.width / 2;
    for (let i = 0; i < stroke.points.length; i++) {
      const a = stroke.points[i], b = stroke.points[Math.min(i + 1, stroke.points.length - 1)];
      if (distance(a, from, to) <= limit || distance(b, from, to) <= limit || distance(from, a, b) <= limit || distance(to, a, b) <= limit) return true;
      if (cross(from, to, a) * cross(from, to, b) < 0 && cross(a, b, from) * cross(a, b, to) < 0) return true;
    }
    return false;
  }
  function groupInkStrokes(strokes, gap = 18) {
    // Spatial buckets avoid testing every pair for ordinary handwritten notes.
    const bounds = strokes.map(inkBounds), parents = strokes.map((_, i) => i), buckets = new Map();
    const root = i => { while (parents[i] !== i) { parents[i] = parents[parents[i]]; i = parents[i]; } return i; };
    const size = 96, large = new Map();
    for (let i = 0; i < strokes.length; i++) {
      const b = bounds[i], page = strokes[i].page, seen = new Set(large.get(page) || []);
      const left = Math.floor((b[0] - gap) / size), right = Math.floor((b[2] + gap) / size), top = Math.floor((b[1] - gap) / size), bottom = Math.floor((b[3] + gap) / size);
      const cells = (right - left + 1) * (bottom - top + 1);
      if (cells > 4096) { for (let j = 0; j < i; j++) if (strokes[j].page === page) seen.add(j); }
      else for (let x = left; x <= right; x++) for (let y = top; y <= bottom; y++) for (const j of buckets.get(`${page}:${x}:${y}`) || []) seen.add(j);
      for (const j of seen) { const a = bounds[j]; if (Math.hypot(Math.max(0, a[0] - b[2], b[0] - a[2]), Math.max(0, a[1] - b[3], b[1] - a[3])) <= gap) parents[root(i)] = root(j); }
      if (cells > 4096) { if (!large.has(page)) large.set(page, []); large.get(page).push(i); }
      else for (let x = left; x <= right; x++) for (let y = top; y <= bottom; y++) { const key = `${page}:${x}:${y}`; if (!buckets.has(key)) buckets.set(key, []); buckets.get(key).push(i); }
    }
    const groups = new Map();
    for (let i = 0; i < strokes.length; i++) {
      const key = root(i), b = bounds[i];
      if (!groups.has(key)) groups.set(key, { page: strokes[i].page, strokes: [], bounds: b.slice() });
      const group = groups.get(key); group.strokes.push(strokes[i]); group.bounds = [Math.min(group.bounds[0], b[0]), Math.min(group.bounds[1], b[1]), Math.max(group.bounds[2], b[2]), Math.max(group.bounds[3], b[3])];
    }
    return [...groups.values()].sort((a, b) => a.page - b.page || b.bounds[3] - a.bounds[3] || a.bounds[0] - b.bounds[0]);
  }
  function pdfPageFromState(...states) {
    for (const state of states) {
      if (!state) continue;
      const value = typeof state === 'string' ? state : state.subpath || state.fragment || state.hash;
      if (typeof value === 'string') { const match = value.match(/(?:^|[#&?])page=(\d+)(?:&|$)/); if (match && Number(match[1]) > 0) return Number(match[1]); }
      if (typeof state === 'object' && Number.isInteger(Number(state.page)) && Number(state.page) > 0) return Number(state.page);
    }
    return null;
  }
  function outlineTree(items) {
    const nodes = new Map(items.map(item => [item.id, { ...item, children: [] }])), roots = [];
    for (const node of nodes.values()) {
      let parent = nodes.get(node.parentId), cursor = parent, cycle = false; const seen = new Set([node.id]);
      while (cursor) { if (seen.has(cursor.id)) { cycle = true; break; } seen.add(cursor.id); cursor = nodes.get(cursor.parentId); }
      if (!parent || cycle) roots.push(node); else parent.children.push(node);
    }
    const sort = list => { list.sort((a, b) => a.page - b.page || (a.createdAt || '').localeCompare(b.createdAt || '')); for (const node of list) sort(node.children); return list; };
    return sort(roots);
  }
  function normalizeRect(rect) { return [Math.min(rect[0], rect[2]), Math.min(rect[1], rect[3]), Math.max(rect[0], rect[2]), Math.max(rect[1], rect[3])]; }
  function viewportRectToPdf(viewport, rect) {
    const p1 = viewport.convertToPdfPoint(rect[0], rect[1]), p2 = viewport.convertToPdfPoint(rect[2], rect[3]);
    return normalizeRect([...p1, ...p2]);
  }
  function pdfRectToViewport(viewport, rect) { return normalizeRect(viewport.convertToViewportRectangle(rect)); }
  function intersect(a, b) { const r = [Math.max(a[0], b[0]), Math.max(a[1], b[1]), Math.min(a[2], b[2]), Math.min(a[3], b[3])]; return r[2] - r[0] > 0.5 && r[3] - r[1] > 0.5 ? r : null; }
  function mergeLineRects(rects, { vertical = false } = {}) {
    // DOM ranges may report both a font-sized span and its shorter text box.
    // Group by the same text line, then join only word-sized gaps. Relative
    // thresholds keep the geometry stable across zoom levels and rotations.
    const swap = r => [r[1], r[0], r[3], r[2]];
    const ordered = rects.filter(r => r?.length === 4 && r.every(Number.isFinite)).map(normalizeRect)
      .filter(r => r[2] > r[0] && r[3] > r[1]).map(r => vertical ? swap(r) : r)
      .sort((a,b) => (a[1]+a[3])-(b[1]+b[3]) || a[0]-b[0]);
    const lines = [];
    for(const r of ordered){
      const height=r[3]-r[1],center=(r[1]+r[3])/2;let line;
      for(let i=lines.length-1;i>=0;i--){
        const candidate=lines[i],h=candidate.bottom-candidate.top;
        if(center-candidate.center>Math.max(h,height)*.4)break;
        const overlap=Math.min(candidate.bottom,r[3])-Math.max(candidate.top,r[1]);
        if(Math.max(h,height)<=Math.min(h,height)*1.8&&overlap>=Math.min(h,height)*.6&&Math.abs(center-candidate.center)<=Math.max(h,height)*.3){line=candidate;break;}
      }
      if(!line){lines.push({top:r[1],bottom:r[3],center,rects:[r]});continue;}
      line.rects.push(r);line.top=Math.min(line.top,r[1]);line.bottom=Math.max(line.bottom,r[3]);line.center=(line.top+line.bottom)/2;
    }
    const result=[];
    for(const line of lines){
      let run;
      for(const r of line.rects.sort((a,b)=>a[0]-b[0]||b[2]-a[2])){
        const gap=Math.min(r[3]-r[1],run?run[3]-run[1]:r[3]-r[1])*.65;
        if(run&&r[0]<=run[2]+gap){run[0]=Math.min(run[0],r[0]);run[1]=Math.min(run[1],r[1]);run[2]=Math.max(run[2],r[2]);run[3]=Math.max(run[3],r[3]);}
        else{run=r.slice();result.push(run);}
      }
    }
    return vertical?result.map(swap):result;
  }
  function sortedAnnotations(annotations, order = 'page') {
    return [...annotations].sort((a, b) => order === 'updated' ? b.updatedAt.localeCompare(a.updatedAt) : a.anchors[0].page - b.anchors[0].page || b.anchors[0].rects[0][3] - a.anchors[0].rects[0][3] || a.createdAt.localeCompare(b.createdAt));
  }
  function filterAnnotations(annotations, { color = '', kind = '', search = '', order = 'page' } = {}) {
    const needle = search.trim().normalize('NFC').toLocaleLowerCase();
    return sortedAnnotations(annotations.filter(a => (!color || a.color === color) && (!kind || a.kind === kind) && (!needle || `${a.text}\n${a.comment}\n${a.pageLabel || ''}`.normalize('NFC').toLocaleLowerCase().includes(needle))), order);
  }
  function protocolLink(vault, docId, annId) {
    return `obsidian://notenyang-pdf?vault=${encodeURIComponent(vault)}&doc=${encodeURIComponent(docId)}&annotation=${encodeURIComponent(annId)}`;
  }
  function markdownLinkTarget(path) { return path.split('/').map(segment => encodeURIComponent(segment).replace(/[!'()*]/g, char => `%${char.charCodeAt(0).toString(16).toUpperCase()}`)).join('/'); }
  function sourceLink(doc, ann, vault) {
    const page = ann.anchors[0].page;
    const url = "obsidian://notenyang-pdf?vault=" + encodeURIComponent(vault) + "&doc=" + encodeURIComponent(doc.id) + "&page=" + page;
    return "[PDF " + page + LT("쪽", "") + "](" + url + ")";
  }
  function pageLabel(doc, ann) { return ann.pageLabel || String(ann.anchors[0].page + (doc.pageOffset || 0)); }
  function quoteLines(text) { return String(text || '').replace(/\r\n?/g, '\n').split('\n').map(line => `> ${line}`).join('\n'); }
  function exportCallout(doc, ann, vault) {
    const c = COLORS[ann.color];
    const title = doc.path.split('/').pop().replace(/\.pdf$/i, '').replace(/[\r\n]/g, ' ');
    const lines = [`> [!quote] ${c.icon} · ${title} · p.${pageLabel(doc, ann)}`];
    if (ann.text) lines.push(quoteLines(ann.text));
    if (ann.image) lines.push(`> ![](${markdownLinkTarget(ann.image)})`);
    if (ann.comment) lines.push('>', LT("> **메모**", "> **Note**"), quoteLines(ann.comment));
    lines.push('>', `${LT("> **출처:** ", "> **Source:** ")}${sourceLink(doc, ann, vault)}${LT(" · [노트 위치](", " · [Note location](")}${protocolLink(vault, doc.id, ann.id)})`);
    return lines.join('\n');
  }
  function tableEscape(text) { return String(text || '').replace(/\r\n?/g, '\n').replace(/\|/g, '&#124;').replace(/\n/g, '<br>'); }
  function exportTable(doc, annotations, vault) {
    const rows = [LT("| 쪽수 | 색상 | 원문 / 캡처 | 메모 | 출처 |", "| Page | Color | Text / capture | Note | Source |"), '| --- | --- | --- | --- | --- |'];
    for (const a of annotations) {
      const content = a.image ? `[${a.kind === 'drawing' ? LT("드로잉 이미지", "Drawing image") : LT("캡처 이미지", "Captured image")}](${markdownLinkTarget(a.image)})${a.text ? '<br>' + tableEscape(a.text) : ''}` : tableEscape(a.text);
      rows.push(`| ${tableEscape(pageLabel(doc, a))} (PDF ${a.anchors[0].page}) | ${COLORS[a.color].icon} ${COLORS[a.color].label} | ${content} | ${tableEscape(a.comment)} | ${sourceLink(doc, a, vault)}${LT(" · [노트 위치](", " · [Note location](")}${protocolLink(vault, doc.id, a.id)}) |`);
    }
    return rows.join('\n');
  }
  function exportAnnotations(doc, annotations, vault, format = 'callout') {
    if (format === 'table') return exportTable(doc, annotations, vault);
    return annotations.map(a => {
      if (!['quote', 'text', 'link'].includes(format)) return exportCallout(doc, a, vault);
      const source = `${sourceLink(doc, a, vault)}${LT(" · [노트 위치](", " · [Note location](")}${protocolLink(vault, doc.id, a.id)})`;
      if (format === 'link') return source;
      const parts = [a.text || '', a.image ? `![](${markdownLinkTarget(a.image)})` : '', a.comment ? `${LT("**메모:** ", "**Note:** ")}${a.comment}` : '', `${LT("**출처:** ", "**Source:** ")}${source}`].filter(Boolean);
      const text = parts.join('\n\n');
      return format === 'quote' ? text.split('\n').map(line => `> ${line}`).join('\n') : text;
    }).join('\n\n');
  }
  function canvasScale(width, height, desired, pixelBudget) { return Math.min(desired, Math.sqrt(pixelBudget / Math.max(1, width * height))); }
  // Prefix sums keep variable-height virtual cards cheap to update and locate.
  class HeightIndex {
    constructor(heights) {
      this.heights = [...heights]; this.tree = new Float64Array(heights.length + 1);
      for (let i = 1; i < this.tree.length; i++) { this.tree[i] += heights[i - 1]; const parent = i + (i & -i); if (parent < this.tree.length) this.tree[parent] += this.tree[i]; }
    }
    prefix(end) { let sum = 0; for (let i = Math.min(end, this.heights.length); i > 0; i -= i & -i) sum += this.tree[i]; return sum; }
    get total() { return this.prefix(this.heights.length); }
    update(index, height) { const delta = height - this.heights[index]; this.heights[index] = height; for (let i = index + 1; i < this.tree.length; i += i & -i) this.tree[i] += delta; }
    indexAt(offset) {
      if (!this.heights.length) return 0;
      let index = 0, sum = 0, step = 1;
      while (step * 2 <= this.heights.length) step *= 2;
      for (; step; step = Math.floor(step / 2)) { const next = index + step; if (next < this.tree.length && sum + this.tree[next] <= Math.max(0, offset)) { index = next; sum += this.tree[next]; } }
      return Math.min(index, this.heights.length - 1);
    }
  }
  module.exports = { inkStrokeHit, validateInkStroke, inkBounds, groupInkStrokes, COLORS, KINDS, DEFAULTS, EXPORT_FORMATS, uid, hash, normalizeFolder, validateDocument, newDocument, clone, mergeDocuments, normalizeRect, viewportRectToPdf, pdfRectToViewport, intersect, mergeLineRects, sortedAnnotations, filterAnnotations, protocolLink, pageLabel, tableEscape, markdownLinkTarget, exportCallout, exportTable, exportAnnotations, canvasScale, HeightIndex, pdfPageFromState, outlineTree };

  return module.exports; })();
  const Ink = (() => { const module = { exports: {} };
  'use strict';

  module.exports = C => {
    const svgNode = (parent, tag) => { const node = parent.ownerDocument.createElementNS('http://www.w3.org/2000/svg', tag); parent.appendChild(node); return node; };
    function pathData(stroke, viewport, origin = [0, 0]) {
      return stroke.points.map((point, i) => { const p = viewport.convertToViewportPoint(...point); return `${i ? 'L' : 'M'}${(p[0] - origin[0]).toFixed(2)} ${(p[1] - origin[1]).toFixed(2)}`; }).join(' ') + (stroke.points.length === 1 ? ' l0.01 0' : '');
    }
    function appendStroke(svg, stroke, viewport, origin = [0, 0]) {
      const path = svgNode(svg, 'path'); path.setAttribute('d', pathData(stroke, viewport, origin));
      path.setAttribute('fill', 'none'); path.setAttribute('stroke', stroke.color); path.setAttribute('stroke-width', String(stroke.width * viewport.scale)); path.setAttribute('stroke-linecap', 'round'); path.setAttribute('stroke-linejoin', 'round'); return path;
    }
    function renderAnnotation(parent, annotation, viewport, rect) {
      const svg = svgNode(parent, 'svg'); svg.classList.add('rp-ink-svg'); svg.setAttribute('viewBox', `0 0 ${rect[2] - rect[0]} ${rect[3] - rect[1]}`);
      for (const stroke of annotation.ink) appendStroke(svg, stroke, viewport, rect);
    }
    class Session {
      constructor(reader) {
        this.reader = reader; this.docId = reader.docId; this.strokes = C.clone(reader.plugin.store.get(this.docId)?.inkDrafts || []); this.removed = new Set(); this.dirty = false; this.input = 'pen'; this.width = 2.2; this.color = '#24292f'; this.gap = 18; this.pans = new Map();
        const value = label => reader.inkToolbar.querySelector(`[aria-label="${label}"]`).value;
        this.input = value(LT("드로잉 입력", "Drawing input")); this.width = Number(value(LT("필기 두께", "Stroke width"))); this.color = value(LT("필기 색", "Ink color")); this.gap = Number(value(LT("드로잉 묶기 간격", "Stroke grouping distance")));
        this.tool = 'pen'; this.radius = 12; this.penButton = true; this.history = []; this.overrides = new Map();
        this.radius = Number(reader.inkRadius.value); this.penButton = reader.inkPenButton.checked;
        this.boundsCache = new WeakMap(); this.historyPoints = 0;
        reader.plugin.inkSessions ||= new Set(); reader.plugin.inkSessions.add(this);
      }
      message(text) { if (!this.reader.closed) this.reader.status.textContent = text; }
      count() { this.reader.inkCount.textContent = `${this.strokes.length}${LT("획", " strokes")}`; this.reader.inkUndo.disabled = (!this.strokes.length && !this.history.length) || !!this.finishing || !!this.erasePending; }
      setTool(tool) { this.endActive(true); this.endErase(true); this.tool = tool === 'erase' ? 'erase' : 'pen'; this.syncTool(false); }
      syncTool(temporary = false) {
        const erase = temporary || this.tool === 'erase'; this.reader.contentEl.dataset.inkTool = erase ? 'erase' : 'pen';
        for (const [id, button] of this.reader.inkToolButtons || []) { button.classList.toggle('is-active', (erase ? 'erase' : 'pen') === id); button.setAttribute('aria-pressed', String((erase ? 'erase' : 'pen') === id)); }
        this.reader.inkWidth.hidden = erase; this.reader.inkRadius.hidden = !erase;
        if (!erase) this.cursor?.remove();
      }
      displayed(annotation) { return this.overrides.get(annotation.id) || annotation; }
      pushHistory(action) {
        action.order=this.reader.plugin.nextUndoOrder();
        action.points = (action.drafts || []).reduce((n, s) => n + s.points.length, 0) + (action.saved || []).reduce((n, change) => n + [...(change.before?.ink || []), ...(change.after?.ink || [])].reduce((sum, s) => sum + s.points.length, 0), 0);
        this.history.push(action); this.historyPoints += action.points;
        while (this.history.length > 1 && (this.history.length > 80 || this.historyPoints > 250000)) this.historyPoints -= this.history.shift().points;
      }
      refresh() { for (const entry of this.reader.pages.values()) { this.reader.drawAnnotations(entry); this.renderPage(entry); } this.count(); }
      cursorAt(event, entry, erase) {
        if (!erase || !entry?.surface) { this.cursor?.remove(); return; }
        const box = entry.surface.getBoundingClientRect(), x = event.clientX - box.left, y = event.clientY - box.top;
        if (x < 0 || y < 0 || x > entry.viewport.width || y > entry.viewport.height) { this.cursor?.remove(); return; }
        if (!this.cursor) { this.cursor = entry.surface.ownerDocument.createElement('div'); this.cursor.className = 'rp-eraser-cursor'; }
        entry.surface.appendChild(this.cursor); Object.assign(this.cursor.style, { left: `${x}px`, top: `${y}px`, width: `${this.radius * 2}px`, height: `${this.radius * 2}px` });
      }
      eraseAt(point) {
        const gesture = this.erasing; if (!gesture || !point) return;
        const from = gesture.last || point, radius = this.radius / gesture.entry.viewport.scale;
        const hits = stroke => { if (stroke.page !== gesture.entry.number) return false; if (!this.boundsCache.has(stroke)) this.boundsCache.set(stroke, C.inkBounds(stroke)); return C.inkStrokeHit(stroke, from, point, radius, this.boundsCache.get(stroke)); };
        const removed = this.strokes.filter(hits);
        if (removed.length) { for (const stroke of removed) this.removed.add(stroke.id); const ids = new Set(removed.map(s => s.id)); this.strokes = this.strokes.filter(s => !ids.has(s.id)); this.dirty = true; gesture.changed = true; }
        for (const original of this.reader.plugin.store.forPage(this.docId, gesture.entry.number)) {
          if (original.kind !== 'drawing') continue;
          const current = this.displayed(original), ink = current.ink.filter(s => !hits(s));
          if (ink.length === current.ink.length) continue;
          if (!gesture.saved.has(original.id)) gesture.saved.set(original.id, C.clone(original));
          this.overrides.set(original.id, { ...current, ink }); gesture.changed = true;
        }
        gesture.last = point;
        if (!this.eraseFrame) this.eraseFrame = this.reader.contentEl.ownerDocument.defaultView.requestAnimationFrame(() => { this.eraseFrame = null; this.reader.drawAnnotations(gesture.entry); this.renderPage(gesture.entry); this.count(); });
      }
      async applySaved(changes) {
        if (!changes.length) return [];
        const prepared = new Map();
        for (const change of changes) if (change.after?.ink.length) {
          const strokes = change.after.ink, bounds = strokes.map(C.inkBounds).reduce((a, b) => [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[2], b[2]), Math.max(a[3], b[3])]);
          prepared.set(change.id, await this.makeAnnotation({ page: strokes[0].page, strokes, bounds }, change.after));
        }
        const applied = [];
        await this.reader.plugin.store.mutate(this.docId, doc => {
          for (const change of changes) {
            const i = doc.annotations.findIndex(a => a.id === change.id), current = i < 0 ? null : doc.annotations[i];
            if (JSON.stringify(current?.ink || null) !== JSON.stringify(change.before?.ink || null)) throw new Error(LT("다른 창에서 그림을 변경했습니다. PDF를 다시 열어 확인하세요.", "The drawing changed in another window. Reopen the PDF to review it."));
            const before = current && C.clone(current), image = prepared.get(change.id);
            let after = null;
            if (image) {
              after = { ...(current || change.after), ink: image.ink, anchors: image.anchors, image: image.image, updatedAt: new Date().toISOString() };
              if (i < 0) doc.annotations.push(after); else doc.annotations[i] = after;
              doc.deleted = doc.deleted.filter(d => d.id !== change.id);
            } else {
              if (i >= 0) doc.annotations.splice(i, 1); doc.deleted = doc.deleted.filter(d => d.id !== change.id); doc.deleted.push({ id: change.id, deletedAt: new Date().toISOString() });
            }
            applied.push({ id: change.id, before, after: after && C.clone(after) });
          }
        },{history:false});
        return applied;
      }
      endErase(cancelled = false) {
        const gesture = this.erasing; this.erasing = null; if (!gesture) return;
        this.release(gesture.id);
        if (this.eraseFrame) this.reader.contentEl.ownerDocument.defaultView.cancelAnimationFrame(this.eraseFrame); this.eraseFrame = null;
        const rollback = () => { this.strokes = gesture.drafts; this.removed = gesture.removed; this.dirty = gesture.dirty; this.overrides.clear(); this.refresh(); };
        if (cancelled || !gesture.changed) { rollback(); if (this.dirty) this.flush().catch(error => this.message(`${LT("필기 임시 저장 실패: ", "Could not save the ink draft: ")}${error.message}`)); return; }
        const changes = [...gesture.saved].map(([id, before]) => ({ id, before, after: this.overrides.get(id).ink.length ? this.overrides.get(id) : null }));
        this.erasePending = (async () => {
          try { const saved = await this.applySaved(changes); this.pushHistory({ type: 'erase', drafts: gesture.drafts, saved }); this.overrides.clear(); this.refresh(); }
          catch (error) { rollback(); throw error; }
          finally { this.erasePending = null; this.count(); }
        })();
        this.erasePending.then(() => this.flush()).catch(error => this.message(`${LT("지우개 저장 실패: ", "Could not save the erasure: ")}${error.message}${LT(" · 필기를 확인한 뒤 다시 시도하세요.", " · Check the drawing and try again.")}`));
        this.count();
      }
      renderPage(entry) {
        if (!entry.surface || !entry.viewport) return;
        entry.inkPreview?.remove(); entry.inkPreview = null;
        const strokes = this.strokes.filter(s => s.page === entry.number);
        if (this.active?.entry === entry) strokes.push(this.active.stroke);
        if (!strokes.length) return;
        const svg = svgNode(entry.surface, 'svg'); svg.classList.add('rp-ink-preview'); svg.setAttribute('viewBox', `0 0 ${entry.viewport.width} ${entry.viewport.height}`); entry.inkPreview = svg;
        for (const stroke of strokes) { const path = appendStroke(svg, stroke, entry.viewport); if (this.active?.stroke === stroke) this.active.path = path; }
      }
      render() { for (const entry of this.reader.pages.values()) this.renderPage(entry); this.count(); }
      point(event, entry) {
        const box = entry.surface.getBoundingClientRect(), x = event.clientX - box.left, y = event.clientY - box.top;
        if (x < 0 || y < 0 || x > entry.viewport.width || y > entry.viewport.height) return null;
        return entry.viewport.convertToPdfPoint(x, y).map(n => Math.round(n * 100) / 100);
      }
      capture(id) { try { this.reader.scroller.setPointerCapture(id); } catch {} }
      release(id) { if (this.reader.scroller.hasPointerCapture?.(id)) this.reader.scroller.releasePointerCapture(id); }
      pointer(event) {
        if (event.target.closest?.('button,input,select,textarea,a,summary,[contenteditable="true"]')) return;
        if (this.finishing || this.erasePending) return;
        if (event.cancelable) event.preventDefault();
        const id = event.pointerId, pen = event.pointerType === 'pen';
        if (!pen && (this.active?.pen || this.erasing?.pen)) return;
        const terminal = ['pointerup', 'pointercancel', 'lostpointercapture'].includes(event.type), contact = pen && (event.pressure > 0 || !!(event.buttons & 33));
        const temporary = pen && this.penButton && !!(event.buttons & 34), erase = this.tool === 'erase' || temporary;
        if (pen && contact) this.lastPen = Date.now();
        this.syncTool(temporary);
        const entry = this.active?.entry || this.erasing?.entry || this.reader.pages.get(Number((event.target.closest?.('.rp-page-slot')?.dataset.page || event.target.closest?.('.page[data-page-number]')?.dataset.pageNumber)));
        this.cursorAt(event, entry, erase && !['pointercancel', 'lostpointercapture'].includes(event.type));
        if (event.type === 'pointerdown' && this.erasing && this.erasing.id !== id) {
          const previous = this.erasing; this.endErase(true);
          if (!pen) { this.pans.set(previous.id, previous.client); this.capture(previous.id); }
        }
        if (this.erasing?.id === id) {
          this.erasing.client = { x: event.clientX, y: event.clientY };
          if (!terminal && erase && (!pen || contact)) { this.eraseAt(this.point(event, this.erasing.entry)); return; }
          this.endErase(event.type === 'pointercancel' || event.type === 'lostpointercapture');
          if (terminal || this.erasePending) return;
        }
        if (this.active?.id === id && pen && (erase || (!contact && !terminal))) this.endActive();
        if (event.type === 'pointerdown' || (event.type === 'pointermove' && contact && !this.active && !this.erasing && !this.pans.has(id))) {
          if (event.button !== 0 && !pen) return;
          if (pen && !contact) return;
          if (!entry?.viewport || !entry.surface) return;
          if (pen) { if (this.active && !this.active.pen) this.endActive(true); this.pans.clear(); this.lastPen = Date.now(); }
          else if (this.active?.pen || Date.now() - (this.lastPen || 0) < 500) return;
          const draw = pen || (event.pointerType === 'touch' && this.input === 'touch') || (event.pointerType === 'mouse' && !this.reader.plugin.isMobile);
          if (this.active || this.pans.size || !draw) {
            if (this.active && !this.active.pen) { const previous = this.active; this.endActive(true); this.pans.set(previous.id, previous.last); this.capture(previous.id); }
            this.pans.set(id, { x: event.clientX, y: event.clientY }); this.capture(id); return;
          }
          if (this.strokes.length >= 1000 || this.strokes.reduce((n, s) => n + s.points.length, 0) >= 100000) { this.message(LT("드로잉 완료를 눌러 현재 필기를 저장한 뒤 이어서 쓰세요.", "Select Finish drawing to save the current strokes before continuing.")); return; }
          const point = this.point(event, entry); if (!point) return;
          if (erase) {
            this.erasing = { id, entry, pen, client: { x: event.clientX, y: event.clientY }, drafts: this.strokes.slice(), removed: new Set(this.removed), dirty: this.dirty, saved: new Map(), changed: false }; this.capture(id); this.eraseAt(point); return;
          }
          this.active = { id, entry, pen, last: { x: event.clientX, y: event.clientY }, stroke: { id: C.uid(), page: entry.number, color: this.color, width: this.width, points: [point], updatedAt: new Date().toISOString() } };
          this.capture(id); this.renderPage(entry); return;
        }
        if (this.pans.has(id)) {
          const previous = this.pans.get(id);
          if (event.type === 'pointermove' && !this.active?.pen && Date.now() - (this.lastPen || 0) >= 500) {
            this.reader.scroller.scrollLeft -= (event.clientX - previous.x) / this.pans.size; this.reader.scroller.scrollTop -= (event.clientY - previous.y) / this.pans.size;
            this.pans.set(id, { x: event.clientX, y: event.clientY });
          } else if (event.type !== 'pointermove') { this.pans.delete(id); this.release(id); }
          return;
        }
        if (this.active?.id !== id) return;
        if (pen) this.lastPen = Date.now();
        if (event.type === 'pointermove' || event.type === 'pointerup') {
          this.active.last = { x: event.clientX, y: event.clientY };
          const events = event.getCoalescedEvents?.() || [];
          for (const sample of [...events, event]) {
            const point = this.point(sample, this.active.entry), points = this.active.stroke.points, previous = points.at(-1);
            if (point && Math.hypot(point[0] - previous[0], point[1] - previous[1]) >= .25) {
              if (points.length >= 4096) this.active.stroke.points = points.filter((_, i) => i % 2 === 0 || i === points.length - 1);
              this.active.stroke.points.push(point);
            }
          }
          if (!this.frame) this.frame = this.reader.contentEl.ownerDocument.defaultView.requestAnimationFrame(() => { this.frame = null; if (this.active?.path) this.active.path.setAttribute('d', pathData(this.active.stroke, this.active.entry.viewport)); });
        }
        if (event.type !== 'pointermove') this.endActive(event.type !== 'pointerup');
      }
      endActive(cancelled = false) {
        const active = this.active; this.active = null;
        if (this.frame) this.reader.contentEl.ownerDocument.defaultView.cancelAnimationFrame(this.frame); this.frame = null;
        if (!active) return;
        this.release(active.id);
        if (!cancelled) { this.strokes.push(active.stroke); this.pushHistory({ type: 'add', id: active.stroke.id }); this.dirty = true; clearTimeout(this.saveTimer); this.saveTimer = setTimeout(() => this.flush().catch(error => this.message(`${LT("드로잉 임시 저장 실패: ", "Could not save the drawing draft: ")}${error.message}${LT(" · 완료 버튼으로 재시도", " · Use Finish to try again")}`)), 300); }
        this.renderPage(active.entry); this.count();
      }
      async undo() {
        if (this.finishing) return;
        this.endErase(true); await this.erasePending;
        const action = this.history.at(-1);
        if (action?.type === 'erase') {
          this.erasePending = this.applySaved(action.saved.map(change => ({ id: change.id, before: change.after, after: change.before })));
          try { await this.erasePending; this.history.pop(); this.historyPoints -= action.points; const ids = new Set(action.drafts.map(s => s.id)); this.strokes = [...C.clone(action.drafts), ...this.strokes.filter(s => !ids.has(s.id))]; for (const stroke of action.drafts) this.removed.delete(stroke.id); this.dirty = true; }
          finally { this.erasePending = null; this.refresh(); }
          await this.flush(); return;
        }
        if (action) { this.history.pop(); this.historyPoints -= action.points; }
        this.endActive(true); const index = action?.type === 'add' ? this.strokes.findIndex(s => s.id === action.id) : this.strokes.length - 1;
        if (index < 0) return; const [stroke] = this.strokes.splice(index, 1);
        this.removed.add(stroke.id); this.dirty = true; this.render(); await this.flush();
      }
      async flush() {
        clearTimeout(this.saveTimer);
        if (this.erasePending) await this.erasePending;
        if (this.erasing) return;
        if (this.pending) { await this.pending; if (this.dirty) return this.flush(); return; }
        if (!this.dirty) return;
        const strokes = C.clone(this.strokes), removed = [...this.removed]; this.dirty = false;
        this.pending = this.reader.plugin.store.mutate(this.docId, doc => {
          const entries = new Map((doc.inkDrafts || []).map(s => [s.id, s]));
          for (const stroke of strokes) entries.set(stroke.id, stroke);
          for (const id of removed) entries.delete(id);
          doc.inkDrafts = [...entries.values()]; doc.deletedInkDrafts ||= [];
          const restored = new Set(strokes.map(s => s.id)); doc.deletedInkDrafts = doc.deletedInkDrafts.filter(d => !restored.has(d.id));
          for (const id of removed) if (!doc.deletedInkDrafts.some(d => d.id === id)) doc.deletedInkDrafts.push({ id, deletedAt: new Date().toISOString() });
        });
        try { await this.pending; for (const id of removed) this.removed.delete(id); }
        catch (error) { this.dirty = true; throw error; }
        finally { this.pending = null; }
        if (this.dirty) await this.flush();
      }
      async makeAnnotation(group, original = null) {
        const reader = this.reader, page = await reader.pdf.getPage(group.page);
        const unit = page.getViewport({ scale: 1, rotation: (page.rotate + reader.rotation) % 360 });
        const raw = group.bounds.map((n, i) => n + (i < 2 ? -4 : 4)), box = C.pdfRectToViewport(unit, raw);
        const width = box[2] - box[0], height = box[3] - box[1], scale = Math.min(2, 8192 / width, 8192 / height, Math.sqrt(3_000_000 / (width * height)));
        const viewport = page.getViewport({ scale, rotation: unit.rotation }), origin = C.pdfRectToViewport(viewport, raw);
        const canvas = reader.contentEl.ownerDocument.createElement('canvas'); canvas.width = Math.max(1, Math.ceil(width * scale)); canvas.height = Math.max(1, Math.ceil(height * scale));
        try {
          const ctx = canvas.getContext('2d'); ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, canvas.width, canvas.height); ctx.lineCap = ctx.lineJoin = 'round';
          for (const stroke of group.strokes) {
            ctx.strokeStyle = stroke.color; ctx.lineWidth = stroke.width * scale; ctx.beginPath();
            stroke.points.forEach((point, i) => { const p = viewport.convertToViewportPoint(...point); ctx[i ? 'lineTo' : 'moveTo'](p[0] - origin[0], p[1] - origin[1]); });
            if (stroke.points.length === 1) { const p = viewport.convertToViewportPoint(...stroke.points[0]); ctx.lineTo(p[0] - origin[0] + .01, p[1] - origin[1]); } ctx.stroke();
          }
          const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png')); if (!blob) throw new Error(LT("드로잉 이미지를 만들지 못했습니다.", "Could not create a drawing image."));
          const a = original ? { ...C.clone(original), anchors: [{ page: group.page, rects: [raw] }] } : reader.annotation('drawing', [{ page: group.page, rects: [raw] }]); a.ink = C.clone(group.strokes);
          a.image = await owner.store.savePdfImage('drawing', reader.file.path, group.page, await blob.arrayBuffer());
          return a;
        } finally { canvas.width = canvas.height = 0; }
      }
      async finish() {
        if (this.finishing) return this.finishing;
        this.endErase();
        this.endActive(); for (const id of this.pans.keys()) { this.pans.delete(id); this.release(id); }
        this.finishing = (async () => {
          await this.erasePending;
          await this.flush(); if (!this.strokes.length) return;
          this.message(LT("가까운 획들을 드로잉 노트로 저장하는 중…", "Saving nearby strokes as drawing notes…"));
          const annotations = [], ids = new Set(this.strokes.map(s => s.id));
          for (const group of C.groupInkStrokes(this.strokes, this.gap)) annotations.push(await this.makeAnnotation(group));
          await this.reader.plugin.store.mutate(this.docId, doc => {
            // A second view may already have extracted a restored draft.
            const available = new Set((doc.inkDrafts || []).map(s => s.id));
            if (annotations.some(a => a.ink.some(s => !available.has(s.id)))) throw new Error(LT("다른 창에서 임시 필기를 변경했습니다. PDF를 다시 열어 남은 필기를 저장하세요.", "Draft strokes changed in another window. Reopen the PDF and save the remaining strokes."));
            doc.annotations.push(...annotations);
            doc.inkDrafts = (doc.inkDrafts || []).filter(s => !ids.has(s.id)); doc.deletedInkDrafts ||= [];
            for (const id of ids) if (!doc.deletedInkDrafts.some(d => d.id === id)) doc.deletedInkDrafts.push({ id, deletedAt: new Date().toISOString() });
          });
          this.strokes = []; this.removed.clear(); this.history = []; this.historyPoints = 0; this.render(); this.message(`${LT("드로잉 ", "Drawing ")}${annotations.length}${LT("개 저장됨 · 노트 목록에서 메모·복사 가능", " saved · Add notes or copy from the note list")}`);
        })();
        try { await this.finishing; } finally { this.finishing = null; this.count(); }
      }
      async dispose() {
        this.endErase(); await this.erasePending; this.cursor?.remove();
        this.endActive(); for (const id of this.pans.keys()) { this.pans.delete(id); this.release(id); }
        await this.finishing; await this.flush(); this.reader.plugin.inkSessions?.delete(this);
      }
    }
    return { Session, renderAnnotation };
  };

  return module.exports; })()(C);
  const Diagnostics = (() => { const module = { exports: {} };
  'use strict';
  module.exports=C=>{
    const LARGE_FILE_BYTES=24*1024*1024;
    const parseReport=text=>JSON.parse(text.match(/```json\r?\n([\s\S]*?)\r?\n```/)?.[1]||text);
    const stressPages=count=>[...new Set([1,2,3,17,50,100,160,200,350,449,count,...Array.from({length:20},(_,i)=>1+Math.floor((count-1)*i/19))].filter(n=>Number.isInteger(n)&&n>=1&&n<=count))].sort((a,b)=>a-b);
    function readerMetrics(reader){const entries=[...(reader.pages?.values()||[])],heap=reader.contentEl.ownerDocument.defaultView.performance.memory;return {page:reader.pageNumber,slots:entries.length,canvasCount:entries.filter(e=>e.canvas?.width).length,canvasBytes:entries.reduce((n,e)=>n+(e.canvas?.width||0)*(e.canvas?.height||0)*4,0),domNodes:reader.contentEl.querySelectorAll('*').length,pageAssets:!!reader.pdf?.mobilePages,singlePage:!!reader.singlePage,...(Number.isFinite(heap?.usedJSHeapSize)?{jsHeapBytes:heap.usedJSHeapSize}:{})};}
    const noop={step:async()=>{},finish:async()=>{},done:true};
    class Recorder{
      constructor(plugin){this.plugin=plugin;this.queue=Promise.resolve();this.loaded=false;}
      async init(){
        if(this.loaded)return;
        const win=this.plugin.app.workspace.containerEl.ownerDocument.defaultView;let id;
        try{id=win.localStorage.getItem('notenyang-pdf:diagnostic-device');if(!id){id=C.uid();win.localStorage.setItem('pdf-research-reader:diagnostic-device',id);}}catch{id=C.uid();}
        this.path=`${this.plugin.settings.dataFolder}/diagnostics/mobile-${id}.md`;
        await this.plugin.store.ensure(`${this.plugin.settings.dataFolder}/diagnostics`);
        this.state={schema:1,device:id,attempts:[]};try{const adapter=this.plugin.app.vault.adapter,oldPath=await adapter.exists(this.path)?this.path:this.path.replace(/\.md$/,'.json');if(await adapter.exists(oldPath)){const old=parseReport(await adapter.read(oldPath));if(old.schema===1&&Array.isArray(old.attempts))this.state=old;}}catch{}
        this.loaded=true;
      }
      async start(file,mode='reader',context){
        if(!this.plugin.isMobile)return noop;
        let session;
        this.queue=this.queue.catch(()=>{}).then(async()=>{await this.init();const win=this.plugin.app.workspace.containerEl.ownerDocument.defaultView;
          const attempt={id:C.uid(),mode,file:file.path,bytes:file.stat.size,startedAt:new Date().toISOString(),status:'pending',events:[],...(context?{context}:{}),runtime:{pluginVersion:this.plugin.manifest?.version||'development',userAgent:win.navigator.userAgent,width:win.innerWidth,height:win.innerHeight,pixelRatio:win.devicePixelRatio,isMobile:this.plugin.isMobile,mobileSinglePage:this.plugin.settings.mobileSinglePage!==false,enabledPlugins:[...(this.plugin.app.plugins?.enabledPlugins||[])]}};
          this.state.attempts.push(attempt);this.state.attempts=this.state.attempts.slice(-4);session=new Session(this,attempt);await this.save();
        });
        try{await this.queue;return session||noop;}catch(error){console.warn(LT("[NoteNyang PDF] 진단 기록을 저장하지 못했습니다.", "[NoteNyang PDF] Could not save diagnostic log."),error);return noop;}
      }
      async save(){const last=this.state.attempts.at(-1);await this.plugin.app.vault.adapter.write(this.path,`${LT("# PDF 모바일 진단\n\n마지막 단계: ", "# PDF mobile diagnostics\n\nLast stage: ")}${last?.lastStage||LT("시작", "start")}${LT("\n\n캔버스 바이트와 JS 힙은 앱 전체·네이티브 메모리 측정값이 아닙니다.\n\n```json\n", "\n\nCanvas bytes and JavaScript heap figures are separate from total app and native memory use.\n\n```json\n")}${JSON.stringify(this.state,null,2)}\n\`\`\`\n`);}
      write(attempt,stage,detail,status){
        this.queue=this.queue.catch(()=>{}).then(async()=>{attempt.events.push({at:new Date().toISOString(),stage,...(detail?{detail}: {})});attempt.events=attempt.events.slice(-40);attempt.lastStage=stage;attempt.updatedAt=new Date().toISOString();if(stage==='engine:selected')attempt.engine=detail?.mobilePages?'page-assets':'original-pdf';if(stage==='engine:original-blocked')attempt.engine='original-blocked';if(stage==='cache:manifest-ready')attempt.cache=detail;if(stage==='diagnostic:layout-mode'){attempt.layouts||=[];attempt.layouts.push(detail);attempt.layouts=attempt.layouts.slice(-2);}if(detail?.metrics){attempt.peaks ||= {};for(const key of ['canvasBytes','canvasCount','slots','domNodes','jsHeapBytes'])if(Number.isFinite(detail.metrics[key]))attempt.peaks[key]=Math.max(attempt.peaks[key]||0,detail.metrics[key]);}if(status)attempt.status=status;await this.save();});
        return this.queue.catch(error=>console.warn(LT("[NoteNyang PDF] 진단 기록 저장 실패", "[NoteNyang PDF] Could not save diagnostic log"),error));
      }
    }
    class Session{
      constructor(recorder,attempt){this.recorder=recorder;this.attempt=attempt;this.done=false;}
      async step(stage,detail){if(!this.done)await this.recorder.write(this.attempt,stage,detail);}
      async finish(status='complete',detail){if(this.done)return;this.done=true;await this.recorder.write(this.attempt,`attempt:${status}`,detail,status);}
    }
    return {Recorder,noop,parseReport,stressPages,readerMetrics,LARGE_FILE_BYTES};
  };

  return module.exports; })()(C);
  const Actions = (() => { const module = { exports: {} };
  'use strict';
  module.exports=C=>{
    const equal=(a,b)=>JSON.stringify(a)==JSON.stringify(b);
    const same=(a,b)=>{if(!a||!b)return a===b;const x={...a},y={...b};delete x.updatedAt;delete y.updatedAt;if(x.kind==='drawing'&&y.kind==='drawing'){delete x.image;delete y.image;}return equal(x,y);};
    class History{
      constructor(plugin){this.plugin=plugin;this.actions=[];this.bytes=0;}
      latest(docId){return this.actions.findLast(a=>a.docId===docId);}
      record(docId,before,intended,committed,order){
        const old=new Map(before.annotations.map(a=>[a.id,a])),next=new Map(intended.annotations.map(a=>[a.id,a]));
        const saved=new Map(committed.annotations.map(a=>[a.id,a]));
        const changes=[];
        for(const id of new Set([...old.keys(),...next.keys()]))if(!same(old.get(id)||null,next.get(id)||null))changes.push({id,before:old.get(id)||null,after:saved.get(id)||null});
        if(!changes.length)return;
        const action={docId,changes:C.clone(changes),order:order||this.plugin.nextUndoOrder()},bytes=JSON.stringify(changes).length*2;
        // Bound all documents together; large drawings must not multiply the
        // phone's working set. A barrier prevents undoing an older action instead.
        action.bytes=bytes>4*1024*1024?0:bytes;if(!action.bytes)action.changes=null;
        this.actions.push(action);this.bytes+=action.bytes;
        while(this.actions.length>60||this.bytes>4*1024*1024){this.bytes-=this.actions.shift().bytes;}
      }
      async undo(docId){
        const action=this.latest(docId);if(!action)return false;
        if(!action.changes)throw Error(LT("이 작업은 실행 취소 용량을 초과했습니다. 노트 목록에서 직접 수정해 주세요.", "This action exceeded the undo limit. Edit it in the note list."));
        const expected=action.changes;
        const restoredImages = expected.map(change => change.before?.image).filter(Boolean);
        await owner.store.restoreCaptureImages(restoredImages, () => this.plugin.store.mutate(docId,doc=>{
          const current=new Map(doc.annotations.map(a=>[a.id,a]));
          for(const change of expected)if(!same(current.get(change.id)||null,change.after))throw Error(LT("노트가 다른 곳에서 변경되어 이 작업은 취소하지 않았습니다.", "This note changed elsewhere. Undo was skipped."));
          const ids=new Set(expected.map(c=>c.id));doc.annotations=doc.annotations.filter(a=>!ids.has(a.id));doc.deleted=doc.deleted.filter(a=>!ids.has(a.id));
          for(const change of expected)if(change.before)doc.annotations.push({...C.clone(change.before),updatedAt:new Date().toISOString()});else doc.deleted.push({id:change.id,deletedAt:new Date().toISOString()});
        },{history:false,expected}));
        const i=this.actions.indexOf(action);if(i>=0){this.actions.splice(i,1);this.bytes-=action.bytes;}return true;
      }
    }
    class DoubleTap{
      constructor(reader){this.reader=reader;this.pointers=new Map();this.last=null;this.blockUntil=0;}
      cancelTap(){clearTimeout(this.popupTimer);this.popupTimer=null;this.last=null;}
      deferPopup(options){clearTimeout(this.popupTimer);this.popupTimer=setTimeout(()=>{this.popupTimer=null;if(!this.reader.closed)this.reader.openAnnotationPopup(options);},310);}
      ownsTouch(){return Date.now()<this.blockUntil;}
      stop(event){if(event.cancelable)event.preventDefault();event.stopImmediatePropagation();this.blockUntil=Date.now()+500;}
      pointer(event){
        if(event.pointerType!=='touch')return false;
        const r=this.reader,now=Date.now(),id=event.pointerId;
        if(event.type==='pointerdown'){
          if(r.closed||!r.scroller.contains(event.target)||event.target.closest?.('button,input,select,textarea,a,summary,[contenteditable="true"]'))return false;
          if(r.ink?.active?.pen||r.ink?.erasing?.pen){this.cancelTap();return false;}
          const multi=this.pointers.size>0;
          if(multi){this.cancelTap();for(const p of this.pointers.values()){p.multi=true;if(p.reserved&&p.draw&&!p.forwarded){r.ink?.pointer(p.start);p.forwarded=true;}}}
          const last=this.last,double=!multi&&last&&last.docId===r.docId&&last.page===r.pageNumber&&last.mode===r.mode&&now-last.time<=330&&Math.hypot(event.clientX-last.x,event.clientY-last.y)<=24;
          const draw=r.mode==='draw'&&r.ink?.input==='touch',note=r.mode==='note',reserved=!!double||draw||note;
          const p={start:event,x:event.clientX,y:event.clientY,time:now,moved:false,multi,double:!!double,draw,note,reserved};this.pointers.set(id,p);
          if(double){clearTimeout(this.popupTimer);r.cancelTextGesture();r.hideTooltip();}
          if(reserved){this.stop(event);if(multi&&draw){r.ink?.pointer(event);p.forwarded=true;}return true;}return false;
        }
        const p=this.pointers.get(id);if(!p)return false;
        // Delayed finger-ink starts transfer the implicit text-layer capture to
        // the scroller. That transfer is not cancellation of the drawing.
        if(event.type==='lostpointercapture'&&p.reserved&&p.forwarded&&event.target!==r.scroller&&r.scroller.hasPointerCapture?.(id)){this.stop(event);return true;}
        p.moved ||= Math.hypot(event.clientX-p.x,event.clientY-p.y)>8;
        if(p.moved){this.last=null;if(p.draw&&p.reserved&&!p.double&&!p.forwarded){r.ink?.pointer(p.start);p.forwarded=true;}}
        if(p.reserved&&p.forwarded)r.ink?.pointer(event);
        if(!['pointerup','pointercancel','lostpointercapture'].includes(event.type)){if(p.reserved)this.stop(event);return p.reserved;}
        this.pointers.delete(id);
        const tap=event.type==='pointerup'&&!p.moved&&!p.multi&&now-p.time<=260;
        if(tap&&p.double){this.cancelTap();r.cancelTextGesture();r.ink?.endActive(true);r.clearTextPreview(true);r.suppressPageClickUntil=now+650;r.plugin.undoLast(r).catch(r.reportActionError);this.stop(event);return true;}
        if(tap){
          this.last={x:p.x,y:p.y,time:now,docId:r.docId,page:r.pageNumber,mode:r.mode};
          if(p.note){const entry=r.pages.get(Number(p.start.target.closest?.('.rp-page-slot')?.dataset.page||p.start.target.closest?.('.page[data-page-number]')?.dataset.pageNumber)),docId=r.docId;
            this.popupTimer=setTimeout(()=>{this.popupTimer=null;if(!r.closed&&r.docId===docId&&entry?.surface?.isConnected){const box=entry.surface.getBoundingClientRect();r.addNoteAt(entry,p.x-box.left,p.y-box.top).catch(r.reportActionError);}},310);}
        }else this.last=null;
        if(p.reserved)this.stop(event);return p.reserved;
      }
      dispose(){this.cancelTap();this.pointers.clear();}
    }
    return{History,DoubleTap,same};
  };

  return module.exports; })()(C);
  const ANNOTATIONS = "notenyang-pdf-tools";
  const MIME = "application/x-notenyang-pdf-annotation";

  function el(parent, tag, cls, text) {
    const node = parent.ownerDocument.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    parent.appendChild(node);
    return node;
  }
  function button(parent, label, action, cls = '') {
    const node = el(parent, 'button', `rp-button ${cls}`, label);
    node.type = 'button';
    const run = event => { event.stopPropagation(); try { Promise.resolve(action(event)).catch(report); } catch (error) { report(error); } };
    let touch, suppressClickUntil = 0;
    node.addEventListener('pointerdown', event => { if (event.pointerType === 'touch' && event.isPrimary) { event.preventDefault(); touch = { id: event.pointerId, x: event.clientX, y: event.clientY }; } });
    node.addEventListener('pointermove', event => { if (touch?.id === event.pointerId && Math.hypot(event.clientX - touch.x, event.clientY - touch.y) > 8) touch = null; });
    node.addEventListener('pointercancel', () => { touch = null; });
    node.addEventListener('pointerup', event => {
      if (touch?.id !== event.pointerId) return; touch = null;
      if (node.disabled) return;
      // Android may consume the compatibility click to dismiss text selection.
      // A deliberate touch release still activates the control exactly once.
      event.preventDefault(); suppressClickUntil = Date.now() + 700;
      const win = node.ownerDocument.defaultView;
      const suppress = click => {
        const nearby = Math.hypot(click.clientX - event.clientX, click.clientY - event.clientY) <= 8;
        if ((click.pointerType === 'touch' && (click.pointerId === event.pointerId || nearby)) || (click.sourceCapabilities?.firesTouchEvents && nearby)) {
          click.preventDefault(); click.stopImmediatePropagation(); win.removeEventListener('click', suppress, true); clearTimeout(timer);
        }
      };
      // If an action closes a popup/modal, its delayed click must not reach the
      // newly exposed PDF or outline link underneath the removed button.
      win.addEventListener('click', suppress, true); const timer = setTimeout(() => win.removeEventListener('click', suppress, true), 700);
      run(event);
    });
    node.addEventListener('click', event => { if (Date.now() < suppressClickUntil && (event.detail !== 0 || event.pointerType === 'touch' || event.sourceCapabilities?.firesTouchEvents)) { event.preventDefault(); event.stopPropagation(); return; } run(event); });
    return node;
  }
  function iconButton(parent, icon, label, action, cls = '') {
    const node = button(parent, '', action, `rp-icon-button ${cls}`);
    node.title = label; node.setAttribute('aria-label', label); setIcon(node, icon);
    return node;
  }
  function select(parent, items, value, callback) {
    const node = el(parent, 'select', 'rp-select');
    for (const [key, title] of items) { const option = el(node, 'option', '', title); option.value = key; }
    node.value = value;
    node.addEventListener('change', () => Promise.resolve(callback(node.value)).catch(report));
    return node;
  }
  function toolbarPicker(parent, { cls, label, prefix = '', choices, value, onChange }) {
    let openMenu;
    const control = button(parent, '', () => {
      if (openMenu) { openMenu.hide(); return; }
      const menu = new Menu().setUseNativeMenu(false);
      for (const [key, title, icon] of choices) {
        menu.addItem(item => item.setTitle(title).setIcon(icon).setChecked(key === value()).onClick(() => {
          Promise.resolve().then(() => onChange(key)).catch(report);
        }));
      }
      openMenu = menu;
      control.setAttribute('aria-expanded', 'true');
      menu.onHide(() => {
        openMenu = null;
        control.setAttribute('aria-expanded', 'false');
      });
      const { left, bottom, width } = control.getBoundingClientRect();
      menu.showAtPosition({ x: left, y: bottom, width }, control.ownerDocument);
    }, 'rp-toolbar-picker ' + cls);
    control.setAttribute('aria-haspopup', 'menu');
    control.setAttribute('aria-expanded', 'false');
    const glyph = el(control, 'span', 'rp-picker-glyph');
    glyph.setAttribute('aria-hidden', 'true');
    const caption = el(control, 'span', 'rp-picker-caption');
    const indicator = el(control, 'span', 'rp-picker-chevron');
    indicator.setAttribute('aria-hidden', 'true');
    setIcon(indicator, 'chevron-down');
    const refresh = () => {
      const [, title, icon] = choices.find(([key]) => key === value()) || choices[0];
      glyph.replaceChildren();
      setIcon(glyph, icon);
      caption.textContent = prefix + title;
      control.title = label + ' · ' + title;
      control.setAttribute('aria-label', control.title);
    };
    refresh();
    return { refresh };
  }
  function pdfModeChoices() {
    return [
      ['read', LT('읽기', 'Read'), 'book-open'],
      ['gesture', LT('제스처 선택', 'Touch selection'), 'mouse-pointer-2'],
      ['highlight', LT('형광펜', 'Highlight'), 'highlighter'],
      ['note', LT('메모지', 'Sticky note'), 'message-square-plus'],
      ['capture', LT('영역 캡처', 'Area capture'), 'scan'],
      ['draw', LT('드로잉', 'Drawing'), 'pencil']
    ];
  }
  function pdfFormatChoices() {
    const icons = { callout: 'message-square-quote', quote: 'quote', text: 'align-left', link: 'link', table: 'table' };
    return Object.entries(C.EXPORT_FORMATS).map(([key, title]) => [key, title, icons[key]]);
  }
  function debounce(fn, delay) { let timer; const wrapped = (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); }; wrapped.cancel = () => clearTimeout(timer); return wrapped; }

  class AnnotationStore {
    noteViewsById = new Map();
    noteViewsByDoc = new Map();

    async loadSaved() {
      const documents = Object.entries(this.index.documents).filter(([id, entry]) =>
        /^doc-[a-f0-9]{16}$/.test(id) && typeof entry?.path === "string" && !this.records.has(id)
      );
      for (const [id] of documents) {
        try { await this.loadSavedDoc(id); }
        catch (error) { console.warn("[NoteNyang PDF]", id, error); }
      }
    }

    async loadSavedDoc(id) {
      const path = this.file(id);
      if (!(await this.adapter.exists(path))) return;
      const doc = C.validateDocument(JSON.parse(await this.adapter.read(path)));
      if (doc.id !== id) throw new Error(LT("노트 파일의 문서 ID가 일치하지 않습니다.", "Note file ID does not match."));
      if (this.records.has(id)) return;
      this.records.set(id, { doc, base: C.clone(doc), queue: Promise.resolve(), writing: false });
      this.emit(id);
    }

    noteViews(path) {
      if (path === undefined) return [...this.noteViewsById.values()];
      const result = [];
      for (const [id, entry] of Object.entries(this.index.documents)) {
        if (entry.path === path) result.push(...(this.noteViewsByDoc.get(id) || []));
      }
      return result;
    }

    updateNoteViews(id) {
      for (const old of this.noteViewsByDoc.get(id) || []) this.noteViewsById.delete(old.id);
      const doc = this.get(id);
      const items = [];
      for (const a of doc?.annotations || []) {
        if (owner.store.byId.has(a.id)) continue;
        items.push({
          id: a.id, readerDocId: id, sourcePath: doc.path, sourceType: "pdf",
          status: ["resolved", "orphaned"].includes(a.status) ? a.status : "open",
          body: a.comment, createdAt: a.createdAt, updatedAt: a.updatedAt,
          anchor: {
            kind: "pdf", page: a.anchors[0].page, rectangles: [], quote: { exact: a.text },
            imagePath: a.image, readerPages: a.anchors.map(anchor => anchor.page), readerKind: a.kind, readerColor: a.color, printPage: C.pageLabel(doc, a)
          }
        });
      }
      this.noteViewsByDoc.set(id, items);
      for (const item of items) this.noteViewsById.set(item.id, item);
    }

    legacyNotes(doc) {
      if (!doc) return [];
      const ids = owner.store.idsBySource.get(doc.path);
      if (!ids) return [];
      return [...ids].map(id => owner.store.byId.get(id)).flatMap(note => {
        const anchor = note?.anchor;
        if (anchor?.kind !== "pdf") return [];
        return [{
          id: note.id, legacy: true, kind: anchor.imagePath ? "capture" : "highlight",
          color: "yellow", text: anchor.quote.exact, comment: note.body,
          createdAt: note.createdAt, updatedAt: note.updatedAt, status: note.status,
          anchors: [{ page: anchor.page, rects: [[0, 0, 1, 1]] }], image: anchor.imagePath
        }];
      });
    }

    withLegacy(doc) {
      return doc && { ...doc, annotations: [...doc.annotations, ...this.legacyNotes(doc)] };
    }

    constructor(plugin) { this.plugin = plugin; this.adapter = plugin.app.vault.adapter; this.records = new Map(); this.listeners = new Set(); this.index = { schema: 1, documents: {} }; this.indexQueue = Promise.resolve(); }
    get folder() { return this.plugin.settings.dataFolder; }
    file(id) { if (!/^doc-[a-f0-9]{16}$/.test(id)) throw new Error(LT("잘못된 문서 ID입니다.", "Invalid document ID.")); return `${this.folder}/${id}.json`; }
    async ensure(path) { let current = ''; for (const segment of path.split('/')) { current = current ? `${current}/${segment}` : segment; if (!(await this.adapter.exists(current))) { try { await this.adapter.mkdir(current); } catch (e) { if (!(await this.adapter.exists(current))) throw e; } } } }
    async init() {
      const path = `${this.folder}/index.json`;
      if (await this.adapter.exists(path)) {
        const raw = JSON.parse(await this.adapter.read(path));
        if (raw.schema !== 1 || !raw.documents || typeof raw.documents !== 'object') throw new Error(LT("노트 문서 목록이 손상되었습니다.", "The note index is damaged."));
        this.index = raw;
      }
    }
    async saveIndex() {
      this.indexQueue = this.indexQueue.catch(() => {}).then(async () => {
        const path = `${this.folder}/index.json`;
        let remote = { documents: {} };
        if (await this.adapter.exists(path)) remote = JSON.parse(await this.adapter.read(path));
        const documents = { ...remote.documents, ...this.index.documents };
        await this.adapter.write(path, JSON.stringify({ schema: 1, documents }, null, 2));
        this.index.documents = documents;
      });
      return this.indexQueue;
    }
    async open(file) {
      const entry = Object.entries(this.index.documents).find(([, value]) => value.path === file.path);
      const id = entry ? entry[0] : C.newDocument(file.path).id;
      if (this.records.has(id)) return this.records.get(id).doc;
      // Share initialization when the same PDF is opened in two leaves concurrently.
      this.opening ||= new Map();
      if (this.opening.has(id)) return this.opening.get(id);
      const pending = (async () => {
        const path = this.file(id);
        const exists = await this.adapter.exists(path);
        const doc = exists ? C.validateDocument(JSON.parse(await this.adapter.read(path))) : C.newDocument(file.path, file.stat);
        if (doc.id !== id) throw new Error(LT("노트 파일의 문서 ID가 일치하지 않습니다.", "The note file ID does not match the document."));
        if (doc.path !== file.path && !entry) throw new Error(LT("문서 ID 충돌이 감지되었습니다.", "A document ID conflict was detected."));
        if (exists && (doc.stat?.size !== file.stat.size || doc.stat?.mtime !== file.stat.mtime)) new Notice(LT("이 PDF의 파일 정보가 변경되었습니다. 기존 노트 위치가 올바른지 확인하세요.", "This PDF file has changed. Check the positions of your existing notes."), 10000);
        doc.path = file.path;
        if (!exists) { await this.ensure(this.folder); doc.pageOffset = this.plugin.settings.pageOffset; await this.adapter.write(path, JSON.stringify(doc, null, 2)); }
        this.records.set(id, { doc, base: C.clone(doc), queue: Promise.resolve(), writing: false });
        this.index.documents[id] = { path: file.path };
        await this.saveIndex();
        this.emit(id);
        return doc;
      })();
      this.opening.set(id, pending);
      try { return await pending; } finally { this.opening.delete(id); }
    }
    get(id) { return this.records.get(id)?.doc; }
    forPage(id, page) {
      const record = this.records.get(id); if (!record) return [];
      if (record.indexedDocument !== record.doc) {
        record.pageIndex = new Map();
        for (const a of record.doc.annotations) for (const anchor of a.anchors) { if (!record.pageIndex.has(anchor.page)) record.pageIndex.set(anchor.page, []); const list = record.pageIndex.get(anchor.page); if (!list.includes(a)) list.push(a); }
        record.indexedDocument = record.doc;
      }
      return record.pageIndex.get(page) || [];
    }
    onChange(callback) { this.listeners.add(callback); return () => this.listeners.delete(callback); }
    emit(id) { this.updateNoteViews(id); for (const cb of this.listeners) { try { cb(id); } catch (e) { console.error(e); } } }
    async mutate(id, change, options = {}) {
      const record = this.records.get(id);
      if (!record) throw new Error(LT("문서가 열려 있지 않습니다.", "The document is not open."));
      const operation = record.queue.catch(() => {}).then(async () => {
        const before=record.doc,local = C.clone(before);
        change(local);
        const undoOrder=options.history===false?0:this.plugin.nextUndoOrder();
        local.updatedAt = new Date().toISOString();
        const path = this.file(id);
        record.writing = true;
        try {
          if (!(await this.adapter.exists(path))) throw new Error(LT("노트 파일이 외부에서 삭제되었습니다. 덮어쓰지 않았습니다.", "The note file was deleted outside Obsidian. No changes were written."));
          const remoteText = await this.adapter.read(path);
          const remote = C.validateDocument(JSON.parse(remoteText));
          if(options.expected){const annotations=new Map(remote.annotations.map(a=>[a.id,a]));for(const change of options.expected)if(!Actions.same(annotations.get(change.id)||null,change.after))throw Error(LT("다른 기기에서 바뀐 노트는 실행 취소하지 않았습니다.", "The note changed on another device. Undo was skipped."));}
          const result = C.mergeDocuments(record.base, local, remote);
          C.validateDocument(result.document);
          await this.adapter.write(`${path}.bak`, remoteText);
          await this.adapter.write(path, JSON.stringify(result.document, null, 2));
          record.doc = result.document;
          record.base = C.clone(result.document);
          if(options.history!==false)this.plugin.undoHistory?.record(id,before,local,record.doc,undoOrder);
          if (result.conflicts.length) new Notice(LT("동시에 수정된 노트 또는 개요를 발견했습니다. 충돌한 내용을 별도 항목으로 보존했습니다.", "An note or outline item was edited simultaneously. Conflicting edits were saved in a separate item."), 10000);
          this.emit(id);
          return record.doc;
        } finally { record.writing = false; }
      });
      record.queue = operation;
      return operation;
    }
    add(id, annotation) { return this.mutate(id, doc => { doc.annotations.push(annotation); }); }
    update(id, annotation) { return this.mutate(id, doc => { const i = doc.annotations.findIndex(a => a.id === annotation.id); if (i < 0) throw new Error(LT("이 노트가 삭제되었거나 다른 곳에서 변경되었습니다.", "The note was deleted or changed elsewhere.")); doc.annotations[i] = { ...annotation, updatedAt: new Date().toISOString() }; }); }
    patch(id, annotationId, fields) {
      return this.mutate(id, doc => {
        const annotation = doc.annotations.find(a => a.id === annotationId);
        if (!annotation) throw new Error(LT("이 노트는 이미 삭제되었습니다.", "The note was already deleted."));
        if (fields.text != null) { if (typeof fields.text !== 'string') throw new Error(LT("원문 형식이 올바르지 않습니다.", "Invalid source text.")); if (fields.text !== annotation.text) annotation.originalText ??= annotation.text; annotation.text = fields.text; }
        if (fields.comment != null) { if (typeof fields.comment !== 'string') throw new Error(LT("메모 형식이 올바르지 않습니다.", "Invalid note text.")); annotation.comment = fields.comment; }
        if (fields.color != null) { if (!C.COLORS[fields.color]) throw new Error(LT("색상이 올바르지 않습니다.", "Invalid color.")); annotation.color = fields.color; }
        annotation.updatedAt = new Date().toISOString();
      });
    }
    remove(id, annId) { return this.mutate(id, doc => { doc.annotations = doc.annotations.filter(a => a.id !== annId); doc.deleted.push({ id: annId, deletedAt: new Date().toISOString() }); }); }
    async externalChange(path) {
      const entry = [...this.records.entries()].find(([id]) => this.file(id) === path);
      if (!entry) {
        if (path === this.folder + "/index.json") {
          const remote = JSON.parse(await this.adapter.read(path));
          if (remote.schema !== 1 || !remote.documents || typeof remote.documents !== "object") return;
          this.index.documents = { ...this.index.documents, ...remote.documents };
          await this.loadSaved();
        } else {
          const id = path.slice(this.folder.length + 1, -5);
          if (/^doc-[a-f0-9]{16}$/.test(id) && Object.hasOwn(this.index.documents, id)) await this.loadSavedDoc(id);
        }
        return;
      }
      const [id, record] = entry;
      // Our own writes will emit after they finish; don't enqueue a stale file event.
      if (record.writing) return;
      const operation = record.queue.catch(() => {}).then(async () => {
        const remote = C.validateDocument(JSON.parse(await this.adapter.read(path)));
        if (JSON.stringify(remote) === JSON.stringify(record.base)) return;
        record.doc = remote; record.base = C.clone(remote); this.emit(id);
      });
      record.queue = operation;
      return operation;
    }
    async renamed(file, oldPath) {
      let changed = false;
      for (const [id, value] of Object.entries(this.index.documents)) {
        if (value.path !== oldPath && !value.path.startsWith(`${oldPath}/`)) continue;
        const newPath = file.path + value.path.slice(oldPath.length);
        value.path = newPath; changed = true;
        const record = this.records.get(id);
        if (record) await this.mutate(id, doc => { doc.path = newPath; });
        else {
          const path = this.file(id);
          if (await this.adapter.exists(path)) {
            const raw = await this.adapter.read(path), doc = C.validateDocument(JSON.parse(raw));
            doc.path = newPath;
            await this.adapter.write(`${path}.bak`, raw);
            await this.adapter.write(path, JSON.stringify(doc, null, 2));
          }
        }
      }
      if (changed) await this.saveIndex();
    }
  }

  class ResearchModal extends Modal {
    constructor(app) { super(app); this.modalEl.classList.toggle('rp-mobile', !!(Platform?.isMobile || Platform?.isMobileApp || app.isMobile)); }
  }

  class FilePicker extends FuzzySuggestModal {
    constructor(app, extension, callback) { super(app); this.modalEl.classList.toggle('rp-mobile', !!(Platform?.isMobile || Platform?.isMobileApp || app.isMobile)); this.extension = extension; this.callback = callback; this.setPlaceholder(extension === 'pdf' ? LT("읽을 PDF 선택", "Choose a PDF") : LT("노트를 넣을 노트 선택", "Choose a destination note")); }
    getItems() { return this.app.vault.getFiles().filter(f => f.extension.toLowerCase() === this.extension); }
    getItemText(file) { return file.path; }
    onChooseItem(file) { Promise.resolve(this.callback(file)).catch(report); }
  }

  class InlineAnnotationField {
    constructor(plugin, docId, annotationId, field, parent, { preview = false, read, write, renderPreview } = {}) {
      Object.assign(this, { plugin, docId, annotationId, field, preview, read, write, renderPreview, dirty: false, pending: null, disposed: false });
      plugin.inlineEditors ||= new Set(); plugin.inlineEditors.add(this);
      this.root = el(parent, 'div', `rp-inline-field rp-inline-${field}`);
      this.status = el(this.root, 'span', 'rp-inline-status'); this.status.setAttribute('aria-live', 'polite');
      if (preview) {
        const isComment = field === "comment";
        this.previewEl = el(this.root, isComment ? "div" : "blockquote", isComment ? "rp-inline-comment-preview" : "rp-card-text");
        this.previewEl.tabIndex = 0;
        this.previewEl.title = isComment ? owner.t("editComment") : LT("원문 더블클릭하여 바로 수정", "Double-click to edit the extracted text");
        this.previewEl.setAttribute("role", "button");
        this.previewEl.setAttribute("aria-label", this.previewEl.title);
        this.previewEl.addEventListener(isComment ? "click" : "dblclick", event => {
          if (event.target.closest?.("a, button, input, [contenteditable]")) return;
          const selection = this.previewEl.ownerDocument.getSelection();
          if (isComment && selection && !selection.isCollapsed && this.previewEl.contains(selection.anchorNode)) return;
          event.preventDefault();
          this.startEditing();
        });
        this.previewEl.addEventListener("keydown", event => {
          if (event.target !== this.previewEl || !["Enter", " ", "F2"].includes(event.key)) return;
          event.preventDefault();
          this.startEditing();
        });
        if (!isComment && plugin.isMobile) iconButton(this.root, "pencil", LT("원문 바로 수정", "Edit extracted text"), () => this.startEditing(), "rp-inline-edit-button");
      }
      this.input = el(this.root, 'textarea', field === 'comment' ? 'rp-card-comment rp-inline-input' : 'rp-inline-input rp-inline-original');
      this.input.rows = 1; this.input.placeholder = field === 'comment' ? LT("메모 추가…", "Add a note…") : LT("원문", "Source"); this.input.setAttribute('aria-label', field === 'comment' ? LT("노트 메모", "Note note") : LT("원문 수정", "Edit extracted text")); this.input.hidden = preview;
      const changed = () => {
        this.dirty = true;
        this.resize();
        clearTimeout(this.timer);
        this.timer = setTimeout(() => this.flush().catch(report), 450);
      };
      this.input.addEventListener("compositionstart", () => { this.composing = true; clearTimeout(this.timer); });
      this.input.addEventListener("compositionend", () => { this.composing = false; changed(); });
      this.input.addEventListener("input", event => { if (!this.composing && !event.isComposing) changed(); });
      this.input.addEventListener('blur', () => { this.flush().then(() => { if (this.preview && this.input.ownerDocument.activeElement !== this.input) { this.input.hidden = true; this.previewEl.hidden = false; this.sync(); } }).catch(report); });
      this.input.addEventListener('keydown', event => {
        if (event.isComposing || this.composing) return;
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') { event.preventDefault(); this.flush().catch(report); }
        if (event.key === 'Escape') { event.stopPropagation(); event.preventDefault(); this.cancel(); if (this.preview) { this.input.hidden = true; this.previewEl.hidden = false; } this.input.blur(); }
      });
      this.unsubscribe = plugin.store.onChange(id => { if (id === docId) this.sync(); }); this.sync();
      this.frame = this.root.ownerDocument.defaultView.requestAnimationFrame(() => this.resize());
    }
    annotation() { return this.read ? this.read() : this.plugin.store.get(this.docId)?.annotations.find(a => a.id === this.annotationId); }
    startEditing({ focus = true } = {}) {
      this.previewEl.hidden = true;
      this.input.hidden = false;
      this.resize();
      if (focus) this.input.focus();
    }
    resize() { if (this.disposed || this.input.hidden) return; this.input.style.height = '0px'; this.input.style.height = `${Math.max(20, this.input.scrollHeight)}px`; }
    sync() {
      const annotation = this.annotation(); if (!annotation) return;
      const value = annotation[this.field] || '';
      if (!this.dirty && !this.pending && this.input.value !== value) { this.input.value = value; this.resize(); }
      if (this.previewEl) {
        if (this.renderPreview) this.renderPreview(this.previewEl, value);
        else this.previewEl.textContent = value || LT("원문 없음", "No extracted text");
      }
    }
    async flush() {
      clearTimeout(this.timer);
      if (this.pending) { await this.pending; if (this.dirty) return this.flush(); return; }
      if (this.composing || !this.dirty || !this.annotation()) return;
      const value = this.input.value; this.dirty = false; this.status.textContent = "";
      this.pending = this.write ? this.write(value) : this.plugin.store.patch(this.docId, this.annotationId, { [this.field]: value });
      try { await this.pending; }
      catch (error) { this.dirty = true; this.status.textContent = LT("저장 실패 · 다시 입력하거나 Ctrl+Enter", "Save failed · Edit again or press Ctrl+Enter"); throw error; }
      finally { this.pending = null; }
      if (this.dirty) return this.flush();
    }
    cancel() { clearTimeout(this.timer); this.dirty = false; this.input.value = this.annotation()?.[this.field] || ''; this.status.textContent = ''; this.resize(); }
    dispose() { if (this.disposed) return; this.disposed = true; this.plugin.inlineEditors?.delete(this); clearTimeout(this.timer); this.unsubscribe?.(); this.root.ownerDocument.defaultView.cancelAnimationFrame(this.frame); this.flush().catch(report); }
  }

  class CopyTextModal extends ResearchModal {
    constructor(plugin, markdown, sendToNote) { super(plugin.app); Object.assign(this, { markdown, sendToNote }); }
    onOpen() {
      this.modalEl.classList.add('rp-copy-modal');
      el(this.contentEl, 'h2', '', LT("노트 가져오기", "Insert notes"));
      el(this.contentEl, 'p', '', LT("텍스트를 길게 눌러 복사하거나 노트에 바로 추가하세요.", "Press and hold to copy the text, or add it to a note."));
      const text = el(this.contentEl, 'textarea', 'rp-copy-text'); text.readOnly = true; text.value = this.markdown; text.setAttribute('aria-label', LT("복사할 노트", "Notes to copy")); text.rows = 8;
      const actions = el(this.contentEl, 'div', 'rp-actions');
      button(actions, LT("전체 선택", "Select all"), () => { text.focus(); text.select(); });
      button(actions, LT("노트에 추가", "Add to note"), () => { this.sendToNote(); this.close(); });
      button(actions, LT("닫기", "Close"), () => this.close());
    }
  }

  class AnnotationPopover {
    constructor(reader, { annotation, x, y, focus = false, transient = false }) {
      Object.assign(this, { reader, plugin: reader.plugin, docId: reader.docId, annotationId: annotation.id, x, y, transient, pointerInside: false, closed: false });
      const doc = reader.contentEl.ownerDocument;
      this.root = el(doc.body, 'div', 'rp-annotation-popover'); this.root.setAttribute('role', 'dialog'); this.root.setAttribute('aria-label', LT("노트 편집", "Edit note"));
      this.root.classList.toggle('rp-mobile-popover', this.plugin.isMobile);
      const tools = el(this.root, 'div', 'rp-popover-tools');
      this.drag = el(tools, 'span', 'rp-drag', '⠿'); this.drag.title = LT("노트로 끌어서 삽입", "Drag into a note"); this.drag.draggable = !!annotation;
      this.drag.addEventListener('dragstart', event => { const a = this.annotation(); if (!a) { event.preventDefault(); return; } reader.dragging = true; this.plugin.startDrag(event, this.docId, a); });
      this.drag.addEventListener('dragend', () => { reader.dragging = false; this.close(); });
      const palette = el(tools, 'div', 'rp-palette'); this.colorButtons = new Map();
      for (const [id, color] of Object.entries(C.COLORS)) {
        const node = button(palette, '', async () => {
          reader.setColor(id); const a = this.annotation(); if (!a) return;
          if (a.color !== id) await this.plugin.store.patch(this.docId, a.id, { color: id });
          this.sync();
        });
        node.style.backgroundColor = color.hex; node.title = color.label; node.setAttribute('aria-label', `${color.label}${LT(" 형광펜", " Highlight")}`); node.addEventListener('mousedown', event => event.preventDefault()); this.colorButtons.set(id, node);
      }
      this.copyButton = iconButton(tools, 'copy', LT("노트 복사", "Copy note"), async () => { const a = this.annotation(); if (a) await this.plugin.copy(this.docId, [a]); });
      if (this.plugin.isMobile) iconButton(tools, 'file-input', LT("노트를 노트에 추가", "Add note to note"), async () => { const a = this.annotation(); if (!a) return; await this.editor?.flush(); this.plugin.sendToNote(this.docId, [this.annotation() || a], this.plugin.settings.copyFormat); });
      iconButton(tools, 'message-square-plus', LT("메모 추가", "Add a note"), () => this.editor?.input.focus());
      this.deleteButton = iconButton(tools, 'trash-2', annotation?.kind && annotation.kind !== 'highlight' ? LT("노트 삭제", "Delete note") : LT("형광펜 삭제", "Delete highlight"), () => this.remove(), 'rp-delete-button');
      iconButton(tools, 'x', LT("팝업 닫기", "Close popover"), () => this.close());
      this.body = el(this.root, 'div', 'rp-popover-body'); this.buildBody(); this.sync();
      this.root.addEventListener('pointerenter', () => { this.pointerInside = true; clearTimeout(reader.tooltipTimer); clearTimeout(reader.popoverCloseTimer); });
      this.root.addEventListener('pointerleave', () => { this.pointerInside = false; reader.schedulePopoverClose(); });
      this.root.addEventListener('keydown', event => { if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); this.close(); } });
      this.outside = event => { if (!this.root.contains(event.target) && !reader.dragging) this.close(); };
      doc.addEventListener('pointerdown', this.outside, true);
      this.unsubscribe = this.plugin.store.onChange(id => { if (id !== this.docId || this.closed) return; if (this.annotationId && !this.annotation()) { this.close(); return; } this.sync(); });
      this.observer = new doc.defaultView.ResizeObserver(() => this.position()); this.observer.observe(this.root); this.position();
      this.viewport = doc.defaultView.visualViewport; this.viewportChange = () => this.position();
      this.viewport?.addEventListener('resize', this.viewportChange); this.viewport?.addEventListener('scroll', this.viewportChange);
      if (focus) this.editor?.input.focus();
    }
    annotation() { return this.plugin.store.get(this.docId)?.annotations.find(a => a.id === this.annotationId); }
    buildBody() {
      this.editor?.dispose(); this.originalEditor?.dispose(); this.body.replaceChildren();
      const a = this.annotation();
      if (a) {
        if (a.text || a.kind === 'highlight') this.originalEditor = new InlineAnnotationField(this.plugin, this.docId, a.id, 'text', this.body, { preview: true });
        if (a.image) { const image = el(this.body, 'img', 'rp-popover-image'); image.src = this.plugin.app.vault.adapter.getResourcePath(a.image); image.alt = a.kind === 'drawing' ? LT("드로잉", "Drawing") : LT("영역 캡처", "Area capture"); }
        this.editor = new InlineAnnotationField(this.plugin, this.docId, a.id, 'comment', this.body);
      }
    }
    sync() {
      const a = this.annotation(), color = a?.color || this.reader.color;
      for (const [id, node] of this.colorButtons) { node.classList.toggle('is-active', id === color); node.setAttribute('aria-pressed', String(id === color)); }
      this.drag.draggable = !!a; this.copyButton.disabled = !a;
      this.deleteButton.disabled = !a;
    }
    async remove() {
      const annotation = this.annotation(); if (!annotation) return;
      this.editor?.cancel(); this.originalEditor?.cancel();
      await owner.store.delete(annotation.id);
      this.reader.contentEl.ownerDocument.defaultView.getSelection()?.removeAllRanges(); this.close();
    }
    position() {
      if (this.closed) return;
      const win = this.root.ownerDocument.defaultView, box = this.root.getBoundingClientRect();
      if (this.plugin.isMobile) {
        const viewport = win.visualViewport, width = viewport?.width || win.innerWidth, height = viewport?.height || win.innerHeight;
        const left = (viewport?.offsetLeft || 0) + 8, bottom = (viewport?.offsetTop || 0) + height - 8;
        const top = Math.min(Math.max((viewport?.offsetTop || 0) + 8, this.reader.scroller.getBoundingClientRect().top + 4), bottom - 90);
        this.root.style.width = `${Math.min(280, width - 16)}px`; this.root.style.maxHeight = `${Math.max(90, Math.min(340, bottom - top))}px`;
        const size = this.root.getBoundingClientRect();
        const x = this.x - size.width / 2;
        const above = this.y - size.height - 10, below = this.y + 12;
        const y = above >= top ? above : below;
        this.root.style.left = `${Math.max(left, Math.min(x, left + width - 16 - size.width))}px`;
        this.root.style.top = `${Math.max(top, Math.min(y, bottom - size.height))}px`;
        return;
      }
      this.root.style.left = `${Math.max(8, Math.min(this.x + 10, win.innerWidth - box.width - 10))}px`;
      this.root.style.top = `${Math.max(8, Math.min(this.y + 14, win.innerHeight - box.height - 10))}px`;
    }
    close() {
      if (this.closed) return; this.closed = true; this.editor?.dispose(); this.originalEditor?.dispose(); this.unsubscribe?.(); this.observer?.disconnect(); this.viewport?.removeEventListener('resize', this.viewportChange); this.viewport?.removeEventListener('scroll', this.viewportChange); this.root.ownerDocument.removeEventListener('pointerdown', this.outside, true); this.root.remove();
      if (this.reader.annotationPopup === this) this.reader.annotationPopup = null;
    }
  }

  class AnnotationModal extends ResearchModal {
    constructor(plugin, docId, annotation, isNew = false, focusField = 'comment') { super(plugin.app); this.plugin = plugin; this.docId = docId; this.annotation = C.clone(annotation); this.isNew = isNew; this.focusField = focusField; }
    onOpen() {
      this.modalEl.classList.add('rp-modal');
      const root = this.contentEl;
      el(root, 'h2', '', `${C.KINDS[this.annotation.kind]} ${this.isNew ? LT("추가", "Add") : LT("편집", "Edit")}`);
      select(root, Object.entries(C.COLORS).map(([id, c]) => [id, `${c.icon} ${c.label}`]), this.annotation.color, value => { this.annotation.color = value; });
      if (this.annotation.text || this.annotation.kind === 'highlight') {
        el(root, 'label', '', LT("원문", "Source")); this.textInput = el(root, 'textarea', 'rp-original-input');
        this.textInput.value = this.annotation.text; this.textInput.rows = 4; this.textInput.setAttribute('aria-label', LT("원문 수정", "Edit extracted text"));
        this.textInput.addEventListener('keydown', event => { if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') { event.preventDefault(); this.save(); } });
      }
      if (this.annotation.image) { const image = el(root, 'img', 'rp-modal-image'); image.src = this.app.vault.adapter.getResourcePath(this.annotation.image); image.alt = LT("선택한 PDF 영역", "Selected PDF area"); }
      el(root, 'label', '', LT("메모", "Note"));
      this.input = el(root, 'textarea', 'rp-comment-input');
      this.input.value = this.annotation.comment || '';
      this.input.placeholder = LT("이 노트에 대한 메모 (Markdown 지원)", "Note for this note (Markdown supported)");
      this.input.rows = 7;
      this.input.addEventListener('keydown', event => { if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') { event.preventDefault(); this.save(); } });
      const actions = el(root, 'div', 'rp-actions');
      button(actions, LT("취소", "Cancel"), () => this.close());
      this.saveButton = button(actions, LT("저장", "Save"), () => this.save(), 'mod-cta');
      setTimeout(() => (this.focusField === 'text' ? this.textInput : this.input)?.focus(), 0);
    }
    async save() {
      if (this.saving) return;
      this.saving = true; this.saveButton.disabled = true;
      this.annotation.comment = this.input.value;
      if (this.textInput && this.textInput.value !== this.annotation.text) {
        this.annotation.originalText ??= this.annotation.text;
        this.annotation.text = this.textInput.value;
      }
      try {
        if (this.isNew) await this.plugin.store.add(this.docId, this.annotation);
        else await this.plugin.store.update(this.docId, this.annotation);
        this.close();
      } catch (e) { report(e); }
      finally { this.saving = false; this.saveButton.disabled = false; }
    }
    onClose() { this.contentEl.replaceChildren(); }
  }

  class ConfirmDeleteModal extends ResearchModal {
    constructor(plugin, docId, annotation) { super(plugin.app); Object.assign(this, { plugin, docId, annotation }); }
    onOpen() {
      el(this.contentEl, 'h2', '', LT("노트 삭제", "Delete note"));
      el(this.contentEl, 'p', '', LT("이 노트를 삭제할까요? 이미 노트에 복사한 내용은 유지됩니다.", "Delete this note? Copies already added to notes will remain."));
      button(this.contentEl, LT("취소", "Cancel"), () => this.close());
      button(this.contentEl, LT("삭제", "Delete"), async () => { await owner.store.delete(this.annotation.id); this.close(); }, 'mod-warning');
    }
  }

  function report(error) {
    console.error("[NoteNyang PDF]", error);
    new Notice("NoteNyang: " + (error?.message || error), 9000);
  }

  const PDF_DATA_FOLDER = STORAGE_DIRECTORY + "/pdf-reader";
  const PDF_LINK_ACTION = "notenyang-pdf";


  class NoteNyangPdfTools {
    constructor() {
      this.app = owner.app;
      this.settings = { ...C.DEFAULTS, ...owner.settings.pdfTools, dataFolder: PDF_DATA_FOLDER };
      if (!Object.hasOwn(C.COLORS, this.settings.defaultColor)) this.settings.defaultColor = "yellow";
      if (!Object.hasOwn(C.EXPORT_FORMATS, this.settings.copyFormat)) this.settings.copyFormat = "callout";
      this.isMobile = Boolean(Platform?.isMobile || Platform?.isMobileApp || this.app.isMobile);
      this.store = new AnnotationStore(this);
      this.undoHistory = new Actions.History(this);
      this.nativeReaders = new Set();
      this.nativeByHost = new WeakMap();
      this.nativePending = new WeakMap();
      this.nativeOpenJobs = new Map();
      this.outlineCache = new Map();
      this.dismissedReaders = new WeakMap();
      this.running = true;
    }

    async start() {
      this.readerReady = this.store.init().then(() => this.store.loadSaved());
      await this.readerReady;
      if (!this.running) return;
      const workspace = this.app.workspace;
      const doc = workspace.containerEl.ownerDocument;
      this.diagnostics = new Diagnostics.Recorder(this);
      this.unsubscribe = this.store.onChange(() => owner.refresh());
      const onVisibilityChange = () => {
        if (doc.hidden) this.flushEdits().catch(report);
      };
      const onClick = event => {
        if (!this.running || event.button !== 0 || event.defaultPrevented || event.altKey) return;
        const link = event.target.closest?.("a[href], [data-href]");
        const href = link?.getAttribute("data-href") || link?.getAttribute("href");
        if (!href?.startsWith("obsidian://" + PDF_LINK_ACTION + "?")) return;
        let url;
        try { url = new URL(href); } catch { return; }
        const { searchParams } = url;
        if (searchParams.get("vault") && searchParams.get("vault") !== this.app.vault.getName()) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        this.followLink(searchParams.get("doc"), searchParams.get("annotation"), searchParams.get("page")).catch(report);
      };
      doc.addEventListener("visibilitychange", onVisibilityChange);
      doc.addEventListener("click", onClick, true);
      this.removeDocumentEvents = () => {
        doc.removeEventListener("visibilitychange", onVisibilityChange);
        doc.removeEventListener("click", onClick, true);
      };
      owner.registerView(ANNOTATIONS, leaf => new LegacyPdfSidebar(leaf));
      owner.registerObsidianProtocolHandler(PDF_LINK_ACTION, ({ vault, doc, annotation, page }) => {
        if (vault && vault !== this.app.vault.getName()) return;
        return this.followLink(doc, annotation, page).catch(report);
      });
      owner.registerEvent(workspace.on("file-menu", (menu, file) => {
        if (!(file instanceof TFile) || file.extension.toLowerCase() !== "pdf") return;
        menu.addItem(item => item.setTitle(owner.t("pdfToolsOpen")).setIcon("book-open").onClick(() => this.openPdf(file).catch(report)));
      }));
      owner.registerEvent(workspace.on("active-leaf-change", leaf => this.trackLeaf(leaf)));
      owner.registerEvent(workspace.on("file-open", () => this.trackLeaf(workspace.activeLeaf)));
      owner.registerEvent(workspace.on("layout-change", () => this.scheduleScan()));
      owner.registerEvent(workspace.on("editor-drop", (event, editor) => this.handleDrop(event, editor)));
      owner.registerEvent(this.app.vault.on("rename", (file, path) => {
        this.store.renamed(file, path).catch(report);
      }));
      owner.registerEvent(this.app.vault.on("modify", file => {
        if (file.path.startsWith(PDF_DATA_FOLDER + "/") && file.extension === "json") {
          this.store.externalChange(file.path).catch(report);
        }
      }));
      workspace.onLayoutReady(() => this.scheduleScan());
      this.scheduleScan();
    }

    async waitForReader() {
      await this.readerReady;
      if (!this.running) throw new Error(LT("PDF 도구가 닫혔습니다.", "PDF tools have been closed."));
    }

    async saveData(update) {
      await owner.updateSettings(previous => {
        const settings = { ...this.settings, ...previous.pdfTools };
        const changes = typeof update === 'function' ? update(settings) : update;
        return { pdfTools: { ...settings, ...changes, dataFolder: PDF_DATA_FOLDER } };
      });
      Object.assign(this.settings, owner.settings.pdfTools);
      for (const reader of this.readers()) reader.copyFormatPicker?.refresh();
    }

    setCopyFormat(format) {
      if (!Object.hasOwn(C.EXPORT_FORMATS, format)) return Promise.resolve();
      return this.saveData({ copyFormat: format });
    }

    readers() {
      return [...this.nativeReaders].filter(reader => !reader.closed);
    }

    activeReader() {
      const host = this.app.workspace.activeLeaf?.view;
      return (host && this.nativeByHost.get(host)) || this.lastReader;
    }

    trackLeaf(leaf) {
      if (!this.running) return;
      const host = leaf?.view;
      if (host?.getViewType?.() !== "pdf" || !host.file) return;
      const reader = this.nativeByHost.get(host);
      if (reader?.docId && !reader.closed && reader.file === host.file) {
        this.lastReader = reader;
        this.publishPage(reader);
        return;
      }
      const dismissed = this.dismissedReaders.get(host);
      if (dismissed?.file === host.file && dismissed.pdf === Native.binding(host)?.pdf) return;
      if (owner.settings.autoPdfTools && !this.nativePending.has(host)) Native.attach(this, host, leaf, host.file).catch(report);
    }

    dismiss(reader) {
      this.dismissedReaders.set(reader.host, { file: reader.file, pdf: reader.pdf });
      return reader.onClose();
    }

    scheduleScan() {
      if (!this.running || this.scanFrame != null) return;
      const win = this.app.workspace.containerEl.ownerDocument.defaultView;
      this.scanFrame = win.requestAnimationFrame(() => {
        this.scanFrame = null;
        if (!this.running) return;
        for (const reader of this.readers()) {
          if (reader.leaf.view !== reader.host || !reader.holder.isConnected) reader.onClose().catch(report);
        }
        this.trackLeaf(this.app.workspace.activeLeaf);
      });
    }

    pickPdf() {
      const file = this.app.workspace.getActiveFile();
      if (file?.extension.toLowerCase() === "pdf") return this.openPdf(file);
      new FilePicker(this.app, "pdf", chosen => this.openPdf(chosen)).open();
    }

    async openPdf(file) {
      const view = await Native.open(this, file);
      this.dismissedReaders.delete(view.host);
      this.lastReader = view;
      owner.refresh();
      return view;
    }

    async followLink(docId, annotationId, page) {
      const view = await this.openAnnotation(docId, annotationId);
      if (!annotationId && /^[1-9]\d*$/.test(String(page))) {
        await view.ensureLayout();
        view.goToPage(Number(page));
      }
    }

    async flushEdits() {
      for (const ink of this.inkSessions || []) {
        ink.endActive();
        ink.endErase();
      }
      await Promise.all([...(this.inlineEditors || []), ...(this.inkSessions || [])].map(editor => editor.flush().catch(report)));
    }

    getAnnotation(id) {
      return this.store.noteViewsById.get(id);
    }

    async updateAnnotation(id, changes) {
      const item = this.getAnnotation(id);
      if (!item) throw new Error(LT("노트가 이미 삭제됐습니다.", "This note no longer exists."));
      await this.store.mutate(item.readerDocId, doc => {
        const annotation = doc.annotations.find(record => record.id === id);
        if (!annotation) throw new Error(LT("노트가 이미 삭제됐습니다.", "This note no longer exists."));
        if (typeof changes.body === "string") annotation.comment = changes.body;
        if (changes.status) annotation.status = changes.status;
        annotation.updatedAt = new Date().toISOString();
      });
      return this.getAnnotation(id);
    }

    deleteAnnotation(id) {
      return this.store.remove(this.getAnnotation(id).readerDocId, id);
    }

    async navigate(annotation) {
      await this.openAnnotation(annotation.readerDocId, annotation.id);
    }

    selectionForTarget(target) {
      const reader = target
        ? this.readers().find(item => item.nativeBinding.viewer.contains(target))
        : this.nativeByHost.get(this.app.workspace.activeLeaf?.view);
      return reader?.captureTextSelection();
    }

    clearSelection(docId) {
      for (const reader of this.readers()) {
        if (reader.docId === docId) reader.clearTextPreview(true);
      }
    }

    async saveReaderDraft(selection, comment, imageDataUrl) {
      const { docId, ...annotation } = selection;
      if (imageDataUrl) {
        if (!imageDataUrl.startsWith("data:image/png;base64,")) throw new Error("Invalid capture image.");
        const doc = this.store.get(docId);
        if (!doc) throw new Error("Capture PDF is no longer open.");
        if (!selection.image) {
          const bytes = await (await fetch(imageDataUrl)).arrayBuffer();
          selection.image = await owner.store.savePdfImage("capture", doc.path, annotation.anchors[0].page, bytes);
        }
        annotation.image = selection.image;
      }
      const record = await this.store.add(docId, { ...annotation, comment });
      return owner.store.get(annotation.id) || owner.store.get(record.annotations.find(item => item.conflictOf === annotation.id)?.id);
    }

    async showCurrentPanel(tab) {
      const file = this.app.workspace.getActiveFile();
      const reader = file?.extension.toLowerCase() === "pdf" ? await this.openPdf(file) : this.activeReader();
      if (!reader) {
        await this.pickPdf();
        return;
      }
      await this.showSidebar(tab);
    }

    async runTool(mode) {
      const file = this.app.workspace.getActiveFile();
      if (file?.extension.toLowerCase() === "pdf") await (await this.openPdf(file)).setMode(mode);
    }

    settingsUI(containerEl) {
      const { t } = owner;
      const configure = (key, value) => this.saveData({ [key]: value }).catch(report);
      new Setting(containerEl).setName(t("pdfToolsHeading")).setHeading();
      el(containerEl, "p", "setting-item-description", t("pdfToolsHelp"));
      new Setting(containerEl).setName(t("pdfToolsColor")).addDropdown(control => {
        for (const [id, color] of Object.entries(C.COLORS)) control.addOption(id, color.label);
        control.setValue(this.settings.defaultColor).onChange(value => configure("defaultColor", value));
      });
      new Setting(containerEl).setName(t("pdfToolsMobile")).addToggle(control =>
        control.setValue(this.settings.mobileSinglePage !== false).onChange(value => configure("mobileSinglePage", value))
      );
      new Setting(containerEl).setName(t("pdfToolsDiagnostics")).setDesc(t("pdfToolsDiagnosticsInfo")).addToggle(control =>
        control.setValue(this.settings.debugLogging === true).onChange(value => configure("debugLogging", value))
      );
    }

    redraw() {
      for (const reader of this.readers()) {
        for (const entry of reader.pages.values()) reader.drawAnnotations(entry);
      }
    }

    close() {
      this.running = false;
      this.removeDocumentEvents?.();
      this.unsubscribe?.();
      this.flushEdits().catch(report);
      this.outlineCache.clear();
      for (const reader of this.readers()) reader.onClose().catch(report);
      for (const leaf of this.app.workspace.getLeavesOfType(ANNOTATIONS)) leaf.detach();
    }

    nextUndoOrder(){return this.undoOrder=(this.undoOrder||0)+1;}
    async undoLast(reader=this.activeReader()){
      if(!reader?.docId||this.undoing)return false;
      this.undoing=true;
      try{
        for(const editor of this.inlineEditors||[])if(editor.docId===reader.docId)await editor.flush();
        const sessions=[...(this.inkSessions||[])].filter(s=>s.docId===reader.docId);
        for(const session of sessions){session.endActive();session.endErase();await session.flush();}
        await this.store.records.get(reader.docId)?.queue.catch(()=>{});
        const annotation=this.undoHistory.latest(reader.docId),session=sessions.filter(s=>s.history.length).sort((a,b)=>b.history.at(-1).order-a.history.at(-1).order)[0],ink=session?.history.at(-1);
        if(ink&&(!annotation||ink.order>annotation.order)){await session.undo();new Notice(LT("최근 필기 / 지우기를 취소했습니다.", "Undid the last ink or eraser action."));return true;}
        if(await this.undoHistory.undo(reader.docId)){reader.hideTooltip();new Notice(LT("최근 노트 작업을 취소했습니다.", "Undid the last note change."));return true;}
        new Notice(LT("이 PDF에서 취소할 작업이 없습니다.", "There is nothing to undo in this PDF."));return false;
      }finally{this.undoing=false;}
    }

    addExternalMenuItem(menu, file) { if (this.isMobile) return; menu.addItem(item => item.setTitle(LT("원본 PDF를 외부 앱으로 열기", "Open PDF in an external app")).setIcon('external-link').onClick(() => this.openExternal(file).catch(report))); }
    async openExternal(file) {
      if (this.isMobile) throw new Error(LT("외부 앱 열기는 PC에서 사용할 수 있습니다.", "Opening in an external app is available on desktop."));
      if (!(file instanceof TFile) || file.extension.toLowerCase() !== 'pdf') throw new Error(LT("PDF 파일을 찾을 수 없습니다.", "Could not find the PDF file."));
      const base = this.app.vault.adapter.getBasePath?.(); if (!base) throw new Error(LT("외부 앱 열기는 로컬 데스크톱 보관함에서 사용할 수 있습니다.", "Opening in an external app requires a local desktop vault."));
      const path = require('node:path'), absolute = path.resolve(base, file.path), relative = path.relative(base, absolute);
      if (relative.startsWith('..') || path.isAbsolute(relative)) throw new Error(LT("보관함 밖의 경로는 열 수 없습니다.", "The file must be inside the vault."));
      const error = await require('electron').shell.openPath(absolute); if (error) throw new Error(error);
    }
    async addPageNote(docId) {
      const reader = this.readerForDocument(docId); if (!reader?.pdf) throw new Error(LT("이 PDF를 먼저 열어 주세요.", "Open this PDF first."));
      const page = reader.pageNumber, pdfPage = await reader.pdf.getPage(page), box = pdfPage.view;
      const a = reader.annotation('note', [{ page, rects: [[box[0] + 24, box[3] - 25, box[0] + 25, box[3] - 24]] }]);
      await this.store.add(docId, a);
      await owner.activateAnnotation(a.id, { edit: true });
      return a;
    }
    readerForDocument(id) { const last = this.activeReader(); return last?.docId === id && !last.closed ? last : this.readers().find(view => view.docId === id && !view.isEmbedded); }
    publishPage(reader) {
      if (reader.isEmbedded || reader.isDiagnostic) return;
      for (const { view } of this.app.workspace.getLeavesOfType(NOTENYANG_VIEW_TYPE)) {
        if (this.activeReader() === reader) view.followPdfPage?.(reader);
        if (view.docId === reader.docId) view.updateOutlinePosition?.();
      }
    }

    async embeddedOutline(docId) {
      const document = this.store.get(docId), file = document && this.app.vault.getAbstractFileByPath(document.path);
      if (!(file instanceof TFile)) throw new Error(LT("목차를 읽을 PDF를 찾을 수 없습니다.", "Could not find the PDF to read its outline."));
      const key = `${docId}:${file.stat.mtime}:${file.stat.size}`;
      if (this.outlineCache.has(key)) return this.outlineCache.get(key);
      const pending = (async () => {
        const nativePdf = this.readers().find(reader => reader.docId === docId)?.pdf || (await this.openPdf(file)).pdf;
        const pdf = nativePdf;
        {
          const outline = await pdf.getOutline();
          const resolve = async (items, prefix = '') => {
            const result = [];
            for (let i = 0; i < (items || []).length; i++) {
              const item = items[i]; let dest = item.dest, page = null;
              try {
                if (typeof dest === 'string') dest = await pdf.getDestination(dest);
                if (Array.isArray(dest) && dest.length) { const index = typeof dest[0] === 'number' ? dest[0] : await pdf.getPageIndex(dest[0]); if (Number.isInteger(index) && index >= 0 && index < pdf.numPages) page = index + 1; }
              } catch (e) { console.warn(LT("[NoteNyang PDF] 목차 위치 해석 실패:", "[NoteNyang PDF] Could not resolve outline destination:"), item.title, e); }
              const id = `pdf-outline-${prefix}${i}`;
              result.push({ id, title: item.title || LT("(제목 없음)", "(Untitled)"), page, children: await resolve(item.items, `${prefix}${i}-`) });
            }
            return result;
          };
          return await resolve(outline);
        }
      })();
      this.outlineCache.set(key, pending);
      try { return await pending; } catch (e) { this.outlineCache.delete(key); throw e; }
    }

    async openAnnotation(docId, annotationId) {
      if (!/^doc-[a-f0-9]{16}$/.test(docId || '')) throw new Error(LT("노트 링크의 문서 정보가 올바르지 않습니다.", "The note link has an invalid document ID."));
      await this.flushEdits();
      let path = this.store.index.documents[docId]?.path || this.store.get(docId)?.path;
      let file = path && this.app.vault.getAbstractFileByPath(path);
      if (!(file instanceof TFile)) {
        // Sync can deliver the index after the plugin started or after a rename.
        const raw = JSON.parse(await this.app.vault.adapter.read(`${this.settings.dataFolder}/index.json`));
        path = raw.schema === 1 && raw.documents?.[docId]?.path;
        file = path && this.app.vault.getAbstractFileByPath(path);
        if (file instanceof TFile) this.store.index.documents[docId] = { path };
      }
      if (!(file instanceof TFile) || file.extension.toLowerCase() !== 'pdf') throw new Error(LT("원본 PDF가 이 기기에 없습니다. PDF 동기화가 완료되었는지 확인하세요.", "The source PDF is missing on this device. Check that it has synced."));
      const view = await this.openPdf(file);
      if (annotationId) {
        const legacy = owner.store.byId.get(annotationId);
        if (legacy?.sourcePath === file.path && legacy.anchor.kind === "pdf") {
          await view.ensureLayout();
          view.goToPage(legacy.anchor.page);
          await owner.activateAnnotation(legacy.id);
        } else {
          await view.goToAnnotation(annotationId);
        }
      }
      return view;
    }
    createSidebar(leaf) {
      return new AnnotationListView(leaf, this);
    }

    async migratePdfSidebar() {
      const workspace = this.app.workspace;
      for (const leaf of workspace.getLeavesOfType(ANNOTATIONS)) {
        if (workspace.getLeavesOfType(NOTENYANG_VIEW_TYPE).length) {
          leaf.detach();
          continue;
        }
        const saved = leaf.getViewState();
        await leaf.setViewState({ ...saved, type: NOTENYANG_VIEW_TYPE });
      }
    }

    documentId(path) {
      return Object.keys(this.store.index.documents).find(id => this.store.index.documents[id].path === path) || null;
    }

    async toggleList() {
      const sidebar = this.app.workspace.getLeavesOfType(NOTENYANG_VIEW_TYPE)[0];
      if (sidebar && (this.isMobile ? this.app.workspace.activeLeaf === sidebar : owner.areMarginsSuppressed()) && sidebar.view.tab === "annotations") {
        sidebar.detach();
      } else {
        await this.showSidebar("annotations");
      }
    }

    async showSidebar(tab = "annotations") {
      const reader = this.activeReader();
      if (reader?.mode === "draw") await reader.setMode("read");
      const view = await owner.openSidebar();
      if (!view) return;
      if (tab === "outline" && reader?.file?.path && view.sourcePath?.() !== reader.file.path) {
        view.setScope("current");
      }
      await view.setTab?.(tab);
      return view;
    }

    annotationSource(annotation) {
      const vault = this.app.vault.getName();
      if (annotation.readerDocId) {
        const doc = this.store.get(annotation.readerDocId);
        const raw = doc?.annotations.find(record => record.id === annotation.id);
        if (raw) return C.exportAnnotations(doc, [raw], vault, "link");
      }
      const uri = "obsidian://" + ANNOTATION_URI_ACTION + "?vault=" + encodeURIComponent(vault) + "&id=" + encodeURIComponent(annotation.id);
      return "[" + LT("노트 위치", "Note location") + "](" + uri + ")";
    }

    formatBatch(annotations, format) {
      if (format === "table") {
        const rows = [
          LT("| 문서 | 위치 | 원문 / 캡처 | 메모 | 출처 |", "| Document | Location | Text / capture | Note | Source |"),
          "| --- | --- | --- | --- | --- |"
        ];
        for (const annotation of annotations) {
          const { anchor } = annotation;
          const location = anchor.kind === "pdf" && anchor.printPage && anchor.printPage !== String(anchor.page)
            ? "p. " + anchor.printPage + " · PDF " + anchor.page : formatAnchorLocation(anchor, owner.t);
          const text = C.tableEscape(anchor.quote?.exact);
          const image = anchor.imagePath && "[" + LT("이미지", "Image") + "](" + C.markdownLinkTarget(anchor.imagePath) + ")";
          const content = [image, text].filter(Boolean).join("<br>");
          rows.push("| " + [C.tableEscape(annotation.sourcePath), C.tableEscape(location), content, C.tableEscape(annotation.body), this.annotationSource(annotation)].join(" | ") + " |");
        }
        return rows.join("\n");
      }
      return annotations.map(annotation => {
        if (annotation.readerDocId) {
          const doc = this.store.get(annotation.readerDocId);
          const raw = doc?.annotations.find(record => record.id === annotation.id);
          if (raw) return C.exportAnnotations(doc, [raw], this.app.vault.getName(), format);
        }
        const { anchor } = annotation;
        const text = anchor.quote?.exact;
        const source = this.annotationSource(annotation);
        if (format === "link") return source;
        const body = [
          text,
          anchor.imagePath && "![](" + C.markdownLinkTarget(anchor.imagePath) + ")",
          annotation.body && LT("**메모:** ", "**Note:** ") + annotation.body,
          LT("**출처:** ", "**Source:** ") + source
        ].filter(Boolean).join("\n\n");
        if (format === "text") return body;
        const quote = body.split("\n").map(line => line ? "> " + line : ">").join("\n");
        if (format === "quote") return quote;
        const name = annotation.sourcePath.split("/").at(-1).replace(/[\r\n]/g, " ");
        return "> [!quote] " + name + " · " + formatAnchorLocation(anchor, owner.t) + "\n" + quote;
      }).join("\n\n");
    }

    copyBatch(annotations, format = this.settings.copyFormat) {
      return this.copyMarkdown(this.formatBatch(annotations, format), annotations.length, format);
    }

    sendBatch(annotations, format = "callout") {
      this.sendMarkdownToNote(this.formatBatch(annotations, format), annotations.length);
    }

    copy(docId, annotations, format = this.settings.copyFormat) {
      const markdown = annotations.length ? C.exportAnnotations(this.store.get(docId), annotations, this.app.vault.getName(), format) : "";
      return this.copyMarkdown(markdown, annotations.length, format);
    }

    async copyMarkdown(markdown, count, format) {
      if (!count) {
        new Notice(LT("복사할 노트가 없습니다.", "There are no notes to copy."));
        return;
      }
      try { await this.app.workspace.containerEl.ownerDocument.defaultView.navigator.clipboard.writeText(markdown); }
      catch {
        new CopyTextModal(this, markdown, () => this.sendMarkdownToNote(markdown, count)).open();
        return;
      }
      new Notice(LT("노트 ", "Notes ") + count + LT("개 복사 · ", " copied · ") + C.EXPORT_FORMATS[format]);
    }

    sendToNote(docId, annotations, format = "callout") {
      const markdown = annotations.length ? C.exportAnnotations(this.store.get(docId), annotations, this.app.vault.getName(), format) : "";
      this.sendMarkdownToNote(markdown, annotations.length);
    }

    sendMarkdownToNote(markdown, count) {
      if (!count) {
        new Notice(LT("보낼 노트가 없습니다.", "There are no notes to send."));
        return;
      }
      new FilePicker(this.app, "md", async file => {
        await this.app.vault.process(file, old => old + (old.endsWith("\n") ? "\n" : "\n\n") + markdown + "\n");
        new Notice(file.basename + LT("에 노트 ", ": ") + count + LT("개를 추가했습니다.", " notes added."));
      }).open();
    }


    startDrag(event, docId, annotation, format = this.settings.copyFormat) {
      if (!event.dataTransfer) return;
      event.dataTransfer.effectAllowed = 'copy';
      event.dataTransfer.setData(MIME, JSON.stringify({ docId, annId: annotation.id, format }));
      event.dataTransfer.setData('text/plain', C.exportAnnotations(this.store.get(docId), [annotation], this.app.vault.getName(), format));
    }
    handleDrop(event, editor) {
      if (event.defaultPrevented || !event.dataTransfer?.types.includes(MIME)) return;
      try {
        const payload = JSON.parse(event.dataTransfer.getData(MIME)), doc = this.store.get(payload.docId);
        const annotation = this.store.withLegacy(doc)?.annotations.find(a => a.id === payload.annId);
        if (!annotation) return;
        const format = C.EXPORT_FORMATS[payload.format] ? payload.format : this.settings.copyFormat;
        const text = `${C.exportAnnotations(doc, [annotation], this.app.vault.getName(), format)}\n\n`;
        // CodeMirror's coordinate API places the insertion at the actual drop point.
        const cm = editor.cm;
        const offset = cm?.posAtCoords?.({ x: event.clientX, y: event.clientY });
        if (offset == null) return; // Native text/plain drop remains available.
        event.preventDefault();
        cm.dispatch({ changes: { from: offset, insert: text }, selection: { anchor: offset + text.length } });
        cm.focus();
      } catch (e) { report(e); }
    }
  }

  class AnnotationListView extends NoteNyangSidebarView {
    constructor(leaf, pdfTools) {
      super(leaf, owner);
      this.pdfTools = pdfTools;
      this.docId = null;
      this.filters = { order: "created", kind: "", color: "" };
      this.selected = new Set();
      this.heightCache = new Map();
      this.listRevision = 0;
      this.tab = "annotations";
      this.outlineGeneration = 0;
      this.collapsedOutline = new Set();
    }

    getState() {
      return { scope: this.viewScope, tab: this.tab, status: this.status, order: this.filters.order, followVersion: 1, lastNoteView: this.lastNoteView };
    }

    async setState(state, result) {
      const scope = typeof state.scope === "string" ? state.scope : "current";
      this.viewScope = scope === "vault" || (state.followVersion === 1 && scope.startsWith("file:")) ? scope : "current";
      this.lastNoteView = typeof state.lastNoteView?.path === "string" ? state.lastNoteView : null;
      this.status = ["open", "resolved", "orphaned", "all"].includes(state.status) ? state.status : "open";
      this.filters.order = ["created", "updated", "page"].includes(state.order) ? state.order : "created";
      this.tab = state.tab === "outline" ? "outline" : "annotations";
      await super.setState(state, result);
      this.refresh();
    }

    async onOpen() {
      this.contentEl.replaceChildren();
      this.contentEl.classList.add("rp-annotations", "notenyang-unified");
      this.contentEl.classList.toggle("rp-mobile", this.pdfTools.isMobile);
      const header = el(this.contentEl, "div", "rp-list-header");
      if (this.pdfTools.isMobile) {
        button(header, LT("← 문서로 돌아가기", "← Back to document"), () => this.revealDocument(), "rp-list-back");
      }
      const top = el(header, "div", "rp-list-top");
      const tabs = el(top, "div", "rp-panel-tabs");
      tabs.setAttribute("role", "tablist");
      tabs.setAttribute("aria-label", LT("사이드바 탭", "Sidebar tabs"));
      this.tabButtons = new Map();
      for (const [id, name] of [["annotations", LT("노트", "Notes")], ["outline", LT("목차", "Outline")]]) {
        const node = button(tabs, name, () => this.setTab(id));
        node.setAttribute("role", "tab");
        this.tabButtons.set(id, node);
      }
      this.scopeButton = button(top, "", () => this.showScopeMenu(), "rp-scope-button");
      this.scopeButton.setAttribute("aria-haspopup", "menu");
      this.scopeLabel = el(this.scopeButton, "span", "rp-scope-label");
      setIcon(el(this.scopeButton, "span", "rp-scope-chevron"), "chevron-down");
      this.noteButton = iconButton(top, "message-square-plus", owner.t("addAnnotation"), () => this.addAnnotation(), "rp-sidebar-action");
      this.filterControls = el(header, "div", "rp-sidebar-tools");
      this.searchEl = this.createSearch(this.filterControls);
      this.searchEl.className = "rp-search";
      this.searchEl.placeholder = owner.t("searchPlaceholder");
      this.searchEl.setAttribute("aria-label", owner.t("search"));
      this.filterButton = iconButton(this.filterControls, "list-filter", LT("필터와 정렬", "Filter and sort"), () => this.showFilterMenu(), "rp-sidebar-action");
      this.copyButton = iconButton(this.filterControls, "download", LT("내보내기", "Export"), () => this.copyMenu(), "rp-sidebar-action");
      this.filterButton.setAttribute("aria-haspopup", "menu");
      this.copyButton.setAttribute("aria-haspopup", "menu");
      this.countEl = el(header, "div", "rp-list-count");
      this.draftEl = el(this.contentEl, "div", "rp-unified-draft");
      this.scroller = el(this.contentEl, "div", "rp-list-scroller");
      this.scroller.tabIndex = 0;
      this.spacer = el(this.scroller, "div", "rp-list-spacer");
      this.rows = el(this.spacer, "div", "rp-list-rows");
      this.outlinePane = el(this.contentEl, "div", "rp-outline-pane");
      this.scroller.addEventListener("scroll", () => this.renderRows(), { passive: true });

      const ResizeObserverClass = this.contentEl.ownerDocument.defaultView.ResizeObserver;
      this.resizeObserver = new ResizeObserverClass(() => {
        if (this.scroller.clientWidth !== this.listWidth) this.rebuildHeights();
        this.renderRows();
      });
      this.resizeObserver.observe(this.scroller);
      this.cardObserver = new ResizeObserverClass(entries => this.measureCards(entries));
      this.unsubscribe = this.pdfTools.store.onChange(id => {
        if (!this.docId || this.docId === id) this.refresh();
      });
      this.refresh();
      owner.refreshContext();
    }

    saveState() {
      this.app.workspace.requestSaveLayout?.();
    }

    sourcePath() {
      if (this.viewScope === "vault") return null;
      if (this.viewScope.startsWith("file:")) return this.viewScope.slice(5);
      const file = this.app.workspace.getActiveFile();
      if (file && ["md", "pdf"].includes(file.extension.toLowerCase())) this.currentPath = file.path;
      return this.currentPath;
    }

    sourceFile() {
      const path = this.sourcePath();
      return path && this.app.vault.getAbstractFileByPath(path);
    }

    setScope(scope) {
      if (this.viewScope === scope) return;
      this.viewScope = scope;
      this.refresh(true);
      this.saveState();
    }

    showToolbarMenu(menu, control) {
      const { left, right, bottom } = control.getBoundingClientRect();
      menu.showAtPosition({ x: left, y: bottom, width: right - left });
    }

    showScopeMenu() {
      const menu = new Menu().setUseNativeMenu(false);
      const pinned = this.viewScope.startsWith("file:");
      const path = this.sourcePath();
      const addScope = (target, value, label) => target.addItem(item => item
        .setTitle(label)
        .setChecked(this.viewScope === value)
        .onClick(() => this.setScope(value))
      );
      addScope(menu, "current", owner.t("currentFile"));
      addScope(menu, "vault", owner.t("entireVault"));
      if (path || pinned) {
        menu.addSeparator();
        menu.addItem(item => item
          .setTitle(pinned ? LT("문서 고정 해제", "Unpin document") : LT("현재 문서 고정", "Pin current document"))
          .setIcon("pin")
          .onClick(() => this.setScope(pinned ? "current" : "file:" + path))
        );
      }

      const paths = [...new Set([...owner.store.all().map(note => note.sourcePath), path].filter(Boolean))]
        .sort((a, b) => a.localeCompare(b));
      if (paths.length) menu.addItem(item => {
        item.setTitle(LT("문서 선택", "Choose document")).setIcon("files");
        const submenu = item.setSubmenu();
        const counts = new Map();
        for (const source of paths) {
          const name = source.split("/").at(-1);
          counts.set(name, (counts.get(name) || 0) + 1);
        }
        for (const source of paths) {
          const name = source.split("/").at(-1);
          addScope(submenu, "file:" + source, counts.get(name) > 1 ? source : name);
        }
      });
      this.showToolbarMenu(menu, this.scopeButton);
    }

    showFilterMenu() {
      const menu = new Menu().setUseNativeMenu(false);
      const group = (title, icon, options, selected, selectValue) => menu.addItem(item => {
        const active = options.find(([value]) => value === selected);
        item.setTitle(active ? title + " · " + active[1] : title).setIcon(icon);
        const submenu = item.setSubmenu();
        for (const [value, label] of options) {
          submenu.addItem(option => option.setTitle(label).setChecked(value === selected).onClick(() => {
            selectValue(value);
            this.refresh(true);
            this.saveState();
          }));
        }
      });
      const pdf = this.viewScope === "current" ? this.displayNoteView?.path?.toLowerCase().endsWith(".pdf") : this.sourceFile()?.extension === "pdf";
      group(LT("상태", "Status"), "circle-check",
        ["open", "resolved", "orphaned", "all"].map(value => [value, owner.t(value)]), this.status, value => { this.status = value; });
      const types = [["", LT("모든 종류", "All types")], ["document", owner.t("document")]];
      if (!pdf) types.push(["markdown", "Markdown"]);
      if (pdf || this.viewScope === "vault") types.push(...Object.entries(C.KINDS));
      group(LT("종류", "Type"), "layers", types, this.filters.kind, value => { this.filters.kind = value; });
      {
        group(LT("색상", "Color"), "palette",
          [["", LT("모든 색상", "All colors")], ...Object.entries(C.COLORS).map(([id, color]) => [id, color.icon + " " + color.label])],
          this.filters.color, value => { this.filters.color = value; });
      }
      const sort = [["created", LT("최근 작성순", "Newest first")], ["updated", LT("최근 수정순", "Last modified")]];
      if (pdf) sort.push(["page", LT("페이지순", "Page order")]);
      const order = !pdf && this.filters.order === "page" ? "created" : this.filters.order;
      group(LT("정렬", "Sort"), "arrow-down-wide-narrow", sort, order, value => { this.filters.order = value; });
      menu.addSeparator();
      menu.addItem(item => item.setTitle(LT("필터 초기화", "Reset filters")).setIcon("rotate-ccw").onClick(() => {
        this.status = "open";
        this.filters = { order: "created", kind: "", color: "" };
        this.refresh(true);
        this.saveState();
      }));
      this.showToolbarMenu(menu, this.filterButton);
    }


    async revealDocument() {
      const file = this.sourceFile() || this.app.workspace.getActiveFile() || this.app.vault.getAbstractFileByPath(this.currentPath || "");
      if (!(file instanceof TFile)) return;
      const leaf = this.app.workspace.getLeavesOfType(file.extension === "pdf" ? "pdf" : "markdown")
        .find(item => item.view.file?.path === file.path);
      if (leaf) await this.app.workspace.revealLeaf(leaf);
      else if (file.extension === "pdf") await this.pdfTools.openPdf(file);
      else await this.app.workspace.getLeaf("tab").openFile(file, { active: true });
    }

    async addAnnotation() {
      const file = this.sourceFile() || this.app.workspace.getActiveFile();
      if (!(file instanceof TFile)) return;
      if (file.extension === "pdf") {
        const reader = await this.pdfTools.openPdf(file);
        await this.pdfTools.addPageNote(reader.docId);
      } else if (file.extension === "md") {
        this.beginCreate({ sourcePath: file.path, sourceType: "markdown", status: "open", body: "", anchor: { kind: "document" } });
      }
    }

    beginCreate(input, imageDataUrl) {
      if (this.tab === "outline") void this.setTab("annotations");
      super.beginCreate(input, imageDataUrl);
    }

    render() { this.refresh(); }
    renderResults() { this.refresh(); }

    kind(annotation) {
      if (annotation.anchor.kind !== "pdf") return annotation.anchor.kind;
      return annotation.anchor.readerKind || (annotation.anchor.imagePath ? "capture" : "highlight");
    }

    location(annotation) {
      const anchor = annotation.anchor;
      if (anchor.kind === "pdf" && anchor.printPage && anchor.printPage !== String(anchor.page)) {
        return "p. " + anchor.printPage + " · PDF " + anchor.page;
      }
      return formatAnchorLocation(anchor, owner.t);
    }

    cardData(annotation) {
      return { ...annotation, text: annotation.anchor.quote?.exact || "", comment: annotation.body, image: annotation.anchor.imagePath };
    }

    pageForPath(path) {
      const reader = this.pdfTools.activeReader();
      const host = this.app.workspace.activeLeaf?.view;
      const page = reader?.file?.path === path && !reader.closed ? reader.pageNumber
        : host?.file?.path === path ? Native.binding(host)?.engine.currentPageNumber : null;
      return Number.isInteger(page) ? page : null;
    }

    recordsForTarget(target) {
      if (!target?.path) return [];
      const records = owner.store.forSource(target.path);
      if (!target.page) return records;
      const pageNotes = records.filter(note => note.anchor.kind === "pdf" &&
        (note.anchor.readerPages?.includes(target.page) || note.anchor.page === target.page));
      return [...pageNotes, ...records.filter(note => note.anchor.kind === "document")];
    }

    notesForCurrentView(path, pdf) {
      const target = this.revealTarget || { path, page: pdf ? this.pageForPath(path) : null };
      const retained = this.recordsForTarget(this.lastNoteView);
      const awaitingPage = pdf && !target.page && !this.revealTarget && owner.settings.autoPdfTools;
      const current = awaitingPage && retained.length ? [] : this.recordsForTarget(target);
      if (current.length) {
        this.lastNoteView = target;
        this.displayNoteView = target;
        return current;
      }
      if (retained.length) {
        this.displayNoteView = this.lastNoteView;
        return retained;
      }
      // If the sidebar has yet to show a note, expose the current document's
      // list even when the first PDF page has no notes of its own.
      const initial = this.recordsForTarget({ path, page: null });
      this.displayNoteView = { path, page: null };
      if (initial.length) this.lastNoteView = this.displayNoteView;
      return initial;
    }

    followPdfPage(reader) {
      if (this.viewScope !== "current" || this.sourcePath() !== reader.file.path) return;
      const key = reader.file.path + "#" + reader.pageNumber;
      if (key === this.observedPage) return;
      this.observedPage = key;
      this.refresh();
    }

    refresh(resetScroll = false) {
      if (!this.scroller) return;
      const path = this.sourcePath();
      const file = this.sourceFile();
      const docId = file?.extension === "pdf" ? this.pdfTools.documentId(path) : null;
      const pdf = file?.extension === "pdf";
      const hasOutline = pdf || file?.extension === "md";
      if (this.outlinePath !== path) {
        this.outlinePath = path;
        this.collapsedOutline.clear();
      }
      const source = this.viewScope === "vault" ? owner.store.all()
        : this.viewScope === "current" ? this.notesForCurrentView(path, pdf)
          : path ? owner.store.forSource(path) : [];
      const shown = this.viewScope === "current" ? this.displayNoteView : { path };
      const displayKey = JSON.stringify([this.viewScope, shown?.path, shown?.page]);
      if (displayKey !== this.displayKey) {
        this.displayKey = displayKey;
        this.selected.clear();
        resetScroll = true;
      }
      const outlineChanged = docId !== this.docId;
      this.docId = docId;
      if (!hasOutline && this.tab === "outline") this.tab = "annotations";
      this.contentEl.classList.toggle("notenyang-force-word-breaks", owner.settings.forceLongWordBreaks);

      const pinned = this.viewScope.startsWith("file:");
      const scopeName = pinned ? (path?.split("/").at(-1) || owner.t("currentFile"))
        : owner.t(this.viewScope === "vault" ? "entireVault" : "currentFile");
      const currentPage = pdf ? this.pageForPath(path) : null;
      const retained = this.viewScope === "current" && !this.revealTarget && shown?.path && (shown.path !== path || shown.page && shown.page !== currentPage);
      const label = retained ? LT("이전 노트", "Previous notes") : scopeName;
      this.scopeLabel.textContent = label;
      this.scopeButton.title = retained ? [label, shown.path.split("/").at(-1), shown.page && owner.t("page", { number: shown.page })].filter(Boolean).join(" · ") : pinned ? path : scopeName;
      this.scopeButton.setAttribute("aria-label", owner.t("chooseScope", { scope: label }));
      this.noteButton.disabled = !file && !this.app.workspace.getActiveFile();
      this.tabButtons.get("outline").hidden = !hasOutline;

      const showingPdf = shown?.path?.toLowerCase().endsWith(".pdf") || this.viewScope === "vault";
      this.scopeItems = source.map(annotation => this.cardData(annotation));
      const normalize = text => text.normalize("NFC").toLocaleLowerCase();
      const query = normalize(this.query.trim());
      const order = this.filters.order === "page" && !showingPdf ? "created" : this.filters.order;
      const narrowed = this.status !== "open" || !!this.filters.kind || !!this.filters.color || order !== "created";
      this.filterButton.setAttribute("aria-pressed", String(narrowed));
      this.items = this.scopeItems.filter(annotation =>
        (this.status === "all" || annotation.status === this.status) &&
        (!this.filters.kind || this.kind(annotation) === this.filters.kind) &&
        (!this.filters.color || (annotation.anchor.readerColor ?? annotation.anchor.markdownColor) === this.filters.color) &&
        (!query || normalize([annotation.text, annotation.comment, annotation.sourcePath, this.location(annotation)].join("\n")).includes(query))
      ).sort((a, b) => {
        if (order === "page") {
          const page = (a.anchor.page ?? 0) - (b.anchor.page ?? 0);
          if (page) return page;
        }
        const field = order === "updated" ? "updatedAt" : "createdAt";
        return (Date.parse(b[field]) || 0) - (Date.parse(a[field]) || 0) || a.id.localeCompare(b.id);
      });
      const existing = new Set(this.scopeItems.map(item => item.id));
      for (const id of this.selected) if (!existing.has(id)) this.selected.delete(id);
      this.updateCount();
      if (this.renderedDraft !== this.draft) {
        this.renderedDraft = this.draft;
        this.draftEl.replaceChildren();
        if (this.draft) this.renderDraft(this.draftEl);
      }
      this.draftEl.hidden = !this.draft;
      this.rebuildHeights();
      if (resetScroll) this.scroller.scrollTop = 0;
      this.applyTab();
      this.renderRows();
      const outline = pdf ? this.pdfTools.store.get(this.docId)?.outline : file && markdownHeadings(this.app, file);
      const outlineData = JSON.stringify([path, outline]);
      const customChanged = this.outlineData !== outlineData;
      this.outlineData = outlineData;
      if (this.tab === "outline" && (outlineChanged || customChanged || !this.outlinePane.firstChild)) this.loadOutline().catch(report);
      else this.updateOutlinePosition();
    }

    updateCount() {
      const selected = this.items.filter(item => this.selected.has(item.id)).length;
      const visible = this.items.length;
      this.countEl.textContent = visible === this.scopeItems.length
        ? LT("노트 ", "Notes: ") + visible
        : LT("노트 ", "Notes: ") + visible + " / " + this.scopeItems.length;
      if (selected) this.countEl.textContent += " · " + selected + LT("개 선택", " selected");
    }

    applyTab() {
      for (const [id, node] of this.tabButtons) {
        node.classList.toggle("is-active", id === this.tab);
        node.setAttribute("aria-selected", String(id === this.tab));
      }
      const outline = this.tab === "outline";
      this.filterControls.hidden = this.scroller.hidden = outline;
      this.countEl.hidden = outline || !this.scopeItems.length;
      this.outlinePane.hidden = !outline;
    }

    async setTab(tab) {
      const extension = this.sourceFile()?.extension;
      this.tab = tab === "outline" && ["pdf", "md"].includes(extension) ? "outline" : "annotations";
      if (!this.tabButtons) return;
      this.applyTab();
      if (this.tab === "outline") await this.loadOutline();
      else { ++this.outlineGeneration; this.renderRows(); }
      this.saveState();
    }

    setActiveAnnotation(id, { edit = false } = {}) {
      if (!id) return;
      this.activeId = id;
      const card = this.focusAnnotation(id);
      if (edit) card?._comment.startEditing({ focus: false });
    }

    focusAnnotation(id) {
      const annotation = owner.store.get(id);
      if (!annotation || !this.scroller) return;
      if (this.viewScope.startsWith("file:") && this.sourcePath() !== annotation.sourcePath) this.viewScope = "current";
      this.tab = "annotations";
      this.refresh();
      const alreadyInView = this.scopeItems.some(item => item.id === id);
      if (!alreadyInView && this.viewScope === "current") this.revealTarget = { path: annotation.sourcePath, page: annotation.anchor.page };
      if (!this.items.some(item => item.id === id)) {
        this.status = "all";
        this.filters.kind = this.filters.color = this.query = "";
        this.searchEl.value = "";
        try { this.refresh(); } finally { this.revealTarget = null; }
      }
      const index = this.items.findIndex(item => item.id === id);
      if (index < 0) return;
      const top = this.heightIndex.prefix(index);
      const bottom = this.heightIndex.prefix(index + 1);
      if (top < this.scroller.scrollTop || bottom > this.scroller.scrollTop + this.scroller.clientHeight) this.scroller.scrollTop = top;
      this.renderRows();
      return [...this.rows.children].find(card => card.dataset.annotationId === id);
    }

    async loadOutline() {
      if (!this.outlinePane || this.tab !== 'outline') return;
      const generation = ++this.outlineGeneration, id = this.docId;
      this.outlinePane.replaceChildren();
      this.currentPageEl = null;
      const file = this.sourceFile();
      if (file?.extension === "md") {
        this.renderMarkdownOutline(file);
        return;
      }
      const doc = this.pdfTools.store.get(id);
      if (!doc) { el(this.outlinePane, 'p', 'rp-empty', LT("PDF를 열면 목차를 볼 수 있습니다.", "Open a PDF to view its outline.")); return; }
      const controls = el(this.outlinePane, 'div', 'rp-outline-controls');
      this.currentPageEl = el(controls, 'div', 'rp-outline-current');
      this.addOutlineButton = button(controls, LT("현재 페이지에 개요 추가", "Add current page to outline"), () => {
        const reader = this.pdfTools.readerForDocument(id); if (!reader?.pdf) throw new Error(LT("이 PDF를 먼저 열어 주세요.", "Open this PDF first."));
        new OutlineEntryModal(this.pdfTools, id, reader.pageNumber).open();
      });
      const nativeSection = el(this.outlinePane, 'section', 'rp-outline-section');
      el(nativeSection, 'h3', '', LT("PDF 내장 목차", "Embedded PDF outline")); const loading = el(nativeSection, 'p', 'rp-empty', LT("목차 불러오는 중…", "Loading outline…"));
      const customSection = el(this.outlinePane, 'section', 'rp-outline-section');
      el(customSection, 'h3', '', LT("사용자 개요", "Custom outline"));
      const custom = C.outlineTree(doc.outline || []);
      if (custom.length) this.renderOutlineTree(custom, customSection, true);
      else el(customSection, 'p', 'rp-empty', LT("현재 페이지를 개요에 추가해 나만의 목차를 만들 수 있습니다.", "Add the current page to build a custom outline."));
      this.updateOutlinePosition();
      try {
        const embedded = await this.pdfTools.embeddedOutline(id);
        if (generation !== this.outlineGeneration || this.tab !== 'outline' || id !== this.docId) return;
        loading.remove();
        if (embedded.length) this.renderOutlineTree(embedded, nativeSection, false);
        else el(nativeSection, 'p', 'rp-empty', LT("이 PDF에는 내장 목차가 없습니다. 사용자 개요를 추가할 수 있습니다.", "This PDF has no embedded outline. You can add a custom one."));
        this.updateOutlinePosition();
      } catch (error) { if (generation === this.outlineGeneration) loading.textContent = `${LT("목차를 읽지 못했습니다: ", "Could not read the outline: ")}${error.message}`; }
    }
    renderMarkdownOutline(file) {
      const headings = markdownHeadings(this.app, file);
      if (!headings.length) {
        el(this.outlinePane, "p", "rp-empty", LT("이 노트에 제목이 없습니다.", "This note has no headings."));
        return;
      }
      const list = el(this.outlinePane, "ul", "rp-outline-tree");
      const minimum = Math.min(...headings.map(heading => heading.level));
      for (const heading of headings) {
        const row = el(list, "li", "rp-outline-row");
        const link = button(row, heading.heading, () => openMarkdownHeading(this.app, file, heading, this.markdownOutlineLeaf), "rp-outline-link");
        link.style.paddingInlineStart = (6 + (heading.level - minimum) * 12) + "px";
      }
    }

    renderOutlineTree(items, parent, custom) {
      const list = el(parent, 'ul', 'rp-outline-tree');
      for (const item of items) {
        const li = el(list, 'li'); let rowParent = li;
        if (item.children?.length) {
          const details = el(li, 'details'); details.open = !this.collapsedOutline.has(item.id);
          details.addEventListener('toggle', () => { if (details.open) this.collapsedOutline.delete(item.id); else this.collapsedOutline.add(item.id); });
          rowParent = el(details, 'summary'); li.childContainer = details;
        }
        const row = el(rowParent, 'div', 'rp-outline-row');
        const link = button(row, '', async () => {
          const doc = this.pdfTools.store.get(this.docId), file = doc && this.app.vault.getAbstractFileByPath(doc.path);
          if (!(file instanceof TFile) || !item.page) return;
          const reader = await this.pdfTools.openPdf(file);
          if (item.page > reader.pdf.numPages) throw new Error(LT("PDF 페이지 구성이 변경되어 이 개요 위치를 찾을 수 없습니다.", "The PDF page layout changed. This outline destination could not be found."));
          reader.goToPage(item.page);
        }, 'rp-outline-link');
        el(link, 'span', 'rp-outline-title', item.title);
        if (item.page) { link.dataset.outlinePage = String(item.page); el(link, 'span', 'rp-outline-page', `PDF ${item.page}`); }
        else { link.disabled = true; link.title = LT("이 항목에는 PDF 페이지 위치가 없습니다.", "This entry has no PDF page destination."); }
        if (custom) {
          const tools = el(row, 'div', 'rp-card-tools');
          iconButton(tools, 'pencil', LT("개요 수정", "Edit outline item"), () => new OutlineEntryModal(this.pdfTools, this.docId, item.page, item).open());
          iconButton(tools, 'trash-2', LT("개요 삭제", "Delete outline item"), () => new ConfirmOutlineDeleteModal(this.pdfTools, this.docId, item).open(), 'rp-delete-button');
        }
        if (item.children?.length) this.renderOutlineTree(item.children, li.childContainer, custom);
      }
    }
    updateOutlinePosition() {
      const reader = this.pdfTools.readerForDocument(this.docId), page = reader?.pageNumber;
      if (this.tab !== 'outline' || !this.currentPageEl) return;
      this.currentPageEl.textContent = reader?.pdf ? `${LT("현재 PDF ", "Current PDF page ")}${page}${LT("쪽 · p.", " · p.")}${reader.displayPage(page)}` : LT("해당 PDF를 열면 현재 페이지에 개요를 추가할 수 있습니다.", "Open the PDF to add its current page to the outline.");
      this.addOutlineButton.disabled = !reader?.pdf;
      const links = [...this.outlinePane.querySelectorAll('[data-outline-page]')];
      const current = Math.max(0, ...links.map(node => Number(node.dataset.outlinePage)).filter(value => value <= (page || 0)));
      for (const node of links) { const active = Number(node.dataset.outlinePage) === current; node.classList.toggle('is-current', active); if (active) node.setAttribute('aria-current', 'location'); else node.removeAttribute('aria-current'); }
    }
    rebuildHeights() {
      this.listWidth = this.scroller.clientWidth;
      const chars = Math.max(12, Math.floor((this.listWidth - 46) / 8));
      const lines = text => String(text || '').split('\n').reduce((sum, line) => sum + Math.max(1, Math.ceil(line.length / chars)), 0);
      this.heightIndex = new C.HeightIndex((this.items || []).map(a => {
        const key = `${a.updatedAt}:${a.text}:${a.comment}:${a.image || ''}`, cached = this.heightCache.get(a.id);
        return cached?.width === this.listWidth && cached.key === key ? cached.height : 68 + (a.text ? lines(a.text) * 18 : 0) + lines(a.comment) * 18 + (a.image ? 107 : 0);
      }));
      this.listRevision++; this.spacer.style.height = `${this.heightIndex.total}px`;
    }
    measureCards(entries) {
      if (!this.heightIndex || !this.items?.length) return;
      const anchor = this.heightIndex.indexAt(this.scroller.scrollTop), offset = this.scroller.scrollTop - this.heightIndex.prefix(anchor);
      let changed = false;
      for (const { target } of entries) {
        const index = Number(target.dataset.rowIndex), annotation = this.items[index];
        if (!target.isConnected || annotation?.id !== target.dataset.annotationId) continue;
        const height = target.getBoundingClientRect().height + 10;
        if (height <= 10 || Math.abs(height - this.heightIndex.heights[index]) < .5) continue;
        this.heightCache.set(annotation.id, { width: this.listWidth, key: `${annotation.updatedAt}:${annotation.text}:${annotation.comment}:${annotation.image || ''}`, height });
        this.heightIndex.update(index, height); changed = true;
      }
      if (!changed) return;
      this.spacer.style.height = `${this.heightIndex.total}px`;
      this.scroller.scrollTop = this.heightIndex.prefix(anchor) + offset;
      const first = this.rows.firstElementChild;
      if (first?.dataset.rowIndex != null) this.rows.style.transform = `translateY(${this.heightIndex.prefix(Number(first.dataset.rowIndex))}px)`;
      if (!this.measureFrame) this.measureFrame = this.contentEl.ownerDocument.defaultView.requestAnimationFrame(() => { this.measureFrame = null; this.renderRows(); });
    }
    renderRows() {
      if (!this.rows || !this.heightIndex) return;
      const start = this.heightIndex.indexAt(Math.max(0, this.scroller.scrollTop - 400));
      const end = this.items?.length ? Math.min(this.items.length, this.heightIndex.indexAt(this.scroller.scrollTop + (this.scroller.clientHeight || 600) + 400) + 1) : 0;
      const key = `${start}:${end}:${this.listRevision}`;
      if (this.renderKey === key) return;
      this.renderKey = key; this.cardObserver?.disconnect();
      this.rows.style.transform = `translateY(${this.heightIndex.prefix(start)}px)`;
      const previous = new Map([...this.rows.children].filter(node => node.dataset.annotationId).map(node => [node.dataset.annotationId, node]));
      const keep = new Set((this.items || []).slice(start, end).map(a => a.id));
      for (const node of [...this.rows.children]) {
        if (!keep.has(node.dataset.annotationId)) { node._dispose?.(); node.remove(); }
      }
      const active = this.contentEl.ownerDocument.activeElement, focused = this.rows.contains(active) && active.tagName === 'TEXTAREA' ? { node: active, start: active.selectionStart, end: active.selectionEnd } : null;
      for (let i = start; i < end; i++) {
        const card = previous.get(this.items[i].id) || this.renderCard(this.items[i]); card.dataset.rowIndex = String(i); card._sync?.();
        const before = this.rows.children[i - start]; if (before !== card) this.rows.insertBefore(card, before || null);
        this.cardObserver?.observe(card);
      }
      if (focused?.node.isConnected && this.contentEl.ownerDocument.activeElement !== focused.node) { focused.node.focus({ preventScroll: true }); focused.node.setSelectionRange(focused.start, focused.end); }
      if (!this.items?.length) el(this.rows, 'p', 'rp-empty', owner.t("noAnnotations"));
    }
    renderCard(annotation) {
      const card = el(this.rows, "article", "rp-card");
      card.dataset.annotationId = annotation.id;
      const t = owner.t;
      const latest = () => owner.store.get(annotation.id);
      const header = el(card, "div", "rp-card-header");
      const checkbox = el(header, "input");
      checkbox.type = "checkbox";
      checkbox.setAttribute("aria-label", LT("노트 선택", "Select note"));
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) this.selected.add(annotation.id);
        else this.selected.delete(annotation.id);
        this.updateCount();
      });

      const drag = el(header, "span", "rp-drag", "⠿");
      drag.draggable = true;
      drag.title = t("dragAnnotation");
      drag.addEventListener("dragstart", event => {
        const item = latest();
        if (!item || !event.dataTransfer) return;
        if (item.readerDocId) {
          const raw = this.pdfTools.store.get(item.readerDocId)?.annotations.find(record => record.id === item.id);
          if (raw) this.pdfTools.startDrag(event, item.readerDocId, raw);
        } else {
          event.dataTransfer.effectAllowed = "copy";
          event.dataTransfer.setData("text/plain", formatAnnotationForDrag(item, owner.settings, this.app.vault.getName()));
        }
      });

      const meta = el(header, "span", "rp-card-meta");
      const tools = el(header, "div", "rp-card-tools");
      const navigate = async () => { const item = latest(); if (item) await owner.navigateToAnnotation(item); };
      iconButton(tools, "external-link", t("openAnnotationIn", { path: annotation.sourcePath }), navigate);
      iconButton(tools, "ellipsis", t("annotationActions"), event => this.cardMenu(event, card));

      card._editors = [];
      let quote;
      if (annotation.readerDocId && annotation.anchor.readerKind === "highlight") {
        card._editors.push(new InlineAnnotationField(this.pdfTools, annotation.readerDocId, annotation.id, "text", card, { preview: true }));
      } else {
        quote = el(card, "blockquote", "rp-card-text");
      }
      const image = el(card, "img", "rp-card-image");
      image.alt = annotation.anchor.readerKind === "drawing" ? LT("드로잉", "Drawing") : t("pdfCapture");
      image.loading = "lazy";
      for (const target of [quote, image, meta].filter(Boolean)) {
        target.addEventListener("click", () => {
          const selection = target.ownerDocument.getSelection();
          if (!selection || selection.isCollapsed || !target.contains(selection.anchorNode)) navigate().catch(report);
        });
      }

      const renderComponent = this.addChild(new Component());
      let renderedPath, renderedValue;
      const editor = new InlineAnnotationField(this.pdfTools, null, annotation.id, "comment", card, {
        preview: true,
        read: () => { const item = latest(); return item && { comment: item.body }; },
        write: value => owner.store.update(annotation.id, { body: value }),
        renderPreview: (target, value) => {
          const path = latest()?.sourcePath || annotation.sourcePath;
          if (value === renderedValue && path === renderedPath) return;
          renderedPath = path;
          renderedValue = value;
          target.replaceChildren();
          if (!value.trim()) { target.textContent = t("addComment"); return; }
          const body = el(target, "div", "markdown-rendered rp-unified-comment");
          import_obsidian6.MarkdownRenderer.render(this.app, value, body, path, renderComponent).catch(report);
        }
      });
      card._editors.push(editor);
      card._comment = editor;
      card._dispose = () => {
        for (const field of card._editors) field.dispose();
        this.removeChild(renderComponent);
      };

      const date = el(card, "time", "rp-card-date");
      date.setAttribute("aria-label", t("created"));
      card._sync = () => {
        const item = latest();
        if (!item) return;
        const color = C.COLORS[item.anchor.readerColor]?.hex || markdownSwatch(item) || "var(--notenyang-highlight-color)";
        card.style.setProperty("--rp-color", color);
        card.classList.toggle("is-active", this.activeId === item.id);
        checkbox.checked = this.selected.has(item.id);
        const location = owner.settings.showCardLocation ? this.location(item) : "";
        const basename = item.sourcePath.split("/").at(-1);
        meta.title = item.sourcePath;
        const fileLabel = this.viewScope === "vault" || item.sourcePath !== this.sourcePath() || !location ? basename : "";
        meta.textContent = [fileLabel, location, item.status !== "open" && t(item.status)].filter(Boolean).join(" · ");
        if (quote) {
          quote.textContent = item.anchor.quote?.exact || "";
          quote.hidden = !quote.textContent || !!item.anchor.imagePath;
        }
        image.hidden = !item.anchor.imagePath;
        if (item.anchor.imagePath && image.dataset.path !== item.anchor.imagePath) {
          image.dataset.path = item.anchor.imagePath;
          image.src = this.app.vault.adapter.getResourcePath(item.anchor.imagePath);
        }
        date.hidden = !owner.settings.showCardDate;
        date.dateTime = item.createdAt;
        const timestamp = new Date(item.createdAt);
        date.textContent = Number.isNaN(timestamp.getTime()) ? item.createdAt : timestamp.toLocaleString(uiLanguage(owner.settings));
        for (const field of card._editors) field.sync();
      };
      card._sync();
      return card;
    }

    cardMenu(event, card) {
      const id = card.dataset.annotationId;
      const annotation = owner.store.get(id);
      if (!annotation) return;
      const t = owner.t;
      const menu = new Menu().setUseNativeMenu(false);
      const changeStatus = annotation.status === "resolved" ? "reopen" : "resolve";
      const prepare = async action => {
        await Promise.all(card._editors.map(editor => editor.flush()));
        const fresh = owner.store.get(id);
        if (fresh) await action(fresh);
      };
      menu.addItem(item => item.setTitle(t("editComment")).setIcon("pencil").onClick(() => card._comment.startEditing()));
      menu.addItem(item => item.setTitle(LT("노트 복사", "Copy note")).setIcon("copy").onClick(() =>
        prepare(fresh => this.pdfTools.copyBatch([fresh], this.pdfTools.settings.copyFormat)).catch(report)
      ));
      menu.addItem(item => item.setTitle(t(changeStatus)).setIcon(changeStatus === "resolve" ? "check" : "rotate-ccw").onClick(() =>
        prepare(() => owner.store[changeStatus](id)).catch(report)
      ));
      if (annotation.anchor.kind === "markdown") {
        menu.addItem(item => {
          item.setTitle(t("markdownDefaultColor")).setIcon("palette");
          const colors = item.setSubmenu();
          for (const [colorId, label] of [["", t("defaultHighlightColor")], ...Object.entries(C.COLORS).map(([key, color]) => [key, color.icon + " " + color.label])]) {
            colors.addItem(choice => choice.setTitle(label).setChecked((annotation.anchor.markdownColor || "") === colorId).onClick(() =>
              prepare(fresh => owner.store.update(id, { anchor: { ...fresh.anchor, markdownColor: colorId || undefined } })).catch(report)
            ));
          }
        });
      }
      menu.addSeparator();
      menu.addItem(item => item.setTitle(t("delete")).setIcon("trash-2").setWarning(true).onClick(() => {
        const message = owner.store.capturePathToTrash(annotation)
          ? "deleteWithCapture" : annotation.readerDocId && annotation.anchor.imagePath ? "pdfToolsImageKept" : annotation.readerDocId ? "pdfToolsDeleteQuestion" : "deleteMessage";
        new ConfirmModal(this.app, t("deleteTitle"), t(message), t("delete"), t("cancel"), () =>
          prepare(async () => {
            try {
              await owner.store.delete(id);
              new Notice(t("deleted"));
            } catch (error) {
              const key = error instanceof CaptureTrashError ? error.path ? "deleteRestoreFailed" : "deleteCaptureFailed" : "deleteFailed";
              new Notice(t(key, { path: error.path }));
              console.error("[NoteNyang]", error);
            }
          }).catch(report)
        ).open();
      }));
      menu.showAtMouseEvent(event);
    }

    copyMenu() {
      const menu = new Menu().setUseNativeMenu(false);
      const copy = (title, notes, format, send = false) => menu.addItem(item => item
        .setTitle(title + " (" + notes.length + ")")
        .setDisabled(!notes.length)
        .onClick(async () => {
          try {
            const ids = new Set(notes.map(note => note.id));
            const mounted = [...this.rows.children].filter(card => ids.has(card.dataset.annotationId));
            await Promise.all(mounted.flatMap(card => (card._editors || []).map(editor => editor.flush())));
            const fresh = notes.map(note => owner.store.get(note.id)).filter(Boolean);
            if (send) this.pdfTools.sendBatch(fresh, format);
            else await this.pdfTools.copyBatch(fresh, format);
          } catch (error) {
            report(error);
          }
        })
      );
      const selected = this.items.filter(item => this.selected.has(item.id));
      for (const [title, notes] of [
        [LT("선택한 노트", "Selected notes"), selected],
        [LT("현재 필터 결과", "Filtered results"), this.items],
        [LT("현재 범위 전체", "All in current scope"), this.scopeItems]
      ]) {
        copy(title + LT(" → 콜아웃 복사", " → Copy as callouts"), notes, "callout");
        copy(title + LT(" → 표 복사", " → Copy as table"), notes, "table");
        copy(title + LT(" → 노트에 콜아웃 추가", " → Append callouts to note"), notes, "callout", true);
        copy(title + LT(" → 노트에 표 추가", " → Append table to note"), notes, "table", true);
        if (notes !== this.scopeItems) menu.addSeparator();
      }
      this.showToolbarMenu(menu, this.copyButton);
    }

    async onClose() {
      ++this.outlineGeneration;
      this.unsubscribe?.();
      this.resizeObserver?.disconnect();
      this.cardObserver?.disconnect();
      for (const card of this.rows?.children || []) card._dispose?.();
      if (this.measureFrame) this.contentEl.ownerDocument.defaultView.cancelAnimationFrame(this.measureFrame);
      owner.refreshContext();
    }
  }

  class LegacyPdfSidebar extends ItemView {
    getViewType() { return ANNOTATIONS; }
    getDisplayText() { return "NoteNyang"; }
    getIcon() { return "message-square-text"; }
  }


  class OutlineEntryModal extends ResearchModal {
    constructor(plugin, docId, page, entry = null) { super(plugin.app); Object.assign(this, { plugin, docId, page, entry }); }
    onOpen() {
      this.modalEl.classList.add('rp-outline-modal');
      el(this.contentEl, 'h2', '', this.entry ? LT("개요 수정", "Edit outline item") : LT("현재 페이지에 개요 추가", "Add current page to outline"));
      el(this.contentEl, 'p', '', `PDF ${this.page}${LT("쪽", "")}`);
      el(this.contentEl, 'label', '', LT("개요 제목", "Outline title"));
      this.titleInput = el(this.contentEl, 'input', 'rp-outline-title-input'); this.titleInput.type = 'text'; this.titleInput.value = this.entry?.title || ''; this.titleInput.placeholder = LT("예: 제1장 사료와 연구 방법", "Example: Chapter 1 Primary sources and methods"); this.titleInput.setAttribute('aria-label', LT("개요 제목", "Outline title"));
      el(this.contentEl, 'label', '', LT("상위 개요", "Parent outline item"));
      const entries = this.plugin.store.get(this.docId)?.outline || [], excluded = new Set(this.entry ? [this.entry.id] : []);
      for (let changed = true; changed;) { changed = false; for (const item of entries) if (excluded.has(item.parentId) && !excluded.has(item.id)) { excluded.add(item.id); changed = true; } }
      this.parentSelect = select(this.contentEl, [['', LT("없음 (최상위)", "None (top level)")], ...entries.filter(item => !excluded.has(item.id)).map(item => [item.id, `${item.title} · PDF ${item.page}`])], this.entry?.parentId || '', () => {});
      this.parentSelect.setAttribute('aria-label', LT("상위 개요", "Parent outline item"));
      this.titleInput.addEventListener('keydown', event => { if (event.key === 'Enter') { event.preventDefault(); this.save().catch(report); } });
      const actions = el(this.contentEl, 'div', 'rp-actions'); button(actions, LT("취소", "Cancel"), () => this.close()); this.saveButton = button(actions, LT("저장", "Save"), () => this.save(), 'mod-cta');
      setTimeout(() => this.titleInput.focus(), 0);
    }
    async save() {
      if (this.saving) return;
      const title = this.titleInput.value.trim(); if (!title) throw new Error(LT("개요 제목을 입력하세요.", "Enter an outline title."));
      this.saving = true; this.saveButton.disabled = true;
      try {
        const now = new Date().toISOString(), entry = { id: this.entry?.id || C.uid(), title, page: this.page, parentId: this.parentSelect.value || null, createdAt: this.entry?.createdAt || now, updatedAt: now };
        await this.plugin.store.mutate(this.docId, doc => { doc.outline ||= []; if (this.entry) { const index = doc.outline.findIndex(item => item.id === entry.id); if (index < 0) throw new Error(LT("이 개요는 이미 삭제되었습니다.", "This outline item was already deleted.")); doc.outline[index] = entry; } else doc.outline.push(entry); });
        this.close();
      } finally { this.saving = false; this.saveButton.disabled = false; }
    }
  }

  class ConfirmOutlineDeleteModal extends ResearchModal {
    constructor(plugin, docId, entry) { super(plugin.app); Object.assign(this, { plugin, docId, entry }); }
    onOpen() {
      el(this.contentEl, 'h2', '', LT("사용자 개요 삭제", "Delete custom outline item")); el(this.contentEl, 'p', '', `“${this.entry.title}${LT("”을 삭제할까요? 하위 개요는 유지됩니다.", "”? Nested items will remain.")}`);
      button(this.contentEl, LT("취소", "Cancel"), () => this.close());
      button(this.contentEl, LT("삭제", "Delete"), async () => { await this.plugin.store.mutate(this.docId, doc => { const entry = (doc.outline || []).find(item => item.id === this.entry.id); doc.outline = (doc.outline || []).filter(item => item.id !== this.entry.id).map(item => item.parentId === this.entry.id ? { ...item, parentId: entry?.parentId || null, updatedAt: new Date().toISOString() } : item); doc.deletedOutline ||= []; doc.deletedOutline.push({ id: this.entry.id, deletedAt: new Date().toISOString() }); }); this.close(); }, 'mod-warning');
    }
  }

  function pdfTextRanges(textLayer, selection) {
    if (!textLayer?.isConnected || !selection.intersectsNode(textLayer)) return [];
    const doc = textLayer.ownerDocument;
    const walker = doc.createTreeWalker(textLayer, doc.defaultView.NodeFilter.SHOW_TEXT);
    const ranges = [];
    let node;
    while ((node = walker.nextNode())) {
      if (!node.length || node.parentElement?.closest(".endOfContent, [role='img']") || !selection.intersectsNode(node)) continue;
      const start = selection.startContainer === node ? selection.startOffset : 0;
      const end = selection.endContainer === node ? selection.endOffset : node.length;
      if (start >= end) continue;
      const range = doc.createRange();
      range.setStart(node, start);
      range.setEnd(node, end);
      ranges.push(range);
    }
    return ranges;
  }

  function pdfTextRectangles(entry, ranges) {
    const bounds = entry.surface.getBoundingClientRect();
    const page = [0, 0, entry.viewport.width, entry.viewport.height];
    return C.mergeLineRects(ranges.flatMap(range => [...range.getClientRects()]
      .map(rect => C.intersect([rect.left - bounds.left, rect.top - bounds.top, rect.right - bounds.left, rect.bottom - bounds.top], page))
      .filter(Boolean)), { vertical: entry.viewport.rotation % 180 !== 0 });
  }



  const ReaderSurface = Base => class extends Base {
    get lowMemory() { return this.plugin.isMobile && ((this.file?.stat.size || 0) >= 24 * 1024 * 1024 || (this.pdf?.numPages || 0) >= 400); }
    constructor(leaf, plugin) {
      super(leaf); this.plugin = plugin; this.pageNumber = 1; this.zoom = 'fit'; this.rotation = 0; this.crop = 0; this.mode = plugin.isMobile ? 'gesture' : 'read'; this.color = plugin.settings.defaultColor; this.pages = new Map(); this.epoch = 0; this.loadEpoch = 0; this.renderQueue = new Set(); this.visible = new Set(); this.ready = Promise.resolve(); this.closed = false;
    }
    getViewType() { return 'notenyang-pdf-surface'; }
    canAcceptExtension(extension) { return extension.toLowerCase() === 'pdf'; }
    getDisplayText() { return this.file?.basename || 'NoteNyang PDF'; }
    getIcon() { return 'book-open'; }
    onPaneMenu(menu, source) { super.onPaneMenu(menu, source); if (this.file) this.plugin.addExternalMenuItem(menu, this.file); }
    fileMenu(event) {
      if (!this.file) return; event.preventDefault(); event.stopPropagation(); const menu = new Menu();
      if (this.plugin.isMobile || this.isNative) {
        menu.addItem(item => item.setTitle(LT("다른 PDF 열기", "Open another PDF")).setIcon('folder-open').onClick(() => this.plugin.pickPdf()));
        menu.addItem(item => item.setTitle(LT("현재 페이지에 메모 추가", "Add a note to this page")).setIcon('message-square-plus').onClick(() => this.plugin.addPageNote(this.docId).catch(report)));
        menu.addItem(item => item.setTitle(LT("노트 목록", "Note list")).setIcon('list').onClick(() => this.plugin.showSidebar('annotations').catch(report)));
      }
      this.plugin.addExternalMenuItem(menu, this.file); menu.showAtMouseEvent(event);
    }
    getState() { return { path: this.file?.path || this.path, file: this.file?.path || this.path, page: this.pageNumber, zoom: this.zoom, rotation: this.rotation, crop: this.crop }; }
    build() {
      this.contentEl.replaceChildren(); this.contentEl.classList.add('rp-reader'); this.contentEl.classList.toggle('rp-mobile', this.plugin.isMobile);
      this.contentEl.dataset.mode = this.mode;
      this.fileName = el(this.contentEl, 'button', 'rp-file-name', 'NoteNyang PDF'); this.fileName.title = this.plugin.isMobile ? LT("PDF 메뉴", "PDF menu") : LT("우클릭하여 원본 PDF를 외부 앱으로 열기", "Right-click to open the PDF in an external app");
      this.fileName.addEventListener('contextmenu', event => this.fileMenu(event)); this.fileName.addEventListener('click', event => this.fileMenu(event));
      this.toolbar = el(this.contentEl, 'div', 'rp-toolbar');
      const openButton = button(this.toolbar, LT("PDF 열기", "Open PDF"), () => this.plugin.pickPdf());
      const previousButton = button(this.toolbar, '‹', () => this.goToPage(this.pageNumber - 1)); previousButton.setAttribute('aria-label', LT("이전 페이지", "Previous page"));
      this.pageInput = el(this.toolbar, 'input', 'rp-page-input'); this.pageInput.type = 'number'; this.pageInput.min = '1'; this.pageInput.value = String(this.pageNumber); this.pageInput.setAttribute('aria-label', LT("PDF 페이지", "PDF page"));
      this.pageInput.addEventListener('change', () => this.goToPage(Number(this.pageInput.value)));
      this.pageCount = el(this.toolbar, 'span', 'rp-page-count', '/ —');
      const nextButton = button(this.toolbar, '›', () => this.goToPage(this.pageNumber + 1)); nextButton.setAttribute('aria-label', LT("다음 페이지", "Next page"));
      this.zoomSelect = select(this.toolbar, [['fit', LT("너비 맞춤", "Fit width")], ['1', '100%'], ['1.25', '125%'], ['1.5', '150%'], ['2', '200%']], this.zoom, value => { this.zoom = value; this.reflow(); });
      const palette = el(this.toolbar, 'div', 'rp-palette notenyang-toolbar-palette'); this.palette = palette; this.paletteButtons = new Map();
      for (const [id, color] of Object.entries(C.COLORS)) {
        const node = button(palette, '', () => this.setColor(id)); this.paletteButtons.set(id, node);
        node.style.setProperty('--notenyang-swatch-color', color.hex); node.title = color.label; node.setAttribute('aria-label', color.label); node.classList.toggle('is-active', id === this.color); node.setAttribute('aria-pressed', String(id === this.color));
        node.addEventListener('mousedown', event => event.preventDefault());
      }
      const listButton = button(this.toolbar, LT("노트 목록", "Note list"), () => this.plugin.toggleList());
      const outlineButton = button(this.toolbar, LT("목차", "Outline"), () => this.plugin.showSidebar('outline'));
      const searchButton = button(this.toolbar, LT("검색", "Search"), () => { if (this.pdf) this.nativeBinding?.application.findBar?.open?.(); });
      const captureLabel = LT("영역 캡처", "Area capture");
      this.captureButton = iconButton(this.toolbar, 'scan', captureLabel, async () => {
        await this.setMode(this.mode === 'capture' ? 'read' : 'capture');
        if (this.mode === 'capture') this.scroller.focus({ preventScroll: true });
      }, 'rp-capture-entry');
      this.captureButton.setAttribute('aria-pressed', String(this.mode === 'capture'));
      el(this.captureButton, 'span', 'rp-capture-label', captureLabel);
      const moreButton = button(this.toolbar, LT("더보기 ▾", "More ▾"), event => this.moreMenu(event));
      for (const [node, icon, label] of [[openButton, 'folder-open', LT("PDF 열기", "Open PDF")], [previousButton, 'chevron-left', LT("이전 페이지", "Previous page")], [nextButton, 'chevron-right', LT("다음 페이지", "Next page")], [searchButton, 'search', LT("검색", "Search")], [listButton, 'list', LT("노트 목록", "Note list")], [outlineButton, 'list-tree', LT("목차", "Outline")], [moreButton, 'ellipsis', LT("더보기", "More")]]) { node.replaceChildren(); node.classList.add('rp-icon-button'); node.title = label; node.setAttribute('aria-label', label); setIcon(node, icon); }
      if (!this.plugin.isMobile) {
        const tools = el(this.contentEl, 'div', 'rp-desktop-tools'); tools.setAttribute('aria-label', LT("PDF 편집 도구", "PDF editing tools"));
        this.modePicker = toolbarPicker(tools, {
          cls: 'rp-pdf-mode-picker', label: LT('노트 도구', 'Note tools'), choices: pdfModeChoices(),
          value: () => this.mode, onChange: mode => this.setMode(mode)
        });
        this.desktopDrawing = button(tools, '', () => this.setMode(this.mode === 'draw' ? 'read' : 'draw'), 'rp-drawing-entry'); setIcon(this.desktopDrawing, 'pencil'); el(this.desktopDrawing, 'span', '', LT("드로잉", "Drawing")); this.desktopDrawing.setAttribute('aria-pressed', 'false');
        tools.appendChild(palette);
        this.copyFormatPicker = toolbarPicker(tools, {
          cls: 'rp-pdf-format-picker', label: LT('노트로 가져올 형식', 'Format for inserting into a note'),
          prefix: LT('노트로: ', 'Note format: '), choices: pdfFormatChoices(),
          value: () => this.plugin.settings.copyFormat, onChange: format => this.plugin.setCopyFormat(format)
        });
      }
      if (this.plugin.isMobile) {
        this.mobileActions=new Actions.DoubleTap(this);this.reportActionError=report;
        for (const node of [openButton, palette, listButton, outlineButton]) node.hidden = true;
        for (const [node, icon, label] of [[previousButton, 'chevron-left', LT("이전 페이지", "Previous page")], [nextButton, 'chevron-right', LT("다음 페이지", "Next page")], [searchButton, 'search', LT("검색", "Search")], [moreButton, 'ellipsis', LT("더보기", "More")]]) { node.replaceChildren(); node.classList.add('rp-icon-button'); node.title = label; node.setAttribute('aria-label', label); setIcon(node, icon); }
        this.pageInput.type = 'text'; this.pageInput.inputMode = 'numeric'; this.pageInput.pattern = '[0-9]*';
        this.mobileToolbar = el(this.contentEl, 'div', 'rp-mobile-toolbar'); this.mobileToolbar.setAttribute('aria-label', LT("PDF 터치 도구", "PDF touch tools")); this.mobileModeButtons = new Map();
        for (const [mode, icon, label] of [['read', 'book-open', LT("읽기", "Read")], ['gesture', 'highlighter', LT("제스처 선택", "Touch selection")], ['draw', 'pencil', LT("드로잉", "Drawing")], ['note', 'message-square-plus', LT("메모지 붙이기", "Place a note")]]) { const node = iconButton(this.mobileToolbar, icon, label, () => this.setMode(mode)); this.mobileModeButtons.set(mode, node); node.classList.toggle('is-active', mode === this.mode); node.setAttribute('aria-pressed', String(mode === this.mode)); }
        iconButton(this.mobileToolbar, 'list', LT("노트 목록", "Note list"), () => this.plugin.toggleList());
        iconButton(this.mobileToolbar, 'list-tree', LT("목차", "Outline"), () => this.plugin.showSidebar('outline'));
      }
      this.buildInkToolbar();
      this.exitFocus = button(this.contentEl, LT("도구 모음 표시", "Show toolbar"), () => this.toggleFocus(), 'rp-exit-focus');
      if(this.nativeBinding){this.contentEl.appendChild(this.nativeBinding.root);this.scroller=this.nativeBinding.scroller;}
      else this.scroller = el(this.contentEl, 'div', 'rp-pdf-scroller');
      this.scroller.tabIndex = 0; this.scroller.setAttribute('aria-label', LT("PDF 본문", "PDF content"));
      this.listen(this.scroller, 'pointerdown', event => this.mode === 'draw' ? this.ink?.pointer(event) : this.beginTextGesture(event), true);
      this.listen(this.scroller, 'pointermove', event => this.mode === 'draw' ? this.ink?.pointer(event) : this.moveTextGesture(event));
      this.listen(this.scroller, 'pointerup', event => this.mode === 'draw' ? this.ink?.pointer(event) : this.finishTextGesture(event));
      this.listen(this.scroller, 'pointercancel', event => this.mode === 'draw' ? this.ink?.pointer(event) : this.finishTextGesture(event, true));
      this.listen(this.scroller, 'lostpointercapture', event => this.mode === 'draw' ? this.ink?.pointer(event) : this.finishTextGesture(event, true));
      this.pageStack = this.nativeBinding?.viewer || el(this.scroller, 'div', 'rp-page-stack');
      this.status = el(this.contentEl, 'div', 'rp-status', LT("PDF를 선택하세요.", "Choose a PDF."));
      this.listen(this.scroller, 'scroll', () => { if (this.annotationPopup && !this.annotationPopup.root.contains(this.contentEl.ownerDocument.activeElement)) this.annotationPopup.close(); this.updateCurrentPage(); this.trimCache(); }, { passive: true });
      this.listen(this.scroller, 'keydown', event => {
        if (!this.nativeBinding && (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'f') { event.preventDefault(); if (this.pdf) this.nativeBinding?.application.findBar?.open?.(); }
        if (event.key === 'Escape') { this.setMode('read'); this.hideTooltip(); }
        if (event.key === 'PageDown' && event.altKey) { event.preventDefault(); this.goToPage(this.pageNumber + 1); }
        if (event.key === 'PageUp' && event.altKey) { event.preventDefault(); this.goToPage(this.pageNumber - 1); }
      });
      const win = this.contentEl.ownerDocument.defaultView;
      if (this.plugin.isMobile) this.installGestureIsolation();
      this.resized = debounce(() => { if (!this.pdf || !this.canRender()) return; if (!this.pages.size || Math.abs(this.scroller.clientWidth - (this.lastWidth || 0)) > 4) this.reflow(); else { for (const number of this.visible) this.queuePage(number); this.drainQueue(); } }, 140);
      this.resizeObserver = new win.ResizeObserver(this.resized); this.resizeObserver.observe(this.scroller);
      this.unsubscribe = this.plugin.store.onChange(id => { if (id === this.docId) { for (const entry of this.pages.values()) if (entry.marks) this.drawAnnotations(entry); } });
    }
    displayPage(number) {
      const doc = this.plugin.store.get(this.docId);
      return doc?.manualPageOffset ? String(number + (doc.pageOffset || 0)) : this.labels?.[number - 1] || String(number + (doc?.pageOffset || 0));
    }
    canRender() { return this.scroller?.clientWidth >= 80 && this.scroller?.clientHeight >= 50; }
    selectionUsesPage(entry) {
      if (this.ink?.erasing?.entry === entry) return true;
      if (this.ink?.active?.entry === entry) return true;
      if (this.preciseRange && entry.surface && this.preciseRange.intersectsNode(entry.surface)) return true;
      const selection = this.contentEl.ownerDocument.defaultView.getSelection();
      return selection?.rangeCount && !selection.isCollapsed && (entry.surface?.contains(selection.anchorNode) || entry.surface?.contains(selection.focusNode));
    }
    drawAnnotations(entry) {
      if (!entry.marks || !entry.viewport) return;
      entry.marks.replaceChildren(); entry.hitRects = [];
      const doc = this.plugin.store.get(this.docId); if (!doc) return;
      const highlightPaths=new Map();
      for (let annotation of this.plugin.store.forPage(this.docId, entry.number)) {
        if (!owner.settings.showHighlights || (annotation.status === 'resolved' && !owner.settings.showResolved)) continue;
        annotation = this.ink?.displayed(annotation) || annotation;
        if (annotation.kind === 'drawing' && !annotation.ink.length) continue;
        const anchors=annotation.anchors.filter(a=>a.page===entry.number);
        // Normalize old fragmented highlights for display without rewriting IDs,
        // anchors, comments or exported links. Other annotation geometry is exact.
        const rawRects=anchors.flatMap(anchor=>anchor.rects.map(raw=>C.pdfRectToViewport(entry.viewport,raw)));
        const rects=annotation.kind==='highlight'?C.mergeLineRects(rawRects,{vertical:entry.viewport.rotation%180!==0}):rawRects;
        for (let rect of rects) {
          if (annotation.kind === 'note') rect = [rect[0] - 2, rect[1] - 2, rect[0] + 23, rect[1] + 23];
          const mark = el(entry.marks, 'div', `rp-mark rp-mark-${annotation.kind}`); mark.dataset.annotationId = annotation.id;
          mark.draggable = !this.plugin.isMobile; mark.tabIndex = 0; mark.setAttribute('role', 'button'); mark.setAttribute('aria-label', `${C.KINDS[annotation.kind]}: ${(annotation.text || annotation.comment || LT("메모", "Note")).slice(0, 60)}`);
          mark.addEventListener('pointerdown', event => { if (this.mode === 'read' && event.button === 0 && event.pointerType !== 'touch') { this.contentEl.ownerDocument.defaultView.getSelection()?.removeAllRanges(); } });
          mark.addEventListener('dragstart', event => { if (this.mode !== 'read') { event.preventDefault(); return; } this.dragging = true; this.plugin.startDrag(event, this.docId, this.plugin.store.get(this.docId).annotations.find(a => a.id === annotation.id) || annotation); });
          mark.addEventListener('dragend', () => { this.dragging = false; this.hideTooltip(); });
          mark.addEventListener('keydown', event => { if (event.key === 'Enter') { event.preventDefault(); const box = mark.getBoundingClientRect(); this.openAnnotationPopup({ annotation, x: box.left, y: box.bottom, focus: true }); } });
          mark.style.left = `${rect[0]}px`; mark.style.top = `${rect[1]}px`; mark.style.width = `${Math.max(2, rect[2] - rect[0])}px`; mark.style.height = `${Math.max(2, rect[3] - rect[1])}px`; mark.style.setProperty('--rp-color', C.COLORS[annotation.color].hex);
          if (annotation.kind === 'note') mark.textContent = '✎';
          if (annotation.kind === 'drawing') Ink.renderAnnotation(mark, annotation, entry.viewport, rect);
          if(annotation.kind==='highlight'){
            if(!highlightPaths.has(annotation.color))highlightPaths.set(annotation.color,[]);
            const [x1,y1,x2,y2]=rect;highlightPaths.get(annotation.color).push(`M${x1} ${y1}H${x2}V${y2}H${x1}Z`);
          }
          entry.hitRects.push({ rect, annotation });
        }
      }
      // Each color is one nonzero-filled path: overlapping word boxes or
      // separate highlights of the same color receive alpha only once.
      if(highlightPaths.size){
        const ns='http://www.w3.org/2000/svg',svg=entry.marks.ownerDocument.createElementNS(ns,'svg');
        svg.classList.add('rp-highlight-paint');svg.setAttribute('viewBox',`0 0 ${entry.viewport.width} ${entry.viewport.height}`);svg.setAttribute('aria-hidden','true');
        for(const [color,parts]of highlightPaths){const path=entry.marks.ownerDocument.createElementNS(ns,'path');path.setAttribute('d',parts.join(''));path.setAttribute('fill',C.COLORS[color].hex);path.setAttribute('fill-opacity','.32');path.setAttribute('fill-rule','nonzero');path.dataset.color=color;svg.appendChild(path);}
        entry.marks.prepend(svg);
      }
    }
    hitTest(entry, x, y) { return (entry.hitRects || []).filter(({ rect }) => x >= rect[0] && y >= rect[1] && x <= rect[2] && y <= rect[3]).map(item => item.annotation).filter((a, i, arr) => arr.findIndex(other => other.id === a.id) === i); }
    installGestureIsolation() {
      // Host workspace swipes may use TouchEvents even when the PDF uses
      // PointerEvents. Stop both before document/ancestor capture listeners;
      // forward owned pointer input directly to our controller exactly once.
      const win = this.contentEl.ownerDocument.defaultView, touches = new Set();
      const inside = target => !!target && this.scroller.contains(target) && !target.closest?.('button,input,select,textarea,a,summary,[contenteditable="true"]');
      const customMode = () => !this.closed && ['gesture', 'highlight', 'capture', 'draw'].includes(this.mode);
      const touchGuard = event => {
        const changed = Array.from(event.changedTouches || []), active = Array.from(event.touches || []);
        const owned = changed.some(touch => touches.has(touch.identifier)) || active.some(touch => touches.has(touch.identifier));
        if (!owned && !((customMode() || this.mobileActions?.ownsTouch()) && inside(event.target))) return;
        if (event.type === 'touchstart') for (const touch of changed) touches.add(touch.identifier);
        if (event.cancelable) event.preventDefault();
        event.stopImmediatePropagation();
        if (event.type === 'touchend' || event.type === 'touchcancel') for (const touch of changed) touches.delete(touch.identifier);
      };
      const pointerGuard = event => {
        if (!['touch', 'pen'].includes(event.pointerType)) return;
        if(this.mobileActions?.pointer(event))return;
        if (this.mode === 'draw' && !this.closed && (inside(event.target) || this.ink?.active?.id === event.pointerId || this.ink?.erasing?.id === event.pointerId || this.ink?.pans.has(event.pointerId))) {
          if (event.cancelable) event.preventDefault(); event.stopImmediatePropagation(); this.ink?.pointer(event); return;
        }
        const active = this.textGesture?.pointers.has(event.pointerId);
        const start = event.type === 'pointerdown' && !this.closed && ['gesture', 'highlight'].includes(this.mode) && (inside(event.target) || !!this.textGesture);
        if (!active && !start) return;
        if (event.cancelable) event.preventDefault(); event.stopImmediatePropagation();
        if (event.type === 'pointerdown') this.beginTextGesture(event);
        else if (event.type === 'pointermove') this.moveTextGesture(event);
        else this.finishTextGesture(event, event.type === 'pointercancel' || event.type === 'lostpointercapture');
      };
      const contextGuard = event => { if (customMode() && inside(event.target)) { event.preventDefault(); event.stopImmediatePropagation(); } };
      const touchTypes = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
      const pointerTypes = ['pointerdown', 'pointermove', 'pointerup', 'pointercancel', 'lostpointercapture'];
      for (const type of touchTypes) win.addEventListener(type, touchGuard, { capture: true, passive: false });
      for (const type of pointerTypes) win.addEventListener(type, pointerGuard, { capture: true, passive: false });
      win.addEventListener('contextmenu', contextGuard, true);
      this.removeGestureIsolation = () => {
        for (const type of touchTypes) win.removeEventListener(type, touchGuard, true);
        for (const type of pointerTypes) win.removeEventListener(type, pointerGuard, true);
        win.removeEventListener('contextmenu', contextGuard, true); touches.clear();
      };
    }
    textHit(entry, clientX, clientY) {
      if (!entry?.textLayer || !entry.surface) return null;
      const bounds = entry.surface.getBoundingClientRect(), x = clientX - bounds.left, y = clientY - bounds.top;
      const gap = this.mode === 'gesture' ? 7 : 3;
      const distance = rect => Math.hypot(Math.max(rect[0] - x, 0, x - rect[2]), Math.max(rect[1] - y, 0, y - rect[3]));
      if (!entry.textGeometry) {
        entry.textGeometry = [];
        for (const span of entry.textLayer.querySelectorAll('span')) {
          const nodes = [...span.childNodes].filter(node => node.nodeType === 3 && node.data.trim()); if (!nodes.length) continue;
          const rect = span.getBoundingClientRect();
          entry.textGeometry.push({ span, nodes, rect: [rect.left - bounds.left, rect.top - bounds.top, rect.right - bounds.left, rect.bottom - bounds.top] });
        }
      }
      const candidates = entry.textGeometry.filter(item => distance(item.rect) <= gap).sort((a, b) => distance(a.rect) - distance(b.rect));
      let best = null, bestDistance = gap + .01;
      for (const item of candidates.slice(0, 3)) {
        if (!item.glyphs) {
          item.glyphs = [];
          const segmenter = typeof Intl.Segmenter === 'function' ? new Intl.Segmenter(undefined, { granularity: 'grapheme' }) : null;
          for (const node of item.nodes) {
            let offset = 0;
            const segments = segmenter ? [...segmenter.segment(node.data)].map(part => part.segment) : Array.from(node.data);
            for (const segment of segments) {
              const start = offset; offset += segment.length; if (!segment.trim()) continue;
              const range = node.ownerDocument.createRange(); range.setStart(node, start); range.setEnd(node, offset);
              const rect = range.getBoundingClientRect(); if (!rect.width || !rect.height) continue;
              item.glyphs.push({ node, start, end: offset, rect: [rect.left - bounds.left, rect.top - bounds.top, rect.right - bounds.left, rect.bottom - bounds.top] });
            }
          }
        }
        for (const glyph of item.glyphs) { const d = distance(glyph.rect); if (d < bestDistance) { bestDistance = d; best = glyph; } }
      }
      return best;
    }
    beginTextGesture(event) {
      if (event.target.closest?.('button,input,select,textarea,a,summary,[contenteditable="true"]')) return;
      if (event.button !== 0 || !['read', 'gesture', 'highlight'].includes(this.mode)) return;
      if (this.textGesture) {
        if (event.pointerType !== 'touch') return;
        event.preventDefault(); this.textGesture.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
        this.textGesture.kind = 'pan'; this.textGesture.moved = true; this.clearTextPreview();
        this.textGesture.swipe=null;
        this.textGesture.lastPoint = this.gestureCenter(this.textGesture);
        this.scroller.setPointerCapture(event.pointerId); return;
      }
      if (this.mode === 'read' && (event.target.closest?.('.rp-mark') || event.pointerType === 'touch')) return;
      const entry = this.pages.get(Number((event.target.closest?.('.rp-page-slot')?.dataset.page || event.target.closest?.('.page[data-page-number]')?.dataset.pageNumber)));
      const hit = this.textHit(entry, event.clientX, event.clientY);
      if (this.mode === 'read' && hit && event.detail > 1) return;
      const pageSwipe=this.plugin.isMobile&&this.singlePage&&!hit&&event.pointerType==='touch'&&['gesture','highlight'].includes(this.mode);
      if (!hit && this.mode !== 'gesture' && !pageSwipe) { event.preventDefault(); this.hideTooltip(); this.clearTextPreview(); this.contentEl.ownerDocument.defaultView.getSelection()?.removeAllRanges(); return; }
      event.preventDefault(); this.hideTooltip(); this.clearTextPreview();
      this.contentEl.ownerDocument.defaultView.getSelection()?.removeAllRanges();
      this.textGesture = { kind: hit ? 'select' : 'pan', entry, anchor: hit, last: hit, startX: event.clientX, startY: event.clientY, lastPoint: { x: event.clientX, y: event.clientY }, moved: false, pointers: new Map([[event.pointerId, { x: event.clientX, y: event.clientY }]]), epoch: this.epoch };
      if(pageSwipe){const preset=this.nativeBinding?.engine.currentScaleValue,fitted=this.isNative?['page-width','page-fit','auto'].includes(preset):this.zoom==='fit';this.textGesture.swipe={time:Date.now(),left:fitted||this.scroller.scrollLeft<=3,right:fitted||this.scroller.scrollLeft+this.scroller.clientWidth>=this.scroller.scrollWidth-3};}
      this.scroller.setPointerCapture(event.pointerId);
      if (event.pointerType !== "touch") this.scroller.focus({ preventScroll: true });
    }
    gestureCenter(gesture) { const points = [...gesture.pointers.values()]; return { x: points.reduce((sum, p) => sum + p.x, 0) / points.length, y: points.reduce((sum, p) => sum + p.y, 0) / points.length }; }
    advanceTextEndpoint(gesture, point) {
      const hit = this.textHit(gesture.entry, point.x, point.y), previous = gesture.lastPointer || { x: gesture.startX, y: gesture.startY };
      if (hit) gesture.last = hit;
      else if (gesture.last && Math.abs(point.y - previous.y) <= Math.max(4, (gesture.last.rect[3] - gesture.last.rect[1]) * .4)) {
        // Sparse/coalesced input can jump from a letter straight into the margin.
        // Sample a horizontal stroke so fast drags still reach the line edge,
        // while a wide gutter stops it before another text column.
        const steps = Math.min(180, Math.ceil(Math.abs(point.x - previous.x) / 4)), step = Math.abs(point.x - previous.x) / Math.max(1, steps);
        let gap = 0;
        for (let i = 1; i <= steps; i++) {
          const glyph = this.textHit(gesture.entry, previous.x + (point.x - previous.x) * i / steps, previous.y + (point.y - previous.y) * i / steps);
          if (glyph) { gesture.last = glyph; gap = 0; } else gap += step;
          if (gap > Math.max(12, (gesture.last.rect[3] - gesture.last.rect[1]) * 1.5)) break;
        }
      }
      gesture.lastPointer = point;
    }
    moveTextGesture(event) {
      const gesture = this.textGesture; if (!gesture?.pointers.has(event.pointerId)) return;
      event.preventDefault(); gesture.pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (gesture.epoch !== this.epoch) { this.cancelTextGesture(); return; }
      const point = this.gestureCenter(gesture);
      gesture.moved ||= Math.hypot(point.x - gesture.startX, point.y - gesture.startY) >= 4;
      if (gesture.kind === 'pan') {
        if(gesture.swipe){
          const dx=point.x-gesture.startX,dy=point.y-gesture.startY;
          if(gesture.pointers.size>1||Math.abs(dy)>18&&Math.abs(dy)>Math.abs(dx))gesture.swipe=null;
          else if(Math.abs(dx)>12&&Math.abs(dx)>Math.abs(dy)*1.6&&(dx<0?gesture.swipe.right:gesture.swipe.left)){gesture.pageSwipe=true;gesture.lastPoint=point;return;}
        }
        this.scroller.scrollLeft -= point.x - gesture.lastPoint.x; this.scroller.scrollTop -= point.y - gesture.lastPoint.y; gesture.lastPoint = point; return;
      }
      gesture.nextPoint = point;
      this.advanceTextEndpoint(gesture, point);
      if (!gesture.frame) gesture.frame = this.contentEl.ownerDocument.defaultView.requestAnimationFrame(() => { gesture.frame = null; this.updateTextGesture(gesture); });
    }
    updateTextGesture(gesture) {
      if (this.textGesture !== gesture || !gesture.moved || gesture.epoch !== this.epoch) return;
      const point = gesture.nextPoint; if (!point) return;
      const hit = this.textHit(gesture.entry, point.x, point.y);
      // A blank margin has no text endpoint. Keep the last valid glyph rather
      // than asking the browser to snap to the end of the page/document.
      if (hit) gesture.last = hit;
      const start = gesture.anchor, end = gesture.last; if (!start || !end) return;
      const backwards = start.node === end.node ? end.start < start.start : !!(start.node.compareDocumentPosition(end.node) & 2);
      const range = this.contentEl.ownerDocument.createRange();
      range.setStart(backwards ? end.node : start.node, backwards ? end.start : start.start);
      range.setEnd(backwards ? start.node : end.node, backwards ? start.end : end.end);
      this.preciseRange = range;
      this.preciseSelection = true; this.contentEl.classList.add('rp-precise-selection');
      const entry = gesture.entry, bounds = entry.surface.getBoundingClientRect();
      if (!entry.selectionPreview) entry.selectionPreview = el(entry.surface, 'div', 'rp-text-selection-preview');
      entry.selectionPreview.replaceChildren();
      for (const rect of pdfTextRectangles(entry, pdfTextRanges(entry.textLayer, range))) {
        const mark = el(entry.selectionPreview, 'div'); Object.assign(mark.style, { left: `${rect[0]}px`, top: `${rect[1]}px`, width: `${rect[2] - rect[0]}px`, height: `${rect[3] - rect[1]}px` });
      }
      this.preciseScreenRect = { left: bounds.left + end.rect[0], top: bounds.top + end.rect[1], right: bounds.left + end.rect[2], bottom: bounds.top + end.rect[3] };
    }
    finishTextGesture(event, cancelled = false) {
      const gesture = this.textGesture; if (!gesture?.pointers.has(event.pointerId)) return;
      if (gesture.frame) { this.contentEl.ownerDocument.defaultView.cancelAnimationFrame(gesture.frame); gesture.frame = null; }
      if (!cancelled && gesture.kind === 'select' && gesture.pointers.size === 1) { gesture.nextPoint = { x: event.clientX, y: event.clientY }; gesture.moved ||= Math.hypot(event.clientX - gesture.startX, event.clientY - gesture.startY) >= 4; this.advanceTextEndpoint(gesture, gesture.nextPoint); this.updateTextGesture(gesture); }
      gesture.pointers.delete(event.pointerId);
      if (this.scroller.hasPointerCapture?.(event.pointerId)) this.scroller.releasePointerCapture(event.pointerId);
      if (gesture.pointers.size) { gesture.lastPoint = this.gestureCenter(gesture); return; }
      this.textGesture = null; this.suppressPageClickUntil = Date.now() + 300;
      if (cancelled) { this.clearTextPreview(); return; }
      if(gesture.pageSwipe&&gesture.swipe&&this.singlePage){
        const dx=event.clientX-gesture.startX,dy=event.clientY-gesture.startY;
        if(Math.abs(dx)>=Math.max(56,Math.min(110,this.scroller.clientWidth*.16))&&Math.abs(dy)<Math.abs(dx)*.45&&Date.now()-gesture.swipe.time<1000){this.mobileActions?.cancelTap();this.hideTooltip();this.clearTextPreview();this.goToPage(this.pageNumber+(dx<0?1:-1));return;}
      }
      if (gesture.kind === 'select' && gesture.moved && this.preciseSelection) { this.showSelectionPopup(); return; }
      this.clearTextPreview();
      if (!gesture.moved && gesture.entry?.surface) {
        const bounds = gesture.entry.surface.getBoundingClientRect(), hits = this.hitTest(gesture.entry, event.clientX - bounds.left, event.clientY - bounds.top);
        if (hits.length) this.openTappedAnnotation({ annotation: hits[0], x: event.clientX, y: event.clientY });
      }
    }
    cancelTextGesture() {
      const gesture = this.textGesture; this.textGesture = null; if (!gesture) return;
      if (gesture.frame) this.contentEl.ownerDocument.defaultView.cancelAnimationFrame(gesture.frame);
      for (const pointerId of gesture.pointers.keys()) if (this.scroller?.hasPointerCapture?.(pointerId)) this.scroller.releasePointerCapture(pointerId);
    }
    clearTextPreview(clearSelection = false) {
      for (const entry of this.pages.values()) { entry.selectionPreview?.remove(); entry.selectionPreview = null; }
      if (this.preciseSelection || clearSelection) {
        const selection = this.contentEl.ownerDocument.defaultView.getSelection();
        if (selection?.rangeCount && this.scroller?.contains(selection.anchorNode)) selection.removeAllRanges();
      }
      this.preciseSelection = false; this.preciseRange = null; this.preciseScreenRect = null; this.contentEl.classList.remove('rp-precise-selection');
    }
    listen(node,type,callback,options) { node.addEventListener(type,callback,this.nativeBinding?{...(typeof options==='boolean'?{capture:options}:options),signal:this.nativeEvents.signal}:options); }
    openTappedAnnotation(options){if(this.mobileActions)this.mobileActions.deferPopup(options);else this.openAnnotationPopup(options);}
    bindPage(entry) {
      const surface = entry.surface;
      const point = event => { const b = surface.getBoundingClientRect(); return [event.clientX - b.left, event.clientY - b.top]; };
      this.listen(surface, 'contextmenu', event => {
        if (this.textGesture || ['gesture', 'draw'].includes(this.mode)) { event.preventDefault(); return; }
        // Keep the native touch selection handles/menu on PDF text. Blank areas
        // can still open the note menu, and the touch memo tool works everywhere.
        if (this.plugin.isMobile && (event.target.closest?.('.textLayer') || this.selectionUsesPage(entry))) return;
        event.preventDefault(); event.stopPropagation(); this.hideTooltip();
        const [x, y] = point(event), menu = new Menu();
        menu.addItem(item => item.setTitle(LT("이 위치에 메모지 추가", "Add a note here")).setIcon('message-square-plus').onClick(() => this.addNoteAt(entry, x, y).catch(report)));
        menu.showAtMouseEvent(event);
      });
      this.listen(surface, 'mousemove', event => {
        if (this.plugin.isMobile) return;
        if (this.mode !== 'read' || event.buttons || this.selectionUsesPage(entry)) { this.schedulePopoverClose(); return; }
        const [x, y] = point(event), hits = this.hitTest(entry, x, y);
        if (hits.length) this.showTooltip(hits, event.clientX, event.clientY); else this.schedulePopoverClose();
      });
      this.listen(surface, 'mouseleave', () => this.schedulePopoverClose());
      this.listen(surface, 'click', event => {
        if (Date.now() < (this.suppressPageClickUntil || 0)) return;
        if (this.mode !== 'read' || this.selectionUsesPage(entry)) return;
        const [x, y] = point(event), hits = this.hitTest(entry, x, y);
        if (hits.length === 1) this.openTappedAnnotation({ annotation: hits[0], x: event.clientX, y: event.clientY, focus: true });
        else if (hits.length > 1) { const menu = new Menu(); for (const a of hits) menu.addItem(item => item.setTitle(`${C.COLORS[a.color].label}: ${(a.comment || a.text || C.KINDS[a.kind]).slice(0, 65)}`).onClick(() => this.openAnnotationPopup({ annotation: a, x: event.clientX, y: event.clientY, focus: true }))); menu.showAtMouseEvent(event); }
      });
      this.listen(surface, 'pointerdown', event => {
        if (event.button !== 0 || !['note', 'capture'].includes(this.mode)) return;
        event.preventDefault(); this.hideTooltip();
        const start = point(event);
        if (this.mode === 'note') {
          this.addNoteAt(entry, start[0], start[1]).catch(report); return;
        }
        surface.setPointerCapture(event.pointerId);
        const box = el(surface, 'div', 'rp-selection-box');
        let current = start;
        const move = e => { current = point(e); const r = C.normalizeRect([...start, ...current]); box.style.left = `${r[0]}px`; box.style.top = `${r[1]}px`; box.style.width = `${r[2] - r[0]}px`; box.style.height = `${r[3] - r[1]}px`; };
        const cleanup = () => { box.remove(); surface.removeEventListener('pointermove', move); surface.removeEventListener('pointerup', finish); surface.removeEventListener('pointercancel', cancel); if (surface.hasPointerCapture?.(event.pointerId)) surface.releasePointerCapture(event.pointerId); };
        const cancel = () => cleanup();
        const finish = e => { move(e); cleanup(); const rect = C.intersect(C.normalizeRect([...start, ...current]), [0, 0, entry.viewport.width, entry.viewport.height]); if (rect && rect[2] - rect[0] >= 8 && rect[3] - rect[1] >= 8) this.capture(entry, rect).catch(report); };
        this.listen(surface, 'pointermove', move); this.listen(surface, 'pointerup', finish); this.listen(surface, 'pointercancel', cancel);
      });
    }
    async addNoteAt(entry, x, y) {
      if (this.closed || !entry.viewport || entry.epoch !== this.epoch) throw new Error(LT("페이지를 다시 표시한 뒤 메모를 추가하세요.", "Bring the page into view and try adding the note again."));
      const docId = this.docId, screenX = Math.max(0, Math.min(entry.viewport.width, x)), screenY = Math.max(0, Math.min(entry.viewport.height, y));
      const [pdfX, pdfY] = entry.viewport.convertToPdfPoint(screenX, screenY);
      const a = this.annotation('note', [{ page: entry.number, rects: [[pdfX, pdfY, pdfX + 1, pdfY + 1]] }]);
      await this.plugin.store.add(docId, a);
      if (!this.closed) await owner.activateAnnotation(a.id, { edit: true });
      return a;
    }
    showSelectionPopup() {
      if (!this.plugin.isMobile || !this.preciseRange || !this.preciseScreenRect) return;
      const captured = this.captureTextSelection();
      if (captured) owner.showPdfSelectionMenu(captured, null, { x: this.preciseScreenRect.right, y: this.preciseScreenRect.bottom });
    }
    captureTextSelection() {
      const selected = this.readSelection();
      if (!selected || !this.docId) return null;
      return {
        sourcePath: this.file.path,
        anchor: { kind: "pdf", page: selected.anchors[0].page, quote: { exact: selected.text }, rectangles: [] },
        readerSelection: { docId: this.docId, ...this.annotation("highlight", selected.anchors, selected.text) }
      };
    }
    annotation(kind, anchors, text = '') {
      const now = new Date().toISOString();
      return { id: C.uid(), kind, anchors, text, comment: '', color: this.color, pageLabel: this.displayPage(anchors[0].page), createdAt: now, updatedAt: now };
    }
    readSelection() {
      const doc = this.contentEl.ownerDocument, selection = doc.defaultView.getSelection();
      const range = this.preciseRange || (selection?.rangeCount && !selection.isCollapsed ? selection.getRangeAt(0) : null);
      if (!range || range.collapsed) return null;
      const anchors = [], text = [];
      for (const entry of this.pages.values()) {
        if (!entry.textLayer || !range.intersectsNode(entry.textLayer)) continue;
        const local = range.cloneRange();
        if (!entry.textLayer.contains(range.startContainer)) local.setStart(entry.textLayer, 0);
        if (!entry.textLayer.contains(range.endContainer)) local.setEnd(entry.textLayer, entry.textLayer.childNodes.length);
        const value = local.toString(); if (!value.trim()) continue;
        const rects = pdfTextRectangles(entry, pdfTextRanges(entry.textLayer, local));
        if (!rects.length) continue;
        anchors.push({ page: entry.number, rects: rects.map(rect => C.viewportRectToPdf(entry.viewport, rect)) }); text.push(value);
      }
      return anchors.length ? { anchors, text: text.join('\n'), docId: this.docId } : null;
    }
    buildInkToolbar() {
      this.inkToolbar = el(this.contentEl, 'div', 'rp-ink-toolbar'); this.inkToolbar.hidden = true;
      const tools = el(this.inkToolbar, 'div', 'rp-ink-segment'); tools.setAttribute('role', 'group'); tools.setAttribute('aria-label', LT("필기 도구", "Ink tools")); this.inkToolButtons = new Map();
      for (const [id, icon, label] of [['pen', 'pencil', LT("펜으로 그리기", "Draw with pen")], ['erase', 'eraser', LT("획 지우개", "Stroke eraser")]]) this.inkToolButtons.set(id, iconButton(tools, icon, label, () => this.ink?.setTool(id)));
      const colors = [['#24292f', LT("검정", "Black")], ['#1d4ed8', LT("파랑", "Blue")], ['#dc2626', LT("빨강", "Red")], ['#15803d', LT("초록", "Green")]];
      this.inkColorSelect = select(this.inkToolbar, colors, '#24292f', value => { if (this.ink) this.ink.color = value; }); this.inkColorSelect.setAttribute('aria-label', LT("필기 색", "Ink color")); this.inkColorSelect.hidden = true;
      const palette = el(this.inkToolbar, 'div', 'rp-ink-colors'); palette.setAttribute('role', 'group'); palette.setAttribute('aria-label', LT("필기 색상", "Ink color"));
      for (const [color, name] of colors) {
        const node = button(palette, '', () => { this.inkColorSelect.value = color; if (this.ink) this.ink.color = color; for (const item of palette.children) { const active = item === node; item.classList.toggle('is-active', active); item.setAttribute('aria-pressed', String(active)); } });
        node.style.setProperty('--rp-ink-color', color); node.title = `${name}${LT(" 펜", " Pen")}`; node.setAttribute('aria-label', `${name}${LT(" 펜", " Pen")}`); node.classList.toggle('is-active', color === '#24292f'); node.setAttribute('aria-pressed', String(color === '#24292f'));
      }
      this.inkWidth = select(this.inkToolbar, [['1.2', LT("가는 선", "Thin")], ['2.2', LT("보통 선", "Medium")], ['3.8', LT("굵은 선", "Thick")]], '2.2', value => { if (this.ink) this.ink.width = Number(value); }); this.inkWidth.setAttribute('aria-label', LT("필기 두께", "Stroke width"));
      this.inkRadius = select(this.inkToolbar, [['6', LT("작은 지우개", "Small eraser")], ['12', LT("보통 지우개", "Medium eraser")], ['22', LT("큰 지우개", "Large eraser")]], '12', value => { if (this.ink) this.ink.radius = Number(value); }); this.inkRadius.setAttribute('aria-label', LT("지우개 크기", "Eraser size")); this.inkRadius.hidden = true;
      this.inkCount = el(this.inkToolbar, 'span', 'rp-ink-count', LT("0획", "0 strokes"));
      this.inkUndo = iconButton(this.inkToolbar, 'undo-2', LT("되돌리기", "Undo"), () => this.ink?.undo());
      this.inkSettings = el(this.inkToolbar, 'details', 'rp-ink-settings');
      const summary = el(this.inkSettings, 'summary', 'rp-button rp-icon-button'); summary.setAttribute('role', 'button'); summary.setAttribute('aria-label', LT("드로잉 설정", "Drawing settings")); summary.title = LT("드로잉 설정", "Drawing settings"); setIcon(summary, 'sliders-horizontal');
      const panel = el(this.inkSettings, 'div', 'rp-ink-options');
      const field = (text, entries, initial, action, label) => { const row = el(panel, 'label', 'rp-ink-option'); el(row, 'span', '', text); const node = select(row, entries, initial, action); node.setAttribute('aria-label', label); return node; };
      field(LT("입력", "Input"), [['pen', this.plugin.isMobile ? LT("펜만", "Pen only") : LT("마우스·펜", "Mouse and pen")], ['touch', LT("손가락도", "Include touch")]], 'pen', value => { if (this.ink) { this.ink.endActive(true); this.ink.endErase(true); this.ink.input = value; } }, LT("드로잉 입력", "Drawing input"));
      field(LT("묶기 간격", "Grouping distance"), [['10', LT("좁게", "Narrow")], ['18', LT("보통", "Medium")], ['32', LT("넓게", "Wide")]], '18', value => { if (this.ink) this.ink.gap = Number(value); }, LT("드로잉 묶기 간격", "Stroke grouping distance"));
      const toggle = el(panel, 'label', 'rp-ink-option'); el(toggle, 'span', '', LT("펜 버튼으로 지우개", "Erase with pen button")); this.inkPenButton = el(toggle, 'input'); this.inkPenButton.type = 'checkbox'; this.inkPenButton.checked = true; this.inkPenButton.setAttribute('aria-label', LT("펜 버튼으로 지우개", "Erase with pen button")); this.inkPenButton.addEventListener('change', () => { if (this.ink) { this.ink.penButton = this.inkPenButton.checked; this.ink.syncTool(); } });
      el(panel, 'p', 'rp-ink-hint', LT("지우개는 닿은 획을 지웁니다. 지원되는 펜 버튼을 누르는 동안에도 사용할 수 있습니다.", "The eraser removes whole strokes. Hold a supported pen button to erase temporarily."));
      const done = button(this.inkToolbar, '', () => this.setMode('read'), 'rp-ink-done'); setIcon(done, 'check'); el(done, 'span', '', LT("완료", "Finish")); done.setAttribute('aria-label', LT("드로잉 완료", "Finish drawing"));
    }
    setColor(color) { if (!C.COLORS[color]) return; this.color = color; for (const [id, node] of this.paletteButtons || []) { node.classList.toggle('is-active', id === color); node.setAttribute('aria-pressed', String(id === color)); } }
    async setMode(mode) {
      this.mobileActions?.cancelTap();
      const next = ['read', 'gesture', 'highlight', 'note', 'capture', 'draw'].includes(mode) ? mode : 'read';
      if (next === 'draw' && !this.ink) return;
      const extracting = this.mode === 'draw' && next !== 'draw' && (this.ink?.strokes.length || this.ink?.active);
      if (this.mode === 'draw' && next !== 'draw') {
        this.inkToolbar.inert = true;
        try { await this.ink?.finish(); } finally { this.inkToolbar.inert = false; }
      }
      this.cancelTextGesture(); this.mode = next;
      this.modePicker?.refresh();
      this.contentEl.dataset.mode = this.mode; this.inkToolbar.hidden = this.mode !== 'draw';
      this.captureButton?.setAttribute('aria-pressed', String(this.mode === 'capture'));
      this.desktopDrawing?.classList.toggle('is-active', this.mode === 'draw'); this.desktopDrawing?.setAttribute('aria-pressed', String(this.mode === 'draw')); if (this.inkSettings) this.inkSettings.open = false;
      for (const [id, node] of this.mobileModeButtons || []) { node.classList.toggle('is-active', id === this.mode); node.setAttribute('aria-pressed', String(id === this.mode)); }
      this.hideTooltip(); this.clearTextPreview(this.plugin.isMobile && ['gesture', 'highlight', 'capture', 'draw'].includes(this.mode));
      if (this.mode === 'draw') { this.ink.syncTool(); this.ink.render(); } else this.ink?.cursor?.remove();
      if (this.status) this.status.textContent = extracting ? LT("드로잉 저장됨 · 노트 목록에서 그림·메모·원문 링크 사용", "Drawing saved · Find the image, note, and source link in the note list.") : {
        read: this.plugin.isMobile ? LT("길게 눌러 기본 복사 메뉴 · 형광펜은 제스처 선택 도구 사용", "Press and hold to copy text. Use touch selection to highlight.") : LT("텍스트 선택 → 우클릭 → NoteNyang 노트 추가", "Select text, then right-click and choose Add NoteNyang note."),
        gesture: LT("글자·밑줄을 드래그해 선택 · 빈 곳 또는 두 손가락으로 화면 이동", "Drag across text to select it. Pan with two fingers or drag an empty area."),
        highlight: LT("텍스트를 선택한 뒤 NoteNyang 노트 추가를 선택하세요.", "Select text, then choose Add NoteNyang note."),
        note: LT("메모지를 붙일 위치를 누르세요.", "Tap where you want to place the note."), capture: LT("캡처할 사각 영역을 드래그하세요. 읽기 도구로 돌아갈 수 있습니다.", "Drag a rectangle to capture it. Switch back to Read when finished."),
        draw: LT("드래그하여 필기 · 지우개는 획 삭제 · 완료하면 가까운 획을 노트로 묶습니다.", "Drag to draw. The eraser removes strokes. Finish groups nearby strokes into notes.")
      }[this.mode];
    }
    async goToAnnotation(id) {
      if (this.loadRecovery) { this.pendingAnnotation = id; return; }
      await this.ensureLayout();
      const a = this.plugin.store.get(this.docId)?.annotations.find(item => item.id === id);
      if (!a) { new Notice(LT("이 노트가 삭제되었거나 아직 동기화되지 않았습니다.", "This note was deleted or has not synced.")); return; }
      const anchor = a.anchors[0];
      if (anchor.page > this.pdf.numPages) { new Notice(LT("PDF 페이지 구성이 변경되어 노트 위치를 찾을 수 없습니다.", "The PDF page layout changed and the note location could not be found.")); return; }
      const navigation = (this.navigationSerial || 0) + 1; this.navigationSerial = navigation; this.navigatingAnnotation = navigation;
      const loadEpoch = this.loadEpoch;
      // A cropped page may hide the saved target. Restore the full page for navigation.
      try {
        if (this.crop) { this.crop = 0; this.reflow(); }
        this.goToPage(anchor.page);
        let entry = null;
        for (let attempt = 0; attempt < 400; attempt++) {
          if (this.closed || loadEpoch !== this.loadEpoch || navigation !== this.navigationSerial) return;
          if (this.canRender()) {
            if (!this.pages.size) this.reflow();
            const current = this.pages.get(anchor.page);
            // Android can reflow the newly revealed PDF after navigation starts.
            // Follow the new page object rather than abandoning the source link.
            if (current && current !== entry) { entry = current; this.goToPage(anchor.page); }
            if (entry?.rendered && entry.epoch === this.epoch) break;
          }
          await new Promise(resolve => setTimeout(resolve, 25));
        }
        if (!entry?.rendered || entry.epoch !== this.epoch) { new Notice(LT("페이지를 아직 표시하지 못했습니다. 잠시 후 다시 시도하세요.", "The page is still loading. Try again in a moment.")); return; }
        const mark = [...entry.marks.children].find(node => node.dataset.annotationId === id);
        if (mark) {
          const r = mark.getBoundingClientRect(), viewport = this.scroller.getBoundingClientRect();
          this.scroller.scrollTop += r.top - viewport.top - viewport.height * 0.3;
          const matching = [...entry.marks.children].filter(node => node.dataset.annotationId === id);
          matching.forEach(node => node.classList.add('rp-flash'));
          setTimeout(() => matching.forEach(node => node.classList.remove('rp-flash')), 1800);
        }
      } finally { if (this.navigatingAnnotation === navigation) this.navigatingAnnotation = null; }
    }
    showTooltip(annotations, x, y) {
      clearTimeout(this.popoverCloseTimer);
      if (this.annotationPopup && (!this.annotationPopup.transient || this.annotationPopup.annotationId === annotations[0].id || this.annotationPopup.pointerInside || this.annotationPopup.root.contains(this.contentEl.ownerDocument.activeElement))) return;
      clearTimeout(this.tooltipTimer);
      this.tooltipTimer = setTimeout(() => {
        if (this.closed) return;
        this.openAnnotationPopup({ annotation: annotations[0], x, y, transient: true });
      }, 250);
    }
    openAnnotationPopup(options) { this.hideTooltip(); this.annotationPopup = new AnnotationPopover(this, options); }
    schedulePopoverClose() {
      clearTimeout(this.tooltipTimer); clearTimeout(this.popoverCloseTimer);
      const popup = this.annotationPopup;
      // Selection/click popovers stay open until dismissed. Hover previews allow
      // time to cross the small gap and never close while the pointer is inside.
      if (!popup?.transient) return;
      this.popoverCloseTimer = setTimeout(() => {
        if (this.annotationPopup !== popup || this.dragging || popup.pointerInside || popup.root.matches(':hover') || popup.root.contains(this.contentEl.ownerDocument.activeElement)) return;
        popup.close();
      }, 800);
    }
    hideTooltip() { clearTimeout(this.tooltipTimer); clearTimeout(this.popoverCloseTimer); this.annotationPopup?.close(); }
    toggleFocus() { this.contentEl.classList.toggle('rp-focus'); this.resized(); }
    moreMenu(event) {
      const menu = new Menu();
      if(this.isNative){
        for(const [single,title]of [[true,LT("한 쪽씩 보기", "Single-page view")],[false,LT("이어서 보기", "Continuous view")]])menu.addItem(item=>item.setTitle(`${LT("보기: ", "View: ")}${title}${this.singlePage===single?' ✓':''}`).onClick(()=>this.setLayout(single).catch(report)));
        menu.addItem(item=>item.setTitle(LT("실행 취소", "Undo")).setIcon('undo-2').onClick(()=>this.plugin.undoLast(this).catch(report)));
        menu.addSeparator();
      }
      if (this.plugin.isMobile || this.isNative) {
        menu.addItem(item => item.setTitle(LT("다른 PDF 열기", "Open another PDF")).setIcon('folder-open').onClick(() => this.plugin.pickPdf()));
        menu.addItem(item => item.setTitle(LT("현재 페이지에 메모 추가", "Add a note to this page")).setIcon('message-square-plus').onClick(() => this.plugin.addPageNote(this.docId).catch(report)));
        for (const [id, label, icon] of pdfFormatChoices()) menu.addItem(item => item
          .setTitle(LT('노트 형식: ', 'Note format: ') + label).setIcon(icon)
          .setChecked(this.plugin.settings.copyFormat === id).onClick(() => this.plugin.setCopyFormat(id).catch(report)));
        menu.addSeparator();
      }
      if(this.isNative){
        for (const [mode, title, icon] of pdfModeChoices()) menu.addItem(item => item
          .setTitle(LT('도구: ', 'Tool: ') + title).setIcon(icon).setChecked(this.mode === mode)
          .onClick(() => this.setMode(mode).catch(report)));
        for(const [color,details]of Object.entries(C.COLORS))menu.addItem(item=>item.setTitle(`${LT("형광펜 색: ", "Highlight color: ")}${details.label}${this.color===color?' ✓':''}`).onClick(()=>this.setColor(color)));
        for(const [value,title]of [['fit',LT("너비 맞춤", "Fit width")],['1','100%'],['1.25','125%'],['1.5','150%'],['2','200%']])menu.addItem(item=>item.setTitle(`${LT("확대: ", "Zoom: ")}${title}`).onClick(()=>{this.zoom=value;this.zoomSelect.value=value;this.reflow();}));
        menu.addItem(item=>item.setTitle(LT("PDF 검색", "Search PDF")).setIcon('search').onClick(()=>{const find=this.nativeBinding.application.findBar;if(typeof find?.open==='function')find.open();else this.contentEl.classList.add('rp-native-show-toolbar');}));
        menu.addItem(item=>item.setTitle(LT("기본 PDF 도구 모음 표시 / 숨기기", "Toggle the built-in PDF toolbar")).onClick(()=>this.contentEl.classList.toggle('rp-native-show-toolbar')));
        menu.addItem(item=>item.setTitle(LT("노트 목록", "Note list")).setIcon('list').onClick(()=>this.plugin.toggleList()));
        this.plugin.addExternalMenuItem(menu,this.file);
        menu.addSeparator();
      }
      menu.addItem(item => item.setTitle(LT("집중 읽기 전환", "Toggle focus reading")).onClick(() => this.toggleFocus()));
      menu.addItem(item => item.setTitle(LT("오른쪽으로 90° 회전", "Rotate 90° clockwise")).onClick(() => { this.rotation = (this.rotation + 90) % 360; if(this.firstViewport)this.firstViewport = { width: this.firstViewport.height, height: this.firstViewport.width }; this.reflow(); }));
      for (const amount of [0, 0.05, 0.1]) menu.addItem(item => item.setTitle(`${LT("페이지 가장자리 ", "Crop page margins by ")}${amount * 100}${LT("% 자르기", "%")}${this.crop === amount ? ' ✓' : ''}`).onClick(() => { this.crop = amount; this.reflow(); }));
      menu.addSeparator();
      menu.addItem(item => item.setTitle(LT("목차 / 개요", "Outline")).onClick(() => this.plugin.showSidebar('outline').catch(report)));
      menu.addItem(item => item.setTitle(LT("인쇄 쪽수 설정", "Set printed page number")).onClick(() => { if (this.docId) new PageLabelModal(this).open(); }));
      menu.addItem(item => item.setTitle(owner.t('pdfToolsClose')).setIcon('x').onClick(() => this.plugin.dismiss(this)));
      menu.showAtMouseEvent(event);
    }

  };
  class EmbeddedFileView extends Component {
    constructor(host){super();this.leaf=host;this.app=host.app;this.containerEl=host.containerEl;this.contentEl=el(this.containerEl,'div','view-content');}
    async setState(state){const file=this.app.vault.getAbstractFileByPath(state.file);if(file&&this.file!==file){if(this.file)await this.onUnloadFile();this.file=file;await this.onLoadFile(file);}}
    async onOpen(){} async onClose(){} onPaneMenu(){}
  }
  class PageLabelModal extends ResearchModal {
    constructor(reader) { super(reader.app); this.reader = reader; }
    onOpen() {
      el(this.contentEl, 'h2', '', LT("인쇄 쪽수 설정", "Set printed page number"));
      el(this.contentEl, 'p', '', `${LT("현재 PDF ", "Current PDF page ")}${this.reader.pageNumber}${LT("쪽에 인쇄된 쪽수를 입력하세요. 이 버전은 문서 전체에 하나의 차이를 적용합니다.", " uses one numbering offset. Enter the number printed on this page.")}`);
      const input = el(this.contentEl, 'input'); input.type = 'number'; input.value = this.reader.displayPage(this.reader.pageNumber);
      button(this.contentEl, LT("적용", "Apply"), async () => {
        if (!input.value.trim() || !Number.isInteger(Number(input.value))) throw new Error(LT("정수 쪽수를 입력하세요.", "Enter a whole page number."));
        const offset = Number(input.value) - this.reader.pageNumber;
        await this.reader.plugin.store.mutate(this.reader.docId, doc => { doc.pageOffset = offset; doc.manualPageOffset = true; for (const a of doc.annotations) a.pageLabel = String(a.anchors[0].page + offset); });
        for (const entry of this.reader.pages.values()) entry.slot.querySelector('.rp-page-label').textContent = `p.${this.reader.displayPage(entry.number)} · PDF ${entry.number}`;
        this.close();
      }, 'mod-cta');
    }
  }

  const Native = (() => { const module = { exports: {} };
  'use strict';
  // Adapter only: Obsidian owns the PDF document, page views, text and canvases.
  // Never call getDocument/render/cleanup/destroy on those resources here.
  module.exports = ({ C, Ink, ReaderSurface, EmbeddedFileView, TFile, Menu, Notice, el, button, report }) => {
    function binding(host) {
      const component = host.viewer || host;
      const child = component.child;
      const application = child?.pdfViewer;
      const viewer = application?.pdfViewer;
      const scroller = viewer?.container || application?.dom?.viewerContainerEl;
      const pages = viewer?.viewer || application?.dom?.viewerEl;
      if (!viewer || !scroller || !pages) return null;
      let root = component.containerEl || child.containerEl;
      if (!root?.contains(scroller)) root = scroller.parentElement;
      return { component, child, application, engine:viewer, scroller, viewer:pages, root,
        bus:application.eventBus || viewer.eventBus, pdf:viewer.pdfDocument || application.pdfDocument };
    }
    // Keep native selection for keyboard shortcuts, copying, and context-menu
    // coordinates. Paint only the selected text runs ourselves, never the
    // transient PDF.js selection container or its page-sized sentinel.
    function paintNativeTextSelection(reader) {
      const doc = reader.contentEl.ownerDocument;
      const win = doc.defaultView;
      const registry = win.CSS?.highlights;
      if (!registry || typeof win.Highlight !== "function") return () => {};

      const name = "notenyang-pdf-selection";
      reader.contentEl.classList.add("rp-native-text-paint");
      let previous = [];
      let frame = null;

      const clear = () => {
        const highlight = registry.get(name);
        if (highlight) {
          for (const range of previous) highlight.delete(range);
          if (!highlight.size) registry.delete(name);
        }
        previous = [];
      };

      const paint = () => {
        frame = null;
        clear();
        const selection = doc.getSelection();
        if (!selection?.rangeCount || selection.isCollapsed || reader.contentEl.classList.contains("rp-precise-selection")) return;
        const range = selection.getRangeAt(0);
        for (const { textLayer } of reader.pages.values()) {
          for (const portion of pdfTextRanges(textLayer, range)) previous.push(portion);
        }
        if (!previous.length) return;
        const highlight = registry.get(name) || new win.Highlight();
        for (const range of previous) highlight.add(range);
        registry.set(name, highlight);
      };

      const schedule = () => {
        const selection = doc.getSelection();
        const viewer = reader.nativeBinding.viewer;
        const selectedHere = viewer.contains(selection?.anchorNode) || viewer.contains(selection?.focusNode);
        if ((selectedHere || previous.length) && frame === null) frame = win.requestAnimationFrame(paint);
      };
      doc.addEventListener("selectionchange", schedule);
      schedule();
      return () => {
        doc.removeEventListener("selectionchange", schedule);
        if (frame !== null) win.cancelAnimationFrame(frame);
        clear();
        reader.contentEl.classList.remove("rp-native-text-paint");
      };
    }


    class NativeSurface extends ReaderSurface(EmbeddedFileView) {
      constructor(plugin,host,leaf,b,file,embedded) {
        const parent=b.root.parentElement, holder=el(parent,'div','rp-native-holder');
        parent.insertBefore(holder,b.root);
        super({app:plugin.app,containerEl:holder,updateHeader(){}},plugin);
        this.holder=holder;this.host=host;this.leaf=leaf||this.leaf;this.nativeBinding=b;this.isNative=true;
        this.file=file;this.isEmbedded=embedded;this.nativeEvents=new this.contentEl.ownerDocument.defaultView.AbortController();
        this.originalScrollMode=b.originalScrollMode;
        this.originalScrollerAttributes=Object.fromEntries(['tabindex','aria-label'].map(name=>[name,b.scroller.getAttribute(name)]));
        this.nativePageEvents=new Map();this.nativeStops=[];this.nativeEntries=new Set();
        // Save drafts and release only our overlays before core unloads/replaces
        // the file. Restore each wrapper only if it is still ours.
        if(!embedded)for(const name of ['onUnloadFile','onClose'])if(typeof host[name]==='function'){
          const original=host[name],surface=this;
          const wrapped=async function(...args){await surface.onClose();return original.apply(this,args);};
          host[name]=wrapped;this.nativeStops.push(()=>{if(host[name]===wrapped)host[name]=original;});
        }
        if(!embedded&&typeof host.onPaneMenu==='function'){
          const original=host.onPaneMenu,plugin=this.plugin;
          const wrapped=function(menu,...args){const result=original.call(this,menu,...args);plugin.addExternalMenuItem(menu,file);return result;};
          host.onPaneMenu=wrapped;this.nativeStops.push(()=>{if(host.onPaneMenu===wrapped)host.onPaneMenu=original;});
        }
      }
      get singlePage(){return this.nativeBinding?.engine.scrollMode===3;}
      async mount(){
        const b=this.nativeBinding,doc=await this.plugin.store.open(this.file);
        if(this.closed||!this.plugin.running)return;
        this.docId=doc.id;this.pdf=b.pdf;this.labels=await this.pdf.getPageLabels().catch(()=>null);
        await b.engine.firstPagePromise;
        if(this.closed||!this.plugin.running)return;
        const initialPage=C.pdfPageFromState(this.isEmbedded?this.host.subpath:this.leaf.getEphemeralState?.())||b.engine.currentPageNumber||1;
        this.build();this.contentEl.classList.add('rp-native-reader', 'rp-native-show-toolbar');
        // The complete native viewer (including its toolbar/sidebar) stays intact.
        // Core toolbars can omit navigation in PAGE mode. Keep an explicit,
        // accessible page navigator even when the native toolbar is collapsed.
        const nativeButtons=this.plugin.isMobile?[LT("이전 페이지", "Previous page"),LT("다음 페이지", "Next page"),LT("더보기", "More")]:[LT("이전 페이지", "Previous page"),LT("다음 페이지", "Next page"),LT("노트 목록", "Note list"),LT("목차", "Outline"),LT("더보기", "More")];
        for(const node of [...this.toolbar.children])node.hidden=node!==this.pageInput&&node!==this.pageCount&&node!==this.captureButton&&!nativeButtons.includes(node.getAttribute('aria-label'));
        this.toolbar.classList.add('rp-native-extra','rp-native-navigation');
        this.toolbar.classList.add('rp-compact-bar');
        // Keep the workspace title; put navigation and annotation tools together.
        this.fileName.hidden=true;
        const tools=this.mobileToolbar||this.contentEl.querySelector('.rp-desktop-tools');
        if(tools)this.toolbar.insertBefore(tools,this.toolbar.lastElementChild);
        if (!this.plugin.isMobile) this.toolbar.append(this.palette);
        this.zoomSelect.hidden=false;this.zoomSelect.classList.add("rp-pdf-zoom");this.zoomSelect.setAttribute('aria-label',LT("PDF 확대", "PDF zoom"));
        this.status.setAttribute('role','status');this.status.setAttribute('aria-live','polite');
        this.previousPageButton=this.toolbar.querySelector(LT("[aria-label=\"이전 페이지\"]", "[aria-label=\"Previous page\"]"));
        this.nextPageButton=this.toolbar.querySelector(LT("[aria-label=\"다음 페이지\"]", "[aria-label=\"Next page\"]"));
        this.pageInput.addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();event.stopPropagation();this.goToPage(Number(this.pageInput.value));this.pageInput.blur();}});
        this.fileName.textContent=this.file.name||`${this.file.basename}.pdf`;
        this.fileName.title=LT("기본 PDF 뷰어 · 노트 도구", "Built-in PDF viewer · Note tools");
        this.pageCount.textContent=`/ ${this.pdf.numPages}`;this.pageInput.max=String(this.pdf.numPages);
        this.ink=new Ink.Session(this);this.zoom=String(b.engine.currentScaleValue||'page-width');this.requestedZoom=this.zoom;this.rotation=b.engine.pagesRotation||0;this.requestedRotation=this.rotation;this.applyLayout();
        const schedule=()=>this.scheduleSync();
        for(const name of ['pagerendered','textlayerrendered','scalechanging','rotationchanging','pagesloaded','pagechanging']){
          const listener=event=>{if(name==='textlayerrendered'){const entry=this.pages.get(event.pageNumber);if(entry)entry.textGeometry=null;}schedule();};
          b.bus?.on(name,listener);this.nativeStops.push(()=>b.bus?.off(name,listener));
        }
        this.nativeObserver=new this.contentEl.ownerDocument.defaultView.MutationObserver(records=>{
          if(records.some(record=>![...record.addedNodes,...record.removedNodes].every(node=>node.nodeType===1&&(node.classList.contains('rp-marks')||node.classList.contains('rp-ink-preview')||isPdfSelectionMarker(node))||node.parentElement?.closest('.rp-marks,.rp-ink-preview,.rp-text-selection-preview'))))schedule();
        });
        this.nativeObserver.observe(b.viewer,{childList:true,subtree:true});
        this.nativeStops.push(paintNativeTextSelection(this));
        this.listen(this.scroller, "keydown", event => {
          if (!(event.ctrlKey || event.metaKey) || event.altKey || event.shiftKey || event.key.toLowerCase() !== "c" || !this.preciseRange) return;
          const selected = this.readSelection();
          if (!selected) return;
          event.preventDefault();
          event.stopPropagation();
          this.contentEl.ownerDocument.defaultView.navigator.clipboard.writeText(selected.text).catch(report);
        });
        this.listen(this.scroller, "copy", event => {
          if (!this.preciseRange || !event.clipboardData) return;
          const selected = this.readSelection();
          if (!selected) return;
          event.clipboardData.setData("text/plain", selected.text);
          event.preventDefault();
        });
        this.listen(this.contentEl.ownerDocument, "pointerdown", event => {
          if (event.button === 0 && this.preciseRange && !this.contentEl.contains(event.target)) this.clearTextPreview();
        }, true);
        this.syncPages();this.updateCurrentPage();
        // Reparenting and collapsing toolbars changes the scroll viewport. Apply
        // the requested destination after layout so the native scroll observer
        // cannot replace a hover/link's target with the newly exposed first page.
        await new Promise(resolve=>this.contentEl.ownerDocument.defaultView.requestAnimationFrame(resolve));
        if(this.closed||!this.plugin.running)return;
        if(initialPage>1){if(this.canRender())this.goToPage(initialPage);else this.pendingNativePage=initialPage;}
        if(this.ink.strokes.length)await this.setMode('draw');
        this.status.textContent=LT("기본 PDF 뷰어 · 노트·메모·필기 사용 가능", "Built-in PDF viewer · Note tools ready");
        if(!this.isEmbedded)this.plugin.lastReader=this;
        this.loadTrace=this.plugin.settings.debugLogging===true?await this.plugin.diagnostics.start(this.file,'native-reader',{page:this.pageNumber,embedded:this.isEmbedded}):null;
        await this.loadTrace?.step('native:attached',{pages:this.pdf.numPages,page:this.pageNumber,singlePage:this.singlePage,renderedPages:this.pages.size});
        await this.loadTrace?.finish('complete');
      }
      applyLayout(){
        const v=this.nativeBinding.engine;
        const preference=this.plugin.settings.pdfLayouts?.[this.docId];
        const mode=preference==='single'?3:preference==='continuous'?0:this.plugin.isMobile&&this.lowMemory?(this.plugin.settings.mobileSinglePage!==false?3:0):null;
        if(mode!==null){if(this.originalScrollMode===undefined)this.originalScrollMode=v.scrollMode;if(v.scrollMode!==mode)v.scrollMode=mode;}
      }
      async setLayout(single){
        this.mobileActions?.cancelTap();this.cancelTextGesture();this.hideTooltip();this.ink?.endActive();this.ink?.endErase();await this.ink?.flush();
        const page = this.pageNumber;
        await this.plugin.saveData(settings => ({
          pdfLayouts: { ...settings.pdfLayouts, [this.docId]: single ? 'single' : 'continuous' }
        }));
        for(const reader of this.plugin.readers())if(reader.isNative&&reader.docId===this.docId){const target=reader===this?page:reader.pageNumber;reader.applyLayout();if(reader.canRender())reader.goToPage(target);else reader.pendingNativePage=target;}
        this.status.textContent=single?LT("한 쪽씩 보기", "Single-page view"):LT("이어서 보기", "Continuous view");
      }
      scheduleSync(){if(this.closed||this.nativeSyncTimer)return;this.nativeSyncTimer=setTimeout(()=>{this.nativeSyncTimer=null;this.syncPages();this.updateCurrentPage();},35);}
      syncPages(){
        if(this.closed||!this.pdf||!this.ink)return;
        if(this.pendingNativePage&&this.canRender()){const page=this.pendingNativePage;this.pendingNativePage=null;this.goToPage(page);}
        const v=this.nativeBinding.engine,seen=new Set();this.rotation=v.pagesRotation||0;
        // Use the native viewer's currently rendered pages, never request pages
        // or construct our own page slots to fill its placeholders.
        for(const page of this.nativeBinding.viewer.querySelectorAll('.page[data-page-number]')){
          const number=Number(page.dataset.pageNumber),pv=v.getPageView?.(number-1)||v._pages?.[number-1];
          const canvas=pv?.canvas||page.querySelector('.canvasWrapper canvas,canvas');
          if(!pv?.pdfPage||!pv.viewport||!canvas?.width||!canvas.height)continue;
          seen.add(number);let entry=this.pages.get(number);
          const text=pv.textLayer?.div||pv.textLayer?.textLayerDiv||page.querySelector('.textLayer');
          if(entry&&(entry.surface!==page||entry.canvas!==canvas||entry.viewport!==pv.viewport||entry.textLayer!==text||!entry.marks?.isConnected)){
            this.disposePage(entry);this.pages.delete(number);entry=null;
          }
          if(!entry){
            entry={number,slot:page,paper:page,surface:page,canvas,textLayer:text,page:pv.pdfPage,viewport:pv.viewport,rendered:true,bytes:0,epoch:this.epoch};
            this.pages.set(number,entry);this.nativeEntries.add(entry);
            entry.marks=el(page,'div','rp-marks');
            const abort=new this.contentEl.ownerDocument.defaultView.AbortController();this.nativePageEvents.set(page,abort);
            // bindPage uses listen(), with a separate lifetime per native page.
            this.bindingPageSignal=abort.signal;this.bindPage(entry);this.bindingPageSignal=null;
            this.drawAnnotations(entry);this.ink.renderPage(entry);
          }
        }
        for(const [number,entry]of this.pages)if(!seen.has(number)){this.disposePage(entry);this.pages.delete(number);}
        this.visible=new Set(this.pages.keys());
      }
      listen(node,type,callback,options){node.addEventListener(type,callback,{...(typeof options==='boolean'?{capture:options}:options),...(type==='contextmenu'?{capture:true}:{}),signal:this.bindingPageSignal||this.nativeEvents.signal});}
      disposePage(entry){
        if(this.ink?.active?.entry===entry)this.ink.endActive();
        if(this.ink?.erasing?.entry===entry)this.ink.endErase(true);
        this.nativePageEvents.get(entry.surface)?.abort();this.nativePageEvents.delete(entry.surface);
        entry.marks?.remove();entry.inkPreview?.remove();entry.selectionPreview?.remove();entry.textGeometry=null;
        this.nativeEntries.delete(entry);
      }
      resetPages(){this.cancelTextGesture();this.clearTextPreview();for(const entry of this.pages.values())this.disposePage(entry);this.pages.clear();}
      queuePage(){} drainQueue(){} trimCache(){}
      reflow(){
        if(!this.pdf)return;this.applyLayout();const v=this.nativeBinding.engine;
        if(this.requestedZoom!==this.zoom){this.requestedZoom=this.zoom;v.currentScaleValue=this.zoom==='fit'?'page-width':this.zoom;}
        if(this.requestedRotation!==this.rotation){this.requestedRotation=this.rotation;v.pagesRotation=this.rotation;}
        this.nativeBinding.viewer.style.setProperty('--rp-native-crop',`${this.crop*100}%`);
        this.scheduleSync();
      }
      updateCurrentPage(){
        if(!this.pdf)return;this.pageNumber=this.nativeBinding.engine.currentPageNumber||1;
        if(this.pageInput&&this.contentEl.ownerDocument.activeElement!==this.pageInput)this.pageInput.value=String(this.pageNumber);
        if(this.previousPageButton)this.previousPageButton.disabled=this.pageNumber<=1;
        if(this.nextPageButton)this.nextPageButton.disabled=this.pageNumber>=this.pdf.numPages;
        this.plugin.publishPage(this);
      }
      goToPage(number){
        if(!this.pdf)return;const page=Math.max(1,Math.min(this.pdf.numPages,Math.floor(number)||1));
        const v=this.nativeBinding.engine;v.currentPageNumber=page;
        v.scrollPageIntoView?.({pageNumber:page});this.pageNumber=page;this.pageInput.value=String(page);this.scheduleSync();this.plugin.publishPage(this);
        this.updateCurrentPage();
      }
      async ensureLayout(){
        for(let i=0;i<240;i++){if(this.closed)throw Error(LT("PDF 화면이 닫혔습니다.", "The PDF view was closed."));if(this.pdf&&this.canRender()){this.syncPages();return;}await new Promise(resolve=>setTimeout(resolve,25));}
        throw Error(LT("PDF 탭을 연 뒤 다시 시도하세요.", "Open the PDF tab and try again."));
      }
      async capture(entry,rect){
        if(this.capturing||!entry.canvas?.width)return;this.capturing=true;
        const epoch=this.epoch,docId=this.docId,canvas=this.contentEl.ownerDocument.createElement('canvas');
        try{
          const [x1,y1,x2,y2]=rect,raw=C.viewportRectToPdf(entry.viewport,rect);
          const sx=entry.canvas.width/entry.viewport.width,sy=entry.canvas.height/entry.viewport.height;
          const ratio=Math.min(sx,sy,Math.sqrt((this.plugin.isMobile?3_000_000:12_000_000)/((x2-x1)*(y2-y1))));
          canvas.width=Math.max(1,Math.ceil((x2-x1)*ratio));canvas.height=Math.max(1,Math.ceil((y2-y1)*ratio));
          canvas.getContext('2d',{alpha:false}).drawImage(entry.canvas,x1*sx,y1*sy,(x2-x1)*sx,(y2-y1)*sy,0,0,canvas.width,canvas.height);
          const imageDataUrl = canvas.toDataURL("image/png");
          if (!imageDataUrl.startsWith("data:image/png;base64,")) throw new Error(LT("캡처 이미지를 만들지 못했습니다.", "Could not create the capture image."));
          if (this.closed || epoch !== this.epoch) return;
          const annotation = this.annotation("capture", [{ page: entry.number, rects: [raw] }]);
          if (this.mode === "capture") await this.setMode("read");
          await owner.beginSidebarDraft({
            sourcePath: this.file.path, sourceType: "pdf", status: "open", body: "",
            anchor: { kind: "pdf", page: entry.number, rectangles: [], quote: { exact: "" } },
            readerSelection: { docId, ...annotation }
          }, imageDataUrl);
        }finally{canvas.width=canvas.height=0;this.capturing=false;}
      }
      async onClose(){
        if(this.closed)return;
        this.mobileActions?.dispose();
        this.closed=true;++this.loadEpoch;this.nativeEvents.abort();this.nativeObserver?.disconnect();
        clearTimeout(this.nativeSyncTimer);for(const stop of this.nativeStops)stop();
        this.removeGestureIsolation?.();
        this.resizeObserver?.disconnect();this.resized?.cancel();this.unsubscribe?.();this.hideTooltip();
        try{await this.ink?.dispose();}catch(error){report(error);}
        this.resetPages();this.nativeBinding.viewer.style.removeProperty('--rp-native-crop');
        if(this.originalScrollMode!==undefined&&!this.nativeBinding.child.unloaded)this.nativeBinding.engine.scrollMode=this.originalScrollMode;
        for(const [name,value]of Object.entries(this.originalScrollerAttributes))if(value===null)this.scroller?.removeAttribute(name);else this.scroller?.setAttribute(name,value);
        // Restore the native DOM instead of detaching its leaf or destroying PDF.js.
        if(this.holder.parentElement&&this.nativeBinding.root.parentElement===this.contentEl)this.holder.parentElement.insertBefore(this.nativeBinding.root,this.holder);
        this.holder.remove();this.plugin.nativeReaders.delete(this);
        owner.refresh();
        if(this.plugin.nativeByHost.get(this.host)===this)this.plugin.nativeByHost.delete(this.host);
        if(this.plugin.lastReader===this)this.plugin.lastReader=null;
      }
    }
    async function attach(plugin,host,leaf,file,embedded=false){
      await plugin.waitForReader();if(!plugin.running||!host||!file)return;
      const previous=plugin.nativeByHost.get(host);
      if(previous&&!previous.closed&&previous.file===file&&previous.pdf===binding(host)?.pdf)return previous;
      const pending=plugin.nativePending.get(host);if(pending){const reader=await pending;if(reader?.file.path===file.path)return reader;if(plugin.running&&host.file?.path===file.path)return attach(plugin,host,leaf,file,embedded);return;}
      const job=(async()=>{
        if(previous)await previous.onClose();
        for(let i=0;i<400&&plugin.running;i++){
          if(host.__rpUnloaded||leaf&&(leaf.view!==host||host.file?.path!==file.path||!leaf.containerEl?.isConnected&&!leaf.container?.isConnected))return;
          const b=binding(host);
          if(b?.pdf&&b.root?.isConnected){
            const surface=new NativeSurface(plugin,host,leaf,b,file,embedded);plugin.nativeByHost.set(host,surface);plugin.nativeReaders.add(surface);
            try{await surface.mount();if(!plugin.running||surface.closed){await surface.onClose();return;}return surface;}
            catch(error){await surface.onClose();throw error;}
          }
          await new Promise(resolve=>setTimeout(resolve,25));
        }
        if(plugin.running&&!host.__rpUnloaded)new Notice(LT("PDF 노트 도구를 연결하지 못했습니다. 기본 뷰어는 그대로 사용할 수 있습니다.", "Could not connect the PDF tools. The built-in viewer is still available."),7000);
      })();
      plugin.nativePending.set(host,job);try{return await job;}finally{if(plugin.nativePending.get(host)===job)plugin.nativePending.delete(host);}
    }
    function existingPdfLeaf(plugin,file){
      const workspace=plugin.app.workspace,matches=[];
      workspace.iterateAllLeaves(leaf=>{
        const state=leaf.getViewState();
        if((state.type==='pdf'||leaf.view?.getViewType?.()==='pdf')&&(leaf.view?.file?.path||state.state?.file||state.state?.path)===file.path)matches.push(leaf);
      });
      return matches.find(leaf=>leaf===workspace.activeLeaf)||matches[0];
    }
    async function withPdfLeaf(plugin,file,action){
      await plugin.waitForReader();
      // Rapid clicks and protocol/page links share the same per-document queue,
      // including the period before a new tab has finished loading.
      const previous=plugin.nativeOpenJobs.get(file.path)||Promise.resolve();
      const job=previous.catch(()=>{}).then(()=>{
        const existing=existingPdfLeaf(plugin,file);
        return action(existing||plugin.app.workspace.getLeaf('tab'),!!existing);
      });
      plugin.nativeOpenJobs.set(file.path,job);
      try{return await job;}finally{if(plugin.nativeOpenJobs.get(file.path)===job)plugin.nativeOpenJobs.delete(file.path);}
    }
    async function open(plugin,file){
      return withPdfLeaf(plugin,file,async(leaf,existing)=>{
        if(!existing)await leaf.openFile(file,{active:true});
        await leaf.loadIfDeferred?.();await plugin.app.workspace.revealLeaf(leaf);
        const surface=await attach(plugin,leaf.view,leaf,file);if(!surface)throw Error(LT("기본 PDF 뷰어가 아직 준비되지 않았습니다.", "The built-in PDF viewer is still loading."));return surface;
      });
    }
    return { attach, binding, open };
  };

  return module.exports; })()({ C, Ink, ReaderSurface, EmbeddedFileView, TFile, Menu, Notice, el, button, report });

  return new NoteNyangPdfTools();

}
