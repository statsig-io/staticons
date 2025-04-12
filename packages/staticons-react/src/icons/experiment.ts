
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.416 1.875a.623.623 0 0 0 0 1.246h.591v1.722a.374.374 0 0 1-.04.167l-1.86 3.723-.01.008.004.004-1.118 2.237c-.723 1.444.328 3.144 1.943 3.144h8.148c1.615 0 2.665-1.7 1.943-3.144l-1.515-3.031.007-.009-.018-.014-1.458-2.918a.374.374 0 0 1-.04-.167V3.121h.547a.623.623 0 1 0 0-1.246H4.416Zm6.605 5.899L9.918 5.567a1.62 1.62 0 0 1-.17-.724V3.121H6.252v1.722c0 .251-.058.5-.17.724L5.07 7.592a4.663 4.663 0 0 1 3.402.203c1.029.468 1.712.375 2.109.225a1.63 1.63 0 0 0 .44-.246ZM4.1 9.533l-1.003 2.006a.927.927 0 0 0 .829 1.34h8.148a.927.927 0 0 0 .829-1.34l-1.318-2.637c-.154.1-.342.2-.566.285-.729.274-1.756.337-3.063-.258A3.422 3.422 0 0 0 5.41 8.79a3.99 3.99 0 0 0-.992.489 1.74 1.74 0 0 0-.048.034l-.008.007-.263.212Z","clip-rule":"evenodd"}]]

/**
 * @component @name Experiment
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC40MTYgMS44NzVhLjYyMy42MjMgMCAwIDAgMCAxLjI0NmguNTkxdjEuNzIyYS4zNzQuMzc0IDAgMCAxLS4wNC4xNjdsLTEuODYgMy43MjMtLjAxLjAwOC4wMDQuMDA0LTEuMTE4IDIuMjM3Yy0uNzIzIDEuNDQ0LjMyOCAzLjE0NCAxLjk0MyAzLjE0NGg4LjE0OGMxLjYxNSAwIDIuNjY1LTEuNyAxLjk0My0zLjE0NGwtMS41MTUtMy4wMzEuMDA3LS4wMDktLjAxOC0uMDE0LTEuNDU4LTIuOTE4YS4zNzQuMzc0IDAgMCAxLS4wNC0uMTY3VjMuMTIxaC41NDdhLjYyMy42MjMgMCAxIDAgMC0xLjI0Nkg0LjQxNlptNi42MDUgNS44OTlMOS45MTggNS41NjdhMS42MiAxLjYyIDAgMCAxLS4xNy0uNzI0VjMuMTIxSDYuMjUydjEuNzIyYzAgLjI1MS0uMDU4LjUtLjE3LjcyNEw1LjA3IDcuNTkyYTQuNjYzIDQuNjYzIDAgMCAxIDMuNDAyLjIwM2MxLjAyOS40NjggMS43MTIuMzc1IDIuMTA5LjIyNWExLjYzIDEuNjMgMCAwIDAgLjQ0LS4yNDZaTTQuMSA5LjUzM2wtMS4wMDMgMi4wMDZhLjkyNy45MjcgMCAwIDAgLjgyOSAxLjM0aDguMTQ4YS45MjcuOTI3IDAgMCAwIC44MjktMS4zNGwtMS4zMTgtMi42MzdjLS4xNTQuMS0uMzQyLjItLjU2Ni4yODUtLjcyOS4yNzQtMS43NTYuMzM3LTMuMDYzLS4yNThBMy40MjIgMy40MjIgMCAwIDAgNS40MSA4Ljc5YTMuOTkgMy45OSAwIDAgMC0uOTkyLjQ4OSAxLjc0IDEuNzQgMCAwIDAtLjA0OC4wMzRsLS4wMDguMDA3LS4yNjMuMjEyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Experiment = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-experiment',
        'staticon-Experiment',
        className
      ),
      ...props,
    })
);
Experiment.displayName = 'Experiment'

export default Experiment;
