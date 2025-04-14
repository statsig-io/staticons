
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M10 16.75a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5ZM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z","clip-rule":"evenodd"}]]

/**
 * @component @name RadioNonSelected
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAgMTYuNzVhNi43NSA2Ljc1IDAgMSAwIDAtMTMuNSA2Ljc1IDYuNzUgMCAwIDAgMCAxMy41Wk0xMCAxOGE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const RadioNonSelected = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-radio-non-selected',
        'staticon-RadioNonSelected',
        className
      ),
      ...props,
    })
);
RadioNonSelected.displayName = 'RadioNonSelected'

export default RadioNonSelected;
