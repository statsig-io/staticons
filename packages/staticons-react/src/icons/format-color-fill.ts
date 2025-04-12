
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.807 1.304a1.9 1.9 0 0 1 2.687 0l.73.73 6.698 6.699a.766.766 0 0 1-.523 1.306l-.988.024a.156.156 0 0 0-.106.045l-4.19 4.19a2.031 2.031 0 0 1-2.873 0L1.095 10.15a2.031 2.031 0 0 1 0-2.872l3-3-.288-.287a1.9 1.9 0 0 1 0-2.687Zm1.171 2.09.92-.919-.288-.287a.65.65 0 1 0-.919.92l.287.286Zm1.803-.035L5.421 4.72 3.93 6.21c1.088.026 2.235.48 3.13 1.548.67.799 1.297 1.353 1.975 1.608.644.243 1.42.245 2.473-.248a.628.628 0 0 1 .065-.026c.196-.146.427-.24.67-.269L6.782 3.36ZM1.98 8.162l.02-.02a.63.63 0 0 0 .045-.039c.863-.81 2.787-1.059 4.06.459.71.846 1.506 1.604 2.492 1.974.406.153.829.235 1.273.24l-2.638 2.638a.781.781 0 0 1-1.105 0L1.98 9.267a.781.781 0 0 1 0-1.105Zm12.4 2.953c.405.708 1.019 1.852 1.102 2.486.124.936-.403 1.652-1.268 1.652-.866 0-1.393-.716-1.27-1.652.094-.708.699-1.795 1.101-2.487a.193.193 0 0 1 .336 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatColorFill
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy44MDcgMS4zMDRhMS45IDEuOSAwIDAgMSAyLjY4NyAwbC43My43MyA2LjY5OCA2LjY5OWEuNzY2Ljc2NiAwIDAgMS0uNTIzIDEuMzA2bC0uOTg4LjAyNGEuMTU2LjE1NiAwIDAgMC0uMTA2LjA0NWwtNC4xOSA0LjE5YTIuMDMxIDIuMDMxIDAgMCAxLTIuODczIDBMMS4wOTUgMTAuMTVhMi4wMzEgMi4wMzEgMCAwIDEgMC0yLjg3MmwzLTMtLjI4OC0uMjg3YTEuOSAxLjkgMCAwIDEgMC0yLjY4N1ptMS4xNzEgMi4wOS45Mi0uOTE5LS4yODgtLjI4N2EuNjUuNjUgMCAxIDAtLjkxOS45MmwuMjg3LjI4NlptMS44MDMtLjAzNUw1LjQyMSA0LjcyIDMuOTMgNi4yMWMxLjA4OC4wMjYgMi4yMzUuNDggMy4xMyAxLjU0OC42Ny43OTkgMS4yOTcgMS4zNTMgMS45NzUgMS42MDguNjQ0LjI0MyAxLjQyLjI0NSAyLjQ3My0uMjQ4YS42MjguNjI4IDAgMCAxIC4wNjUtLjAyNmMuMTk2LS4xNDYuNDI3LS4yNC42Ny0uMjY5TDYuNzgyIDMuMzZaTTEuOTggOC4xNjJsLjAyLS4wMmEuNjMuNjMgMCAwIDAgLjA0NS0uMDM5Yy44NjMtLjgxIDIuNzg3LTEuMDU5IDQuMDYuNDU5LjcxLjg0NiAxLjUwNiAxLjYwNCAyLjQ5MiAxLjk3NC40MDYuMTUzLjgyOS4yMzUgMS4yNzMuMjRsLTIuNjM4IDIuNjM4YS43ODEuNzgxIDAgMCAxLTEuMTA1IDBMMS45OCA5LjI2N2EuNzgxLjc4MSAwIDAgMSAwLTEuMTA1Wm0xMi40IDIuOTUzYy40MDUuNzA4IDEuMDE5IDEuODUyIDEuMTAyIDIuNDg2LjEyNC45MzYtLjQwMyAxLjY1Mi0xLjI2OCAxLjY1Mi0uODY2IDAtMS4zOTMtLjcxNi0xLjI3LTEuNjUyLjA5NC0uNzA4LjY5OS0xLjc5NSAxLjEwMS0yLjQ4N2EuMTkzLjE5MyAwIDAgMSAuMzM2IDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatColorFill = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-color-fill',
        'staticon-FormatColorFill',
        className
      ),
      ...props,
    })
);
FormatColorFill.displayName = 'FormatColorFill'

export default FormatColorFill;
