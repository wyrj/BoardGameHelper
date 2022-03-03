import { computed, reactive, ref } from "vue";
import { COUNT_KEY, ROOM_TYPE } from "./type";

type DynamicInfo = {
  base: number,
  start: number,
  step: number,
}
type StaticInfo = {
  multiplier: number,
}

export function useAgricola() {
  const roomValue = ref<ROOM_TYPE>(ROOM_TYPE.WOOD);
  const dynamicCount: Array<[COUNT_KEY, DynamicInfo]> = [
    [COUNT_KEY.GRAIN, { base: 1, start: 4, step: 2 }],
    [COUNT_KEY.VEGETABLE, { base: 1, start: 2, step: 1 }],
    [COUNT_KEY.SHEEP, { base: 1, start: 4, step: 2 }],
    [COUNT_KEY.WILD_BOAR, { base: 1, start: 3, step: 2 }],
    [COUNT_KEY.CATTLE, { base: 1, start: 2, step: 2 }],
    [COUNT_KEY.FIELD, { base: 2, start: 3, step: 1 }],
    [COUNT_KEY.PASTURE, { base: 1, start: 2, step: 1 }],
    [COUNT_KEY.STABLE, { base: 1, start: 2, step: 1 }],
  ];
  const staticCount: Array<[COUNT_KEY, StaticInfo]> = [
    [COUNT_KEY.FAMILY, { multiplier: 3 }],
    [COUNT_KEY.UNUSED, { multiplier: -1 }],
    [COUNT_KEY.CARD, { multiplier: 1 }],
    [COUNT_KEY.BONUS, { multiplier: 1 }],
    [COUNT_KEY.BEG, { multiplier: -3 }],
  ];
  const countObject = reactive({
    [COUNT_KEY.GRAIN]: 0,
    [COUNT_KEY.VEGETABLE]: 0,
    [COUNT_KEY.SHEEP]: 0,
    [COUNT_KEY.WILD_BOAR]: 0,
    [COUNT_KEY.CATTLE]: 0,
    [COUNT_KEY.FIELD]: 0,
    [COUNT_KEY.PASTURE]: 0,
    [COUNT_KEY.STABLE]: 0,
    [COUNT_KEY.ROOM]: 2,
    [COUNT_KEY.FAMILY]: 2,
    [COUNT_KEY.UNUSED]: 0,
    [COUNT_KEY.CARD]: 0,
    [COUNT_KEY.BONUS]: 0,
    [COUNT_KEY.BEG]: 0,
  });

  const roomMultiplier = computed<number>(() => {
    let multiplier = 0;
    if (roomValue.value === ROOM_TYPE.CLAY) {
      multiplier = 1;
    } else if (roomValue.value === ROOM_TYPE.STONE) {
      multiplier = 2;
    }
    return multiplier;
  });
  const countScore = computed(() => {
    const result = {
      [COUNT_KEY.GRAIN]: 0,
      [COUNT_KEY.VEGETABLE]: 0,
      [COUNT_KEY.SHEEP]: 0,
      [COUNT_KEY.WILD_BOAR]: 0,
      [COUNT_KEY.CATTLE]: 0,
      [COUNT_KEY.FIELD]: 0,
      [COUNT_KEY.PASTURE]: 0,
      [COUNT_KEY.STABLE]: 0,
      [COUNT_KEY.ROOM]: 2,
      [COUNT_KEY.FAMILY]: 2,
      [COUNT_KEY.UNUSED]: 0,
      [COUNT_KEY.CARD]: 0,
      [COUNT_KEY.BONUS]: 0,
      [COUNT_KEY.BEG]: 0,
    };
    for (const [key, { start, step }] of dynamicCount) {
      const count = countObject[key];
      if (count === 0) {
        result[key] = -1;
      } else if (count < start) {
        result[key] = 1;
      } else {
        result[key] = Math.min(4, Math.floor((count - start) / step) + 2);
      }
    }
    for (const [key, { multiplier }] of staticCount) {
      const count = countObject[key];
      result[key] = count * multiplier;
    }
    result[COUNT_KEY.ROOM] = countObject[COUNT_KEY.ROOM] * roomMultiplier.value;
    return result;
  });
  const score = computed<number>(() => {
    return Object.values(countScore.value).reduce((s, v) => s + v, 0);
  });

  return { roomValue, countObject, countScore, score };
}