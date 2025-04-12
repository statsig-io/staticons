
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M13.32 1.078c.998-.363 1.966.604 1.602 1.601l-4.194 11.5c-.38 1.043-1.83 1.108-2.303.104L6.468 10.13a1.249 1.249 0 0 0-.597-.597L1.717 7.575C.713 7.102.778 5.652 1.82 5.272l11.5-4.194Zm-.058 2.506L9.555 13.751 7.598 9.597a2.497 2.497 0 0 0-.122-.226l5.786-5.787Zm-.85-.845L2.25 6.445l4.154 1.957c.077.037.153.077.225.121l5.785-5.784Z","clip-rule":"evenodd"}]]

/**
 * @component @name Send
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMzIgMS4wNzhjLjk5OC0uMzYzIDEuOTY2LjYwNCAxLjYwMiAxLjYwMWwtNC4xOTQgMTEuNWMtLjM4IDEuMDQzLTEuODMgMS4xMDgtMi4zMDMuMTA0TDYuNDY4IDEwLjEzYTEuMjQ5IDEuMjQ5IDAgMCAwLS41OTctLjU5N0wxLjcxNyA3LjU3NUMuNzEzIDcuMTAyLjc3OCA1LjY1MiAxLjgyIDUuMjcybDExLjUtNC4xOTRabS0uMDU4IDIuNTA2TDkuNTU1IDEzLjc1MSA3LjU5OCA5LjU5N2EyLjQ5NyAyLjQ5NyAwIDAgMC0uMTIyLS4yMjZsNS43ODYtNS43ODdabS0uODUtLjg0NUwyLjI1IDYuNDQ1bDQuMTU0IDEuOTU3Yy4wNzcuMDM3LjE1My4wNzcuMjI1LjEyMWw1Ljc4NS01Ljc4NFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Send = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-send',
        'staticon-Send',
        className
      ),
      ...props,
    })
);
Send.displayName = 'Send'

export default Send;
