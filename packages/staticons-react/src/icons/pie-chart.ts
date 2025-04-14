
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M11.599 3.334v2.828a4.164 4.164 0 0 1 2.197 2.055h2.852c-.659-2.428-2.605-4.32-5.05-4.883Zm-1.25-.462c0-.518.46-.947 1.004-.86 3.328.536 5.972 3.118 6.628 6.42a.868.868 0 0 1-.854 1.035h-3.57a.887.887 0 0 1-.817-.551 2.91 2.91 0 0 0-1.777-1.656.887.887 0 0 1-.614-.84V2.871Zm-2.259.582a6.87 6.87 0 0 0-4.838 6.58 6.87 6.87 0 0 0 4.838 6.58v-2.92a4.17 4.17 0 0 1-2.16-3.66 4.17 4.17 0 0 1 2.16-3.66v-2.92Zm.192-1.343a.867.867 0 0 1 1.058.849V6.6a.887.887 0 0 1-.506.798 2.919 2.919 0 0 0-1.654 2.636c0 1.165.677 2.17 1.654 2.637.292.14.506.44.506.798v3.64c0 .54-.497.977-1.058.85-3.598-.82-6.28-4.059-6.28-7.925 0-3.865 2.682-7.103 6.28-7.923Zm5.514 9.67a4.163 4.163 0 0 1-2.197 2.057v2.828c2.444-.564 4.39-2.455 5.049-4.885h-2.852Zm-.239-1.25h3.57c.53 0 .964.481.854 1.035-.656 3.303-3.3 5.885-6.628 6.421a.868.868 0 0 1-1.004-.86V13.58c0-.403.27-.727.614-.84a2.91 2.91 0 0 0 1.777-1.656.887.887 0 0 1 .817-.552Z","clip-rule":"evenodd"}]]

/**
 * @component @name PieChart
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNTk5IDMuMzM0djIuODI4YTQuMTY0IDQuMTY0IDAgMCAxIDIuMTk3IDIuMDU1aDIuODUyYy0uNjU5LTIuNDI4LTIuNjA1LTQuMzItNS4wNS00Ljg4M1ptLTEuMjUtLjQ2MmMwLS41MTguNDYtLjk0NyAxLjAwNC0uODYgMy4zMjguNTM2IDUuOTcyIDMuMTE4IDYuNjI4IDYuNDJhLjg2OC44NjggMCAwIDEtLjg1NCAxLjAzNWgtMy41N2EuODg3Ljg4NyAwIDAgMS0uODE3LS41NTEgMi45MSAyLjkxIDAgMCAwLTEuNzc3LTEuNjU2Ljg4Ny44ODcgMCAwIDEtLjYxNC0uODRWMi44NzFabS0yLjI1OS41ODJhNi44NyA2Ljg3IDAgMCAwLTQuODM4IDYuNTggNi44NyA2Ljg3IDAgMCAwIDQuODM4IDYuNTh2LTIuOTJhNC4xNyA0LjE3IDAgMCAxLTIuMTYtMy42NiA0LjE3IDQuMTcgMCAwIDEgMi4xNi0zLjY2di0yLjkyWm0uMTkyLTEuMzQzYS44NjcuODY3IDAgMCAxIDEuMDU4Ljg0OVY2LjZhLjg4Ny44ODcgMCAwIDEtLjUwNi43OTggMi45MTkgMi45MTkgMCAwIDAtMS42NTQgMi42MzZjMCAxLjE2NS42NzcgMi4xNyAxLjY1NCAyLjYzNy4yOTIuMTQuNTA2LjQ0LjUwNi43OTh2My42NGMwIC41NC0uNDk3Ljk3Ny0xLjA1OC44NS0zLjU5OC0uODItNi4yOC00LjA1OS02LjI4LTcuOTI1IDAtMy44NjUgMi42ODItNy4xMDMgNi4yOC03LjkyM1ptNS41MTQgOS42N2E0LjE2MyA0LjE2MyAwIDAgMS0yLjE5NyAyLjA1N3YyLjgyOGMyLjQ0NC0uNTY0IDQuMzktMi40NTUgNS4wNDktNC44ODVoLTIuODUyWm0tLjIzOS0xLjI1aDMuNTdjLjUzIDAgLjk2NC40ODEuODU0IDEuMDM1LS42NTYgMy4zMDMtMy4zIDUuODg1LTYuNjI4IDYuNDIxYS44NjguODY4IDAgMCAxLTEuMDA0LS44NlYxMy41OGMwLS40MDMuMjctLjcyNy42MTQtLjg0YTIuOTEgMi45MSAwIDAgMCAxLjc3Ny0xLjY1Ni44ODcuODg3IDAgMCAxIC44MTctLjU1MloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const PieChart = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-pie-chart',
        'staticon-PieChart',
        className
      ),
      ...props,
    })
);
PieChart.displayName = 'PieChart'

export default PieChart;
