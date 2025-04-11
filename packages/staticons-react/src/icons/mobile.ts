
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M18.001 18.868V5.126c0-.69-.56-1.25-1.25-1.25l-9.25.006c-.69 0-1.25.56-1.25 1.25v13.742c0 .69.56 1.25 1.25 1.25l9.25-.006c.69 0 1.25-.56 1.25-1.25Zm1.5-13.742v13.742a2.75 2.75 0 0 1-2.748 2.75l-9.25.006a2.75 2.75 0 0 1-2.752-2.75V5.131a2.75 2.75 0 0 1 2.748-2.75l9.25-.006a2.75 2.75 0 0 1 2.752 2.75ZM14.66 6a.75.75 0 0 1-.75.75h-3.568a.75.75 0 1 1 0-1.5h3.568a.75.75 0 0 1 .75.75Zm-2.534 10a1.272 1.272 0 1 0 0 2.544 1.272 1.272 0 0 0 0-2.544Z","clip-rule":"evenodd"}]]

/**
 * @component @name Mobile
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTguMDAxIDE4Ljg2OFY1LjEyNmMwLS42OS0uNTYtMS4yNS0xLjI1LTEuMjVsLTkuMjUuMDA2Yy0uNjkgMC0xLjI1LjU2LTEuMjUgMS4yNXYxMy43NDJjMCAuNjkuNTYgMS4yNSAxLjI1IDEuMjVsOS4yNS0uMDA2Yy42OSAwIDEuMjUtLjU2IDEuMjUtMS4yNVptMS41LTEzLjc0MnYxMy43NDJhMi43NSAyLjc1IDAgMCAxLTIuNzQ4IDIuNzVsLTkuMjUuMDA2YTIuNzUgMi43NSAwIDAgMS0yLjc1Mi0yLjc1VjUuMTMxYTIuNzUgMi43NSAwIDAgMSAyLjc0OC0yLjc1bDkuMjUtLjAwNmEyLjc1IDIuNzUgMCAwIDEgMi43NTIgMi43NVpNMTQuNjYgNmEuNzUuNzUgMCAwIDEtLjc1Ljc1aC0zLjU2OGEuNzUuNzUgMCAxIDEgMC0xLjVoMy41NjhhLjc1Ljc1IDAgMCAxIC43NS43NVptLTIuNTM0IDEwYTEuMjcyIDEuMjcyIDAgMSAwIDAgMi41NDQgMS4yNzIgMS4yNzIgMCAwIDAgMC0yLjU0NFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Mobile = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-mobile',
        'staticon-Mobile',
        className
      ),
      ...props,
    })
);
Mobile.displayName = 'Mobile'

export default Mobile;
