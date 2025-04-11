
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0 1.5a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z","clip-rule":"evenodd"}],["path",{"fill":"#000","d":"M12.875 8.393a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M12 16.504a.75.75 0 0 1-.75-.75v-4.486a.75.75 0 0 1 1.5 0v4.486a.75.75 0 0 1-.75.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name Info
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMTkuNWE3LjUgNy41IDAgMSAwIDAtMTUgNy41IDcuNSAwIDAgMCAwIDE1Wm0wIDEuNWE5IDkgMCAxIDAgMC0xOCA5IDkgMCAwIDAgMCAxOFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xMi44NzUgOC4zOTNhLjg3NS44NzUgMCAxIDEtMS43NSAwIC44NzUuODc1IDAgMCAxIDEuNzUgMFoiLz4KICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAxNi41MDRhLjc1Ljc1IDAgMCAxLS43NS0uNzV2LTQuNDg2YS43NS43NSAwIDAgMSAxLjUgMHY0LjQ4NmEuNzUuNzUgMCAwIDEtLjc1Ljc1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Info = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-info',
        'staticon-Info',
        className
      ),
      ...props,
    })
);
Info.displayName = 'Info'

export default Info;
