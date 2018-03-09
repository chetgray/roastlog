function timedeltaParse(timedeltaString) {
  let d = new Date(timedeltaString);
  return d.getTime();
}
