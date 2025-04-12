
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3 14.874A1.874 1.874 0 0 1 1.128 13V3c0-1.035.839-1.874 1.874-1.874H13c1.034 0 1.873.839 1.873 1.874v10A1.874 1.874 0 0 1 13 14.874H3ZM2.376 13c0 .346.28.626.626.626h4.125V9.01H2.375V13Zm0-5.24h11.25V3A.626.626 0 0 0 13 2.374H3A.626.626 0 0 0 2.375 3v4.76Zm11.25 1.25h-5.25v4.616h4.623c.345 0 .626-.28.626-.626V9.01Z","clip-rule":"evenodd"}]]

/**
 * @component @name Template
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMyAxNC44NzRBMS44NzQgMS44NzQgMCAwIDEgMS4xMjggMTNWM2MwLTEuMDM1LjgzOS0xLjg3NCAxLjg3NC0xLjg3NEgxM2MxLjAzNCAwIDEuODczLjgzOSAxLjg3MyAxLjg3NHYxMEExLjg3NCAxLjg3NCAwIDAgMSAxMyAxNC44NzRIM1pNMi4zNzYgMTNjMCAuMzQ2LjI4LjYyNi42MjYuNjI2aDQuMTI1VjkuMDFIMi4zNzVWMTNabTAtNS4yNGgxMS4yNVYzQS42MjYuNjI2IDAgMCAwIDEzIDIuMzc0SDNBLjYyNi42MjYgMCAwIDAgMi4zNzUgM3Y0Ljc2Wm0xMS4yNSAxLjI1aC01LjI1djQuNjE2aDQuNjIzYy4zNDUgMCAuNjI2LS4yOC42MjYtLjYyNlY5LjAxWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Template = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-template',
        'staticon-Template',
        className
      ),
      ...props,
    })
);
Template.displayName = 'Template'

export default Template;
