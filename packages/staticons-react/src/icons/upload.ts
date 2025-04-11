
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M6.427 9.32a.75.75 0 0 1 0-1.061l4-4a2.225 2.225 0 0 1 3.147 0l4 4a.75.75 0 0 1-1.061 1.06L12.75 5.557v9.75a.75.75 0 0 1-1.5 0v-9.75L7.487 9.319a.75.75 0 0 1-1.06 0Z"}],["path",{"fill":"#000","d":"M6.342 18.749a1.217 1.217 0 0 1-1.217-1.217v-4.537a.75.75 0 0 0-1.5 0v4.537c0 1.5 1.217 2.717 2.717 2.717h11.316c1.5 0 2.717-1.217 2.717-2.717v-4.537a.75.75 0 0 0-1.5 0v4.537c0 .672-.545 1.217-1.217 1.217H6.342Z"}]]

/**
 * @component @name Upload
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTYuNDI3IDkuMzJhLjc1Ljc1IDAgMCAxIDAtMS4wNjFsNC00YTIuMjI1IDIuMjI1IDAgMCAxIDMuMTQ3IDBsNCA0YS43NS43NSAwIDAgMS0xLjA2MSAxLjA2TDEyLjc1IDUuNTU3djkuNzVhLjc1Ljc1IDAgMCAxLTEuNSAwdi05Ljc1TDcuNDg3IDkuMzE5YS43NS43NSAwIDAgMS0xLjA2IDBaIi8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTYuMzQyIDE4Ljc0OWExLjIxNyAxLjIxNyAwIDAgMS0xLjIxNy0xLjIxN3YtNC41MzdhLjc1Ljc1IDAgMCAwLTEuNSAwdjQuNTM3YzAgMS41IDEuMjE3IDIuNzE3IDIuNzE3IDIuNzE3aDExLjMxNmMxLjUgMCAyLjcxNy0xLjIxNyAyLjcxNy0yLjcxN3YtNC41MzdhLjc1Ljc1IDAgMCAwLTEuNSAwdjQuNTM3YzAgLjY3Mi0uNTQ1IDEuMjE3LTEuMjE3IDEuMjE3SDYuMzQyWiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Upload = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-upload',
        'staticon-Upload',
        className
      ),
      ...props,
    })
);
Upload.displayName = 'Upload'

export default Upload;
