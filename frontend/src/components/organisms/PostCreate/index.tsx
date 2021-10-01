import React, { useState } from 'react';
import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './style.css';

function PostCreate() {
  const [markdown, setMarkdown] = useState<string>('');

  return (
    <div className="container">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <ReactMarkDown
        className="markdown"
        children={markdown}
        remarkPlugins={[remarkGfm]}
      />
    </div>
  );
}

export default PostCreate;