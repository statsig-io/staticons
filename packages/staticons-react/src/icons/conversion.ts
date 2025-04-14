
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2.501 6.04a3.54 3.54 0 1 1 7.082.001 3.54 3.54 0 0 1-7.082 0Zm3.541-2.29a2.29 2.29 0 1 0 0 4.582 2.29 2.29 0 0 0 0-4.582Z","clip-rule":"evenodd"}],["path",{"d":"M15.723 4.828V7.03l.7-.7a.625.625 0 0 1 .884.884l-1.768 1.768a.625.625 0 0 1-.884 0l-1.768-1.768a.625.625 0 1 1 .884-.884l.701.701V4.828a.875.875 0 0 0-.874-.875h-2.14a.625.625 0 1 1 0-1.25h2.14c1.173 0 2.124.951 2.124 2.125ZM4.283 12.96l-.7.7a.625.625 0 1 1-.884-.883l1.767-1.768a.625.625 0 0 1 .884 0l1.768 1.768a.625.625 0 1 1-.884.883l-.7-.7v2.202c0 .483.391.875.874.875h2.14a.625.625 0 1 1 0 1.25h-2.14a2.125 2.125 0 0 1-2.125-2.125v-2.203Z"}],["path",{"fill-rule":"evenodd","d":"M13.957 10.418a3.542 3.542 0 1 0 0 7.084 3.542 3.542 0 0 0 0-7.084Zm-2.291 3.541a2.292 2.292 0 1 1 4.583.001 2.292 2.292 0 0 1-4.583 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Conversion
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi41MDEgNi4wNGEzLjU0IDMuNTQgMCAxIDEgNy4wODIuMDAxIDMuNTQgMy41NCAwIDAgMS03LjA4MiAwWm0zLjU0MS0yLjI5YTIuMjkgMi4yOSAwIDEgMCAwIDQuNTgyIDIuMjkgMi4yOSAwIDAgMCAwLTQuNTgyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgPHBhdGggZD0iTTE1LjcyMyA0LjgyOFY3LjAzbC43LS43YS42MjUuNjI1IDAgMCAxIC44ODQuODg0bC0xLjc2OCAxLjc2OGEuNjI1LjYyNSAwIDAgMS0uODg0IDBsLTEuNzY4LTEuNzY4YS42MjUuNjI1IDAgMSAxIC44ODQtLjg4NGwuNzAxLjcwMVY0LjgyOGEuODc1Ljg3NSAwIDAgMC0uODc0LS44NzVoLTIuMTRhLjYyNS42MjUgMCAxIDEgMC0xLjI1aDIuMTRjMS4xNzMgMCAyLjEyNC45NTEgMi4xMjQgMi4xMjVaTTQuMjgzIDEyLjk2bC0uNy43YS42MjUuNjI1IDAgMSAxLS44ODQtLjg4M2wxLjc2Ny0xLjc2OGEuNjI1LjYyNSAwIDAgMSAuODg0IDBsMS43NjggMS43NjhhLjYyNS42MjUgMCAxIDEtLjg4NC44ODNsLS43LS43djIuMjAyYzAgLjQ4My4zOTEuODc1Ljg3NC44NzVoMi4xNGEuNjI1LjYyNSAwIDEgMSAwIDEuMjVoLTIuMTRhMi4xMjUgMi4xMjUgMCAwIDEtMi4xMjUtMi4xMjV2LTIuMjAzWiIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjk1NyAxMC40MThhMy41NDIgMy41NDIgMCAxIDAgMCA3LjA4NCAzLjU0MiAzLjU0MiAwIDAgMCAwLTcuMDg0Wm0tMi4yOTEgMy41NDFhMi4yOTIgMi4yOTIgMCAxIDEgNC41ODMuMDAxIDIuMjkyIDIuMjkyIDAgMCAxLTQuNTgzIDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Conversion = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-conversion',
        'staticon-Conversion',
        className
      ),
      ...props,
    })
);
Conversion.displayName = 'Conversion'

export default Conversion;
