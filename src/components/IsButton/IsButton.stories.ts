import { Meta, StoryObj } from '@storybook/vue3';

import { IsButton } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof IsButton> = {
  component: IsButton,
  args: {},
  argTypes: {
    layout: {
      options: ['primary', 'secondary'],
    },
    type: {
      options: ['submit', 'button'],
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof IsButton> = {
  render: (args) => ({
    components: { IsButton },
    setup: () => ({ args }),

    template: html` <IsButton v-bind="args">Текст</IsButton>`,
  }),
};
