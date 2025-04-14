
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M11.27 3.87a.62.62 0 1 0-1.239 0v5.91a.625.625 0 1 1-1.25 0V5.601a.62.62 0 1 0-1.24 0v5.75c.262.182.546.392.86.636a.625.625 0 0 1-.768.987c-1.327-1.032-2.028-1.373-2.706-1.617-.715-.257-1.025-.006-1.112.136-.097.157-.135.5.274.85a32.938 32.938 0 0 1 1.798 1.685l.133.131c.556.55 1.033 1.01 1.545 1.39.983.73 2.14 1.2 4.265 1.2 1.755 0 2.833-.511 3.477-1.197.653-.695.944-1.657.944-2.711v-6.6a.616.616 0 1 0-1.233 0v3.546a.625.625 0 0 1-.812.596.625.625 0 0 1-.447-.599V4.677a.62.62 0 1 0-1.239 0V9.78a.625.625 0 1 1-1.25 0V3.87Zm3.73.615a1.87 1.87 0 0 0-2.693-1.482 1.87 1.87 0 0 0-3.526.834 1.87 1.87 0 0 0-2.49 1.764v4.985a7.87 7.87 0 0 0-.94-.406c-1.096-.393-2.113-.132-2.6.657-.478.774-.263 1.781.525 2.455a31.727 31.727 0 0 1 1.735 1.628l.13.129c.552.544 1.086 1.063 1.679 1.504 1.227.911 2.655 1.446 5.01 1.446 2.004 0 3.45-.592 4.388-1.591.931-.991 1.283-2.296 1.283-3.567v-6.6A1.866 1.866 0 0 0 15 4.485Z","clip-rule":"evenodd"}]]

/**
 * @component @name No
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMjcgMy44N2EuNjIuNjIgMCAxIDAtMS4yMzkgMHY1LjkxYS42MjUuNjI1IDAgMSAxLTEuMjUgMFY1LjYwMWEuNjIuNjIgMCAxIDAtMS4yNCAwdjUuNzVjLjI2Mi4xODIuNTQ2LjM5Mi44Ni42MzZhLjYyNS42MjUgMCAwIDEtLjc2OC45ODdjLTEuMzI3LTEuMDMyLTIuMDI4LTEuMzczLTIuNzA2LTEuNjE3LS43MTUtLjI1Ny0xLjAyNS0uMDA2LTEuMTEyLjEzNi0uMDk3LjE1Ny0uMTM1LjUuMjc0Ljg1YTMyLjkzOCAzMi45MzggMCAwIDEgMS43OTggMS42ODVsLjEzMy4xMzFjLjU1Ni41NSAxLjAzMyAxLjAxIDEuNTQ1IDEuMzkuOTgzLjczIDIuMTQgMS4yIDQuMjY1IDEuMiAxLjc1NSAwIDIuODMzLS41MTEgMy40NzctMS4xOTcuNjUzLS42OTUuOTQ0LTEuNjU3Ljk0NC0yLjcxMXYtNi42YS42MTYuNjE2IDAgMSAwLTEuMjMzIDB2My41NDZhLjYyNS42MjUgMCAwIDEtLjgxMi41OTYuNjI1LjYyNSAwIDAgMS0uNDQ3LS41OTlWNC42NzdhLjYyLjYyIDAgMSAwLTEuMjM5IDBWOS43OGEuNjI1LjYyNSAwIDEgMS0xLjI1IDBWMy44N1ptMy43My42MTVhMS44NyAxLjg3IDAgMCAwLTIuNjkzLTEuNDgyIDEuODcgMS44NyAwIDAgMC0zLjUyNi44MzQgMS44NyAxLjg3IDAgMCAwLTIuNDkgMS43NjR2NC45ODVhNy44NyA3Ljg3IDAgMCAwLS45NC0uNDA2Yy0xLjA5Ni0uMzkzLTIuMTEzLS4xMzItMi42LjY1Ny0uNDc4Ljc3NC0uMjYzIDEuNzgxLjUyNSAyLjQ1NWEzMS43MjcgMzEuNzI3IDAgMCAxIDEuNzM1IDEuNjI4bC4xMy4xMjljLjU1Mi41NDQgMS4wODYgMS4wNjMgMS42NzkgMS41MDQgMS4yMjcuOTExIDIuNjU1IDEuNDQ2IDUuMDEgMS40NDYgMi4wMDQgMCAzLjQ1LS41OTIgNC4zODgtMS41OTEuOTMxLS45OTEgMS4yODMtMi4yOTYgMS4yODMtMy41Njd2LTYuNkExLjg2NiAxLjg2NiAwIDAgMCAxNSA0LjQ4NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const No = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-no',
        'staticon-No',
        className
      ),
      ...props,
    })
);
No.displayName = 'No'

export default No;
