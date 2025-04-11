
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M19.594 17.741 12.433 5.338a.5.5 0 0 0-.866 0L4.406 17.741a.5.5 0 0 0 .433.75H19.16a.5.5 0 0 0 .433-.75ZM13.732 4.588c-.77-1.333-2.694-1.333-3.464 0L3.107 16.991c-.77 1.334.192 3 1.732 3H19.16c1.54 0 2.502-1.666 1.732-3l-7.16-12.403Z","clip-rule":"evenodd"}],["path",{"fill":"#000","d":"M11.125 15.99a.875.875 0 1 1 1.75 0 .875.875 0 0 1-1.75 0Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M12 8.87a.75.75 0 0 1 .75.75v3.496a.75.75 0 0 1-1.5 0V9.62a.75.75 0 0 1 .75-.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name Warning
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTkuNTk0IDE3Ljc0MSAxMi40MzMgNS4zMzhhLjUuNSAwIDAgMC0uODY2IDBMNC40MDYgMTcuNzQxYS41LjUgMCAwIDAgLjQzMy43NUgxOS4xNmEuNS41IDAgMCAwIC40MzMtLjc1Wk0xMy43MzIgNC41ODhjLS43Ny0xLjMzMy0yLjY5NC0xLjMzMy0zLjQ2NCAwTDMuMTA3IDE2Ljk5MWMtLjc3IDEuMzM0LjE5MiAzIDEuNzMyIDNIMTkuMTZjMS41NCAwIDIuNTAyLTEuNjY2IDEuNzMyLTNsLTcuMTYtMTIuNDAzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTExLjEyNSAxNS45OWEuODc1Ljg3NSAwIDEgMSAxLjc1IDAgLjg3NS44NzUgMCAwIDEtMS43NSAwWiIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDguODdhLjc1Ljc1IDAgMCAxIC43NS43NXYzLjQ5NmEuNzUuNzUgMCAwIDEtMS41IDBWOS42MmEuNzUuNzUgMCAwIDEgLjc1LS43NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Warning = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-warning',
        'staticon-Warning',
        className
      ),
      ...props,
    })
);
Warning.displayName = 'Warning'

export default Warning;
