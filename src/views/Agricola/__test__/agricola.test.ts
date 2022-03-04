import { COUNT_KEY, ROOM_TYPE } from '../type';
import { useAgricola } from '../useAgricola';

describe('Agricola', () => {
  const describeCases: Array<[COUNT_KEY, number[][]]> = [
    [COUNT_KEY.GRAIN, [[0, -1], [1, 1], [2, 1], [3, 1], [4, 2], [5, 2], [6, 3], [7, 3], [8, 4], [9, 4], [10, 4]]],
    [COUNT_KEY.VEGETABLE, [[0, -1], [1, 1], [2, 2], [3, 3], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4]]],
    [COUNT_KEY.SHEEP, [[0, -1], [1, 1], [2, 1], [3, 1], [4, 2], [5, 2], [6, 3], [7, 3], [8, 4], [9, 4], [10, 4]]],
    [COUNT_KEY.WILD_BOAR, [[0, -1], [1, 1], [2, 1], [3, 2], [4, 2], [5, 3], [6, 3], [7, 4], [8, 4], [9, 4], [10, 4]]],
    [COUNT_KEY.CATTLE, [[0, -1], [1, 1], [2, 2], [3, 2], [4, 3], [5, 3], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4]]],
    [COUNT_KEY.FIELD, [[0, -1], [1, -1], [2, 1], [3, 2], [4, 3], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4]]],
    [COUNT_KEY.PASTURE, [[0, -1], [1, 1], [2, 2], [3, 3], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4]]],
    [COUNT_KEY.STABLE, [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4]]],
    [COUNT_KEY.FAMILY, [[0, 0], [1, 3], [2, 6], [3, 9], [4, 12], [5, 15], [6, 15], [7, 15], [8, 15], [9, 15], [10, 15]]],
    [COUNT_KEY.UNUSED, [[0, 0], [1, -1], [2, -2], [3, -3], [4, -4], [5, -5]]],
    [COUNT_KEY.CARD, [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]],
    [COUNT_KEY.BONUS, [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]],
    [COUNT_KEY.BEG, [[0, 0], [1, -3], [2, -6], [3, -9], [4, -12], [5, -15]]],
  ];
  describe.each(describeCases)('%s', (key, testCases) => {
    test.each(testCases)('%s', (count, score) => {
      const { countObject, countScore } = useAgricola();
      countObject[key] = count;
      expect(countScore.value[key] === score).toBeTruthy();
    });
  });

  describe('room', () => {
    const cases: Array<[ROOM_TYPE, number, number]> = [
      [ROOM_TYPE.WOOD, 2, 0],
      [ROOM_TYPE.WOOD, 3, 0],
      [ROOM_TYPE.WOOD, 4, 0],
      [ROOM_TYPE.WOOD, 5, 0],
      [ROOM_TYPE.CLAY, 2, 2],
      [ROOM_TYPE.CLAY, 3, 3],
      [ROOM_TYPE.CLAY, 4, 4],
      [ROOM_TYPE.CLAY, 5, 5],
      [ROOM_TYPE.STONE, 2, 4],
      [ROOM_TYPE.STONE, 3, 6],
      [ROOM_TYPE.STONE, 4, 8],
      [ROOM_TYPE.STONE, 5, 10],
    ];
    test.each(cases)('%s, %s', (roomType, roomCount, score) => {
      const { countObject, countScore, roomValue } = useAgricola();
      roomValue.value = roomType;
      countObject.room = roomCount;
      expect(countScore.value.room).toBe(score);
    });
  });
});