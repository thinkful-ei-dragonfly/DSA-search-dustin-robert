// [3, 5, 6, 8, 11, 12, 14, 15, 17, 18] //looking for 8 //12, 6, 8 return index 3
// [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]  // looking for 16 // 12, 17, 14, 15 return false

export default class Search {
  constructor() {

    this.testArray = [
      89,
      30,
      25,
      32,
      72,
      70,
      51,
      42,
      25,
      24,
      53,
      55,
      78,
      50,
      13,
      40,
      48,
      32,
      26,
      2,
      14,
      33,
      45,
      72,
      56,
      44,
      21,
      88,
      27,
      68,
      15,
      62,
      93,
      98,
      73,
      28,
      16,
      46,
      87,
      28,
      65,
      38,
      67,
      16,
      85,
      63,
      23,
      69,
      64,
      91,
      9,
      70,
      81,
      27,
      97,
      82,
      6,
      88,
      3,
      7,
      46,
      13,
      11,
      64,
      76,
      31,
      26,
      38,
      28,
      13,
      17,
      69,
      90,
      1,
      6,
      7,
      64,
      43,
      9,
      73,
      80,
      98,
      46,
      27,
      22,
      87,
      49,
      83,
      6,
      39,
      42,
      51,
      54,
      84,
      34,
      53,
      78,
      40,
      14,
      5,
    ];
  }

  binarySearch(
    value,
    array = this.testArray.sort(),
    start = 0,
    end = array.length,
    count = 0
  ) {
    // var start = start === undefined ? 0 : start;
    // var end = end === undefined ? array.length : end;

    if (start > end) {
      return { value, index: -1, count };
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];
    count++;

    console.log(start, end);
    if (item === value) {
      console.log(array);
      return { value, index, count };
    } else if (item < value) {
      return this.binarySearch(value, array, index + 1, end, count);
    } else if (item > value) {
      return this.binarySearch(value, array, start, index - 1, count);
    }
  }

  linearSearch(item, array = this.testArray) {
    let index = 0;
    for (let i = 0; i < array.length; i++) {
      index++;
      if (array[i] === item) {
        return { value: item, index: i, count: i + 1 };
      }
    }
    return { value: item, index: -1, count: index + 1 };
  }
}
