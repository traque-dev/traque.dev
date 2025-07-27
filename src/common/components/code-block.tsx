'use client';
import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';

import { Check as CheckIcon, Copy as CopyIcon } from 'lucide-react';

type CodeBlockProps = {
  language: string;
  filename: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [highlightedCode, setHighlightedCode] = useState<string>('');

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab].code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab].code : code;
  const activeLanguage = tabsExist
    ? tabs[activeTab].language || language
    : language;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  useEffect(() => {
    const highlightCode = async () => {
      if (!activeCode) return;

      try {
        const html = await codeToHtml(activeCode, {
          lang: activeLanguage,
          theme: 'vesper',
          transformers: [
            {
              code(node) {
                node.properties.style =
                  'background: transparent; padding: 0; margin: 0;';
              },
              //   line(node, line) {
              //     if (activeHighlightLines.includes(line)) {
              //       node.properties.style =
              //         'background-color: rgba(255,255,255,0.1); display: block; width: 100%;';
              //     } else {
              //       node.properties.style = 'display: block; width: 100%;';
              //     }
              //   },
            },
          ],
        });
        setHighlightedCode(html);
      } catch (error) {
        console.error('Error highlighting code:', error);
        // Fallback to plain text
        setHighlightedCode(`<pre><code>${activeCode}</code></pre>`);
      }
    };

    highlightCode();
  }, [activeCode, activeLanguage, activeHighlightLines]);

  return (
    <div className="relative w-full rounded-lg bg-neutral-900 p-4 font-mono text-sm">
      <div className="flex flex-col gap-2">
        {tabsExist && (
          <div className="flex overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 !py-2 font-sans text-xs transition-colors ${
                  activeTab === index
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
        {!tabsExist && filename && (
          <div className="flex items-center justify-between py-2">
            <div className="text-xs text-zinc-400">{filename}</div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1 font-sans text-xs text-zinc-400 transition-colors hover:text-zinc-200"
            >
              {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
            </button>
          </div>
        )}
      </div>
      <div
        className="shiki-container [&_code]:!bg-transparent [&_code]:text-sm [&_pre]:!m-0 [&_pre]:!bg-transparent [&_pre]:!p-0"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
};
