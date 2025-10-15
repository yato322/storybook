import { Meta, StoryObj } from '@storybook/vue3';

import { UiButton } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  args: {},
  argTypes: {
    layout: {
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof UiButton> = {
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args }),

    template: html` <UiButton v-bind="args">Текст</UiButton>`,
  }),
};
