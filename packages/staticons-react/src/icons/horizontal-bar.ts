
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.499 2.001a.875.875 0 0 0-.875.875v1.739c0 .483.391.875.875.875H13.5a.875.875 0 0 0 .875-.875V2.876a.875.875 0 0 0-.875-.875H2.499Zm.375 2.239v-.99h10.252v.989H2.874Zm-1.25 2.89c0-.482.391-.874.875-.874h8.521c.484 0 .875.392.875.875V8.87a.875.875 0 0 1-.875.875H2.5a.875.875 0 0 1-.875-.875V7.13Zm1.25.376v.989h7.771v-.99H2.874Zm-1.25 3.88c0-.483.391-.875.875-.875H7.28c.483 0 .875.392.875.875v1.739A.875.875 0 0 1 7.28 14H2.499a.875.875 0 0 1-.875-.875v-1.74Zm1.25.375v.989h4.032v-.99H2.874Z","clip-rule":"evenodd"}]]

/**
 * @component @name HorizontalBar
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi40OTkgMi4wMDFhLjg3NS44NzUgMCAwIDAtLjg3NS44NzV2MS43MzljMCAuNDgzLjM5MS44NzUuODc1Ljg3NUgxMy41YS44NzUuODc1IDAgMCAwIC44NzUtLjg3NVYyLjg3NmEuODc1Ljg3NSAwIDAgMC0uODc1LS44NzVIMi40OTlabS4zNzUgMi4yMzl2LS45OWgxMC4yNTJ2Ljk4OUgyLjg3NFptLTEuMjUgMi44OWMwLS40ODIuMzkxLS44NzQuODc1LS44NzRoOC41MjFjLjQ4NCAwIC44NzUuMzkyLjg3NS44NzVWOC44N2EuODc1Ljg3NSAwIDAgMS0uODc1Ljg3NUgyLjVhLjg3NS44NzUgMCAwIDEtLjg3NS0uODc1VjcuMTNabTEuMjUuMzc2di45ODloNy43NzF2LS45OUgyLjg3NFptLTEuMjUgMy44OGMwLS40ODMuMzkxLS44NzUuODc1LS44NzVINy4yOGMuNDgzIDAgLjg3NS4zOTIuODc1Ljg3NXYxLjczOUEuODc1Ljg3NSAwIDAgMSA3LjI4IDE0SDIuNDk5YS44NzUuODc1IDAgMCAxLS44NzUtLjg3NXYtMS43NFptMS4yNS4zNzV2Ljk4OWg0LjAzMnYtLjk5SDIuODc0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const HorizontalBar = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-horizontal-bar',
        'staticon-HorizontalBar',
        className
      ),
      ...props,
    })
);
HorizontalBar.displayName = 'HorizontalBar'

export default HorizontalBar;
