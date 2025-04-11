
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M10.317 20.716a2.25 2.25 0 0 1-3.18 0l-3.853-3.853a2.25 2.25 0 0 1 0-3.18l1.48-1.48a.834.834 0 0 1 .048-.048l2.421-2.422a.766.766 0 0 1 .047-.047l2.423-2.422a.755.755 0 0 1 .047-.048l2.44-2.44.006-.005.006-.006 1.48-1.481a2.25 2.25 0 0 1 3.182 0l3.852 3.852a2.249 2.249 0 0 1 0 3.18l-10.399 10.4Zm3.469-15.415.957-.957a.75.75 0 0 1 1.06 0l3.853 3.852a.75.75 0 0 1 0 1.06l-10.4 10.4a.75.75 0 0 1-1.06 0l-3.852-3.853a.75.75 0 0 1 0-1.06l.974-.974 1.75 1.749a.75.75 0 0 0 1.06-1.06l-1.75-1.75L7.787 11.3l1.749 1.75a.75.75 0 1 0 1.06-1.061l-1.749-1.75 1.41-1.409 1.749 1.75a.75.75 0 0 0 1.06-1.06l-1.75-1.75 1.41-1.409 1.75 1.75a.75.75 0 0 0 1.06-1.06l-1.75-1.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name Metrics
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuMzE3IDIwLjcxNmEyLjI1IDIuMjUgMCAwIDEtMy4xOCAwbC0zLjg1My0zLjg1M2EyLjI1IDIuMjUgMCAwIDEgMC0zLjE4bDEuNDgtMS40OGEuODM0LjgzNCAwIDAgMSAuMDQ4LS4wNDhsMi40MjEtMi40MjJhLjc2Ni43NjYgMCAwIDEgLjA0Ny0uMDQ3bDIuNDIzLTIuNDIyYS43NTUuNzU1IDAgMCAxIC4wNDctLjA0OGwyLjQ0LTIuNDQuMDA2LS4wMDUuMDA2LS4wMDYgMS40OC0xLjQ4MWEyLjI1IDIuMjUgMCAwIDEgMy4xODIgMGwzLjg1MiAzLjg1MmEyLjI0OSAyLjI0OSAwIDAgMSAwIDMuMThsLTEwLjM5OSAxMC40Wm0zLjQ2OS0xNS40MTUuOTU3LS45NTdhLjc1Ljc1IDAgMCAxIDEuMDYgMGwzLjg1MyAzLjg1MmEuNzUuNzUgMCAwIDEgMCAxLjA2bC0xMC40IDEwLjRhLjc1Ljc1IDAgMCAxLTEuMDYgMGwtMy44NTItMy44NTNhLjc1Ljc1IDAgMCAxIDAtMS4wNmwuOTc0LS45NzQgMS43NSAxLjc0OWEuNzUuNzUgMCAwIDAgMS4wNi0xLjA2bC0xLjc1LTEuNzVMNy43ODcgMTEuM2wxLjc0OSAxLjc1YS43NS43NSAwIDEgMCAxLjA2LTEuMDYxbC0xLjc0OS0xLjc1IDEuNDEtMS40MDkgMS43NDkgMS43NWEuNzUuNzUgMCAwIDAgMS4wNi0xLjA2bC0xLjc1LTEuNzUgMS40MS0xLjQwOSAxLjc1IDEuNzVhLjc1Ljc1IDAgMCAwIDEuMDYtMS4wNmwtMS43NS0xLjc1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Metrics = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-metrics',
        'staticon-Metrics',
        className
      ),
      ...props,
    })
);
Metrics.displayName = 'Metrics'

export default Metrics;
