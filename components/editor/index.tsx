'use client';

import './styles.css';

import Highlight from '@tiptap/extension-highlight';
import Typography from '@tiptap/extension-typography';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit, Highlight, Typography],
    content: 'Hello World',
    immediatelyRender: false,
    editable: true,
  });

  return <EditorContent className="tiptap h-full w-full p-4" editor={editor} />;
}
