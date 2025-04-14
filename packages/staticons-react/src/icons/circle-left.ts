
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M16.75 10a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0ZM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7.232-3.938a.625.625 0 0 1 .89.878L8.64 10l3.02 3.06a.625.625 0 1 1-.89.878L7.663 10.79a1.125 1.125 0 0 1 0-1.58l3.104-3.147Z","clip-rule":"evenodd"}]]

/**
 * @component @name CircleLeft
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNzUgMTBhNi43NSA2Ljc1IDAgMSAxLTEzLjUgMCA2Ljc1IDYuNzUgMCAwIDEgMTMuNSAwWk0xOCAxMGE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMFptLTcuMjMyLTMuOTM4YS42MjUuNjI1IDAgMCAxIC44OS44NzhMOC42NCAxMGwzLjAyIDMuMDZhLjYyNS42MjUgMCAxIDEtLjg5Ljg3OEw3LjY2MyAxMC43OWExLjEyNSAxLjEyNSAwIDAgMSAwLTEuNThsMy4xMDQtMy4xNDdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CircleLeft = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-circle-left',
        'staticon-CircleLeft',
        className
      ),
      ...props,
    })
);
CircleLeft.displayName = 'CircleLeft'

export default CircleLeft;
