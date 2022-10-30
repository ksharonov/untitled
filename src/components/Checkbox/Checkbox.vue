<template>
  <div class="checkbox-component" :class="{ checked: checked }">
    <div class="checkbox">
      <input
        class="input"
        type="checkbox"
        :id="id"
        :name="name"
        :checked="checked"
        @input="onChange"
        hidden
      />
      <label :for="id">
        <svg
          width="18"
          height="18"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          v-if="checked"
        >
          <path
            d="M10 3L4.5 8.5L2 6"
            stroke="#7BE4F4"
            stroke-width="1.6666"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </label>
    </div>
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Checkbox",
  props: {
    id: String,
    name: String,
    disabled: Boolean,
    checked: Boolean,
  },
  emits: ["update:checked"],
  setup(props, { emit }) {
    function onChange(keyboardEvent: any): void {
      if (props.disabled) {
        return;
      }
      const value = (keyboardEvent.target as HTMLInputElement).checked;
      console.log("value", value);
      emit("update:checked", value);
    }

    return {
      onChange,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "src/scss/colors";

.checkbox-component {
  display: flex;
  flex-direction: row;

  &.checked {
    .checkbox {
      border: 1px solid $primary-600;

      &:hover {
        box-shadow: 0px 0px 0px 4px $primary-100;
      }

      label {
        background: $primary-50;
      }
    }
  }

  .checkbox {
    position: relative;
    width: 24px;
    height: 24px;
    background: #ffffff;
    border: 1px solid $gray-300;
    border-radius: 6px;
    cursor: pointer;
    transition: 400ms;
    overflow: hidden;
    margin-right: 12px;

    &:hover {
      background: $primary-100;
      border: 1px solid $primary-300;
      transition: 400ms;
    }

    label {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .input {
      width: 20px;
      height: 20px;
    }
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    color: $gray-600;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
