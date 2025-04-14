
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M16.605 4.198a.625.625 0 0 0-.867-.9L11.05 7.815 8.035 5.75a1.125 1.125 0 0 0-1.456.158l-3.9 4.158a.625.625 0 0 0 .912.856l3.826-4.08 3.012 2.062c.44.302 1.032.252 1.416-.118l4.76-4.588Zm.895 2.614a.875.875 0 0 0-1.471-.64l-4.872 4.542-2.964-2.102a1.125 1.125 0 0 0-1.48.158l-3.917 4.273a1.13 1.13 0 0 0-.296.76v1.95c0 .621.504 1.125 1.125 1.125h12.75c.622 0 1.125-.504 1.125-1.125V6.812Zm-5.565 4.886 4.315-4.024v7.954H3.75v-1.776l3.81-4.156 2.957 2.097a1.125 1.125 0 0 0 1.418-.095Z","clip-rule":"evenodd"}]]

/**
 * @component @name StackedLine
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNjA1IDQuMTk4YS42MjUuNjI1IDAgMCAwLS44NjctLjlMMTEuMDUgNy44MTUgOC4wMzUgNS43NWExLjEyNSAxLjEyNSAwIDAgMC0xLjQ1Ni4xNThsLTMuOSA0LjE1OGEuNjI1LjYyNSAwIDAgMCAuOTEyLjg1NmwzLjgyNi00LjA4IDMuMDEyIDIuMDYyYy40NC4zMDIgMS4wMzIuMjUyIDEuNDE2LS4xMThsNC43Ni00LjU4OFptLjg5NSAyLjYxNGEuODc1Ljg3NSAwIDAgMC0xLjQ3MS0uNjRsLTQuODcyIDQuNTQyLTIuOTY0LTIuMTAyYTEuMTI1IDEuMTI1IDAgMCAwLTEuNDguMTU4bC0zLjkxNyA0LjI3M2ExLjEzIDEuMTMgMCAwIDAtLjI5Ni43NnYxLjk1YzAgLjYyMS41MDQgMS4xMjUgMS4xMjUgMS4xMjVoMTIuNzVjLjYyMiAwIDEuMTI1LS41MDQgMS4xMjUtMS4xMjVWNi44MTJabS01LjU2NSA0Ljg4NiA0LjMxNS00LjAyNHY3Ljk1NEgzLjc1di0xLjc3NmwzLjgxLTQuMTU2IDIuOTU3IDIuMDk3YTEuMTI1IDEuMTI1IDAgMCAwIDEuNDE4LS4wOTVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const StackedLine = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-stacked-line',
        'staticon-StackedLine',
        className
      ),
      ...props,
    })
);
StackedLine.displayName = 'StackedLine'

export default StackedLine;
