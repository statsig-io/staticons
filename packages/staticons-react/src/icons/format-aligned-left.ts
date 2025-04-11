
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M19.5 6.5a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1 0-1.5h13.5a.75.75 0 0 1 .75.75ZM14.566 12a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1 0-1.5h8.567a.75.75 0 0 1 .75.75Zm4.182 6.25a.75.75 0 0 0 0-1.5H5.25a.75.75 0 0 0 0 1.5h13.5Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatAlignedLeft
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTkuNSA2LjVhLjc1Ljc1IDAgMCAxLS43NS43NUg1LjI1YS43NS43NSAwIDAgMSAwLTEuNWgxMy41YS43NS43NSAwIDAgMSAuNzUuNzVaTTE0LjU2NiAxMmEuNzUuNzUgMCAwIDEtLjc1Ljc1SDUuMjVhLjc1Ljc1IDAgMCAxIDAtMS41aDguNTY3YS43NS43NSAwIDAgMSAuNzUuNzVabTQuMTgyIDYuMjVhLjc1Ljc1IDAgMCAwIDAtMS41SDUuMjVhLjc1Ljc1IDAgMCAwIDAgMS41aDEzLjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatAlignedLeft = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-aligned-left',
        'staticon-FormatAlignedLeft',
        className
      ),
      ...props,
    })
);
FormatAlignedLeft.displayName = 'FormatAlignedLeft'

export default FormatAlignedLeft;
