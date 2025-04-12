
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#1F2328","fill-rule":"evenodd","d":"M1.127 13c0 1.035.839 1.874 1.874 1.874h9.998A1.874 1.874 0 0 0 14.872 13V3A1.874 1.874 0 0 0 13 1.126H3A1.874 1.874 0 0 0 1.127 3v10ZM11.75 8.625a.625.625 0 1 0 0-1.25h-7.5a.625.625 0 1 0 0 1.25h7.5Z","clip-rule":"evenodd"}]]

/**
 * @component @name CheckboxPartialSelected
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzFGMjMyOCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS4xMjcgMTNjMCAxLjAzNS44MzkgMS44NzQgMS44NzQgMS44NzRoOS45OThBMS44NzQgMS44NzQgMCAwIDAgMTQuODcyIDEzVjNBMS44NzQgMS44NzQgMCAwIDAgMTMgMS4xMjZIM0ExLjg3NCAxLjg3NCAwIDAgMCAxLjEyNyAzdjEwWk0xMS43NSA4LjYyNWEuNjI1LjYyNSAwIDEgMCAwLTEuMjVoLTcuNWEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoNy41WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CheckboxPartialSelected = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-checkbox-partial-selected',
        'staticon-CheckboxPartialSelected',
        className
      ),
      ...props,
    })
);
CheckboxPartialSelected.displayName = 'CheckboxPartialSelected'

export default CheckboxPartialSelected;
