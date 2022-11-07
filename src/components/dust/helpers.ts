export function moveDust(
  points: number[],
  minLeft: number,
  maxRight: number,
  speed: number
) {
  return points.map((position, i) => {
    if (i % 3 === 0) {
      return position > minLeft ? position - speed : maxRight;
    }
    return position;
  });
}
