
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2.374 4.749c0-1.174.95-2.125 2.125-2.125h11.003c1.173 0 2.124.951 2.124 2.125v7.594a2.125 2.125 0 0 1-2.125 2.125h-6.31l-2.79 2.664a.875.875 0 0 1-1.48-.632v-2.032H4.5a2.125 2.125 0 0 1-2.125-2.125V4.749Zm2.125-.875a.875.875 0 0 0-.875.875v7.594c0 .483.391.875.875.875h.798c.483 0 .875.392.875.875v1.53l2.193-2.094c.21-.2.487-.311.777-.311h6.36a.875.875 0 0 0 .874-.875V4.749a.875.875 0 0 0-.875-.875H4.5Zm4.726 7.255a.775.775 0 1 1 1.55 0 .775.775 0 0 1-1.55 0Zm1.4-5.363a.625.625 0 1 0-1.25 0v2.96a.625.625 0 1 0 1.25 0v-2.96Z","clip-rule":"evenodd"}]]

/**
 * @component @name Feedback
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi4zNzQgNC43NDljMC0xLjE3NC45NS0yLjEyNSAyLjEyNS0yLjEyNWgxMS4wMDNjMS4xNzMgMCAyLjEyNC45NTEgMi4xMjQgMi4xMjV2Ny41OTRhMi4xMjUgMi4xMjUgMCAwIDEtMi4xMjUgMi4xMjVoLTYuMzFsLTIuNzkgMi42NjRhLjg3NS44NzUgMCAwIDEtMS40OC0uNjMydi0yLjAzMkg0LjVhMi4xMjUgMi4xMjUgMCAwIDEtMi4xMjUtMi4xMjVWNC43NDlabTIuMTI1LS44NzVhLjg3NS44NzUgMCAwIDAtLjg3NS44NzV2Ny41OTRjMCAuNDgzLjM5MS44NzUuODc1Ljg3NWguNzk4Yy40ODMgMCAuODc1LjM5Mi44NzUuODc1djEuNTNsMi4xOTMtMi4wOTRjLjIxLS4yLjQ4Ny0uMzExLjc3Ny0uMzExaDYuMzZhLjg3NS44NzUgMCAwIDAgLjg3NC0uODc1VjQuNzQ5YS44NzUuODc1IDAgMCAwLS44NzUtLjg3NUg0LjVabTQuNzI2IDcuMjU1YS43NzUuNzc1IDAgMSAxIDEuNTUgMCAuNzc1Ljc3NSAwIDAgMS0xLjU1IDBabTEuNC01LjM2M2EuNjI1LjYyNSAwIDEgMC0xLjI1IDB2Mi45NmEuNjI1LjYyNSAwIDEgMCAxLjI1IDB2LTIuOTZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Feedback = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-feedback',
        'staticon-Feedback',
        className
      ),
      ...props,
    })
);
Feedback.displayName = 'Feedback'

export default Feedback;
