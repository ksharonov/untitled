<template>
  <div class="progress">
    <div class="header">
      <template v-for="step of progress" v-bind:key="step.index">
        <div class="step">
          <div
            class="circle"
            :class="{
              active: step.index === activeIndex,
              inactive: activeIndex < step.index,
              done: step.index < activeIndex,
            }"
          >
            <template v-if="step.index < activeIndex">
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.4942 1.31677L6.56084 12.8334L3.39417 9.4501C2.81084 8.9001 1.89417 8.86677 1.22751 9.33344C0.577506 9.81677 0.394172 10.6668 0.794172 11.3501L4.54417 17.4501C4.91084 18.0168 5.54417 18.3668 6.26084 18.3668C6.94417 18.3668 7.59417 18.0168 7.96084 17.4501C8.56084 16.6668 20.0108 3.01677 20.0108 3.01677C21.5108 1.48344 19.6942 0.133436 18.4942 1.3001V1.31677Z"
                  fill="white"
                />
              </svg>
            </template>
            <template
              v-if="step.index === activeIndex || activeIndex < step.index"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="white" />
              </svg>
            </template>
          </div>
          <div class="information">
            <div class="title" v-if="step.title">
              <Text type="text" size="md">
                {{ step.title }}
              </Text>
            </div>
            <div class="description" v-if="step.title">
              <Text type="text" size="sm">
                {{ step.description }}
              </Text>
            </div>
          </div>
        </div>
        <div
          class="line"
          :class="{ done: step.index < activeIndex }"
          v-if="step.index < progress.length"
        ></div>
      </template>
    </div>
    <div class="steps">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, reactive } from "vue";
import Text from "../Text/Text.vue";

export interface IProgress {
  index: number;
  name?: string;
  title?: string;
  description?: string;
}

export default defineComponent({
  name: "Progress",
  components: {
    Text,
  },
  setup() {
    const state = reactive({
      progress: [] as IProgress[],
      activeIndex: 1,
      setActiveProgress: (progress: IProgress) => {
        state.activeIndex = progress.index;
      },
      nextStep: () => {
        const nextIndex = state.activeIndex + 1;
        console.log("next step", state.progress.length, nextIndex);

        if (nextIndex <= state.progress.length) {
          state.activeIndex = state.activeIndex + 1;
          console.log("state.activeIndex", state.activeIndex);
        }
      },
      prevStep: () => {
        const prevIndex = state.activeIndex + 1;
        if (prevIndex >= 0) {
          state.activeIndex = state.activeIndex - 1;
        }
      },
    });

    onMounted(() => {
      [...state.progress].reverse().forEach((progress: IProgress) => {
        state.setActiveProgress(progress);
      });
    });

    provide("progress", state);

    return state;
  },
});
</script>

<style lang="scss" scoped>
@import "src/scss/colors";

.progress {
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .line {
      flex-grow: 1;
      height: 2px;
      background: $gray-200;
      margin-bottom: 54px;
      margin-left: -50px;
      margin-right: -50px;

      &.done {
        background: $primary-600;
      }
    }

    .step {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;

      .circle {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        border-radius: 20px;
        z-index: 100;

        &.done {
          background: $primary-600;
        }

        &.active {
          box-shadow: 0px 0px 0px 4px #f4ebff;
          border: 2px solid $primary-600;
          background: $primary-600;
        }

        &.inactive {
          border: 2px solid $gray-100;
          background: $gray-100;
        }
      }

      .information {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 54px;
        width: 100px;

        .title {
          text-align: center;
          font-weight: 500;
          color: $gray-700;
        }
        .description {
          text-align: center;
          font-weight: 400;
          color: $gray-500;
        }
      }
    }

    margin-bottom: 40px;
  }

  .steps {
    display: flex;
    flex-direction: column;
  }
}
</style>
