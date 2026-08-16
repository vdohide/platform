"use client";

import * as React from "react";
import { Boxes, Check, Code2, Copy, Files, GitBranch, Search, Settings } from "lucide-react";

import { useContentTranslation } from "@/components/i18n/localized-text";

type LanguageId = "javascript" | "curl" | "go" | "python" | "shell";

type CodeSample = {
  id: LanguageId;
  label: string;
  file: string;
  code: string;
};

const samples: CodeSample[] = [
  {
    id: "javascript",
    label: "JavaScript",
    file: "create-video.js",
    code: `const response = await fetch(
  "https://api.vdohide.com/v1/videos",
  {
    method: "POST",
    headers: {
      "Authorization": \`Bearer \${API_KEY}\`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      source_url: "https://example.com/video.mp4",
    }),
  },
);

const video = await response.json();
console.log(video.id);`,
  },
  {
    id: "curl",
    label: "cURL",
    file: "create-video.curl",
    code: `curl --request POST \\
  --url https://api.vdohide.com/v1/videos \\
  --header "Authorization: Bearer $VDOHIDE_API_KEY" \\
  --header "Content-Type: application/json" \\
  --data '{
    "source_url": "https://example.com/video.mp4"
  }'`,
  },
  {
    id: "go",
    label: "Go",
    file: "main.go",
    code: `package main

import (
  "bytes"
  "net/http"
  "os"
)

func main() {
  body := []byte(\`{
    "source_url": "https://example.com/video.mp4"
  }\`)

  req, _ := http.NewRequest("POST",
    "https://api.vdohide.com/v1/videos",
    bytes.NewBuffer(body))

  req.Header.Set("Authorization", "Bearer "+os.Getenv("VDOHIDE_API_KEY"))
  http.DefaultClient.Do(req)
}`,
  },
  {
    id: "python",
    label: "Python",
    file: "create_video.py",
    code: `import os
import requests

response = requests.post(
  "https://api.vdohide.com/v1/videos",
  headers={
    "Authorization": f"Bearer {os.environ['VDOHIDE_API_KEY']}",
    "Content-Type": "application/json",
  },
  json={
    "source_url": "https://example.com/video.mp4",
  },
)

video = response.json()
print(video["id"])`,
  },
  {
    id: "shell",
    label: "Shell",
    file: "upload.sh",
    code: `#!/usr/bin/env bash

API_URL="https://api.vdohide.com/v1/videos"
SOURCE_URL="https://example.com/video.mp4"

response=$(curl -sS -X POST "$API_URL" \\
  -H "Authorization: Bearer $VDOHIDE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d "{\\"source_url\\":\\"$SOURCE_URL\\"}")

video_id=$(echo "$response" | jq -r '.id')
echo "Created video: $video_id"`,
  },
];

const keywords = new Set([
  "const", "await", "fetch", "return", "import", "from", "package", "func", "main", "var", "if", "else",
  "response", "requests", "headers", "json", "print", "curl", "echo", "body", "method", "true", "false", "null",
]);

function tokenClass(token: string) {
  if (token.startsWith("//") || token.startsWith("#")) return "text-[#6a9955]";
  if (/^["'`]/.test(token)) return "text-[#ce9178]";
  if (/^--?|^-H$|^-X$|^-d$/.test(token)) return "text-[#9cdcfe]";
  if (/^\d/.test(token)) return "text-[#b5cea8]";
  if (keywords.has(token)) return "text-[#c586c0]";
  return "text-[#d4d4d4]";
}

function HighlightedLine({ line }: { line: string }) {
  const tokens = line.split(/(\/\/.*$|#.*$|`(?:\\.|[^`])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|--?[\w-]+|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b)/g);
  return <>{tokens.map((token, index) => <span className={tokenClass(token)} key={`${index}-${token}`}>{token}</span>)}</>;
}

export function DeveloperCodeEditor() {
  const t = useContentTranslation();
  const [language, setLanguage] = React.useState<LanguageId>("javascript");
  const [copied, setCopied] = React.useState(false);
  const sample = samples.find((item) => item.id === language) ?? samples[0]!;
  const lines = sample.code.split("\n");

  async function copyCode() {
    await navigator.clipboard.writeText(sample.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="vscode-editor flex h-[540px] flex-col overflow-hidden rounded-[20px] border border-[#2b2f39] bg-[#0d0f14] text-[#d4d4d4] shadow-[0_30px_80px_rgba(5,7,12,.3)] sm:h-[560px]">
      <div className="flex h-11 shrink-0 items-center justify-between border-b border-white/[.07] bg-[#171920] px-4">
        <div className="flex gap-2"><span className="size-2.5 rounded-full bg-[#ff5f57]" /><span className="size-2.5 rounded-full bg-[#febc2e]" /><span className="size-2.5 rounded-full bg-[#28c840]" /></div>
        <p className="text-[11px] text-[#8d919b]">VdoHide API — Visual Studio Code</p>
        <div className="w-[52px]" />
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-[42px_minmax(0,1fr)] md:grid-cols-[42px_180px_minmax(0,1fr)]">
        <aside className="flex flex-col items-center border-r border-white/[.06] bg-[#15171d] py-3 text-[#737782]" aria-label={t("Editor activity bar")}>
          <Files className="size-5 text-white" /><Search className="mt-5 size-5" /><GitBranch className="mt-5 size-5" /><Boxes className="mt-5 size-5" /><Settings className="mt-auto size-5" />
        </aside>

        <aside className="hidden overflow-y-auto border-r border-white/[.06] bg-[#111319] py-3 md:block" aria-label={t("File explorer")}>
          <p className="px-4 text-[10px] tracking-[.12em] text-[#a5a8b0] uppercase">{t("Explorer")}</p>
          <p className="mt-4 flex items-center gap-1.5 px-3 text-[11px] font-semibold text-[#c7c9ce]"><span className="text-[#777b86]">⌄</span> VDOHIDE-API</p>
          <div className="mt-2 grid text-[11px]">
            {samples.map((item) => <button type="button" className={`flex items-center gap-2 px-5 py-1.5 text-left transition-colors ${language === item.id ? "bg-[#2a2d36] text-white" : "text-[#8d919b] hover:bg-white/[.04]"}`} key={item.id} onClick={() => setLanguage(item.id)}><Code2 className="size-3.5 text-[#e8bd72]" />{item.file}</button>)}
          </div>
        </aside>

        <div className="flex min-h-0 min-w-0 flex-col bg-[#0d0f14]">
          <div className="flex shrink-0 items-center overflow-x-auto border-b border-white/[.07] bg-[#111319]">
            {samples.map((item) => <button type="button" className={`relative shrink-0 border-r border-white/[.06] px-4 py-3 text-[11px] transition-colors ${language === item.id ? "bg-[#0d0f14] text-white" : "text-[#777b86] hover:bg-white/[.03] hover:text-[#b9bbc1]"}`} key={item.id} onClick={() => setLanguage(item.id)}>{language === item.id && <span className="absolute inset-x-0 top-0 h-0.5 bg-[#64d8cb]" />}{item.label}</button>)}
            <button type="button" className="sticky right-0 ml-auto grid size-10 shrink-0 place-items-center border-l border-white/[.06] bg-[#111319] text-[#8d919b] transition-colors hover:text-white" aria-label={t(copied ? "Code copied" : "Copy code")} onClick={() => void copyCode()}>{copied ? <Check className="size-4 text-[#64d8cb]" /> : <Copy className="size-4" />}</button>
          </div>

          <div className="min-h-0 flex-1 overflow-auto py-5 font-mono text-[12px] leading-6 sm:text-[13px] sm:leading-7">
            {lines.map((line, index) => <div className="grid min-w-max grid-cols-[48px_1fr] px-4" key={`${sample.id}-${index}`}><span className="select-none pr-5 text-right text-[#4d515c]">{index + 1}</span><code className="pr-8"><HighlightedLine line={line} /></code></div>)}
          </div>
        </div>
      </div>

      <div className="flex h-6 shrink-0 items-center justify-between bg-[#20232b] px-3 text-[9px] text-[#aeb1b8]"><span className="flex items-center gap-1.5"><GitBranch className="size-3" />main</span><span>{sample.label} · UTF-8 · Ln 1, Col 1</span></div>
    </div>
  );
}
