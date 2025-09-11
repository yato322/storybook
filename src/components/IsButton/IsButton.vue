<template>
  <button :class="$style.button" :data-layout="props.layout" :disabled="props.isDisabled" :type="props.type">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'outlined';
  type?: 'submit' | 'button';
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
});
</script>

<style module lang="scss">
.button {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 16px 32px;
  overflow: hidden;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-white);
  white-space: nowrap;
  text-decoration: none;
  user-select: none;
  background: var(--color-primary);
  border-radius: 16px;

  &:hover {
    color: var(--color-white);
    cursor: pointer;
    background: var(--color-primary-dark);
    border-color: var(--color-transparent);
  }

  &:disabled {
    color: var(--color-gray-dark-extra);
    cursor: default;
    background: var(--color-gray-light-extra);
  }

  &[data-layout='secondary'] {
    color: var(--color-primary);
    background-color: var(--color-transparent);
    border-color: var(--color-primary);

    &:hover {
      color: var(--color-primary-dark);
      border-color: var(--color-primary-dark);
    }

    &:disabled {
      color: var(--color-gray-dark-extra);
      cursor: default;
      background: var(--color-white);
      border-color: var(--color-gray-light-extra);
    }
  }
}
</style>
