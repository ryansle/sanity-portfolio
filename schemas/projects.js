export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validaton: (rule) => rule.required(),
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description: 'A brief summary of the project.',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'stack',
      title: 'Technology Stack',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skills' } }],
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};
