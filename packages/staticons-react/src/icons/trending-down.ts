
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M10.416 12.062a.625.625 0 0 1 0-1.25h2.93L9.577 6.96a.547.547 0 0 0-.822.047L7.309 8.863c-.669.859-1.94.93-2.702.153L.677 5a.625.625 0 1 1 .894-.874L5.5 8.142a.547.547 0 0 0 .822-.047l1.446-1.857a1.797 1.797 0 0 1 2.701-.152l3.78 3.862V6.977a.625.625 0 1 1 1.25 0v4.21a.875.875 0 0 1-.875.875h-4.21Z","clip-rule":"evenodd"}]]

/**
 * @component @name TrendingDown
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNDE2IDEyLjA2MmEuNjI1LjYyNSAwIDAgMSAwLTEuMjVoMi45M0w5LjU3NyA2Ljk2YS41NDcuNTQ3IDAgMCAwLS44MjIuMDQ3TDcuMzA5IDguODYzYy0uNjY5Ljg1OS0xLjk0LjkzLTIuNzAyLjE1M0wuNjc3IDVhLjYyNS42MjUgMCAxIDEgLjg5NC0uODc0TDUuNSA4LjE0MmEuNTQ3LjU0NyAwIDAgMCAuODIyLS4wNDdsMS40NDYtMS44NTdhMS43OTcgMS43OTcgMCAwIDEgMi43MDEtLjE1MmwzLjc4IDMuODYyVjYuOTc3YS42MjUuNjI1IDAgMSAxIDEuMjUgMHY0LjIxYS44NzUuODc1IDAgMCAxLS44NzUuODc1aC00LjIxWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const TrendingDown = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-trending-down',
        'staticon-TrendingDown',
        className
      ),
      ...props,
    })
);
TrendingDown.displayName = 'TrendingDown'

export default TrendingDown;
