
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3 14.874A1.874 1.874 0 0 1 1.128 13V3c0-1.035.839-1.874 1.874-1.874H13c1.034 0 1.873.839 1.873 1.874v10A1.874 1.874 0 0 1 13 14.874H3ZM2.376 13c0 .346.28.626.626.626H13c.345 0 .626-.28.626-.626V3A.626.626 0 0 0 13 2.374H3A.626.626 0 0 0 2.375 3v10Z","clip-rule":"evenodd"}]]

/**
 * @component @name CheckboxNonSelected
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMyAxNC44NzRBMS44NzQgMS44NzQgMCAwIDEgMS4xMjggMTNWM2MwLTEuMDM1LjgzOS0xLjg3NCAxLjg3NC0xLjg3NEgxM2MxLjAzNCAwIDEuODczLjgzOSAxLjg3MyAxLjg3NHYxMEExLjg3NCAxLjg3NCAwIDAgMSAxMyAxNC44NzRIM1pNMi4zNzYgMTNjMCAuMzQ2LjI4LjYyNi42MjYuNjI2SDEzYy4zNDUgMCAuNjI2LS4yOC42MjYtLjYyNlYzQS42MjYuNjI2IDAgMCAwIDEzIDIuMzc0SDNBLjYyNi42MjYgMCAwIDAgMi4zNzUgM3YxMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CheckboxNonSelected = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-checkbox-non-selected',
        'staticon-CheckboxNonSelected',
        className
      ),
      ...props,
    })
);
CheckboxNonSelected.displayName = 'CheckboxNonSelected'

export default CheckboxNonSelected;
