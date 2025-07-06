interface Song {
  title: string;
  artist: string;
  feat?: string;
}

const song1: Song = {
  title: "입춘",
  artist: "한로로",
};

const song2: Song = {
  title: "어땠을까",
  artist: "Psy",
  feat: "박정현",
};

function whoFeat(song: Song) {
  if (song.feat) {
    console.log(`${song.title} 곡의 피처링은 ${song.feat} 입니다.`);
  } else {
    console.log(`${song.title} 곡의 피처링은 없습니다.`);
  }
}

whoFeat(song1);
whoFeat(song2);
