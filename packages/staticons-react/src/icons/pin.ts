
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.885.604a.768.768 0 0 0-1.105.403L5.51 4.511c-1.316.157-2.98.988-4.12 3.015a1.09 1.09 0 0 0 .417 1.477l3.61 2.078-2.014 3.478a.625.625 0 1 0 1.082.626l2.016-3.48 3.613 2.08a1.093 1.093 0 0 0 1.486-.378c1.19-1.997 1.082-3.85.561-5.066l2.408-2.847a.767.767 0 0 0-.203-1.16L7.885.604ZM6.654 4.988l1.099-3.032 5.506 3.169-2.082 2.463a1.163 1.163 0 0 0-.163 1.219c.363.83.51 2.223-.402 3.836L2.546 8c.946-1.591 2.23-2.162 3.133-2.263.404-.045.812-.3.975-.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name Pin
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy44ODUuNjA0YS43NjguNzY4IDAgMCAwLTEuMTA1LjQwM0w1LjUxIDQuNTExYy0xLjMxNi4xNTctMi45OC45ODgtNC4xMiAzLjAxNWExLjA5IDEuMDkgMCAwIDAgLjQxNyAxLjQ3N2wzLjYxIDIuMDc4LTIuMDE0IDMuNDc4YS42MjUuNjI1IDAgMSAwIDEuMDgyLjYyNmwyLjAxNi0zLjQ4IDMuNjEzIDIuMDhhMS4wOTMgMS4wOTMgMCAwIDAgMS40ODYtLjM3OGMxLjE5LTEuOTk3IDEuMDgyLTMuODUuNTYxLTUuMDY2bDIuNDA4LTIuODQ3YS43NjcuNzY3IDAgMCAwLS4yMDMtMS4xNkw3Ljg4NS42MDRaTTYuNjU0IDQuOTg4bDEuMDk5LTMuMDMyIDUuNTA2IDMuMTY5LTIuMDgyIDIuNDYzYTEuMTYzIDEuMTYzIDAgMCAwLS4xNjMgMS4yMTljLjM2My44My41MSAyLjIyMy0uNDAyIDMuODM2TDIuNTQ2IDhjLjk0Ni0xLjU5MSAyLjIzLTIuMTYyIDMuMTMzLTIuMjYzLjQwNC0uMDQ1LjgxMi0uMy45NzUtLjc1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Pin = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-pin',
        'staticon-Pin',
        className
      ),
      ...props,
    })
);
Pin.displayName = 'Pin'

export default Pin;
