// lib/posts.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {read} from 'to-vfile';
import {unified} from 'unified';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';

const postsDirectory = path.join(process.cwd(), "data/posts");

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const matterParse = matter(fileContents);


    // Use remark to convert markdown into HTML string
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkMath)
      .use(remarkRehype)
      .use(remarkGfm)
      .use(rehypeKatex)
      .use(rehypeStringify)
      .process(matterParse.content);

    const contentHtml = String(processedContent);

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...(matterParse.data as { date: string; title: string }),
    };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}
