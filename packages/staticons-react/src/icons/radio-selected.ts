
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12.001 19.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Zm0 1.5a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z","clip-rule":"evenodd"}],["path",{"fill":"#000","d":"M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"}]]

/**
 * @component @name RadioSelected
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMDAxIDE5LjVhNy41IDcuNSAwIDEgMSAwLTE1IDcuNSA3LjUgMCAwIDEgMCAxNVptMCAxLjVhOSA5IDAgMSAxIDAtMTggOSA5IDAgMCAxIDAgMThaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTYgMTJhNCA0IDAgMSAxLTggMCA0IDQgMCAwIDEgOCAwWiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const RadioSelected = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-radio-selected',
        'staticon-RadioSelected',
        className
      ),
      ...props,
    })
);
RadioSelected.displayName = 'RadioSelected'

export default RadioSelected;
