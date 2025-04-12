
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M14.156 2.702a.625.625 0 0 0-.863-.904L8.97 5.928 6.225 4.064a1.125 1.125 0 0 0-1.45.157L1.179 8.024a.625.625 0 0 0 .908.86l3.525-3.726 2.741 1.861a1.125 1.125 0 0 0 1.41-.117l4.394-4.2Zm.846 2.408a.875.875 0 0 0-1.469-.642L9.07 8.594 6.372 6.698a1.125 1.125 0 0 0-1.473.156L1.297 10.75c-.192.208-.299.48-.299.764v1.735c0 .622.504 1.125 1.125 1.125h11.754c.622 0 1.125-.503 1.125-1.125V5.11ZM9.844 9.58l3.908-3.612v7.156H2.248v-1.561l3.495-3.78 2.69 1.892a1.125 1.125 0 0 0 1.411-.095Z","clip-rule":"evenodd"}]]

/**
 * @component @name StackedLine
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuMTU2IDIuNzAyYS42MjUuNjI1IDAgMCAwLS44NjMtLjkwNEw4Ljk3IDUuOTI4IDYuMjI1IDQuMDY0YTEuMTI1IDEuMTI1IDAgMCAwLTEuNDUuMTU3TDEuMTc5IDguMDI0YS42MjUuNjI1IDAgMCAwIC45MDguODZsMy41MjUtMy43MjYgMi43NDEgMS44NjFhMS4xMjUgMS4xMjUgMCAwIDAgMS40MS0uMTE3bDQuMzk0LTQuMlptLjg0NiAyLjQwOGEuODc1Ljg3NSAwIDAgMC0xLjQ2OS0uNjQyTDkuMDcgOC41OTQgNi4zNzIgNi42OThhMS4xMjUgMS4xMjUgMCAwIDAtMS40NzMuMTU2TDEuMjk3IDEwLjc1Yy0uMTkyLjIwOC0uMjk5LjQ4LS4yOTkuNzY0djEuNzM1YzAgLjYyMi41MDQgMS4xMjUgMS4xMjUgMS4xMjVoMTEuNzU0Yy42MjIgMCAxLjEyNS0uNTAzIDEuMTI1LTEuMTI1VjUuMTFaTTkuODQ0IDkuNThsMy45MDgtMy42MTJ2Ny4xNTZIMi4yNDh2LTEuNTYxbDMuNDk1LTMuNzggMi42OSAxLjg5MmExLjEyNSAxLjEyNSAwIDAgMCAxLjQxMS0uMDk1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
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
