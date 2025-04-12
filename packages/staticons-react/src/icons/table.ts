
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3 14.876a1.875 1.875 0 0 1-1.875-1.875V2.998c0-1.035.839-1.875 1.875-1.875h10c1.036 0 1.875.84 1.875 1.875v10.003c0 1.036-.84 1.875-1.875 1.875H3Zm10.625-5.098V7.24h-2.824v2.538h2.824Zm-2.824 1.25h2.824V13c0 .345-.28.625-.625.625h-2.2v-2.598Zm-1.25-1.25V7.24H6.445v2.538h3.106Zm-3.106 1.25h3.106v2.598H6.445v-2.598Zm-1.25-1.25V7.24h-2.82v2.538h2.82Zm-2.82 1.25h2.82v2.598H3a.625.625 0 0 1-.625-.625v-1.973Zm4.07-5.038h7.18V2.998A.625.625 0 0 0 13 2.373H3a.625.625 0 0 0-.625.625V5.99h4.07Z","clip-rule":"evenodd"}]]

/**
 * @component @name Table
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMyAxNC44NzZhMS44NzUgMS44NzUgMCAwIDEtMS44NzUtMS44NzVWMi45OThjMC0xLjAzNS44MzktMS44NzUgMS44NzUtMS44NzVoMTBjMS4wMzYgMCAxLjg3NS44NCAxLjg3NSAxLjg3NXYxMC4wMDNjMCAxLjAzNi0uODQgMS44NzUtMS44NzUgMS44NzVIM1ptMTAuNjI1LTUuMDk4VjcuMjRoLTIuODI0djIuNTM4aDIuODI0Wm0tMi44MjQgMS4yNWgyLjgyNFYxM2MwIC4zNDUtLjI4LjYyNS0uNjI1LjYyNWgtMi4ydi0yLjU5OFptLTEuMjUtMS4yNVY3LjI0SDYuNDQ1djIuNTM4aDMuMTA2Wm0tMy4xMDYgMS4yNWgzLjEwNnYyLjU5OEg2LjQ0NXYtMi41OThabS0xLjI1LTEuMjVWNy4yNGgtMi44MnYyLjUzOGgyLjgyWm0tMi44MiAxLjI1aDIuODJ2Mi41OThIM2EuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjV2LTEuOTczWm00LjA3LTUuMDM4aDcuMThWMi45OThBLjYyNS42MjUgMCAwIDAgMTMgMi4zNzNIM2EuNjI1LjYyNSAwIDAgMC0uNjI1LjYyNVY1Ljk5aDQuMDdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Table = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-table',
        'staticon-Table',
        className
      ),
      ...props,
    })
);
Table.displayName = 'Table'

export default Table;
