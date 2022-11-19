<template>
  <teleport to="#app">
    <transition>
      <div
        class="notification"
        v-if="getNotification() && getNotification()?.component"
      >
        <div class="content" :class="getClass()">
          <div class="icon">
            <slot name="icon"></slot>
          </div>
          <div class="close" @click="closeNotification">
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
          <div class="component">
            <component
              :is="getNotification()?.component"
              v-bind="getNotification()?.props"
            ></component>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { NotificationService } from "../../services/NotificationService";

export default defineComponent({
  name: "Notification",
  setup() {
    const notificationService = inject<NotificationService>(
      "NotificationService"
    );

    function closeNotification() {
      notificationService?.close(false);
    }

    function getNotification() {
      return notificationService?.getNotification();
    }

    function getClass() {
      return {
        [getNotification()?.options?.size as string]:
          getNotification()?.options?.size,
      };
    }

    return {
      modalService: notificationService,
      closeNotification,
      getNotification,
      getClass,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "src/scss/colors";
@import "src/scss/adaptive";

.notification {
  background: #ffffff;
  border: 1px solid $gray-100;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 12px;

  padding: 16px;
  gap: 16px;

  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1000000;

  .content {
    position: relative;
    display: flex;
    flex-direction: column;

    &.sm {
      width: 300px;
      max-width: 100%;
    }

    &.md {
      width: 400px;
      max-width: 100%;
    }

    &.lg {
      width: 500px;
      max-width: 100%;
    }
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    z-index: 1000000;
  }
}
</style>
