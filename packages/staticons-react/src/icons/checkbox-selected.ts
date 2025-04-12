
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#1F2328","fill-rule":"evenodd","d":"M1.127 13c0 1.035.839 1.874 1.874 1.874h9.998A1.874 1.874 0 0 0 14.872 13V3A1.874 1.874 0 0 0 13 1.126H3A1.874 1.874 0 0 0 1.127 3v10Zm10.721-6.457a.625.625 0 1 0-.884-.883l-3.95 3.95-1.979-1.979a.625.625 0 1 0-.884.884l2.315 2.315a.775.775 0 0 0 1.096 0l4.286-4.287Z","clip-rule":"evenodd"}]]

/**
 * @component @name CheckboxSelected
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzFGMjMyOCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS4xMjcgMTNjMCAxLjAzNS44MzkgMS44NzQgMS44NzQgMS44NzRoOS45OThBMS44NzQgMS44NzQgMCAwIDAgMTQuODcyIDEzVjNBMS44NzQgMS44NzQgMCAwIDAgMTMgMS4xMjZIM0ExLjg3NCAxLjg3NCAwIDAgMCAxLjEyNyAzdjEwWm0xMC43MjEtNi40NTdhLjYyNS42MjUgMCAxIDAtLjg4NC0uODgzbC0zLjk1IDMuOTUtMS45NzktMS45NzlhLjYyNS42MjUgMCAxIDAtLjg4NC44ODRsMi4zMTUgMi4zMTVhLjc3NS43NzUgMCAwIDAgMS4wOTYgMGw0LjI4Ni00LjI4N1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
