<template>
  <div :class="getClass()" :style="getStyle()">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { CSSProperties, defineComponent, PropType } from "vue";
import type { FontWeightProperty } from "csstype";

export enum TextSize {
  xxl = "xxl",
  xl = "xl",
  lg = "lg",
  md = "md",
  sm = "sm",
  xs = "xs",
}

export enum TextType {
  Head = "head",
  Text = "text",
}

export default defineComponent({
  name: "Text",
  props: {
    size: {
      type: String as PropType<TextSize | string>,
      default: TextSize.md,
    },
    type: {
      type: String as PropType<TextType | string>,
      default: TextType.Text,
    },
    weight: {
      type: String as PropType<FontWeightProperty | string>,
      default: "normal",
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    function getClass() {
      return {
        [props.size as string]: props.size,
        [props.type]: props.type,
        inline: props.inline,
      };
    }

    function getStyle(): CSSProperties {
      return {
        fontWeight: props.weight as FontWeightProperty,
      };
    }
    return {
      getStyle,
      getClass,
    };
  },
});
</script>

<style scoped lang="scss">
@import "src/scss/adaptive";

.inline {
  display: inline;
}

.head {
  &.xxl {
    letter-spacing: -0.02em;

    @include desktop {
      font-size: 72px;
      line-height: 90px;
    }

    @include tablet {
      font-size: 60px;
      line-height: 72px;
    }

    @include mobile {
      font-size: 48px;
      line-height: 60px;
    }
  }
  &.xl {
    letter-spacing: -0.02em;

    @include desktop {
      font-size: 60px;
      line-height: 72px;
    }

    @include tablet {
      font-size: 48px;
      line-height: 60px;
    }

    @include mobile {
      font-size: 36px;
      line-height: 44px;
    }
  }
  &.lg {
    letter-spacing: -0.02em;

    @include desktop {
      font-size: 48px;
      line-height: 60px;
    }

    @include tablet {
      font-size: 36px;
      line-height: 44px;
    }

    @include mobile {
      font-size: 30px;
      line-height: 38px;
    }
  }
  &.md {
    letter-spacing: -0.02em;

    @include desktop {
      font-size: 36px;
      line-height: 44px;
    }

    @include tablet {
      font-size: 30px;
      line-height: 38px;
    }

    @include mobile {
      font-size: 24px;
      line-height: 32px;
    }
  }
  &.sm {
    @include desktop {
      font-size: 30px;
      line-height: 38px;
    }

    @include tablet {
      font-size: 24px;
      line-height: 32px;
    }

    @include mobile {
      font-size: 22px;
      line-height: 34px;
    }
  }
  &.xs {
    @include desktop {
      font-size: 24px;
      line-height: 32px;
    }

    @include tablet {
      font-size: 22px;
      line-height: 34px;
    }

    @include mobile {
      font-size: 20px;
      line-height: 30px;
    }
  }
}
.text {
  &.xxl {
    @include desktop {
      font-size: 22px;
      line-height: 34px;
    }

    @include tablet {
      font-size: 20px;
      line-height: 30px;
    }

    @include mobile {
      font-size: 18px;
      line-height: 28px;
    }
  }
  &.xl {
    @include desktop {
      font-size: 20px;
      line-height: 30px;
    }

    @include tablet {
      font-size: 18px;
      line-height: 28px;
    }

    @include mobile {
      font-size: 16px;
      line-height: 24px;
    }
  }
  &.lg {
    @include desktop {
      font-size: 18px;
      line-height: 28px;
    }

    @include tablet {
      font-size: 16px;
      line-height: 24px;
    }

    @include mobile {
      font-size: 14px;
      line-height: 20px;
    }
  }
  &.md {
    font-size: 16px;
    line-height: 24px;
  }
  &.sm {
    font-size: 14px;
    line-height: 20px;
  }
  &.xs {
    font-size: 12px;
    line-height: 18px;
  }
}
</style>
