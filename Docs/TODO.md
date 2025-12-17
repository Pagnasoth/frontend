# Project TODOs

This file mirrors the internal todo tracker.

- [x] **Add ⚙️ Auto language button**: Insert an auto-detection language item named "⚙️ Auto" before JavaScript in `src/components/Languages.tsx` and keep styling consistent.
- [x] **Remove duplicate gear emoji**: Remove the small ⚙️ included in the `name` field so only the icon renders; update `src/components/Languages.tsx`.
- [x] **Add Auto option to CodeInput language selection**: Prepend an `Auto` option with gear icon before JavaScript in `src/components/CodeInput.tsx` language badges so it appears in the selection UI before generating analysis.
- [x] **Add AI Model dropdown**: Add an AI Model selector dropdown before the Analyze button in `src/components/CodeInput.tsx`, defaulting to 'Gemini (API)'.
- [x] **Create backend and integrate frontend**: Add `server/` backend with `/api/analyze` endpoint and update `src/components/CodeInput.tsx` to POST to the backend (Python preferred).
- [x] **Sanitize env and wire Gemini + proxy**: Remove exposed keys from `server/.env.example`, improve server Gemini handling to support Google Gemini endpoints safely, and add a Vite proxy in `vite.config.ts` to forward `/api` to the backend.
- [x] **Add Python FastAPI backend**: Add a Python FastAPI implementation at `server/app.py`, plus `requirements-python.txt`, `.gitignore`, and README instructions. Node backend files were removed in favor of Python.
- [x] **Keep only Python backend**: Node backend files removed; use `server/app.py` (FastAPI) as the canonical backend.
- [x] **Export todo list to Docs**: Write the current in-repo todo tracker to `Docs/TODO.md` (this file).

Last updated: December 16, 2025
