import { Meta, StoryObj } from '@storybook/vue3';

import { UiButton } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  args: { layout: 'primary', type: 'button', isDisabled: false },
  argTypes: {
    layout: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    type: {
      options: ['submit', 'button'],
      control: { type: 'radio' },
    },
    isDisabled: {
      control: { type: 'boolean' },
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
