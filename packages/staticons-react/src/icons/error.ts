
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m10.766 1.817 3.417 3.417a.495.495 0 0 1 .145.35v4.832a.495.495 0 0 1-.145.35l-3.417 3.417a.495.495 0 0 1-.35.145H5.584a.495.495 0 0 1-.35-.145l-3.417-3.417a.495.495 0 0 1-.145-.35V5.584c0-.131.052-.257.145-.35l3.417-3.417a.495.495 0 0 1 .35-.145h4.832c.131 0 .257.052.35.145ZM10.416.5c.442 0 .866.176 1.179.488l3.417 3.417c.312.313.488.737.488 1.179v4.832c0 .442-.176.866-.488 1.179l-3.417 3.417a1.667 1.667 0 0 1-1.179.488H5.584a1.67 1.67 0 0 1-1.179-.488L.988 11.595A1.667 1.667 0 0 1 .5 10.416V5.584c0-.442.176-.866.488-1.179L4.405.988A1.667 1.667 0 0 1 5.584.5h4.832ZM8 3.917c.346 0 .625.28.625.625v4.005a.625.625 0 0 1-1.25 0V4.542c0-.345.28-.625.625-.625Zm-.999 7.167a1 1 0 1 1 1.999 0 1 1 0 0 1-1.999 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Error
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTAuNzY2IDEuODE3IDMuNDE3IDMuNDE3YS40OTUuNDk1IDAgMCAxIC4xNDUuMzV2NC44MzJhLjQ5NS40OTUgMCAwIDEtLjE0NS4zNWwtMy40MTcgMy40MTdhLjQ5NS40OTUgMCAwIDEtLjM1LjE0NUg1LjU4NGEuNDk1LjQ5NSAwIDAgMS0uMzUtLjE0NWwtMy40MTctMy40MTdhLjQ5NS40OTUgMCAwIDEtLjE0NS0uMzVWNS41ODRjMC0uMTMxLjA1Mi0uMjU3LjE0NS0uMzVsMy40MTctMy40MTdhLjQ5NS40OTUgMCAwIDEgLjM1LS4xNDVoNC44MzJjLjEzMSAwIC4yNTcuMDUyLjM1LjE0NVpNMTAuNDE2LjVjLjQ0MiAwIC44NjYuMTc2IDEuMTc5LjQ4OGwzLjQxNyAzLjQxN2MuMzEyLjMxMy40ODguNzM3LjQ4OCAxLjE3OXY0LjgzMmMwIC40NDItLjE3Ni44NjYtLjQ4OCAxLjE3OWwtMy40MTcgMy40MTdhMS42NjcgMS42NjcgMCAwIDEtMS4xNzkuNDg4SDUuNTg0YTEuNjcgMS42NyAwIDAgMS0xLjE3OS0uNDg4TC45ODggMTEuNTk1QTEuNjY3IDEuNjY3IDAgMCAxIC41IDEwLjQxNlY1LjU4NGMwLS40NDIuMTc2LS44NjYuNDg4LTEuMTc5TDQuNDA1Ljk4OEExLjY2NyAxLjY2NyAwIDAgMSA1LjU4NC41aDQuODMyWk04IDMuOTE3Yy4zNDYgMCAuNjI1LjI4LjYyNS42MjV2NC4wMDVhLjYyNS42MjUgMCAwIDEtMS4yNSAwVjQuNTQyYzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1Wm0tLjk5OSA3LjE2N2ExIDEgMCAxIDEgMS45OTkgMCAxIDEgMCAwIDEtMS45OTkgMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Error = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-error',
        'staticon-Error',
        className
      ),
      ...props,
    })
);
Error.displayName = 'Error'

export default Error;
