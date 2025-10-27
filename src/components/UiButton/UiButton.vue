<template>
  <button :class="$style.button" :data-layout="props.layout" :disabled="props.isDisabled" :type="props.type">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary';
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
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 16px 32px;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-white);
  cursor: pointer;
  background: var(--color-primary);
  border: 1px solid transparent;
  border-radius: 16px;
  transition: all 200ms ease;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &[data-layout='secondary'] {
    color: var(--color-black);
    background-color: var(--color-secondary);
    border-color: var(--color-secondary);

    &:hover:not(:disabled) {
      background-color: var(--color-primary-hover);
      border-color: var(--color-primary-hover);
    }
  }
}
</style>
