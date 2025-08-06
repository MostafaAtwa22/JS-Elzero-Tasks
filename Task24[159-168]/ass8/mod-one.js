import { numOne, numTwo, numThree } from "./mod-two.js";

export { numOne, numTwo, numThree };

export default function (...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
