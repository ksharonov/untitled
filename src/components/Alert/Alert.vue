<template>
  <div class="alert" :class="{ [type]: type }">
    <div class="icon">
      <template v-if="type === 'default' || type === 'primary'">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1130_82883)">
            <path
              d="M10.0001 13.3334V10M10.0001 6.66669H10.0084M18.3334 10C18.3334 14.6024 14.6025 18.3334 10.0001 18.3334C5.39771 18.3334 1.66675 14.6024 1.66675 10C1.66675 5.39765 5.39771 1.66669 10.0001 1.66669C14.6025 1.66669 18.3334 5.39765 18.3334 10Z"
              stroke="#475467"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1130_82883">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </template>
      <template v-if="type === 'success'">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1130_82911)">
            <path
              d="M6.25008 9.99996L8.75008 12.5L13.7501 7.49996M18.3334 9.99996C18.3334 14.6023 14.6025 18.3333 10.0001 18.3333C5.39771 18.3333 1.66675 14.6023 1.66675 9.99996C1.66675 5.39759 5.39771 1.66663 10.0001 1.66663C14.6025 1.66663 18.3334 5.39759 18.3334 9.99996Z"
              stroke="#039855"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1130_82911">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </template>
      <template v-if="type === 'warning'">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99988 7.49995V10.8333M9.99988 14.1666H10.0082M8.84598 3.24305L1.9919 15.0819C1.61173 15.7386 1.42165 16.0669 1.44974 16.3364C1.47425 16.5714 1.59739 16.785 1.78852 16.924C2.00765 17.0833 2.38704 17.0833 3.14581 17.0833H16.8539C17.6127 17.0833 17.9921 17.0833 18.2112 16.924C18.4024 16.785 18.5255 16.5714 18.55 16.3364C18.5781 16.0669 18.388 15.7386 18.0078 15.0819L11.1538 3.24305C10.775 2.58875 10.5856 2.26159 10.3385 2.15172C10.1229 2.05587 9.87684 2.05587 9.66129 2.15172C9.41419 2.26159 9.22478 2.58875 8.84598 3.24305Z"
            stroke="#DC6803"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </template>
      <template v-if="type === 'alert'">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1130_82872)">
            <path
              d="M10.0001 6.66663V9.99996M10.0001 13.3333H10.0084M18.3334 9.99996C18.3334 14.6023 14.6025 18.3333 10.0001 18.3333C5.39771 18.3333 1.66675 14.6023 1.66675 9.99996C1.66675 5.39759 5.39771 1.66663 10.0001 1.66663C14.6025 1.66663 18.3334 5.39759 18.3334 9.99996Z"
              stroke="#D92D20"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1130_82872">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </template>
    </div>
    <div class="close" @click="onClose()">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 13L13 23M13 13L23 23"
          stroke="#9E77ED"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="wrapper">
      <div class="title">
        <Text type="text" size="sm" weight="600">
          {{ title }}
        </Text>
      </div>
      <div class="description">
        <Text type="text" size="sm" weight="400">
          {{ description }}
        </Text>
      </div>
      <div class="action">
        <div class="fail" @click="onFail.onAction()">
          <Text type="text" size="sm" weight="600">
            {{ onFail.text }}
          </Text>
        </div>
        <div class="success" @click="onSuccess.onAction()">
          <Text type="text" size="sm" weight="600">
            {{ onSuccess.text }}
          </Text>
          <div class="icon">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.16675 7.00002H12.8334M12.8334 7.00002L7.00008 1.16669M12.8334 7.00002L7.00008 12.8334"
                stroke="#6941C6"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Text } from "../index";

export type AlertCloseFunction = () => void;
export type AlertActionFunction = AlertCloseFunction;

export interface AlertAction {
  text: string;
  onAction: AlertActionFunction;
}

export enum AlertType {
  default = "default",
  primary = "primary",
  error = "error",
  warning = "warning",
  success = "success",
}

export default defineComponent({
  name: "Alert",
  components: {
    Text,
  },
  props: {
    type: {
      type: Object as PropType<AlertType | string>,
      default: AlertType.default,
    },
    title: String,
    description: String,
    onSuccess: {
      type: Object as PropType<AlertAction>,
      required: true,
    },
    onFail: {
      type: Object as PropType<AlertAction>,
      required: true,
    },
    onClose: {
      type: Object as PropType<AlertCloseFunction>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "src/scss/colors";
@import "src/scss/adaptive";

.alert {
  position: relative;
  border-radius: 8px;
  border: 1px solid;

  .close {
    position: absolute;
    right: 25px;
    top: 25px;
  }

  &.default {
    border-color: $gray-300;
    background: $gray-25;

    .title {
      color: $gray-700;
    }

    .description {
      color: $gray-600;
    }
  }

  &.primary {
    border-color: $primary-300;
    background: $primary-25;

    .title {
      color: $primary-700;
    }

    .description {
      color: $primary-600;
    }
  }

  &.error {
    border-color: $error-300;
    background: $error-25;

    .title {
      color: $error-700;
    }

    .description {
      color: $error-600;
    }
  }

  &.warning {
    border-color: $warning-300;
    background: $warning-25;

    .title {
      color: $warning-700;
    }

    .description {
      color: $warning-600;
    }
  }

  &.success {
    border-color: $success-300;
    background: $success-25;

    .title {
      color: $success-700;
    }

    .description {
      color: $success-600;
    }
  }

  .wrapper {
    padding: 48px 16px;

    display: flex;
    flex-direction: column;

    .title {
      margin-bottom: 4px;
    }

    .description {
      margin-bottom: 12px;
    }

    .action {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;

      .fail {
        margin-right: 12px;
        flex-direction: row;
      }

      .action {
        display: flex;
        flex-direction: row;

        .icon {
          margin-left: 12px;
        }
      }
    }
  }
}
</style>
