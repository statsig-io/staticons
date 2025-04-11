
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0 1.5a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z","clip-rule":"evenodd"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M16.816 9.242a.75.75 0 0 1 0 1.061L11.419 15.7a1.25 1.25 0 0 1-1.768 0l-2.815-2.816a.75.75 0 1 1 1.06-1.06l2.64 2.638 5.219-5.22a.75.75 0 0 1 1.06 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Success
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMTkuNWE3LjUgNy41IDAgMSAwIDAtMTUgNy41IDcuNSAwIDAgMCAwIDE1Wm0wIDEuNWE5IDkgMCAxIDAgMC0xOCA5IDkgMCAwIDAgMCAxOFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjgxNiA5LjI0MmEuNzUuNzUgMCAwIDEgMCAxLjA2MUwxMS40MTkgMTUuN2ExLjI1IDEuMjUgMCAwIDEtMS43NjggMGwtMi44MTUtMi44MTZhLjc1Ljc1IDAgMSAxIDEuMDYtMS4wNmwyLjY0IDIuNjM4IDUuMjE5LTUuMjJhLjc1Ljc1IDAgMCAxIDEuMDYgMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Success = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-success',
        'staticon-Success',
        className
      ),
      ...props,
    })
);
Success.displayName = 'Success'

export default Success;
