
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M16.68 15.251 10.436 4.255a.5.5 0 0 0-.87 0L3.319 15.25a.5.5 0 0 0 .436.748h12.49a.5.5 0 0 0 .436-.748ZM11.525 3.637c-.672-1.183-2.376-1.183-3.047 0L2.23 14.633a1.752 1.752 0 0 0 1.524 2.617h12.49a1.752 1.752 0 0 0 1.524-2.617L11.524 3.637Z","clip-rule":"evenodd"}],["path",{"fill-rule":"evenodd","d":"M10.652 7.617a.65.65 0 0 0-1.3 0v3.72a.65.65 0 1 0 1.3 0v-3.72ZM10 12.87a1.002 1.002 0 1 0 .002 2.003A1.002 1.002 0 0 0 10 12.871Z","clip-rule":"evenodd"}]]

/**
 * @component @name Warning
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNjggMTUuMjUxIDEwLjQzNiA0LjI1NWEuNS41IDAgMCAwLS44NyAwTDMuMzE5IDE1LjI1YS41LjUgMCAwIDAgLjQzNi43NDhoMTIuNDlhLjUuNSAwIDAgMCAuNDM2LS43NDhaTTExLjUyNSAzLjYzN2MtLjY3Mi0xLjE4My0yLjM3Ni0xLjE4My0zLjA0NyAwTDIuMjMgMTQuNjMzYTEuNzUyIDEuNzUyIDAgMCAwIDEuNTI0IDIuNjE3aDEyLjQ5YTEuNzUyIDEuNzUyIDAgMCAwIDEuNTI0LTIuNjE3TDExLjUyNCAzLjYzN1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjY1MiA3LjYxN2EuNjUuNjUgMCAwIDAtMS4zIDB2My43MmEuNjUuNjUgMCAxIDAgMS4zIDB2LTMuNzJaTTEwIDEyLjg3YTEuMDAyIDEuMDAyIDAgMSAwIC4wMDIgMi4wMDNBMS4wMDIgMS4wMDIgMCAwIDAgMTAgMTIuODcxWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Warning = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-warning',
        'staticon-Warning',
        className
      ),
      ...props,
    })
);
Warning.displayName = 'Warning'

export default Warning;
