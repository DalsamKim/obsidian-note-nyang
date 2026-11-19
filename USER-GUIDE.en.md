# NoteNyang User Guide

[한국어 사용설명서](USER-GUIDE.ko.md)

This guide covers creating annotations in Markdown and PDFs and managing them in the right sidebar in NoteNyang 0.1.1.

## Install and choose a language

1. Download `main.js`, `manifest.json`, and `styles.css` from the same GitHub release. This release requires Obsidian 1.7.2 or later.
2. Put the three files in `.obsidian/plugins/note-nyang/` inside your vault. Create the folder if needed.
3. Restart Obsidian and enable NoteNyang under **Settings → Community plugins**.
4. Go to **Settings → NoteNyang → Interface language** and choose **English**, **한국어**, or **Follow Obsidian**.

Click the speech-bubble icon in the left ribbon or run **NoteNyang: Open annotations** from the command palette to open the right sidebar.

## Create an annotation

| What to annotate | How to start |
| --- | --- |
| A passage in Markdown | Select text in the editor. Right-click and choose **Add NoteNyang annotation**, or run **NoteNyang: Add annotation to selection** from the command palette. |
| A passage in a PDF | Open the PDF in Obsidian and select text on one page. Right-click and choose **Add NoteNyang annotation**, or run **NoteNyang: Add annotation to PDF selection**. |
| An entire Markdown note or PDF | Open the document and run **NoteNyang: Add annotation to current document**. |

Write a comment in the right sidebar and click **Save**. With the comment field focused, you can also save with **Ctrl+Enter** on Windows or **Cmd+Enter** on macOS. Press **Esc** to cancel. If you have entered a comment, NoteNyang asks before discarding it.

## Capture a PDF area as an image

1. Open a PDF in Obsidian. Click **Capture PDF area** in the left ribbon or run **NoteNyang: Capture PDF area as annotation**.
2. Drag to select an area within one visible PDF page. Press **Esc** before completing the selection to cancel.
3. Review the image preview in the sidebar, add a comment if you want, and click **Save**. A capture can be saved with an empty comment.

Area capture is useful for tables and figures, including those in scanned PDFs where text is difficult to select. NoteNyang creates `NoteNyang 캡처/` at the vault root when you save your first capture. PNGs use names such as `Research_12쪽.png`. If that name is already taken, NoteNyang adds a number, as in `Research_12쪽_2.png`.

## Find and manage annotations

- Use the scope menu to show the **Current file**, the **Entire vault**, or a specific file that has annotations.
- Annotations appear newest first, based on when they were created.
- Filter by **Open**, **Resolved**, **Unlocated**, or **All**. The sidebar starts on **Open**. A Markdown annotation can appear under **Unlocated** if NoteNyang can no longer locate the quoted passage after the source changes.
- **Search annotations** matches comments, saved quotes, and source file paths within the current scope and status filter.
- Click the quote or capture image to open the Markdown source or the relevant PDF page. NoteNyang selects the Markdown passage when it can locate it. In this version, clicking a whole-document PDF annotation does not open the PDF.
- Click the gray comment area to edit it directly in the card, then click **Save**. **⋯ → Edit** opens the same editor.
- Open a card’s **⋯** menu to **Resolve**, **Reopen**, or **Delete** it. To see a resolved annotation again, switch the filter to **Resolved** or **All**.

### What happens when you delete a capture annotation

Choose **⋯ → Delete** and confirm to move the annotation to the vault’s hidden `notenyang/.trash/` folder. If the linked PNG is in `NoteNyang 캡처/`, NoteNyang moves that image too. An image shared by multiple NoteNyang annotations moves when you delete the last annotation that refers to it. Image embeds in regular Markdown notes can break after the move.

## Insert an annotation into another note

Open the destination Markdown note in editing mode. Drag the dotted handle of an annotation card to the desired position in the note. A selected passage or PDF capture appears in a quote callout. For a whole-document annotation, the callout can include the comment and source link, depending on your settings.

Under **Settings → NoteNyang → Drag annotations into notes**, choose whether to include the comment and source link and whether inserted captures start expanded. Click the callout title in the note to expand a collapsed capture.

## Customize highlights and margin cards

- Under **Highlights**, choose whether to show highlights and set their color and opacity. Markdown highlights can use background color, underline, or both. Turn on **Show resolved highlights** to display resolved annotations in the source.
- **Markdown margin cards** appear to the right of the text by default in Live Preview and Reading view. While the NoteNyang list is visible in the right sidebar, the cards are hidden. They return when you collapse the sidebar if there is enough space beside the text. You can set the margin side, maximum card width, and minimum pane width.
- Under **Sidebar cards**, control source locations, creation dates, and wrapping for long words and links. Under **PDF area capture**, you can show or hide the capture button in the left ribbon.

## Export and find your files

Run **NoteNyang: Export all annotations to Markdown** to create a single timestamped Markdown file with the vault’s saved annotations. The export includes saved annotations across sidebar scopes and status filters. It lists details such as quotes, comments, statuses, and capture links. Capture links in the report point to the existing PNGs.

| Data | Location inside the vault |
| --- | --- |
| Annotation records | `notenyang/annotations/` |
| PDF capture images | `NoteNyang 캡처/` |
| Deleted annotations and captures moved with them | `notenyang/.trash/` |
| Markdown exports | `notenyang/exports/` |
| NoteNyang settings | `.obsidian/plugins/note-nyang/data.json` |
