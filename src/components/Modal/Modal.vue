<template>
  <teleport to="#app">
    <transition>
      <div class="modal" v-if="getModal() && getModal()?.component">
        <div class="content" :class="getClass()" :style="getOptions()?.style">
          <div class="icon" v-if="getOptions()?.icon">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="4" width="48" height="48" rx="24" fill="#D1FADF" />
              <path
                d="M23.5 28L26.5 31L32.5 25M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z"
                stroke="#039855"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="4"
                y="4"
                width="48"
                height="48"
                rx="24"
                stroke="#ECFDF3"
                stroke-width="8"
              />
            </svg>
          </div>
          <div class="close" @click="closeModal">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 16L16 28M16 16L28 28"
                stroke="#667085"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="component">
            <component
              :is="getModal()?.component"
              v-bind="getModal()?.props"
            ></component>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { ModalService } from "../../services/ModalService";

export default defineComponent({
  name: "Modal",
  setup() {
    const modalService = inject<ModalService>("ModalService");

    function closeModal() {
      modalService?.close(false);
    }

    function getModal() {
      return modalService?.getModal();
    }

    function getClass() {
      return {
        [getModal()?.options?.size as string]: getModal()?.options?.size,
      };
    }

    function getOptions() {
      return getModal()?.options;
    }

    return {
      modalService,
      closeModal,
      getModal,
      getClass,
      getOptions
    };
  },
});
</script>

<style scoped lang="scss">
@import "src/scss/colors";
@import "src/scss/adaptive";

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10000;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(52, 64, 84, 0.7);
  backdrop-filter: blur(16px);
  overflow: hidden;

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 96px 24px 24px;
    gap: 32px;
    isolation: isolate;
    background: #ffffff;
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
      0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    border-radius: 12px;
    z-index: 10000;

    &.sm {
      @include desktop {
        min-width: 500px;
        max-height: calc(100% - 120px);
      }

      @include tablet {
        min-width: 400px;
        max-height: calc(100% - 120px);
      }

      @include mobile {
        min-width: calc(100% - 48px);
        max-height: calc(100% - 120px);
        overflow: scroll;
        border-radius: unset;
        height: 100%;
      }
    }

    &.md {
      @include desktop {
        min-width: 600px;
        max-height: calc(100% - 120px);
      }

      @include tablet {
        min-width: 500px;
        max-height: calc(100% - 120px);
      }

      @include mobile {
        min-width: calc(100% - 48px);
        max-height: calc(100% - 120px);
        overflow: scroll;
        border-radius: unset;
        height: 100%;
      }
    }

    &.lg {
      @include desktop {
        min-width: 800px;
      }

      @include tablet {
        min-width: 700px;
      }

      @include mobile {
        min-width: calc(100% - 48px);
        max-height: calc(100% - 120px);
        overflow: scroll;
        border-radius: unset;
        height: 100%;
      }
    }

    .icon {
      position: absolute;
      top: 16px;
      left: 16px;
    }
    .close {
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
    }

    .component {
      width: 100%;
    }
  }
}
</style>
