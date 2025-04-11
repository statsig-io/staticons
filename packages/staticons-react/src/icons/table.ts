
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.125 20.626a2.75 2.75 0 0 1-2.75-2.75V6.123a2.75 2.75 0 0 1 2.75-2.75h11.75a2.75 2.75 0 0 1 2.75 2.75v11.753a2.75 2.75 0 0 1-2.75 2.75H6.125Zm13-6.349v-3.272h-3.634v3.272h3.634Zm-3.634 1.5h3.634v2.099c0 .69-.56 1.25-1.25 1.25h-2.384v-3.349Zm-1.5-1.5v-3.272h-3.987v3.272h3.987Zm-3.987 1.5h3.987v3.349h-3.987v-3.349Zm-1.5-1.5v-3.272H4.875v3.272h3.629Zm-3.629 1.5h3.629v3.349H6.125c-.69 0-1.25-.56-1.25-1.25v-2.099Zm14.25-9.654v3.382H4.875V6.123c0-.69.56-1.25 1.25-1.25h11.75c.69 0 1.25.56 1.25 1.25Z","clip-rule":"evenodd"}]]

/**
 * @component @name Table
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4xMjUgMjAuNjI2YTIuNzUgMi43NSAwIDAgMS0yLjc1LTIuNzVWNi4xMjNhMi43NSAyLjc1IDAgMCAxIDIuNzUtMi43NWgxMS43NWEyLjc1IDIuNzUgMCAwIDEgMi43NSAyLjc1djExLjc1M2EyLjc1IDIuNzUgMCAwIDEtMi43NSAyLjc1SDYuMTI1Wm0xMy02LjM0OXYtMy4yNzJoLTMuNjM0djMuMjcyaDMuNjM0Wm0tMy42MzQgMS41aDMuNjM0djIuMDk5YzAgLjY5LS41NiAxLjI1LTEuMjUgMS4yNWgtMi4zODR2LTMuMzQ5Wm0tMS41LTEuNXYtMy4yNzJoLTMuOTg3djMuMjcyaDMuOTg3Wm0tMy45ODcgMS41aDMuOTg3djMuMzQ5aC0zLjk4N3YtMy4zNDlabS0xLjUtMS41di0zLjI3Mkg0Ljg3NXYzLjI3MmgzLjYyOVptLTMuNjI5IDEuNWgzLjYyOXYzLjM0OUg2LjEyNWMtLjY5IDAtMS4yNS0uNTYtMS4yNS0xLjI1di0yLjA5OVptMTQuMjUtOS42NTR2My4zODJINC44NzVWNi4xMjNjMC0uNjkuNTYtMS4yNSAxLjI1LTEuMjVoMTEuNzVjLjY5IDAgMS4yNS41NiAxLjI1IDEuMjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Table = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-table',
        'staticon-Table',
        className
      ),
      ...props,
    })
);
Table.displayName = 'Table'

export default Table;
