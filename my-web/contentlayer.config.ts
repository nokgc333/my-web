import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.md`,
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    date: {
      type: 'date',
      required: true,
    },
    published: {
      type: 'boolean',
      default: true,
    },
    images: {
      type: 'string',
      required: true,
    },
  },
  // マークダウンファイル名を、slug(ブログのid)としてそのまま使用
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post],
});
