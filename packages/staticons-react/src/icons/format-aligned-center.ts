
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M19.5 6.501a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1 0-1.5h13.5a.75.75 0 0 1 .75.75ZM17.032 12a.75.75 0 0 1-.75.75H7.716a.75.75 0 0 1 0-1.5h8.567a.75.75 0 0 1 .75.75Zm1.716 6.249a.75.75 0 0 0 0-1.5H5.25a.75.75 0 0 0 0 1.5h13.5Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatAlignedCenter
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTkuNSA2LjUwMWEuNzUuNzUgMCAwIDEtLjc1Ljc1SDUuMjVhLjc1Ljc1IDAgMCAxIDAtMS41aDEzLjVhLjc1Ljc1IDAgMCAxIC43NS43NVpNMTcuMDMyIDEyYS43NS43NSAwIDAgMS0uNzUuNzVINy43MTZhLjc1Ljc1IDAgMCAxIDAtMS41aDguNTY3YS43NS43NSAwIDAgMSAuNzUuNzVabTEuNzE2IDYuMjQ5YS43NS43NSAwIDAgMCAwLTEuNUg1LjI1YS43NS43NSAwIDAgMCAwIDEuNWgxMy41WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatAlignedCenter = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-aligned-center',
        'staticon-FormatAlignedCenter',
        className
      ),
      ...props,
    })
);
FormatAlignedCenter.displayName = 'FormatAlignedCenter'

export default FormatAlignedCenter;
