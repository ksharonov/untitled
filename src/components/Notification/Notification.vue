<template>
  <div class="notification">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="close">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 13L13 23M13 13L23 23"
          stroke="#667085"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Notification",
});
</script>

<style lang="scss" scoped>
@import "src/scss/colors";

.notification {
  background: #ffffff;
  border: 1px solid $gray-100;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 12px;

  padding: 16px;
  gap: 16px;
}
</style>
