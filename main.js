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
  default: () => SidenPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian7 = require("obsidian");

// NoteNyang interface strings, ordered English then Korean.
var UI_TEXT = {
  language: ["Interface language", "인터페이스 언어"],
  languageDescription: ["Choose the language for NoteNyang.", "NoteNyang에 표시할 언어를 선택합니다."],
  followObsidian: ["Follow Obsidian", "Obsidian 언어 따르기"],
  languageSaveFailed: ["Could not save the language preference.", "언어 설정을 저장하지 못했습니다."],
  sidebarCards: ["Sidebar cards", "사이드바 주석 카드"],
  showLocation: ["Show source location", "원문 위치 표시"],
  showLocationDescription: ["Show Markdown line numbers or PDF page numbers on cards and in drafts.", "카드와 입력창에 마크다운 줄 번호 또는 PDF 쪽수를 표시합니다."],
  showDate: ["Show creation date", "작성 시간 표시"],
  showDateDescription: ["Show when the annotation was created below its comment.", "코멘트 아래에 주석을 처음 작성한 날짜와 시간을 표시합니다."],
  wrapWords: ["Wrap long words and links", "긴 단어와 링크 줄바꿈"],
  wrapWordsDescription: ["Wrap long words, links, and code that exceed the width of a card.", "카드 너비를 넘는 긴 단어, 링크, 코드를 줄바꿈합니다."],
  pdfAreaCapture: ["PDF area capture", "PDF 영역 캡처"],
  showCaptureRibbon: ["Show capture button in the ribbon", "왼쪽에 캡처 버튼 표시"],
  showCaptureRibbonDescription: ["You can also run “{command}” from the command palette.", "명령 팔레트에서 ‘{command}’을 실행할 수도 있습니다."],
  captureStorage: ["Capture image storage", "캡처 이미지 저장"],
  captureStorageDescription: ["Images are saved in “{folder}” as “Example_12쪽.png”. Duplicate names receive a number.", "볼트의 ‘{folder}’ 폴더에 ‘PDF 제목_12쪽.png’ 형식으로 저장합니다. 같은 이름이 있으면 번호를 붙입니다."],
  draggingIntoNotes: ["Drag annotations into notes", "드래그로 노트에 인용 넣기"],
  expandCapture: ["Expand inserted captures by default", "삽입한 캡처 이미지 기본 펼침"],
  expandCaptureDescription: ["Set the initial state of inserted captures. Click the callout title in the note to collapse or expand it.", "삽입한 PDF 캡처의 처음 상태를 정합니다. 노트에서 인용 상자 제목을 눌러 접거나 펼칠 수 있습니다."],
  includeComment: ["Include the comment", "코멘트 포함"],
  includeCommentDescription: ["Include your comment in newly inserted quotes.", "새로 삽입하는 인용 상자에 작성한 코멘트를 넣습니다."],
  includeSource: ["Include a source link", "출처 링크 포함"],
  includeSourceDescription: ["Link to the annotation in Markdown or the corresponding PDF page.", "마크다운의 주석 위치 또는 PDF의 해당 쪽으로 이동하는 링크를 넣습니다."],
  highlights: ["Highlights", "본문 하이라이트"],
  showHighlights: ["Show highlights", "하이라이트 표시"],
  showHighlightsDescription: ["Mark annotated passages in Markdown and PDFs.", "마크다운과 PDF에서 주석이 달린 위치를 표시합니다."],
  showResolved: ["Show resolved highlights", "해결된 주석 표시"],
  showResolvedDescription: ["Keep resolved annotations highlighted in the source. Use the status filter to find them in the sidebar.", "해결된 주석의 하이라이트를 원문에 유지합니다. 사이드바에서는 상태 필터로 찾을 수 있습니다."],
  highlightColor: ["Highlight color", "하이라이트 색상"],
  highlightColorDescription: ["Use this highlight color in both Markdown and PDFs.", "마크다운과 PDF에 공통으로 적용할 색입니다."],
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
  chooseScope: ["Choose which file to show annotations for · {scope}", "주석을 볼 파일 선택 · {scope}"],
  filterStatus: ["Filter by annotation status", "주석 상태 필터"],
  open: ["Open", "미해결"],
  resolved: ["Resolved", "해결됨"],
  orphaned: ["Unlocated", "위치 없음"],
  all: ["All", "전체"],
  search: ["Search annotations", "주석 검색"],
  searchPlaceholder: ["Search annotations…", "주석 검색…"],
  noAnnotations: ["No annotations match the current view.", "현재 보기 조건에 맞는 주석이 없습니다."],
  line: ["Line {number}", "{number}줄"],
  page: ["p. {number}", "{number}쪽"],
  document: ["Document", "문서 전체"],
  pdfCapture: ["PDF capture", "PDF 캡처"],
  annotationText: ["Annotation comment", "주석 코멘트"],
  addComment: ["Add a comment…", "코멘트 입력…"],
  cancel: ["Cancel", "취소"],
  save: ["Save", "저장"],
  discard: ["Discard", "버리기"],
  discardTitle: ["Discard draft?", "초안을 버릴까요?"],
  discardMessage: ["Discard the unsaved annotation draft?", "저장하지 않은 주석 초안을 버립니다."],
  edit: ["Edit", "편집"],
  editComment: ["Edit comment", "코멘트 편집"],
  resolve: ["Resolve", "해결로 표시"],
  reopen: ["Reopen", "미해결로 되돌리기"],
  delete: ["Delete", "삭제"],
  deleteTitle: ["Delete annotation?", "주석을 삭제할까요?"],
  deleteMessage: ["The annotation will be moved to NoteNyang’s hidden trash folder.", "주석을 NoteNyang의 숨김 휴지통으로 이동합니다."],
  deleteWithCapture: ["The annotation and its capture image will be moved to NoteNyang’s hidden trash folder. Image links in other notes may stop working.", "주석과 캡처 이미지를 NoteNyang의 숨김 휴지통으로 이동합니다. 다른 노트에 삽입한 이미지 링크가 끊길 수 있습니다."],
  deleted: ["Annotation deleted.", "주석을 삭제했습니다."],
  deleteFailed: ["Could not delete the annotation.", "주석을 삭제하지 못했습니다."],
  deleteCaptureFailed: ["Could not move the capture. The annotation was kept.", "캡처를 옮기지 못해 주석을 보관했습니다."],
  deleteRestoreFailed: ["Could not move the capture. The annotation is in {path}.", "캡처를 옮기지 못했습니다. 주석은 {path}에 있습니다."],
  openAnnotation: ["Open annotation: {body}", "주석 열기 · {body}"],
  openAnnotationIn: ["Open annotation in {path}", "{path}의 주석 열기"],
  dragAnnotation: ["Drag annotation into a note", "주석을 노트로 끌어넣기"],
  annotationActions: ["Annotation actions", "주석 메뉴"],
  created: ["Created", "작성 시간"],
  ribbonAnnotations: ["Open NoteNyang annotations", "NoteNyang 주석 열기"],
  ribbonCapture: ["Capture PDF area", "PDF 영역 캡처"],
  commandOpen: ["Open annotations", "주석 열기"],
  commandMarkdown: ["Add annotation to selection", "선택한 텍스트에 주석 추가"],
  commandDocument: ["Add annotation to current document", "현재 문서 전체에 주석 추가"],
  commandPdf: ["Add annotation to PDF selection", "PDF에서 선택한 텍스트에 주석 추가"],
  commandCapture: ["Capture PDF area as annotation", "PDF 영역을 캡처해 주석 추가"],
  commandExport: ["Export all annotations to Markdown", "모든 주석을 마크다운으로 내보내기"],
  addAnnotation: ["Add NoteNyang annotation", "NoteNyang 주석 추가"],
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
  annotationSaveFailed: ["Could not save the annotation.", "주석을 저장하지 못했습니다."],
  pdfNotFound: ["PDF not found: {path}", "PDF를 찾을 수 없습니다 · {path}"],
  linkedAnnotationMissing: ["Could not find the linked NoteNyang annotation.", "연결된 NoteNyang 주석을 찾을 수 없습니다."],
  linkedSourceFailed: ["Could not open the annotation’s source.", "주석의 원문을 열지 못했습니다."],
  sourceMissing: ["Source file not found: {path}", "원문 파일을 찾을 수 없습니다 · {path}"],
  sourceLocationMissing: ["Opened the source, but the document has changed and the quoted passage could not be found.", "원문을 열었습니다. 문서가 바뀌어 인용 위치를 찾을 수 없습니다."],
  invalidAnnotation: ["NoteNyang skipped {count} invalid annotation file.", "형식이 올바르지 않은 주석 파일 {count}개를 건너뛰었습니다."],
  invalidAnnotations: ["NoteNyang skipped {count} invalid annotation files.", "형식이 올바르지 않은 주석 파일 {count}개를 건너뛰었습니다."],
  openDocumentFirst: ["Open a Markdown or PDF file first.", "먼저 마크다운이나 PDF 파일을 열어 주세요."],
  sidebarUnavailable: ["NoteNyang could not open its annotation sidebar.", "NoteNyang 주석 사이드바를 열지 못했습니다."],
  quote: ["Quote", "인용"],
  captureImage: ["Capture image", "캡처 이미지"],
  comment: ["Comment", "코멘트"],
  source: ["Source", "출처"],
  exportTitle: ["NoteNyang annotation export", "NoteNyang 주석 내보내기"],
  exportGenerated: ["Generated: {date}", "생성 시간: {date}"],
  status: ["Status", "상태"],
  type: ["Type", "유형"],
  id: ["ID", "ID"],
  markdown: ["Markdown", "마크다운"],
  pdf: ["PDF", "PDF"],
  exported: ["Annotations exported to {path}", "주석을 내보냈습니다 · {path}"],
  exportFailed: ["Could not export the annotations.", "주석을 내보내지 못했습니다."]
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
        class: `siden-personal-highlight siden-personal-highlight-${plugin.settings.highlightStyle}`,
        attributes: { "data-siden-personal-id": annotation.id }
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
  card.className = "siden-personal-margin-card siden-personal-margin-card-live";
  card.classList.toggle(
    "siden-personal-force-word-breaks",
    plugin.settings.forceLongWordBreaks
  );
  card.dataset.sidenPersonalId = annotation.id;
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
          cls: "siden-personal-editor-margin-layer"
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
          const highlight = target.closest("[data-siden-personal-id]");
          if (!highlight?.dataset.sidenPersonalId) return false;
          void plugin.activateAnnotation(highlight.dataset.sidenPersonalId);
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
    this.observer = new MutationObserver(() => this.renderVisibleHighlights());
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
      overlay.className = "siden-personal-capture-overlay";
      page.appendChild(overlay);
      return overlay;
    });
    const box = document.createElement("div");
    box.className = "siden-personal-region-selection";
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
    await this.plugin.app.workspace.getLeaf(false).openFile(file, {
      eState: { subpath: `#page=${annotation.anchor.page}` }
    });
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
        annotation.anchor.kind === "pdf" &&
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
      cls: `siden-personal-pdf-highlight-layer${activeId === annotation.id ? " is-active" : ""}`,
      attr: { "data-siden-personal-pdf-id": annotation.id }
    });
    for (const rectangle of rectangles) {
      const mark = layer.createDiv({ cls: "siden-personal-pdf-highlight" });
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
          return node.parentElement?.closest(".siden-personal-pdf-highlight-layer") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
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
        ".siden-personal-reading-margin-layer, code, pre, script, style, .math"
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
    `[data-siden-personal-id="${annotation.id}"]`
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
    mark.className = `siden-personal-highlight siden-personal-highlight-${plugin.settings.highlightStyle}`;
    mark.dataset.sidenPersonalId = annotation.id;
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
    `[data-siden-personal-id="${annotation.id}"]`
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
  preview.addClass("siden-personal-reading-preview");
  const layer = preview.createDiv({ cls: "siden-personal-reading-margin-layer" });
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
  const filePath = preview.dataset.sidenPersonalSourcePath;
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
      cls: `siden-personal-margin-card siden-personal-margin-card-reading${plugin.settings.forceLongWordBreaks ? " siden-personal-force-word-breaks" : ""}`,
      text: entry.annotation.body,
      attr: {
        "data-siden-personal-id": entry.annotation.id,
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
    if (state.plugin === plugin) schedulePreview(state);
  }
}
function processReadingView(element, context, plugin) {
  if (context.sourcePath.startsWith(".siden-personal/")) return;
  const annotations = plugin.store.forSource(context.sourcePath).filter(
    (annotation) => annotation.anchor.kind === "markdown" && (annotation.status !== "resolved" || plugin.settings.showResolved)
  );
  if (annotations.length === 0) {
    const preview = element.closest(".siden-personal-reading-preview");
    if (preview) {
      const oldState = [...previewStates].find((state) => state.preview === preview);
      if (oldState) destroyPreviewState(oldState);
      preview.classList.remove("siden-personal-reading-preview");
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
  preview.dataset.sidenPersonalSourcePath = context.sourcePath;
  schedulePreview(ensurePreviewState(preview, plugin));
}

// src/settings.ts
var import_obsidian3 = require("obsidian");
var CAPTURE_FOLDER = "NoteNyang 캡처";
var LEGACY_CAPTURE_FOLDER = "Siden Personal 캡처";
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
  showPdfCaptureRibbon: true,
  expandInsertedCapture: true,
  includeInsertedComment: true,
  includeInsertedSource: true
};
var SidenSettingTab = class extends import_obsidian3.PluginSettingTab {
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

    section(t("pdfAreaCapture"));
    toggle("showPdfCaptureRibbon", t("showCaptureRibbon"), t("showCaptureRibbonDescription", { command: t("commandCapture") }));
    row(t("captureStorage"), t("captureStorageDescription", { folder: CAPTURE_FOLDER }));

    section(t("draggingIntoNotes"));
    toggle("expandInsertedCapture", t("expandCapture"), t("expandCaptureDescription"));
    toggle("includeInsertedComment", t("includeComment"), t("includeCommentDescription"));
    toggle("includeInsertedSource", t("includeSource"), t("includeSourceDescription"));

    section(t("highlights"));
    toggle("showHighlights", t("showHighlights"), t("showHighlightsDescription"));
    toggle("showResolved", t("showResolved"), t("showResolvedDescription"));
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
var ANCHOR_START = "<!-- siden:anchor -->";
var ANCHOR_END = "<!-- /siden:anchor -->";
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
    `siden-personal-schema: ${annotation.schemaVersion}`,
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
    schemaVersion: Number(metadata["siden-personal-schema"]),
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
var DEFAULT_ANNOTATION_DIRECTORY = ".siden-personal/annotations";
var DEFAULT_TRASH_DIRECTORY = ".siden-personal/trash";
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
    return [...this.byId.values()];
  }
  forSource(sourcePath) {
    const ids = this.idsBySource.get((0, import_obsidian4.normalizePath)(sourcePath));
    if (!ids) return [];
    return [...ids].map((id) => this.byId.get(id)).filter((value) => Boolean(value));
  }
  hasSource(sourcePath) {
    return this.idsBySource.has((0, import_obsidian4.normalizePath)(sourcePath));
  }
  get(id) {
    return this.byId.get(id);
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
  delete(id) {
    const deletion = this.deletionQueue.then(() => this.moveToTrash(id));
    this.deletionQueue = deletion.catch(() => {});
    return deletion;
  }
  capturePathToTrash(annotation) {
    const { anchor } = annotation;
    if (anchor.kind !== "pdf" || typeof anchor.imagePath !== "string") return null;
    const [folder, filename, extra] = anchor.imagePath.split("/");
    if (folder !== CAPTURE_FOLDER && folder !== LEGACY_CAPTURE_FOLDER) return null;
    if (extra !== void 0 || !filename || !/^[^\\:\x00-\x1f]+\.png$/i.test(filename)) return null;
    const path = anchor.imagePath.toLowerCase();
    const shared = this.all().some((other) =>
      other.id !== annotation.id && other.anchor.kind === "pdf" &&
      typeof other.anchor.imagePath === "string" && other.anchor.imagePath.toLowerCase() === path
    );
    return shared ? null : anchor.imagePath;
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
        await adapter.rename(capturePath, `${trashBase}.png`);
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
    const annotations = this.forSource(oldPath);
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
var ANNOTATION_URI_ACTION = "siden-personal-annotation";
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
var SIDEN_VIEW_TYPE = "siden-personal-annotations";
function formatAnchorLocation(anchor, t) {
  if (anchor.kind === "markdown") return t("line", { number: anchor.startLine + 1 });
  if (anchor.kind === "pdf") return t("page", { number: anchor.page });
  return t("document");
}
var SidenSidebarView = class extends import_obsidian6.ItemView {
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
    return SIDEN_VIEW_TYPE;
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
    this.containerEl.querySelectorAll(".siden-personal-card.is-active").forEach((element) => element.removeClass("is-active"));
    if (id) {
      const card = this.containerEl.querySelector(`[data-siden-personal-id="${id}"]`);
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
      root.addClass("siden-personal-sidebar");
      this.toolbarEl = root.createDiv({ cls: "siden-personal-toolbar" });
      this.searchEl = this.createSearch(root);
      this.draftEl = root.createDiv({ cls: "siden-personal-draft-host" });
      this.listEl = root.createDiv({ cls: "siden-personal-list" });
    }
    root.toggleClass(
      "siden-personal-force-word-breaks",
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
        cls: "siden-personal-empty",
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
    const form = root.createDiv({ cls: "siden-personal-draft" });
    const anchor = draft.mode === "create" ? draft.input.anchor : draft.annotation.anchor;
    const location = formatAnchorLocation(anchor, t);
    const header = form.createDiv({ cls: "siden-personal-card-header" });
    header.createSpan({ cls: "siden-personal-card-location", text: this.plugin.settings.showCardLocation ? location : "" });
    const imageUrl = draft.mode === "create" && draft.imageDataUrl ? draft.imageDataUrl : anchor.kind === "pdf" && anchor.imagePath ? this.app.vault.adapter.getResourcePath(anchor.imagePath) : null;
    if (imageUrl) {
      form.createEl("img", { cls: "siden-personal-capture", attr: { src: imageUrl, alt: t("pdfCapture") } });
    } else if (anchor.kind !== "document") {
      form.createEl("blockquote", {
        cls: "siden-personal-card-quote",
        text: anchor.quote.exact
      });
    }
    this.renderDraftEditor(form, draft);
  }
  renderDraftEditor(form, draft) {
    const { t } = this.plugin;
    const textarea = form.createEl("textarea", {
      cls: "siden-personal-draft-textarea",
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
    const actions = form.createDiv({ cls: "siden-personal-draft-actions" });
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
    if (!draft.body.trim() && !capture) return;
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
      if (draft.imageDataUrl && draft.input.anchor.kind === "pdf" && !draft.input.anchor.imagePath) {
        try {
          const folder = CAPTURE_FOLDER;
          if (!await this.app.vault.adapter.exists(folder)) await this.app.vault.createFolder(folder);
          const imagePath = await availableCapturePath(
            folder,
            draft.input.sourcePath,
            draft.input.anchor.page,
            (path) => this.app.vault.adapter.exists(path)
          );
          const encoded = draft.imageDataUrl.split(",")[1];
          if (!encoded) throw new Error("Invalid captured image.");
          const binary = atob(encoded);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
          await this.app.vault.createBinary(imagePath, bytes.buffer);
          draft.input.anchor.imagePath = imagePath;
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
      () => this.containerEl.querySelector(".siden-personal-draft-textarea")?.focus()
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
      cls: "siden-personal-scope",
      attr: {
        type: "button",
        "aria-label": t("chooseScope", { scope: selected.label }),
        "aria-haspopup": "menu",
        title: selected.path ?? selected.label
      }
    });
    scope.createSpan({ cls: "siden-personal-scope-label", text: selected.label });
    (0, import_obsidian6.setIcon)(scope.createSpan({ cls: "siden-personal-scope-icon" }), "chevron-down");
    scope.addEventListener("click", () => {
      const menu = new import_obsidian6.Menu().setUseNativeMenu(false);
      const addScope = ({ value, label }) => menu.addItem((item) =>
        item.setTitle(label).setChecked(value === this.viewScope).onClick(() => {
          this.viewScope = value;
          this.render();
          this.containerEl.querySelector(".siden-personal-scope")?.focus();
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
      cls: "siden-personal-search",
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
      cls: `siden-personal-card siden-personal-status-${annotation.status}${annotation.id === this.activeId ? " is-active" : ""}`,
      attr: {
        "data-siden-personal-id": annotation.id,
        tabindex: "0",
        role: "group",
        "aria-label": t("openAnnotationIn", { path: annotation.sourcePath })
      }
    });
    const header = card.createDiv({ cls: "siden-personal-card-header" });
    const dragHandle = header.createEl("span", {
      cls: "siden-personal-drag-handle",
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
    header.createSpan({ cls: "siden-personal-card-location", text: this.plugin.settings.showCardLocation ? location : "" });
    if (annotation.status !== "open") {
      header.createSpan({
        cls: "siden-personal-card-status",
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
        cls: "siden-personal-capture",
        attr: { src: this.app.vault.adapter.getResourcePath(annotation.anchor.imagePath), alt: t("pdfCapture") }
      });
    } else if (annotation.anchor.kind !== "document") {
      card.createEl("blockquote", {
        cls: "siden-personal-card-quote",
        text: annotation.anchor.quote.exact
      });
    }
    const comment = card.createDiv({ cls: "siden-personal-card-comment" });
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
      const body = comment.createDiv({ cls: "siden-personal-card-body markdown-rendered" });
      void import_obsidian6.MarkdownRenderer.render(this.app, annotation.body, body, annotation.sourcePath, this);
    }
    if (this.plugin.settings.showCardDate) {
      const created = new Date(annotation.createdAt);
      comment.createEl("time", {
        cls: "siden-personal-card-date",
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
          t(capturePath ? "deleteWithCapture" : "deleteMessage"),
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
var SidenPlugin = class extends import_obsidian7.Plugin {
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
    if (this.settings.language !== "en" && this.settings.language !== "ko") {
      this.settings.language = "auto";
    }
    this.applyCssSettings();
    this.store = new AnnotationStore(this.app, void 0, () => this.refresh());
    await this.store.load();
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
    this.pdfAdapter = new PdfAdapter(this);
    this.pdfAdapter.start();
    this.registerView(
      SIDEN_VIEW_TYPE,
      (leaf) => new SidenSidebarView(leaf, this)
    );
    this.registerEditorExtension(createMarkdownExtension(this));
    this.registerMarkdownPostProcessor(
      (element, context) => processReadingView(element, context, this)
    );
    this.addSettingTab(new SidenSettingTab(this.app, this));
    this.annotationsRibbon = this.addRibbonIcon(
      "message-square-text",
      UI_TEXT.ribbonAnnotations[0],
      () => void this.openSidebar()
    );
    this.pdfCaptureRibbon = this.addRibbonIcon("scan", UI_TEXT.ribbonCapture[0], () => this.beginPdfRegionCapture());
    this.pdfCaptureRibbon.toggleClass("siden-personal-ribbon-hidden", !this.settings.showPdfCaptureRibbon);
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
    const diagnostics = this.store.getDiagnostics();
    if (diagnostics.length > 0) {
      new import_obsidian7.Notice(
        this.t(diagnostics.length === 1 ? "invalidAnnotation" : "invalidAnnotations", { count: diagnostics.length })
      );
      console.warn("NoteNyang annotation diagnostics", diagnostics);
    }
  }
  updateRibbonLabels() {
    // Keep the ribbon registration titles stable so Obsidian keeps the saved ribbon layout.
    (0, import_obsidian7.setTooltip)(this.annotationsRibbon, this.t("ribbonAnnotations"));
    (0, import_obsidian7.setTooltip)(this.pdfCaptureRibbon, this.t("ribbonCapture"));
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
          const captured = this.pdfAdapter.captureSelection();
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
    for (const command of commands) {
      if (replace) this.removeCommand(command.id);
      this.addCommand(command);
    }
  }
  onunload() {
    this.unloaded = true;
    if (this.refreshFrame !== null) window.cancelAnimationFrame(this.refreshFrame);
    for (const state of previewStates) {
      if (state.plugin === this) destroyPreviewState(state);
    }
    document.body.style.removeProperty("--siden-personal-margin-width");
    document.body.style.removeProperty("--siden-personal-highlight-color");
    document.body.style.removeProperty("--siden-personal-highlight-opacity");
    delete document.body.dataset.sidenPersonalForceWordBreaks;
  }
  updateSettings(changes) {
    const update = this.settingsQueue.then(async () => {
      const previous = this.settings;
      const next = { ...previous, ...changes };
      await this.saveData(next);
      this.settings = next;
      if (uiLanguage(next) !== uiLanguage(previous)) {
        this.registerCommands(true);
        this.updateRibbonLabels();
      }
      this.applyCssSettings();
      this.pdfCaptureRibbon?.toggleClass("siden-personal-ribbon-hidden", !next.showPdfCaptureRibbon);
      this.refresh();
    });
    this.settingsQueue = update.catch(() => {});
    return update;
  }
  async openSidebar() {
    let leaf = this.app.workspace.getLeavesOfType(SIDEN_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getRightLeaf(false);
      await leaf?.setViewState({ type: SIDEN_VIEW_TYPE, active: true });
    }
    if (!leaf) return null;
    await this.app.workspace.revealLeaf(leaf);
    this.refreshContext();
    return leaf.view instanceof SidenSidebarView ? leaf.view : null;
  }
  areMarginsSuppressed() {
    const workspace = this.app.workspace;
    return workspace.getLeavesOfType(SIDEN_VIEW_TYPE).some((leaf) => {
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
  async activateAnnotation(id) {
    const annotation = this.store.get(id);
    if (!annotation) return;
    const sidebar = await this.openSidebar();
    sidebar?.setActiveAnnotation(id);
    this.pdfAdapter.renderVisibleHighlights(id);
  }
  async navigateToAnnotation(annotation) {
    await this.activateAnnotation(annotation.id);
    if (annotation.sourceType === "pdf") {
      await this.pdfAdapter.navigate(annotation);
      return;
    }
    const file = this.app.vault.getAbstractFileByPath(annotation.sourcePath);
    if (!(file instanceof import_obsidian7.TFile)) {
      new import_obsidian7.Notice(this.t("sourceMissing", { path: annotation.sourcePath }));
      return;
    }
    const leaf = this.app.workspace.getLeaf(false);
    const anchor = annotation.anchor;
    await leaf.openFile(file, anchor.kind === "markdown" ? { active: true, state: { mode: "source" } } : { active: true });
    const view = leaf.view;
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
    const suppressed = this.areMarginsSuppressed();
    const marginsChanged = this.lastMarginsSuppressed !== suppressed;
    const contentChanged = this.contentRefreshPending;
    this.lastActivePath = currentPath;
    this.lastMarginsSuppressed = suppressed;
    this.contentRefreshPending = false;
    if (contentChanged || pathChanged) {
      for (const { view } of workspace.getLeavesOfType(SIDEN_VIEW_TYPE)) {
        if (view instanceof SidenSidebarView && (contentChanged || view.viewScope === "current")) view.refresh();
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
  beginMarkdownAnnotation(editor, view) {
    if (!view.file) return;
    const from = editor.getCursor("from");
    const to = editor.getCursor("to");
    const exact = editor.getSelection();
    if (!exact.trim()) return;
    const startOffset = editor.posToOffset(from);
    const endOffset = editor.posToOffset(to);
    const documentText = editor.getValue();
    const anchor = {
      kind: "markdown",
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
  beginPdfAnnotation(captured) {
    if (!captured) return;
    void this.beginSidebarDraft({
      sourcePath: captured.sourcePath,
      sourceType: "pdf",
      status: "open",
      body: "",
      anchor: captured.anchor
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
    const captured = this.pdfAdapter.captureSelection();
    if (!captured) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const menu = new import_obsidian7.Menu();
    menu.addItem(
      (item) => item.setTitle(this.t("copySelection")).setIcon("copy").onClick(() => void navigator.clipboard.writeText(captured.anchor.quote.exact))
    );
    menu.addItem(
      (item) => item.setTitle(this.t("addAnnotation")).setIcon("message-square-plus").onClick(() => this.beginPdfAnnotation(captured))
    );
    menu.showAtMouseEvent(event);
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
    const directory = ".siden-personal/exports";
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
    if (file.path.startsWith(".siden-personal/") || !this.store.hasSource(file.path)) return;
    await this.store.reconcileMarkdownSource(
      file.path,
      await this.app.vault.cachedRead(file)
    );
  }
  applyCssSettings() {
    document.body.style.setProperty(
      "--siden-personal-margin-width",
      `${this.settings.marginWidth}px`
    );
    document.body.style.setProperty(
      "--siden-personal-highlight-color",
      this.settings.highlightColor
    );
    document.body.style.setProperty(
      "--siden-personal-highlight-opacity",
      String(this.settings.highlightOpacity)
    );
    document.body.dataset.sidenPersonalMarginSide = this.settings.marginSide;
    document.body.dataset.sidenPersonalForceWordBreaks = String(
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
