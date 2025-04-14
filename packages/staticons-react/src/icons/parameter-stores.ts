
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M7.874 2.124a2.125 2.125 0 0 0-2.125 2.125V8.5c0 .312.067.609.188.875H4.248A2.125 2.125 0 0 0 2.123 11.5v4.252c0 1.173.951 2.125 2.125 2.125h4.253a2.12 2.12 0 0 0 1.5-.62c.383.383.913.62 1.498.62h4.253a2.125 2.125 0 0 0 2.125-2.125V11.5a2.125 2.125 0 0 0-2.125-2.125h-1.688c.12-.266.188-.563.188-.875V4.25a2.125 2.125 0 0 0-2.125-2.125H7.874Zm1.5 9.376v-.041a.875.875 0 0 0-.864-.834H4.248a.875.875 0 0 0-.875.875v4.252c0 .483.392.875.875.875h4.253a.875.875 0 0 0 .873-.875V11.5ZM11.5 9.375h.636a.875.875 0 0 0 .867-.875V4.25a.875.875 0 0 0-.875-.875H7.874a.875.875 0 0 0-.875.875V8.5c0 .48.387.87.866.875H11.5Zm0 7.252a.875.875 0 0 1-.873-.875v-4.293a.875.875 0 0 1 .865-.834h4.261c.483 0 .875.392.875.875v4.252a.875.875 0 0 1-.875.875H11.5ZM9.158 4.76a.625.625 0 0 0 0 1.25h1.683a.625.625 0 1 0 0-1.25H9.158Zm-4.197 7.762c0-.345.28-.625.625-.625H7.27a.625.625 0 1 1 0 1.25H5.586a.625.625 0 0 1-.625-.625Zm7.772-.625a.625.625 0 1 0 0 1.25h1.682a.625.625 0 0 0 0-1.25h-1.682Z","clip-rule":"evenodd"}]]

/**
 * @component @name ParameterStores
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy44NzQgMi4xMjRhMi4xMjUgMi4xMjUgMCAwIDAtMi4xMjUgMi4xMjVWOC41YzAgLjMxMi4wNjcuNjA5LjE4OC44NzVINC4yNDhBMi4xMjUgMi4xMjUgMCAwIDAgMi4xMjMgMTEuNXY0LjI1MmMwIDEuMTczLjk1MSAyLjEyNSAyLjEyNSAyLjEyNWg0LjI1M2EyLjEyIDIuMTIgMCAwIDAgMS41LS42MmMuMzgzLjM4My45MTMuNjIgMS40OTguNjJoNC4yNTNhMi4xMjUgMi4xMjUgMCAwIDAgMi4xMjUtMi4xMjVWMTEuNWEyLjEyNSAyLjEyNSAwIDAgMC0yLjEyNS0yLjEyNWgtMS42ODhjLjEyLS4yNjYuMTg4LS41NjMuMTg4LS44NzVWNC4yNWEyLjEyNSAyLjEyNSAwIDAgMC0yLjEyNS0yLjEyNUg3Ljg3NFptMS41IDkuMzc2di0uMDQxYS44NzUuODc1IDAgMCAwLS44NjQtLjgzNEg0LjI0OGEuODc1Ljg3NSAwIDAgMC0uODc1Ljg3NXY0LjI1MmMwIC40ODMuMzkyLjg3NS44NzUuODc1aDQuMjUzYS44NzUuODc1IDAgMCAwIC44NzMtLjg3NVYxMS41Wk0xMS41IDkuMzc1aC42MzZhLjg3NS44NzUgMCAwIDAgLjg2Ny0uODc1VjQuMjVhLjg3NS44NzUgMCAwIDAtLjg3NS0uODc1SDcuODc0YS44NzUuODc1IDAgMCAwLS44NzUuODc1VjguNWMwIC40OC4zODcuODcuODY2Ljg3NUgxMS41Wm0wIDcuMjUyYS44NzUuODc1IDAgMCAxLS44NzMtLjg3NXYtNC4yOTNhLjg3NS44NzUgMCAwIDEgLjg2NS0uODM0aDQuMjYxYy40ODMgMCAuODc1LjM5Mi44NzUuODc1djQuMjUyYS44NzUuODc1IDAgMCAxLS44NzUuODc1SDExLjVaTTkuMTU4IDQuNzZhLjYyNS42MjUgMCAwIDAgMCAxLjI1aDEuNjgzYS42MjUuNjI1IDAgMSAwIDAtMS4yNUg5LjE1OFptLTQuMTk3IDcuNzYyYzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1SDcuMjdhLjYyNS42MjUgMCAxIDEgMCAxLjI1SDUuNTg2YS42MjUuNjI1IDAgMCAxLS42MjUtLjYyNVptNy43NzItLjYyNWEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoMS42ODJhLjYyNS42MjUgMCAwIDAgMC0xLjI1aC0xLjY4MloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ParameterStores = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-parameter-stores',
        'staticon-ParameterStores',
        className
      ),
      ...props,
    })
);
ParameterStores.displayName = 'ParameterStores'

export default ParameterStores;
