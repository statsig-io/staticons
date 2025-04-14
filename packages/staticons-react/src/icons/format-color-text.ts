
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M11.027 3.913c-.397-.888-1.657-.888-2.054 0L6.26 9.978l-1.408 3.15a.625.625 0 1 0 1.14.51l1.244-2.78h5.529l1.243 2.78a.625.625 0 1 0 1.14-.51l-1.408-3.15-2.713-6.065ZM10 4.678l2.206 4.93h-4.41L10 4.678ZM4.252 15.502a.625.625 0 1 0 0 1.25h11.495a.625.625 0 0 0 0-1.25H4.253Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatColorText
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMDI3IDMuOTEzYy0uMzk3LS44ODgtMS42NTctLjg4OC0yLjA1NCAwTDYuMjYgOS45NzhsLTEuNDA4IDMuMTVhLjYyNS42MjUgMCAxIDAgMS4xNC41MWwxLjI0NC0yLjc4aDUuNTI5bDEuMjQzIDIuNzhhLjYyNS42MjUgMCAxIDAgMS4xNC0uNTFsLTEuNDA4LTMuMTUtMi43MTMtNi4wNjVaTTEwIDQuNjc4bDIuMjA2IDQuOTNoLTQuNDFMMTAgNC42NzhaTTQuMjUyIDE1LjUwMmEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoMTEuNDk1YS42MjUuNjI1IDAgMCAwIDAtMS4yNUg0LjI1M1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatColorText = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-color-text',
        'staticon-FormatColorText',
        className
      ),
      ...props,
    })
);
FormatColorText.displayName = 'FormatColorText'

export default FormatColorText;
