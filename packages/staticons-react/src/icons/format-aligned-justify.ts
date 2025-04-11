
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M19.5 6.501a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1 0-1.5h13.5a.75.75 0 0 1 .75.75Zm0 5.499a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1 0-1.5h13.5a.75.75 0 0 1 .75.75Zm-.75 6.249a.75.75 0 0 0 0-1.5H5.25a.75.75 0 0 0 0 1.5h13.5Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatAlignedJustify
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTkuNSA2LjUwMWEuNzUuNzUgMCAwIDEtLjc1Ljc1SDUuMjVhLjc1Ljc1IDAgMCAxIDAtMS41aDEzLjVhLjc1Ljc1IDAgMCAxIC43NS43NVptMCA1LjQ5OWEuNzUuNzUgMCAwIDEtLjc1Ljc1SDUuMjVhLjc1Ljc1IDAgMCAxIDAtMS41aDEzLjVhLjc1Ljc1IDAgMCAxIC43NS43NVptLS43NSA2LjI0OWEuNzUuNzUgMCAwIDAgMC0xLjVINS4yNWEuNzUuNzUgMCAwIDAgMCAxLjVoMTMuNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatAlignedJustify = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-aligned-justify',
        'staticon-FormatAlignedJustify',
        className
      ),
      ...props,
    })
);
FormatAlignedJustify.displayName = 'FormatAlignedJustify'

export default FormatAlignedJustify;
