
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M7.042 11.307a.75.75 0 1 0 1.06-1.06L6.38 8.523h8.394a4.499 4.499 0 1 1 0 8.998h-9.68a.75.75 0 0 0 0 1.5h9.68a5.999 5.999 0 0 0 0-11.998H6.38L8.103 5.3a.75.75 0 0 0-1.06-1.06L4.392 6.89a1.25 1.25 0 0 0 0 1.767l2.65 2.65Z"}]]

/**
 * @component @name Undo
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTcuMDQyIDExLjMwN2EuNzUuNzUgMCAxIDAgMS4wNi0xLjA2TDYuMzggOC41MjNoOC4zOTRhNC40OTkgNC40OTkgMCAxIDEgMCA4Ljk5OGgtOS42OGEuNzUuNzUgMCAwIDAgMCAxLjVoOS42OGE1Ljk5OSA1Ljk5OSAwIDAgMCAwLTExLjk5OEg2LjM4TDguMTAzIDUuM2EuNzUuNzUgMCAwIDAtMS4wNi0xLjA2TDQuMzkyIDYuODlhMS4yNSAxLjI1IDAgMCAwIDAgMS43NjdsMi42NSAyLjY1WiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Undo = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-undo',
        'staticon-Undo',
        className
      ),
      ...props,
    })
);
Undo.displayName = 'Undo'

export default Undo;
