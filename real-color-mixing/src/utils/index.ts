import mixbox from "mixbox";
import { RGB } from "./interfaces";

export function kubelkaMunk(first: RGB, second: RGB, t: number): RGB {
  const rgb1 = `rgb(${first.red}, ${first.green}, ${first.blue})`;
  const rgb2 = `rgb(${second.red}, ${second.green}, ${second.blue})`;
  const mixed = mixbox.lerp(rgb1, rgb2, t);
  const result = {
    red: mixed[0],
    green: mixed[1],
    blue: mixed[2]
  };
  return (result);
}

// function kubelkaMunkHelper(first: number, second: number): number {
//   // const result = 
//   //   (1 + (math.multiply(first, math.inv(second).valueOf() as number).valueOf() as number)) 
//   //   - Math.sqrt(
//   //     (math.divide(math.multiply(first, math.inv(first).valueOf() as number).valueOf() as number, math.multiply(second, second).valueOf() as number) 
//   //     + (math.multiply(2, (math.divide(first, math.inv(second).valueOf() as number).valueOf() as number)).valueOf() as number)
//   //   )
//   // );
//   return (1 + (first/second)) - Math.sqrt(((first*first)*((second*second))) + (2 * (first/second)));
// }