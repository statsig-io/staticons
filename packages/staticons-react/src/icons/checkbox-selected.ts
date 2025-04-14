
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2.501 15.375c0 1.174.952 2.125 2.125 2.125h10.748a2.125 2.125 0 0 0 2.125-2.125V4.625A2.125 2.125 0 0 0 15.374 2.5H4.626a2.125 2.125 0 0 0-2.125 2.125v10.75Zm12.066-7.556a.625.625 0 0 0-.883-.884l-4.878 4.867-2.49-2.485a.625.625 0 0 0-.883.885l2.826 2.82a.775.775 0 0 0 1.095 0l5.213-5.203Z","clip-rule":"evenodd"}]]

/**
 * @component @name CheckboxSelected
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi41MDEgMTUuMzc1YzAgMS4xNzQuOTUyIDIuMTI1IDIuMTI1IDIuMTI1aDEwLjc0OGEyLjEyNSAyLjEyNSAwIDAgMCAyLjEyNS0yLjEyNVY0LjYyNUEyLjEyNSAyLjEyNSAwIDAgMCAxNS4zNzQgMi41SDQuNjI2YTIuMTI1IDIuMTI1IDAgMCAwLTIuMTI1IDIuMTI1djEwLjc1Wm0xMi4wNjYtNy41NTZhLjYyNS42MjUgMCAwIDAtLjg4My0uODg0bC00Ljg3OCA0Ljg2Ny0yLjQ5LTIuNDg1YS42MjUuNjI1IDAgMCAwLS44ODMuODg1bDIuODI2IDIuODJhLjc3NS43NzUgMCAwIDAgMS4wOTUgMGw1LjIxMy01LjIwM1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CheckboxSelected = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-checkbox-selected',
        'staticon-CheckboxSelected',
        className
      ),
      ...props,
    })
);
CheckboxSelected.displayName = 'CheckboxSelected'

export default CheckboxSelected;
