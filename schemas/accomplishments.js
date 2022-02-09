export default {
  name: 'accomplishments',
  title: 'Accomplishments',
  type: 'document',
  fields: [
    {
      name: 'accomplishment',
      title: 'Accomplishment',
      type: 'string',
      description: 'Things to flex.',
      validation: (rule) => rule.required(),
    },
  ],
};
