<template>
  <div class="card" :class="{ shadow: shadow }" :style="{ padding: padding }">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: {
    shadow: {
      type: Boolean,
      default: false,
    },
    padding: {
      type: String,
    },
  },
});
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #eaecf0;
  border-radius: 8px;
  padding: 24px;

  &.shadow {
    box-shadow: 0 1px 3px rgba(16, 24, 40, 0.1),
      0 1px 2px rgba(16, 24, 40, 0.06);
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
</style>
