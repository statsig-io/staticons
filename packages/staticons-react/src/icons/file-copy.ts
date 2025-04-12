
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.053.503c-1.2 0-2.174.973-2.174 2.174v.26h-.206c-1.2 0-2.174.974-2.174 2.174v8.213c0 1.2.973 2.174 2.174 2.174h6.284c1.2 0 2.174-.973 2.174-2.174v-.26h.196c1.2 0 2.174-.974 2.174-2.174V5.878c0-.587-.238-1.15-.66-1.558L10.55 1.118A2.174 2.174 0 0 0 9.033.503h-2.98Zm6.078 11.31h.196c.51 0 .924-.413.924-.923V5.878a.924.924 0 0 0-.28-.662L9.677 2.014a.924.924 0 0 0-.644-.261h-2.98a.924.924 0 0 0-.924.924v.26h1.53c.566 0 1.109.22 1.515.615l3.297 3.202c.422.409.66.972.66 1.56v3.5ZM3.673 4.188a.924.924 0 0 0-.924.924v8.213c0 .51.414.924.924.924h6.284c.51 0 .924-.414.924-.924V8.537H7.99a1.625 1.625 0 0 1-1.624-1.625V4.187H3.673Zm3.944.566 2.61 2.534H7.991a.375.375 0 0 1-.375-.375v-2.16Z","clip-rule":"evenodd"}]]

/**
 * @component @name FileCopy
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4wNTMuNTAzYy0xLjIgMC0yLjE3NC45NzMtMi4xNzQgMi4xNzR2LjI2aC0uMjA2Yy0xLjIgMC0yLjE3NC45NzQtMi4xNzQgMi4xNzR2OC4yMTNjMCAxLjIuOTczIDIuMTc0IDIuMTc0IDIuMTc0aDYuMjg0YzEuMiAwIDIuMTc0LS45NzMgMi4xNzQtMi4xNzR2LS4yNmguMTk2YzEuMiAwIDIuMTc0LS45NzQgMi4xNzQtMi4xNzRWNS44NzhjMC0uNTg3LS4yMzgtMS4xNS0uNjYtMS41NThMMTAuNTUgMS4xMThBMi4xNzQgMi4xNzQgMCAwIDAgOS4wMzMuNTAzaC0yLjk4Wm02LjA3OCAxMS4zMWguMTk2Yy41MSAwIC45MjQtLjQxMy45MjQtLjkyM1Y1Ljg3OGEuOTI0LjkyNCAwIDAgMC0uMjgtLjY2Mkw5LjY3NyAyLjAxNGEuOTI0LjkyNCAwIDAgMC0uNjQ0LS4yNjFoLTIuOThhLjkyNC45MjQgMCAwIDAtLjkyNC45MjR2LjI2aDEuNTNjLjU2NiAwIDEuMTA5LjIyIDEuNTE1LjYxNWwzLjI5NyAzLjIwMmMuNDIyLjQwOS42Ni45NzIuNjYgMS41NnYzLjVaTTMuNjczIDQuMTg4YS45MjQuOTI0IDAgMCAwLS45MjQuOTI0djguMjEzYzAgLjUxLjQxNC45MjQuOTI0LjkyNGg2LjI4NGMuNTEgMCAuOTI0LS40MTQuOTI0LS45MjRWOC41MzdINy45OWExLjYyNSAxLjYyNSAwIDAgMS0xLjYyNC0xLjYyNVY0LjE4N0gzLjY3M1ptMy45NDQuNTY2IDIuNjEgMi41MzRINy45OTFhLjM3NS4zNzUgMCAwIDEtLjM3NS0uMzc1di0yLjE2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FileCopy = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-file-copy',
        'staticon-FileCopy',
        className
      ),
      ...props,
    })
);
FileCopy.displayName = 'FileCopy'

export default FileCopy;
