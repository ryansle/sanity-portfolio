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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Company name or any other associated information to a project.',
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
    {
      name: 'github',
      title: 'GitHub',
      type: 'url',
      description: "The link to the repository if it's public."
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'The link to the deployed project.',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'What type of project is this?',
      options: {
        list: [
          { title: 'School', value: 'school' },
          { title: 'Work', value: 'work' },
          { title: 'Personal', value: 'personal' },
          { title: 'Freelance', value: 'freelance' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};
