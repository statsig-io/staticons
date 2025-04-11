
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M11.565 4.93c0-1.524-.864-2.576-1.953-2.858a2.113 2.113 0 0 0-1.603.208c-.505.296-.86.803-.993 1.451-.482 2.345-1.217 3.752-1.92 5.097l-.247.473c-.796 1.545-1.474 3.1-1.474 5.794v.154a6.75 6.75 0 0 0 6.75 6.75h7.474a2.237 2.237 0 0 0 1.871-3.46 2.232 2.232 0 0 0 .414-3.058 2.235 2.235 0 0 0 .176-3.151 2.237 2.237 0 0 0-1.672-3.722h-6.414c-.413 0-.68-.316-.644-.67l.042-.412c.09-.879.193-1.88.193-2.597Zm2.78 6.651a.75.75 0 0 0 .036 1.5h4.016a.736.736 0 0 1-.008 1.472h-4.006a.747.747 0 0 0-.402.117.75.75 0 0 0 .397 1.386h3.694a.737.737 0 0 1 0 1.473h-.365a2.3 2.3 0 0 0-.108-.003H14.38a.747.747 0 0 0-.5.192.75.75 0 0 0 .498 1.311h3.282a.737.737 0 0 1-.062 1.47h-7.474a5.25 5.25 0 0 1-5.25-5.25v-.154c0-2.367.572-3.68 1.308-5.107l.242-.466c.711-1.358 1.534-2.93 2.06-5.489.056-.271.178-.398.283-.46a.616.616 0 0 1 .469-.048c.348.09.828.48.828 1.404 0 .633-.093 1.54-.184 2.43l-.044.428c-.13 1.294.894 2.32 2.137 2.32h6.414a.736.736 0 0 1 .008 1.473h-4.013a.75.75 0 0 0-.037.001Z","clip-rule":"evenodd"}]]

/**
 * @component @name ThumbsUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNTY1IDQuOTNjMC0xLjUyNC0uODY0LTIuNTc2LTEuOTUzLTIuODU4YTIuMTEzIDIuMTEzIDAgMCAwLTEuNjAzLjIwOGMtLjUwNS4yOTYtLjg2LjgwMy0uOTkzIDEuNDUxLS40ODIgMi4zNDUtMS4yMTcgMy43NTItMS45MiA1LjA5N2wtLjI0Ny40NzNjLS43OTYgMS41NDUtMS40NzQgMy4xLTEuNDc0IDUuNzk0di4xNTRhNi43NSA2Ljc1IDAgMCAwIDYuNzUgNi43NWg3LjQ3NGEyLjIzNyAyLjIzNyAwIDAgMCAxLjg3MS0zLjQ2IDIuMjMyIDIuMjMyIDAgMCAwIC40MTQtMy4wNTggMi4yMzUgMi4yMzUgMCAwIDAgLjE3Ni0zLjE1MSAyLjIzNyAyLjIzNyAwIDAgMC0xLjY3Mi0zLjcyMmgtNi40MTRjLS40MTMgMC0uNjgtLjMxNi0uNjQ0LS42N2wuMDQyLS40MTJjLjA5LS44NzkuMTkzLTEuODguMTkzLTIuNTk3Wm0yLjc4IDYuNjUxYS43NS43NSAwIDAgMCAuMDM2IDEuNWg0LjAxNmEuNzM2LjczNiAwIDAgMS0uMDA4IDEuNDcyaC00LjAwNmEuNzQ3Ljc0NyAwIDAgMC0uNDAyLjExNy43NS43NSAwIDAgMCAuMzk3IDEuMzg2aDMuNjk0YS43MzcuNzM3IDAgMCAxIDAgMS40NzNoLS4zNjVhMi4zIDIuMyAwIDAgMC0uMTA4LS4wMDNIMTQuMzhhLjc0Ny43NDcgMCAwIDAtLjUuMTkyLjc1Ljc1IDAgMCAwIC40OTggMS4zMTFoMy4yODJhLjczNy43MzcgMCAwIDEtLjA2MiAxLjQ3aC03LjQ3NGE1LjI1IDUuMjUgMCAwIDEtNS4yNS01LjI1di0uMTU0YzAtMi4zNjcuNTcyLTMuNjggMS4zMDgtNS4xMDdsLjI0Mi0uNDY2Yy43MTEtMS4zNTggMS41MzQtMi45MyAyLjA2LTUuNDg5LjA1Ni0uMjcxLjE3OC0uMzk4LjI4My0uNDZhLjYxNi42MTYgMCAwIDEgLjQ2OS0uMDQ4Yy4zNDguMDkuODI4LjQ4LjgyOCAxLjQwNCAwIC42MzMtLjA5MyAxLjU0LS4xODQgMi40M2wtLjA0NC40MjhjLS4xMyAxLjI5NC44OTQgMi4zMiAyLjEzNyAyLjMyaDYuNDE0YS43MzYuNzM2IDAgMCAxIC4wMDggMS40NzNoLTQuMDEzYS43NS43NSAwIDAgMC0uMDM3LjAwMVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ThumbsUp = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-thumbs-up',
        'staticon-ThumbsUp',
        className
      ),
      ...props,
    })
);
ThumbsUp.displayName = 'ThumbsUp'

export default ThumbsUp;
