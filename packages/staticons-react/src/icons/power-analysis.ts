
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M14.08.502c.345 0 .624.279.624.623V8.58a.623.623 0 0 1-1.247 0V1.125c0-.344.28-.623.624-.623ZM9.148 1.984a.623.623 0 0 0-1.247 0V6.11a4.966 4.966 0 0 0-1.533-.538V3.371a.623.623 0 0 0-1.246 0v2.14a5 5 0 1 0 5.316 5.79h4.44a.623.623 0 1 0 0-1.247h-4.395a4.982 4.982 0 0 0-1.337-2.98l.002-.039v-5.05Zm2.156.937c.344 0 .623.28.623.624V8.58a.623.623 0 1 1-1.247 0V3.545c0-.345.28-.624.624-.624ZM5.5 6.62a3.878 3.878 0 1 0 0 7.756 3.878 3.878 0 0 0 0-7.756Zm-.245 1.29c.344 0 .623.28.623.624v1.586l1.408.397a.623.623 0 1 1-.34 1.2l-1.81-.512a.624.624 0 0 1-.505-.611v-2.06c0-.344.28-.623.624-.623Z","clip-rule":"evenodd"}]]

/**
 * @component @name PowerAnalysis
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuMDguNTAyYy4zNDUgMCAuNjI0LjI3OS42MjQuNjIzVjguNThhLjYyMy42MjMgMCAwIDEtMS4yNDcgMFYxLjEyNWMwLS4zNDQuMjgtLjYyMy42MjQtLjYyM1pNOS4xNDggMS45ODRhLjYyMy42MjMgMCAwIDAtMS4yNDcgMFY2LjExYTQuOTY2IDQuOTY2IDAgMCAwLTEuNTMzLS41MzhWMy4zNzFhLjYyMy42MjMgMCAwIDAtMS4yNDYgMHYyLjE0YTUgNSAwIDEgMCA1LjMxNiA1Ljc5aDQuNDRhLjYyMy42MjMgMCAxIDAgMC0xLjI0N2gtNC4zOTVhNC45ODIgNC45ODIgMCAwIDAtMS4zMzctMi45OGwuMDAyLS4wMzl2LTUuMDVabTIuMTU2LjkzN2MuMzQ0IDAgLjYyMy4yOC42MjMuNjI0VjguNThhLjYyMy42MjMgMCAxIDEtMS4yNDcgMFYzLjU0NWMwLS4zNDUuMjgtLjYyNC42MjQtLjYyNFpNNS41IDYuNjJhMy44NzggMy44NzggMCAxIDAgMCA3Ljc1NiAzLjg3OCAzLjg3OCAwIDAgMCAwLTcuNzU2Wm0tLjI0NSAxLjI5Yy4zNDQgMCAuNjIzLjI4LjYyMy42MjR2MS41ODZsMS40MDguMzk3YS42MjMuNjIzIDAgMSAxLS4zNCAxLjJsLTEuODEtLjUxMmEuNjI0LjYyNCAwIDAgMS0uNTA1LS42MTF2LTIuMDZjMC0uMzQ0LjI4LS42MjMuNjI0LS42MjNaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const PowerAnalysis = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-power-analysis',
        'staticon-PowerAnalysis',
        className
      ),
      ...props,
    })
);
PowerAnalysis.displayName = 'PowerAnalysis'

export default PowerAnalysis;
