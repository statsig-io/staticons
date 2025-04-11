
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.763 5.161a2.75 2.75 0 0 1 2.743-2.758h3.775c.721 0 1.414.286 1.928.796l4.206 4.177c.522.518.816 1.225.816 1.962v6.57a2.75 2.75 0 0 1-2.744 2.758h-.29v.23a2.75 2.75 0 0 1-2.743 2.757h-7.98a2.75 2.75 0 0 1-2.744-2.758V8.148A2.75 2.75 0 0 1 6.474 5.39h.29v-.229Zm10.724 12h-.29v-4.836c0-.737-.293-1.444-.815-1.962l-4.206-4.177a2.736 2.736 0 0 0-1.928-.796H8.26v-.229a1.25 1.25 0 0 1 1.246-1.253h3.775c.328 0 .643.13.876.361l4.206 4.177c.238.236.371.557.371.892v6.57a1.25 1.25 0 0 1-1.247 1.254ZM6.474 6.896a1.25 1.25 0 0 0-1.247 1.253v10.747a1.25 1.25 0 0 0 1.247 1.254h7.98a1.25 1.25 0 0 0 1.247-1.254V12.57h-3.515a2.25 2.25 0 0 1-2.244-2.257V6.895H6.474Zm4.964.673v2.745a.75.75 0 0 0 .748.752h2.774l-3.522-3.497Z","clip-rule":"evenodd"}]]

/**
 * @component @name FileCopy
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi43NjMgNS4xNjFhMi43NSAyLjc1IDAgMCAxIDIuNzQzLTIuNzU4aDMuNzc1Yy43MjEgMCAxLjQxNC4yODYgMS45MjguNzk2bDQuMjA2IDQuMTc3Yy41MjIuNTE4LjgxNiAxLjIyNS44MTYgMS45NjJ2Ni41N2EyLjc1IDIuNzUgMCAwIDEtMi43NDQgMi43NThoLS4yOXYuMjNhMi43NSAyLjc1IDAgMCAxLTIuNzQzIDIuNzU3aC03Ljk4YTIuNzUgMi43NSAwIDAgMS0yLjc0NC0yLjc1OFY4LjE0OEEyLjc1IDIuNzUgMCAwIDEgNi40NzQgNS4zOWguMjl2LS4yMjlabTEwLjcyNCAxMmgtLjI5di00LjgzNmMwLS43MzctLjI5My0xLjQ0NC0uODE1LTEuOTYybC00LjIwNi00LjE3N2EyLjczNiAyLjczNiAwIDAgMC0xLjkyOC0uNzk2SDguMjZ2LS4yMjlhMS4yNSAxLjI1IDAgMCAxIDEuMjQ2LTEuMjUzaDMuNzc1Yy4zMjggMCAuNjQzLjEzLjg3Ni4zNjFsNC4yMDYgNC4xNzdjLjIzOC4yMzYuMzcxLjU1Ny4zNzEuODkydjYuNTdhMS4yNSAxLjI1IDAgMCAxLTEuMjQ3IDEuMjU0Wk02LjQ3NCA2Ljg5NmExLjI1IDEuMjUgMCAwIDAtMS4yNDcgMS4yNTN2MTAuNzQ3YTEuMjUgMS4yNSAwIDAgMCAxLjI0NyAxLjI1NGg3Ljk4YTEuMjUgMS4yNSAwIDAgMCAxLjI0Ny0xLjI1NFYxMi41N2gtMy41MTVhMi4yNSAyLjI1IDAgMCAxLTIuMjQ0LTIuMjU3VjYuODk1SDYuNDc0Wm00Ljk2NC42NzN2Mi43NDVhLjc1Ljc1IDAgMCAwIC43NDguNzUyaDIuNzc0bC0zLjUyMi0zLjQ5N1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
