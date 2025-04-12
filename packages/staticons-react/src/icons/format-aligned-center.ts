
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M13.999 3.5c0 .345-.28.625-.625.625H2.626a.625.625 0 1 1 0-1.25h10.748c.345 0 .625.28.625.625Zm-2 4.5c0 .345-.28.625-.625.625H4.626a.625.625 0 1 1 0-1.25h6.748c.345 0 .625.28.625.625Zm1.375 5.125a.625.625 0 1 0 0-1.25H2.626a.625.625 0 1 0 0 1.25h10.748Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatAlignedCenter
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuOTk5IDMuNWMwIC4zNDUtLjI4LjYyNS0uNjI1LjYyNUgyLjYyNmEuNjI1LjYyNSAwIDEgMSAwLTEuMjVoMTAuNzQ4Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjVabS0yIDQuNWMwIC4zNDUtLjI4LjYyNS0uNjI1LjYyNUg0LjYyNmEuNjI1LjYyNSAwIDEgMSAwLTEuMjVoNi43NDhjLjM0NSAwIC42MjUuMjguNjI1LjYyNVptMS4zNzUgNS4xMjVhLjYyNS42MjUgMCAxIDAgMC0xLjI1SDIuNjI2YS42MjUuNjI1IDAgMSAwIDAgMS4yNWgxMC43NDhaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatAlignedCenter = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-aligned-center',
        'staticon-FormatAlignedCenter',
        className
      ),
      ...props,
    })
);
FormatAlignedCenter.displayName = 'FormatAlignedCenter'

export default FormatAlignedCenter;
