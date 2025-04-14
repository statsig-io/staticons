
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.626 17.5a2.125 2.125 0 0 1-2.125-2.125V4.626c0-1.174.952-2.125 2.125-2.125h10.747c1.174 0 2.125.951 2.125 2.125v10.749a2.125 2.125 0 0 1-2.125 2.125H4.626Zm11.622-5.481V9.103h-3.23v2.916h3.23Zm-3.23 1.25h3.23v2.106a.875.875 0 0 1-.875.875h-2.356v-2.98Zm-1.25-1.25V9.103h-3.54v2.916h3.54Zm-3.54 1.25h3.54v2.981h-3.54v-2.98Zm-1.25-1.25V9.103H3.751v2.916h3.227Zm-3.227 1.25h3.227v2.981H4.626a.875.875 0 0 1-.875-.875V13.27Zm12.497-8.643v3.227H3.751V4.626c0-.483.392-.875.875-.875h10.747c.484 0 .875.392.875.875Z","clip-rule":"evenodd"}]]

/**
 * @component @name Table
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42MjYgMTcuNWEyLjEyNSAyLjEyNSAwIDAgMS0yLjEyNS0yLjEyNVY0LjYyNmMwLTEuMTc0Ljk1Mi0yLjEyNSAyLjEyNS0yLjEyNWgxMC43NDdjMS4xNzQgMCAyLjEyNS45NTEgMi4xMjUgMi4xMjV2MTAuNzQ5YTIuMTI1IDIuMTI1IDAgMCAxLTIuMTI1IDIuMTI1SDQuNjI2Wm0xMS42MjItNS40ODFWOS4xMDNoLTMuMjN2Mi45MTZoMy4yM1ptLTMuMjMgMS4yNWgzLjIzdjIuMTA2YS44NzUuODc1IDAgMCAxLS44NzUuODc1aC0yLjM1NnYtMi45OFptLTEuMjUtMS4yNVY5LjEwM2gtMy41NHYyLjkxNmgzLjU0Wm0tMy41NCAxLjI1aDMuNTR2Mi45ODFoLTMuNTR2LTIuOThabS0xLjI1LTEuMjVWOS4xMDNIMy43NTF2Mi45MTZoMy4yMjdabS0zLjIyNyAxLjI1aDMuMjI3djIuOTgxSDQuNjI2YS44NzUuODc1IDAgMCAxLS44NzUtLjg3NVYxMy4yN1ptMTIuNDk3LTguNjQzdjMuMjI3SDMuNzUxVjQuNjI2YzAtLjQ4My4zOTItLjg3NS44NzUtLjg3NWgxMC43NDdjLjQ4NCAwIC44NzUuMzkyLjg3NS44NzVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
