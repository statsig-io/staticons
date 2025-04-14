
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"m4.585 8.785 5.397-4.99 5.43 4.99h-1.715a.875.875 0 0 0-.875.875v3.554H7.144V9.66a.875.875 0 0 0-.875-.875H4.585Zm6.159-5.99a1.125 1.125 0 0 0-1.526.003l-6.185 5.72c-.585.54-.202 1.517.594 1.517h2.267v3.304c0 .621.504 1.125 1.125 1.125h5.928c.622 0 1.125-.504 1.125-1.125v-3.304h2.301c.798 0 1.18-.98.592-1.519l-6.221-5.72Zm-4.22 13.456a.625.625 0 1 0 0 1.25h6.955a.625.625 0 0 0 0-1.25H6.524Z","clip-rule":"evenodd"}]]

/**
 * @component @name Upgrade
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtNC41ODUgOC43ODUgNS4zOTctNC45OSA1LjQzIDQuOTloLTEuNzE1YS44NzUuODc1IDAgMCAwLS44NzUuODc1djMuNTU0SDcuMTQ0VjkuNjZhLjg3NS44NzUgMCAwIDAtLjg3NS0uODc1SDQuNTg1Wm02LjE1OS01Ljk5YTEuMTI1IDEuMTI1IDAgMCAwLTEuNTI2LjAwM2wtNi4xODUgNS43MmMtLjU4NS41NC0uMjAyIDEuNTE3LjU5NCAxLjUxN2gyLjI2N3YzLjMwNGMwIC42MjEuNTA0IDEuMTI1IDEuMTI1IDEuMTI1aDUuOTI4Yy42MjIgMCAxLjEyNS0uNTA0IDEuMTI1LTEuMTI1di0zLjMwNGgyLjMwMWMuNzk4IDAgMS4xOC0uOTguNTkyLTEuNTE5bC02LjIyMS01LjcyWm0tNC4yMiAxMy40NTZhLjYyNS42MjUgMCAxIDAgMCAxLjI1aDYuOTU1YS42MjUuNjI1IDAgMCAwIDAtMS4yNUg2LjUyNFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Upgrade = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-upgrade',
        'staticon-Upgrade',
        className
      ),
      ...props,
    })
);
Upgrade.displayName = 'Upgrade'

export default Upgrade;
