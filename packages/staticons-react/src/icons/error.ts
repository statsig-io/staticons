
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"m12.95 3.405 3.645 3.644a.528.528 0 0 1 .155.374v5.154c0 .14-.056.274-.155.373l-3.644 3.645a.528.528 0 0 1-.374.155H7.423a.528.528 0 0 1-.374-.155l-3.644-3.644a.528.528 0 0 1-.155-.374V7.423a.53.53 0 0 1 .155-.374l3.644-3.644a.528.528 0 0 1 .374-.155h5.154c.14 0 .274.056.373.155ZM12.578 2c.472 0 .924.187 1.257.52l3.645 3.646c.334.333.521.785.521 1.257v5.154c0 .472-.187.924-.52 1.257l-3.646 3.645a1.774 1.774 0 0 1-1.257.521H7.423c-.472 0-.924-.187-1.257-.52L2.52 13.833A1.778 1.778 0 0 1 2 12.577V7.423c0-.472.187-.924.52-1.257L6.167 2.52C6.499 2.187 6.95 2 7.423 2h5.154Zm-2.575 3.387a.65.65 0 0 1 .65.65v4.682a.65.65 0 1 1-1.3 0V6.037a.65.65 0 0 1 .65-.65ZM9 13.611a1.002 1.002 0 1 1 2.003 0 1.002 1.002 0 0 1-2.003 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Error
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTIuOTUgMy40MDUgMy42NDUgMy42NDRhLjUyOC41MjggMCAwIDEgLjE1NS4zNzR2NS4xNTRjMCAuMTQtLjA1Ni4yNzQtLjE1NS4zNzNsLTMuNjQ0IDMuNjQ1YS41MjguNTI4IDAgMCAxLS4zNzQuMTU1SDcuNDIzYS41MjguNTI4IDAgMCAxLS4zNzQtLjE1NWwtMy42NDQtMy42NDRhLjUyOC41MjggMCAwIDEtLjE1NS0uMzc0VjcuNDIzYS41My41MyAwIDAgMSAuMTU1LS4zNzRsMy42NDQtMy42NDRhLjUyOC41MjggMCAwIDEgLjM3NC0uMTU1aDUuMTU0Yy4xNCAwIC4yNzQuMDU2LjM3My4xNTVaTTEyLjU3OCAyYy40NzIgMCAuOTI0LjE4NyAxLjI1Ny41MmwzLjY0NSAzLjY0NmMuMzM0LjMzMy41MjEuNzg1LjUyMSAxLjI1N3Y1LjE1NGMwIC40NzItLjE4Ny45MjQtLjUyIDEuMjU3bC0zLjY0NiAzLjY0NWExLjc3NCAxLjc3NCAwIDAgMS0xLjI1Ny41MjFINy40MjNjLS40NzIgMC0uOTI0LS4xODctMS4yNTctLjUyTDIuNTIgMTMuODMzQTEuNzc4IDEuNzc4IDAgMCAxIDIgMTIuNTc3VjcuNDIzYzAtLjQ3Mi4xODctLjkyNC41Mi0xLjI1N0w2LjE2NyAyLjUyQzYuNDk5IDIuMTg3IDYuOTUgMiA3LjQyMyAyaDUuMTU0Wm0tMi41NzUgMy4zODdhLjY1LjY1IDAgMCAxIC42NS42NXY0LjY4MmEuNjUuNjUgMCAxIDEtMS4zIDBWNi4wMzdhLjY1LjY1IDAgMCAxIC42NS0uNjVaTTkgMTMuNjExYTEuMDAyIDEuMDAyIDAgMSAxIDIuMDAzIDAgMS4wMDIgMS4wMDIgMCAwIDEtMi4wMDMgMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Error = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-error',
        'staticon-Error',
        className
      ),
      ...props,
    })
);
Error.displayName = 'Error'

export default Error;
