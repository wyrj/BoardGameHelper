<script setup lang="ts">
import { ref, computed, reactive } from 'vue';

interface RotateObject {
  x: number;
  y: number;
  z: number;
}

const rotate = reactive<RotateObject>({ x: 0, y: 0, z: 0 });
const throwing = ref<boolean>(false);

const diceStyle = computed<string>(() => {
  return `transform: rotateY(${rotate.y}deg) rotateX(${rotate.x}deg) rotateZ(${rotate.z}deg);`;
});

function randomDegree(): number {
  return Math.floor(Math.random() * 360);
}

function rotation(): void {
  rotate.x = randomDegree();
  rotate.y = randomDegree();
  rotate.z = randomDegree();
}

function findClosedAngle(angle: number): number {
  if (angle > 45 && angle <= 135) {
    return 90;
  } else if (angle > 135 && angle <= 225) {
    return 180;
  } else if (angle > 225 && angle <= 315) {
    return 270;
  } else {
    return 0;
  }
}

async function throwDice(): Promise<void> {
  if (throwing.value) {
    return;
  }
  throwing.value = true;
  const timer = setInterval(rotation, 10);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  clearInterval(timer);
  rotate.x = findClosedAngle(rotate.x);
  rotate.z = findClosedAngle(rotate.z);
  throwing.value = false;
}
</script>

<template>
  <div class="wrapper">
    <div class="dice-wrapper" :style="diceStyle" @click="throwDice">
      <div class="surface front">
        <div class="point red center" />
      </div>
      <div class="surface top">
        <div class="point left-top" />
        <div class="point right-bottom" />
      </div>
      <div class="surface right">
        <div class="point left-top" />
        <div class="point center" />
        <div class="point right-bottom" />
      </div>
      <div class="surface left">
        <div class="point red left-top" />
        <div class="point red left-bottom" />
        <div class="point red right-top" />
        <div class="point red right-bottom" />
      </div>
      <div class="surface bottom">
        <div class="point left-top" />
        <div class="point left-bottom" />
        <div class="point center" />
        <div class="point right-top" />
        <div class="point right-bottom" />
      </div>
      <div class="surface back">
        <div class="point left-top" />
        <div class="point left-center" />
        <div class="point left-bottom" />
        <div class="point right-top" />
        <div class="point right-center" />
        <div class="point right-bottom" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  height: 100%;
  perspective: 700px;
  perspective-origin: center calc(50% - 200px);
}

.dice-wrapper {
  transform-style: preserve-3d;
  transition: transform, top, left 0.1s;
  position: absolute;
  top: calc(100% - 200px);
  left: 50%;
  height: 100px;
  width: 100px;
  cursor: pointer;
}

.surface {
  height: 100px;
  width: 100px;
  line-height: 100px;
  border-radius: 4px;
  border: 1px solid black;
  position: absolute;
  background: white;
}

.point {
  position: absolute;
  height: 10px;
  width: 10px;
  box-sizing: border-box;
  border: 10px solid black;
  border-radius: 10px;

  &.red {
    border-color: red;
  }

  $top: 10px;
  $center: 40px;
  $bottom: 70px;

  &.center {
    transform: translate($center, $center);
  }

  &.left-top {
    transform: translate($top, $top);
  }

  &.left-center {
    transform: translate($top, $center);
  }

  &.left-bottom {
    transform: translate($top, $bottom);
  }

  &.right-top {
    transform: translate($bottom, $top);
  }

  &.right-center {
    transform: translate($bottom, $center);
  }

  &.right-bottom {
    transform: translate($bottom, $bottom);
  }
}

.front {
  transform: translateZ(50px);
}

.back {
  transform: translateZ(-50px) rotateY(180deg);
}

.left {
  transform: translateX(-50px) rotateY(-90deg);
}

.right {
  transform: translateX(50px) rotateY(90deg);
}

.top {
  transform: translateY(-50px) rotateX(90deg);
}

.bottom {
  transform: translateY(50px) rotateX(-90deg);
}
</style>
