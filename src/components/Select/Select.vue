<template>
  <div
    class="select-component"
    :class="{
      invalid: invalid,
      valid: !invalid,
      disabled: disabled,
      focus: state.focus,
      blur: !state.focus,
      touched: state.touched,
      untouched: !state.touched,
    }"
  >
    <label class="label" :for="id" v-if="label">
      {{ label }}
    </label>
    <div class="wrapper">
      <div class="content">
        <select
          class="select"
          :name="name"
          :id="id"
          :value="modelValue"
          @click="onFocus"
          @blur="onBlur"
          @input="onChange"
          @focus="onFocus"
        >
          <option value="" :selected="true" hidden disabled v-if="placeholder">
            {{ placeholder }}
          </option>
          <template v-for="item of items" :key="item.value">
            <option :value="item.value">
              {{ item.title }}
            </option>
          </template>
        </select>

        <div class="icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="#667085"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div class="icons"></div>
    </div>
    <div class="hint" v-if="hint && !invalid">
      {{ hint }}
    </div>
    <div class="error" v-if="error && invalid">
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import { ISelectItem } from "./ISelect";

export default defineComponent({
  name: "Select",
  props: {
    modelValue: {
      type: String,
      default: "",
      required: true,
    },
    items: {
      type: Array as PropType<ISelectItem<any>[]>,
    },
    name: String,
    id: String,
    label: {
      type: String,
    },
    hint: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    invalid: {
      type: Boolean,
    },
    error: {
      type: String,
    },
    mask: {
      type: Object as PropType<any>,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const state = reactive({
      focus: false,
      touched: false,
    });

    function onChange(keyboardEvent: any): void {
      if (props.disabled) {
        return;
      }
      const value = (keyboardEvent.target as HTMLInputElement).value;
      emit("update:modelValue", value);
    }

    function onFocus() {
      state.focus = true;
      state.touched = true;
    }

    function onBlur() {
      state.focus = false;
    }

    return {
      state,
      onChange,
      onFocus,
      onBlur,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "src/scss/colors";

.select-component {
  display: flex;
  flex-direction: column;

  &.valid {
    .wrapper {
      border: 1px solid $gray-300;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
      transition: 200ms;
    }

    &.focus {
      .wrapper {
        border: 1px solid $primary-300;
        box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px $primary-100;
        transition: 200ms;
      }
    }
  }

  &.invalid {
    &.blur.untouched {
      .wrapper {
        border: 1px solid $gray-300;
        box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
        transition: 200ms;
      }
    }

    &.blur.touched {
      .wrapper {
        border: 1px solid $error-300;
        box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
        transition: 200ms;
      }
    }

    &.focus {
      .wrapper {
        border: 1px solid $error-300;
        box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px $error-100;
        transition: 200ms;
      }
    }
  }

  &.disabled {
    .wrapper {
      background: $gray-50;
      .content {
        .select:disabled {
          background: transparent;
        }
      }
    }
  }

  .label {
    display: flex;
    flex-direction: row;
    text-align: left;

    margin-bottom: 6px;

    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    color: $gray-700;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    background: #ffffff;

    border-radius: 8px;

    padding: 8px 12px;

    .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0;
      gap: 8px;
      height: 24px;
      flex-grow: 1;
      overflow: hidden;

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 34px;
      }

      .select {
        appearance: none;
        outline: none;
        border: none;
        width: 100%;

        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        background: #ffffff;
        color: $gray-500;

        //ToDo: Убрать позднее
        padding-left: 8px;
        margin-left: -8px;
        padding-top: 10px;
        padding-bottom: 10px;

        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 50px #ffffff inset; /* Change the color to your own background color */
          -webkit-text-fill-color: $gray-500;
        }
      }
    }
  }

  .error {
    color: $error-500;
  }

  .hint {
    color: $gray-500;
  }
}
</style>
