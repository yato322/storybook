import { StoryContext } from '@storybook/vue3';
import { useArgs } from 'storybook/preview-api';
import { PartialStoryFn } from 'storybook/internal/types';

import '../src/styles/main.scss';

export const parameters = { controls: { disableSaveFromUI: true } };

export const decorators = [
  (story: PartialStoryFn, context: StoryContext) => {
    const [args, updateArgs] = useArgs();

    return story({ ...context, updateArgs, args });
  },
];
