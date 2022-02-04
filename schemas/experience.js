export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'What company did you work for?',
      validation: (rule) => rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'What was your title at work?',
      validation: (rule) => rule.required(),
    },
    {
      name: 'dates',
      title: 'Dates Employed',
      type: 'string',
      description: 'When were you employed by this company?',
      validation: (rule) => rule.required(),
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description: 'A short summary of your contributions here.',
      validation: (rule) => rule.required(),
    },
    {
      name: 'header',
      title: 'Header',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.required(),
    },
    {
      name: 'stack',
      title: 'Technology Stack',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skills' } }],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }
  ],
};
