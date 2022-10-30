<template>
  <div
    class="button"
    :class="{ [size]: size, [type]: type, disabled: disabled }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",
}

export enum ButtonType {
  default = "default",
  gray = "gray",
  primary = "primary",
  secondary = "secondary",
  error = "error",
  warning = "warning",
  success = "success",
  transparent = "transparent",
}

export default defineComponent({
  name: "Button",
  props: {
    size: {
      type: Object as PropType<ButtonSize | string>,
      default: ButtonSize.sm,
    },
    type: {
      type: Object as PropType<ButtonType | string>,
      default: ButtonType.primary,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    background: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import "src/scss/colors";
@import "src/scss/adaptive";

.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  font-weight: 500;
}

.xxl {
  @include desktop {
    padding: 16px 28px;
    gap: 12px;
    font-size: 18px;
    line-height: 28px;
  }

  @include tablet {
    padding: 12px 20px;
    gap: 8px;
    font-size: 18px;
    line-height: 28px;
  }

  @include mobile {
    padding: 10px 18px;
    gap: 8px;
    font-size: 16px;
    line-height: 24px;
  }
}

.xl {
  @include desktop {
    padding: 12px 20px;
    gap: 8px;
    font-size: 18px;
    line-height: 28px;
  }

  @include tablet {
    padding: 10px 18px;
    gap: 8px;
    font-size: 16px;
    line-height: 24px;
  }

  @include mobile {
    padding: 10px 16px;
    gap: 8px;
    font-size: 14px;
    line-height: 20px;
  }
}

.lg {
  @include desktop {
    padding: 10px 18px;
    gap: 8px;
    font-size: 16px;
    line-height: 24px;
  }

  @include tablet {
    padding: 10px 16px;
    gap: 8px;
    font-size: 14px;
    line-height: 20px;
  }

  @include mobile {
    padding: 8px 14px;
    gap: 8px;
    font-size: 14px;
    line-height: 20px;
  }
}

.md {
  @include desktop {
    padding: 10px 16px;
    gap: 8px;
    font-size: 14px;
    line-height: 20px;
  }

  @include tablet {
    padding: 8px 14px;
    gap: 8px;
    font-size: 14px;
    line-height: 20px;
  }

  @include mobile {
    padding: 8px 14px;
    gap: 8px;
    font-size: 14px;
    line-height: 20px;
  }
}

.sm {
  @include desktop {
    padding: 8px 14px;
    gap: 8px;
    font-size: 14px;
    line-height: 20px;
  }

  @include tablet {
    padding: 8px 14px;
    gap: 8px;
    font-size: 14px;
    line-height: 20px;
  }

  @include mobile {
    padding: 8px 14px;
    gap: 8px;
    font-size: 14px;
    line-height: 20px;
  }
}

.gray {
  background: $gray-800;
  border: 1px solid $gray-800;
  color: #ffffff;
}

.default {
  border: 1px solid transparent;

  &.disabled {
    color: $gray-300;
    cursor: not-allowed;
    :deep(path) {
      stroke: $gray-300 !important;
    }
  }
}

.transparent {
  background: transparent;
  border: 1px solid transparent;

  &.disabled {
    color: $gray-300;
    cursor: not-allowed;
    :deep(path) {
      stroke: $gray-300 !important;
    }
  }
}

.primary {
  background: $primary-600;
  border: 1px solid $primary-600;
  color: #ffffff;

  &:hover {
    background: $primary-700;
    border: 1px solid $primary-700;
  }

  &.disabled {
    background: $primary-200;
    border: 1px solid $primary-200;
    cursor: not-allowed;
  }
}

.secondary {
  background: #ffffff;
  color: $gray-700;
  border: 1px solid $gray-700;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

  &:hover {
    background: $gray-50;
    border: 1px solid $gray-700;
  }

  &.disabled {
    background: #ffffff;
    border: 1px solid $gray-200;
    color: $gray-300;
    cursor: not-allowed;
    :deep(path) {
      stroke: $gray-300 !important;
    }
  }
}

.warning {
  background: $warning-500;
  border: 1px solid $warning-500;
  color: #ffffff;

  &:hover {
    background: $warning-600;
    border: 1px solid $warning-600;
  }

  &.disabled {
    background: $warning-200;
    border: 1px solid $warning-200;
    cursor: not-allowed;
  }
}
</style>
