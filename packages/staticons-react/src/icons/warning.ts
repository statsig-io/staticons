
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M14.123 13.373 8 2.627 1.876 13.373h12.247ZM9.086 2.008a1.25 1.25 0 0 0-2.172 0L.79 12.754a1.25 1.25 0 0 0 1.086 1.87h12.247a1.25 1.25 0 0 0 1.086-1.87L9.086 2.008Z","clip-rule":"evenodd"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.625 5.886a.625.625 0 1 0-1.25 0v2.922a.625.625 0 1 0 1.25 0V5.886ZM8 10.33a1 1 0 1 0 0 1.998 1 1 0 0 0 0-1.998Z","clip-rule":"evenodd"}]]

/**
 * @component @name Warning
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuMTIzIDEzLjM3MyA4IDIuNjI3IDEuODc2IDEzLjM3M2gxMi4yNDdaTTkuMDg2IDIuMDA4YTEuMjUgMS4yNSAwIDAgMC0yLjE3MiAwTC43OSAxMi43NTRhMS4yNSAxLjI1IDAgMCAwIDEuMDg2IDEuODdoMTIuMjQ3YTEuMjUgMS4yNSAwIDAgMCAxLjA4Ni0xLjg3TDkuMDg2IDIuMDA4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC42MjUgNS44ODZhLjYyNS42MjUgMCAxIDAtMS4yNSAwdjIuOTIyYS42MjUuNjI1IDAgMSAwIDEuMjUgMFY1Ljg4NlpNOCAxMC4zM2ExIDEgMCAxIDAgMCAxLjk5OCAxIDEgMCAwIDAgMC0xLjk5OFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
