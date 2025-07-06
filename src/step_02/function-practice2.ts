function formatName(name: string, nickname?: string) {
  if (nickname !== undefined) {
    return `${name}(별명: ${nickname})`;
  } else {
    return name;
  }
}

console.log(formatName("오승하"));
console.log(formatName("오승하", "프론트엔드"));
