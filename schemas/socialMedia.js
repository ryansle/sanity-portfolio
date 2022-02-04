export default {
  name: 'socialMedia',
  title: 'Social Media',
  type: 'document',
  fields: [
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'platform',
    },
  },
};
