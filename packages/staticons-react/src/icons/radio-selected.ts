
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M14.25 8a6.25 6.25 0 1 0-12.5 0 6.25 6.25 0 0 0 12.5 0Zm1.25 0a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0ZM8 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z","clip-rule":"evenodd"}]]

/**
 * @component @name RadioSelected
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuMjUgOGE2LjI1IDYuMjUgMCAxIDAtMTIuNSAwIDYuMjUgNi4yNSAwIDAgMCAxMi41IDBabTEuMjUgMGE3LjUgNy41IDAgMSAwLTE1IDAgNy41IDcuNSAwIDAgMCAxNSAwWk04IDExLjVhMy41IDMuNSAwIDEgMCAwLTcgMy41IDMuNSAwIDAgMCAwIDdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
