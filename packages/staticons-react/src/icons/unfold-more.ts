
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M10.558 6.339a.625.625 0 1 0 .884-.884L8.62 2.63a.875.875 0 0 0-1.238 0L4.558 5.455a.625.625 0 1 0 .884.884L8 3.78l2.558 2.559ZM5.441 9.66a.625.625 0 0 0-.883.884L7.38 13.37a.875.875 0 0 0 1.237 0l2.824-2.824a.625.625 0 1 0-.884-.884L8 12.22 5.44 9.66Z","clip-rule":"evenodd"}]]

/**
 * @component @name UnfoldMore
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNTU4IDYuMzM5YS42MjUuNjI1IDAgMSAwIC44ODQtLjg4NEw4LjYyIDIuNjNhLjg3NS44NzUgMCAwIDAtMS4yMzggMEw0LjU1OCA1LjQ1NWEuNjI1LjYyNSAwIDEgMCAuODg0Ljg4NEw4IDMuNzhsMi41NTggMi41NTlaTTUuNDQxIDkuNjZhLjYyNS42MjUgMCAwIDAtLjg4My44ODRMNy4zOCAxMy4zN2EuODc1Ljg3NSAwIDAgMCAxLjIzNyAwbDIuODI0LTIuODI0YS42MjUuNjI1IDAgMSAwLS44ODQtLjg4NEw4IDEyLjIyIDUuNDQgOS42NloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const UnfoldMore = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-unfold-more',
        'staticon-UnfoldMore',
        className
      ),
      ...props,
    })
);
UnfoldMore.displayName = 'UnfoldMore'

export default UnfoldMore;
