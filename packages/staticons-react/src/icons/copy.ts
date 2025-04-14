
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M6.77 5.521v-.898c0-.483.391-.875.875-.875h7.73c.484 0 .876.392.876.875v7.731a.875.875 0 0 1-.875.875h-.896V7.646a2.125 2.125 0 0 0-2.125-2.125H6.77Zm-1.25 0v-.898c0-1.174.951-2.125 2.125-2.125h7.73c1.174 0 2.126.951 2.126 2.125v7.731a2.125 2.125 0 0 1-2.125 2.125h-.896v.899a2.125 2.125 0 0 1-2.125 2.125H4.624a2.125 2.125 0 0 1-2.125-2.125V7.646c0-1.173.951-2.125 2.125-2.125h.896Zm-.896 10.732a.875.875 0 0 1-.875-.875V7.646c0-.483.392-.875.875-.875h7.731c.483 0 .875.392.875.875v7.732a.875.875 0 0 1-.875.875H4.624Z","clip-rule":"evenodd"}]]

/**
 * @component @name Copy
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi43NyA1LjUyMXYtLjg5OGMwLS40ODMuMzkxLS44NzUuODc1LS44NzVoNy43M2MuNDg0IDAgLjg3Ni4zOTIuODc2Ljg3NXY3LjczMWEuODc1Ljg3NSAwIDAgMS0uODc1Ljg3NWgtLjg5NlY3LjY0NmEyLjEyNSAyLjEyNSAwIDAgMC0yLjEyNS0yLjEyNUg2Ljc3Wm0tMS4yNSAwdi0uODk4YzAtMS4xNzQuOTUxLTIuMTI1IDIuMTI1LTIuMTI1aDcuNzNjMS4xNzQgMCAyLjEyNi45NTEgMi4xMjYgMi4xMjV2Ny43MzFhMi4xMjUgMi4xMjUgMCAwIDEtMi4xMjUgMi4xMjVoLS44OTZ2Ljg5OWEyLjEyNSAyLjEyNSAwIDAgMS0yLjEyNSAyLjEyNUg0LjYyNGEyLjEyNSAyLjEyNSAwIDAgMS0yLjEyNS0yLjEyNVY3LjY0NmMwLTEuMTczLjk1MS0yLjEyNSAyLjEyNS0yLjEyNWguODk2Wm0tLjg5NiAxMC43MzJhLjg3NS44NzUgMCAwIDEtLjg3NS0uODc1VjcuNjQ2YzAtLjQ4My4zOTItLjg3NS44NzUtLjg3NWg3LjczMWMuNDgzIDAgLjg3NS4zOTIuODc1Ljg3NXY3LjczMmEuODc1Ljg3NSAwIDAgMS0uODc1Ljg3NUg0LjYyNFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Copy = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-copy',
        'staticon-Copy',
        className
      ),
      ...props,
    })
);
Copy.displayName = 'Copy'

export default Copy;
