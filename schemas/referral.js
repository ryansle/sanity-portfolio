export default {
  name: 'referral',
  title: 'Referral',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Who is the referral from?',
      validation: (rule) => rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'What is their title?',
      validation: (rule) => rule.required(),
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'referral',
      title: 'Referral',
      type: 'text',
      description: 'A short summary of your contributions here.',
      validation: (rule) => rule.required(),
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'string',
      description: 'Link to their LinkedIn profile.',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      description: 'An email for them to be reached at.',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'avatar',
    }
  }
};
