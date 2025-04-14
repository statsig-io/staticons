
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M3.781 8.548h2.723l1.39-3.22c.293-.678 1.28-.6 1.463.116l1.48 5.789.944-2.16a.875.875 0 0 1 .801-.525h2.96a5.913 5.913 0 0 0-11.76 0Zm11.76 1.25h-2.713L11.428 13c-.294.676-1.277.596-1.46-.118L8.49 7.101l-.936 2.17a.875.875 0 0 1-.803.527H3.784a5.913 5.913 0 0 0 11.756 0ZM2.5 9.161a7.162 7.162 0 1 1 12.167 5.123l2.65 2.65a.625.625 0 0 1-.884.883l-2.737-2.737A7.162 7.162 0 0 1 2.5 9.16Z","clip-rule":"evenodd"}]]

/**
 * @component @name Diagnostics
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy43ODEgOC41NDhoMi43MjNsMS4zOS0zLjIyYy4yOTMtLjY3OCAxLjI4LS42IDEuNDYzLjExNmwxLjQ4IDUuNzg5Ljk0NC0yLjE2YS44NzUuODc1IDAgMCAxIC44MDEtLjUyNWgyLjk2YTUuOTEzIDUuOTEzIDAgMCAwLTExLjc2IDBabTExLjc2IDEuMjVoLTIuNzEzTDExLjQyOCAxM2MtLjI5NC42NzYtMS4yNzcuNTk2LTEuNDYtLjExOEw4LjQ5IDcuMTAxbC0uOTM2IDIuMTdhLjg3NS44NzUgMCAwIDEtLjgwMy41MjdIMy43ODRhNS45MTMgNS45MTMgMCAwIDAgMTEuNzU2IDBaTTIuNSA5LjE2MWE3LjE2MiA3LjE2MiAwIDEgMSAxMi4xNjcgNS4xMjNsMi42NSAyLjY1YS42MjUuNjI1IDAgMCAxLS44ODQuODgzbC0yLjczNy0yLjczN0E3LjE2MiA3LjE2MiAwIDAgMSAyLjUgOS4xNloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Diagnostics = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-diagnostics',
        'staticon-Diagnostics',
        className
      ),
      ...props,
    })
);
Diagnostics.displayName = 'Diagnostics'

export default Diagnostics;
