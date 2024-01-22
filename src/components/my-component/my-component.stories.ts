import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  component: 'my-component',
};

export default meta;
type Story = StoryObj;

export const Example: Story = {
  args: {
    first: 'AAA',
    middle: 'BBB',
    last: 'CCC',
  }
}

