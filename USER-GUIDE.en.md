# NoteNyang User Guide

[한국어 사용설명서](USER-GUIDE.ko.md)

This guide covers creating notes in Markdown and PDFs and managing them in the right sidebar in NoteNyang 0.2.1.

## Install and choose a language

1. Download `main.js`, `manifest.json`, and `styles.css` from the same GitHub release. This release requires Obsidian 1.7.2 or later.
2. Put the three files in `.obsidian/plugins/note-nyang/` inside your vault. Create the folder if needed.
3. Restart Obsidian and enable NoteNyang under **Settings → Community plugins**.
4. Go to **Settings → NoteNyang → Interface language** and choose **English**, **한국어**, or **Follow Obsidian**.

Click the speech-bubble icon in the left ribbon or run **NoteNyang: Open notes** from the command palette to open the right sidebar.

When you upgrade from `0.1.1`, NoteNyang moves the existing `notenyang/` folder to `.notenyang/` on first launch. If both folders exist, NoteNyang opens `.notenyang/`. Check `notenyang/` if older notes are missing.

Markdown notes have a top toolbar. Use it to move between headings or open the shared note list or outline. The palette on the right sets the color for new notes. The **⋯** menu on an existing Markdown card can change that card’s color. The note button uses the selected passage, or starts a whole-document note when there is no selection.

## Create a note

| What to annotate | How to start |
| --- | --- |
| A passage in Markdown | Select text in the editor. Right-click and choose **Add NoteNyang note**, or run **NoteNyang: Add note to selection** from the command palette. |
| A passage in a PDF | Open the PDF in Obsidian and select text on one page. Right-click and choose **Add NoteNyang note**, or run **NoteNyang: Add note to PDF selection**. |
| An entire Markdown note or PDF | Open the document and run **NoteNyang: Add note to current document**. |

Write a comment in the right sidebar and click **Save**. With the comment field focused, you can also save with **Ctrl+Enter** on Windows or **Cmd+Enter** on macOS. Press **Esc** to cancel. If you have entered a comment, NoteNyang asks before discarding it.

## Capture a PDF area as an image

1. Open a PDF in Obsidian. Click **Capture PDF area** in the left ribbon or run **NoteNyang: Capture PDF area as note**.
2. Drag to select an area within one visible PDF page. Press **Esc** before completing the selection to cancel.
3. Review the image preview in the sidebar, add a comment if you want, and click **Save**. A capture can be saved with an empty comment.

Area capture is useful for tables and figures, including those in scanned PDFs where text is difficult to select. NoteNyang stores captures in `NoteNyang 이미지/캡처/` and PDF drawings in `NoteNyang 이미지/그리기/`. Each folder is created when you first save that kind of image. PNGs use names such as `Research_12쪽.png`. If that name is already taken, NoteNyang adds a number, as in `Research_12쪽_2.png`.

## Advanced PDF tools

The NoteNyang toolbar opens automatically with each PDF. Choose **More → Close advanced PDF tools** to hide the toolbar in the current PDF tab. Select the book icon in the left ribbon to reopen it there.

- **Highlights and sticky notes.** Select text, right-click, and choose **Add NoteNyang note**. Enter a comment and select **Save** in the right sidebar. You can pick a highlight color in the PDF toolbar. You can also add a sticky note at a specific location or on the current page without selecting text. Note edits save automatically. Editing extracted text preserves the original extraction.
- **Drawing and capture.** Draw with a pen or mouse, erase whole strokes, and undo changes. Enable touch drawing in the drawing settings if needed. Select **Finish** to save nearby strokes as a drawing note. To capture an area, select **Area capture** in the top toolbar, then drag a rectangle. Selecting the area returns to Read mode and opens a draft in the right sidebar. Add a comment if you like, then choose **Save**. On narrow panes, the control appears as a scan icon. Area capture and drawing work on scanned PDFs too.
- **Send notes to a note.** In the PDF note list, filter by color and type, select notes, and choose **Copy / Send to note**. Append the selected notes or filtered results to an existing Markdown note. Exported links jump to the PDF page or the exact note, reusing an open PDF tab when possible.
- **Outline and reading controls.** Use the embedded PDF outline or create your own nested entries. Under **More → Set printed page number**, enter the number printed on the current page. Citations use that numbering while links still point to the actual PDF page. The More menu also offers single-page and continuous views, margin cropping, and focus reading.

The NoteNyang ribbon, the PDF toolbar’s **Note list**, and notes opened from Markdown all use the same sidebar. In a PDF, **Outline** switches to the outline tab in that sidebar. New PDF tool records and custom outlines are stored in `.notenyang/pdf-reader/`. Captures and drawings are stored in separate subfolders under `NoteNyang 이미지/`.

The advanced tools use a PDF viewer integration designed for Obsidian 1.8.0 and later. If an open PDF tool still shows the previous language after a language change, reopen it.

## Find and manage notes

**Current file** follows the active Markdown file or PDF page. If it has no notes, the sidebar keeps the last list and shows **Previous notes**. Choose **Entire vault** to search both types together. Select a specific document or use the pin icon to keep its notes in view. The list starts with **Newest first**. For PDFs, **Page order** is also available.

Click a card’s comment to edit it with autosave. Check multiple notes, then choose **Export** to copy them as a table or callouts, or add them to an existing note.

- In **Filter and sort** next to search, filter by **Open**, **Resolved**, **Unlocated**, or **All**. The sidebar starts on **Open**. A Markdown note can appear under **Unlocated** if NoteNyang can no longer locate the quoted passage after the source changes.
- **Search notes** matches comments, saved quotes, and source file paths within the current scope and status filter.
- Use the card’s **Go to source** icon to open the Markdown source or the relevant PDF page. NoteNyang selects the Markdown passage when it can locate it.
- Open a card’s **⋯** menu to **Resolve**, **Reopen**, or **Delete** it. To see a resolved note again, switch the filter to **Resolved** or **All**.

### What happens when you delete a capture note

Deleting the last NoteNyang note that references a capture or drawing moves its PNG to `.notenyang/.trash/images/`. The file stays in place while any other NoteNyang note references it. Image links in regular Markdown files can break after the move.

## Quote a NoteNyang note in Markdown

Open the destination Markdown note in editing mode. Drag the dotted handle of a note card to the desired position in the note. A selected passage or PDF capture appears in a quote callout. For a whole-document note, the callout can include the comment and source link, depending on your settings.

Under **Settings → NoteNyang → Drag notes into notes**, choose whether to include the comment and source link and whether inserted captures start expanded. Click the callout title in the note to expand a collapsed capture.

## Customize highlights and margin cards

- Under **Highlights**, choose whether to show highlights and set their color and opacity. Markdown highlights can use background color, underline, or both. Turn on **Show resolved highlights** to display resolved notes in the source.
- **Markdown margin cards** appear to the right of the text by default in Live Preview and Reading view. While the NoteNyang list is visible in the right sidebar, the cards are hidden. They return when you collapse the sidebar if there is enough space beside the text. You can set the margin side, maximum card width, and minimum pane width.
- Under **Sidebar cards**, control source locations, creation dates, and wrapping for long words and links. Under **PDF area capture**, you can show or hide the capture button in the left ribbon.

## Export and find your files

Run **NoteNyang: Export all notes to Markdown** to create a single timestamped Markdown file with the vault’s saved notes. The export includes saved notes across sidebar scopes and status filters. It lists details such as quotes, comments, statuses, and capture links. Capture links in the report point to the existing PNGs.

| Data | Location inside the vault |
| --- | --- |
| Note records | `.notenyang/annotations/` |
| Advanced PDF notes and custom outlines | `.notenyang/pdf-reader/` |
| PDF capture images | `NoteNyang 이미지/캡처/` |
| PDF drawing images | `NoteNyang 이미지/그리기/` |
| Deleted notes and captures moved with them | `.notenyang/.trash/` |
| Markdown exports | `.notenyang/exports/` |
| NoteNyang settings | `.obsidian/plugins/note-nyang/data.json` |
