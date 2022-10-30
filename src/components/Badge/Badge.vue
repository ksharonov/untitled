<template>
  <div class="badge" :style="{ background: background }" :class="getClass()">
    <div class="before" v-if="false"></div>
    <div class="content" :style="{ color: color }">
      <slot></slot>
    </div>
    <div class="after" v-if="false"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export enum BadgeSize {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export default defineComponent({
  name: "Badge",
  props: {
    background: String,
    color: String,
    size: String as PropType<BadgeSize | string>,
  },
  setup(props) {
    function getClass() {
      return {
        [props.size as string]: props.size,
      };
    }

    return {
      getClass,
    };
  },
});
</script>

<style scoped lang="scss">
.badge {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  cursor: pointer;
  user-select: none;

  &.sm {
    padding: 2px 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    min-width: 48px;
    min-height: 22px;
  }

  &.md {
    padding: 2px 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    min-width: 57px;
    min-height: 24px;
  }

  &.lg {
    padding: 4px 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    min-width: 61px;
    min-height: 28px;
  }
}
</style>
