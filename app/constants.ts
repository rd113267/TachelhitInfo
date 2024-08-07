export const colors = {
  red: '#dc3832',
  green: '#307155',
  gold: 'gold',
  black: '#000',
  white: '#fff',
  cream: 'cornsilk',
};

export const ROOT_URL = 'https://www.tachelhit.info/';

export const JESUS_FILM_URI = 'https://tachelhit.info/assets/JESUS.mp4';

export const GODS_STORY = 'https://www.amsiggel.com/videos/Gods_story.mp4';

export const AMSIGGEL_UPLOADS =
  'https://www.amsiggel.com/wp-content/uploads/2020/11/';

export const AZUZD = `${AMSIGGEL_UPLOADS}azuzd_combined.mp3`;

export const NTHUNA = `${AMSIGGEL_UPLOADS}ssa_n-thuna.mp3`;

export const ISEQSITN = `${AMSIGGEL_UPLOADS}iseqsitn.mp3`;

export const MATSSENT = `${AMSIGGEL_UPLOADS}ma_tssent.mp3`;

export const AMSIGGEL_URL =
  'https://amsiggel.com/videos/amsiggel_full_length_tash_01%20(480p).mp4';

export interface Book {
  name: string;
  chapters: number[];
}

export const oldTestament: {[book: number]: Book} = {
  1: {
    name: 'isizwur',
    chapters: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
      23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 37, 39, 40, 41, 42, 43,
      44, 45, 46, 47, 48, 49, 50,
    ],
  },
  2: {
    name: 'ufuå',
    chapters: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23,
      24, 32, 33, 34, 40,
    ],
  },
  3: {
    name: 'ayt-lawi',
    chapters: [1, 3, 4, 10, 11, 13, 16, 17, 19, 20, 24, 26, 27],
  },
  4: {
    name: 'tasutin',
    chapters: [1, 5, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 21, 22, 23, 27, 28],
  },
  5: {
    name: 'tinbaãin',
    chapters: [
      1, 4, 5, 6, 7, 8, 9, 18, 19, 21, 22, 24, 27, 28, 29, 30, 31, 32, 34,
    ],
  },
  6: {
    name: 'yahušuø',
    chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 18, 21, 23, 24],
  },
  7: {
    name: 'iriyasn',
    chapters: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  },
  8: {
    name: 'raøut',
    chapters: [1, 2, 3, 4],
  },
  9: {
    name: '1 œamwil',
    chapters: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22, 24,
      31,
    ],
  },
  10: {
    name: '2 œamwil',
    chapters: [1, 2, 3, 4, 5, 6, 7, 8, 11, 12],
  },
  11: {
    name: '1 igldan',
    chapters: [2, 3, 4, 6, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22],
  },
  12: {
    name: '2 igldan',
    chapters: [2, 4, 5, 6, 16, 17, 18, 19, 20, 21, 22, 23],
  },
  13: {
    name: '1 ussan',
    chapters: [4],
  },
  14: {
    name: '2 ussan',
    chapters: [35, 36],
  },
  15: {
    name: 'øazra',
    chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  16: {
    name: 'naæamyah',
    chapters: [1, 2, 4, 5, 6, 7, 8, 9, 10, 12, 13],
  },
  17: {
    name: 'astir',
    chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  18: {
    name: 'ayyub',
    chapters: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19, 22, 23, 25, 27, 31,
      32, 33, 34, 37, 38, 39, 40, 41, 42,
    ],
  },
  19: {
    name: 'imurign',
    chapters: [
      1, 4, 8, 11, 12, 15, 16, 19, 22, 23, 24, 25, 27, 30, 32, 33, 34, 37, 40,
      42, 51, 62, 63, 66, 78, 86, 90, 95, 100, 101, 103, 107, 111, 113, 117,
      118, 119, 121, 126, 127, 128, 130, 131, 133, 138, 139, 143, 145,
    ],
  },
  20: {
    name: 'imrwasn',
    chapters: [
      1, 2, 3, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
      24, 25, 26, 27, 28, 29, 30, 31,
    ],
  },
  21: {
    name: 'amslmd',
    chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12],
  },
  22: {
    name: 'tallåat',
    chapters: [8],
  },
  23: {
    name: 'išaøyah',
    chapters: [
      1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 25, 26, 27, 30, 35, 40, 41, 42, 43, 45,
      46, 48, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 63, 64, 65, 66,
    ],
  },
  24: {
    name: 'irmiyah',
    chapters: [
      1, 2, 6, 9, 11, 14, 15, 17, 18, 19, 20, 23, 25, 29, 31, 32, 36, 38, 39,
      40, 42, 43, 44, 46, 50, 51,
    ],
  },
  25: {
    name: 'ismummÐin',
    chapters: [1, 3, 5],
  },
  26: {
    name: 'iæazqyal',
    chapters: [1, 2, 3, 4, 5, 6, 18, 33, 34, 36, 37],
  },
  27: {
    name: 'danyal',
    chapters: [1, 2, 3, 4, 5, 6, 7, 9, 12],
  },
  28: {
    name: 'hušaø',
    chapters: [1, 3, 4, 6, 11, 14],
  },
  29: {
    name: 'yuwil',
    chapters: [2],
  },
  30: {
    name: 'øamus',
    chapters: [3],
  },
  31: {
    name: 'øubadyah',
    chapters: [1],
  },
  32: {
    name: 'yunah',
    chapters: [1, 2, 3, 4],
  },
  33: {
    name: 'miçah',
    chapters: [5, 6],
  },
  34: {
    name: 'naæum',
    chapters: [1, 3],
  },
  35: {
    name: 'æabaqquq',
    chapters: [1, 2, 3],
  },
  36: {
    name: 'œafanyah',
    chapters: [1, 3],
  },
  37: {
    name: 'æaggay',
    chapters: [1],
  },
  38: {
    name: 'zakaryah',
    chapters: [2, 3, 4, 8, 9],
  },
  39: {
    name: 'malaçi',
    chapters: [3, 4],
  },
};
