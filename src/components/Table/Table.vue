<template>
  <div class="table-component">
    <div class="header" v-if="slots.header && slots.header().length">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <table class="table">
        <slot name="content"></slot>
      </table>
    </div>
    <div class="footer" v-if="slots.footer && slots.footer().length">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Table",
  setup(_, { slots }) {
    return {
      slots,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "src/scss/colors";

.table-component {
  display: flex;
  flex-direction: column;
  //align-items: flex-start;
  padding: 0;
  background: #ffffff;
  border: 1px solid $gray-200;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.1), 0 1px 2px rgba(16, 24, 40, 0.06);
  border-radius: 8px;
  overflow: hidden;

  .header {
    display: flex;
    flex-direction: row;
  }

  .content {
    display: flex;

    .table {
      flex-grow: 1;
      border-spacing: 0;

      :deep(th) {
        background: $gray-50;
        border-bottom: 1px solid $gray-200;
        padding: 12px 24px;
      }

      :deep(td) {
        border-bottom: 1px solid $gray-200;
        padding: 16px 24px;
      }
    }
  }

  .footer {
    display: flex;
    flex-direction: row;
  }
}
</style>
