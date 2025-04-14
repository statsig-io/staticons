
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M3.137 5.056C2.362 3.98 3.13 2.479 4.455 2.479h11.086c1.327 0 2.094 1.504 1.316 2.579l-2.121 2.93-2.122 2.93v4.294c0 .444-.261.847-.667 1.028l-2.993 1.334a1.125 1.125 0 0 1-1.584-1.027V10.92L3.137 5.056Zm1.318-1.327a.375.375 0 0 0-.304.595l4.257 5.898c.138.191.212.422.212.658v5.474l2.744-1.223v-4.254c0-.237.075-.468.214-.66l4.267-5.893a.375.375 0 0 0-.304-.595H4.455Z","clip-rule":"evenodd"}]]

/**
 * @component @name Funnel
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4xMzcgNS4wNTZDMi4zNjIgMy45OCAzLjEzIDIuNDc5IDQuNDU1IDIuNDc5aDExLjA4NmMxLjMyNyAwIDIuMDk0IDEuNTA0IDEuMzE2IDIuNTc5bC0yLjEyMSAyLjkzLTIuMTIyIDIuOTN2NC4yOTRjMCAuNDQ0LS4yNjEuODQ3LS42NjcgMS4wMjhsLTIuOTkzIDEuMzM0YTEuMTI1IDEuMTI1IDAgMCAxLTEuNTg0LTEuMDI3VjEwLjkyTDMuMTM3IDUuMDU2Wm0xLjMxOC0xLjMyN2EuMzc1LjM3NSAwIDAgMC0uMzA0LjU5NWw0LjI1NyA1Ljg5OGMuMTM4LjE5MS4yMTIuNDIyLjIxMi42NTh2NS40NzRsMi43NDQtMS4yMjN2LTQuMjU0YzAtLjIzNy4wNzUtLjQ2OC4yMTQtLjY2bDQuMjY3LTUuODkzYS4zNzUuMzc1IDAgMCAwLS4zMDQtLjU5NUg0LjQ1NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Funnel = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-funnel',
        'staticon-Funnel',
        className
      ),
      ...props,
    })
);
Funnel.displayName = 'Funnel'

export default Funnel;
