
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M16.75 10a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0ZM18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM9.49 6.062a.625.625 0 0 0-.89.878L11.62 10l-3.022 3.06a.625.625 0 0 0 .89.878l3.108-3.148a1.125 1.125 0 0 0 0-1.581L9.49 6.062Z","clip-rule":"evenodd"}]]

/**
 * @component @name CircleRight
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNzUgMTBhNi43NSA2Ljc1IDAgMSAxLTEzLjUgMCA2Ljc1IDYuNzUgMCAwIDEgMTMuNSAwWk0xOCAxMGE4IDggMCAxIDEtMTYgMCA4IDggMCAwIDEgMTYgMFpNOS40OSA2LjA2MmEuNjI1LjYyNSAwIDAgMC0uODkuODc4TDExLjYyIDEwbC0zLjAyMiAzLjA2YS42MjUuNjI1IDAgMCAwIC44OS44NzhsMy4xMDgtMy4xNDhhMS4xMjUgMS4xMjUgMCAwIDAgMC0xLjU4MUw5LjQ5IDYuMDYyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CircleRight = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-circle-right',
        'staticon-CircleRight',
        className
      ),
      ...props,
    })
);
CircleRight.displayName = 'CircleRight'

export default CircleRight;
