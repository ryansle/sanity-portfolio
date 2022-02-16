export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'technology',
      title: 'Technology',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'experiences',
      title: 'Experiences',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Where have you practiced this skill?',
      validation: (rule) => rule.required(),
    },
    {
      name: 'confidence',
      title: 'Confidence',
      type: 'number',
      description: 'On a scale of 1-5, how confident are you with this technology?',
      validation: (rule) => rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'What type of skill is this?',
      options: {
        list: [
          { title: 'Web Development', value: 'webdev' },
          { title: 'Other', value: 'other' },
          { title: 'Random', value: 'random' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'radii',
      title: 'Radii',
      type: 'boolean',
      description: 'Display icon image within a circle?',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'technology',
      media: 'icon',
    },
  },
};
