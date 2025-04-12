
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.106 4.142a1.893 1.893 0 1 1 3.787 0 1.893 1.893 0 0 1-3.787 0ZM8 1a3.143 3.143 0 0 0-.625 6.225v1.77l-4.5 3.87v-.88a.625.625 0 1 0-1.25 0v2.392c0 .345.28.625.625.625h2.392a.625.625 0 1 0 0-1.25H3.76L8 10.105l4.24 3.646h-.883a.625.625 0 1 0 0 1.25h2.393c.345 0 .625-.28.625-.625v-2.394a.625.625 0 0 0-1.25 0v.881l-4.5-3.87v-1.77A3.144 3.144 0 0 0 8 1Z","clip-rule":"evenodd"}]]

/**
 * @component @name Decision
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4xMDYgNC4xNDJhMS44OTMgMS44OTMgMCAxIDEgMy43ODcgMCAxLjg5MyAxLjg5MyAwIDAgMS0zLjc4NyAwWk04IDFhMy4xNDMgMy4xNDMgMCAwIDAtLjYyNSA2LjIyNXYxLjc3bC00LjUgMy44N3YtLjg4YS42MjUuNjI1IDAgMSAwLTEuMjUgMHYyLjM5MmMwIC4zNDUuMjguNjI1LjYyNS42MjVoMi4zOTJhLjYyNS42MjUgMCAxIDAgMC0xLjI1SDMuNzZMOCAxMC4xMDVsNC4yNCAzLjY0NmgtLjg4M2EuNjI1LjYyNSAwIDEgMCAwIDEuMjVoMi4zOTNjLjM0NSAwIC42MjUtLjI4LjYyNS0uNjI1di0yLjM5NGEuNjI1LjYyNSAwIDAgMC0xLjI1IDB2Ljg4MWwtNC41LTMuODd2LTEuNzdBMy4xNDQgMy4xNDQgMCAwIDAgOCAxWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Decision = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-decision',
        'staticon-Decision',
        className
      ),
      ...props,
    })
);
Decision.displayName = 'Decision'

export default Decision;
