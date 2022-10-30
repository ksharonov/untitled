<template>
  <div class="text-field" :class="getClass()">
    <label class="label" :for="id" v-if="label">
      {{ label }}
    </label>
    <div class="wrapper">
      <div class="content">
        <input
          v-if="!textarea"
          class="input"
          :name="name"
          :id="id"
          :type="type"
          :disabled="disabled"
          :placeholder="placeholder"
          :value="modelValue"
          v-maska="mask"
          @click="onFocus"
          @blur="onBlur"
          @input="onChange"
          @focus="onFocus"
        />
        <textarea
          v-if="textarea"
          class="textarea"
          :name="name"
          :id="id"
          :disabled="disabled"
          rows="10"
          :placeholder="placeholder"
          :value="modelValue"
          v-maska="mask"
          @click="onFocus"
          @blur="onBlur"
          @input="onChange"
          @focus="onFocus"
        ></textarea>
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

export enum TextFieldSize {
  md = "md",
  lg = "lg",
}

export default defineComponent({
  name: "TextField",
  props: {
    modelValue: {
      type: String,
      default: "",
      required: true,
    },
    textarea: Boolean,
    name: String,
    id: String,
    label: {
      type: String,
    },
    type: {
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
    size: {
      type: String as PropType<TextFieldSize | string>,
    },
  },
  emits: ["onChange", "update:modelValue"],
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
      emit("onChange", value);
      emit("update:modelValue", value);
    }

    function onFocus() {
      state.focus = true;
      state.touched = true;
    }

    function onBlur() {
      state.focus = false;
    }

    function getClass() {
      return {
        [props.size as string]: props.size,
        invalid: props.invalid,
        valid: !props.invalid,
        disabled: props.disabled,
        focus: state.focus,
        blur: !state.focus,
        touched: state.touched,
        untouched: !state.touched,
        area: props.textarea,
      };
    }

    return {
      state,
      onFocus,
      onBlur,
      onChange,
      getClass,
    };
  },
});
</script>

<style scoped lang="scss">
@import "src/scss/colors";

.text-field {
  display: flex;
  flex-direction: column;

  &.lg {
    .wrapper {
      .content {
        height: 64px;
        padding: 2px 8px;
        gap: 8px;
        .input {
          font-weight: 500;
          font-size: 48px;
          line-height: 60px;
        }
      }
    }
  }

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
    cursor: not-allowed;
    .wrapper {
      background: $gray-50;
      .content {
        .input:disabled {
          background: transparent;
          cursor: not-allowed;
        }
        .textarea:disabled {
          background: transparent;
          cursor: not-allowed;
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

  &.area {
    .wrapper {
      .content {
        height: auto;
        .textarea {
          width: 100%;
          border: 0;
          resize: none;
          &:focus {
            outline: none;
          }
        }
      }
    }
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

      .input,
      .textarea {
        border: none;
        width: 100%;
        outline: none;

        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

        background: #ffffff;
        color: $gray-500;

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
