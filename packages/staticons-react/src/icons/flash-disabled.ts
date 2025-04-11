
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m9.115 8.054 2.876-3.66V9.26c0 .967.784 1.75 1.751 1.75l4.506-.003a.25.25 0 0 1 .197.405l-2.628 3.345-6.702-6.702Zm-2.002.12L3.72 4.779a.75.75 0 1 1 1.06-1.06l3.268 3.267 3.205-4.079c.735-.936 2.239-.416 2.239.774V9.26c0 .138.112.25.25.25l4.506-.003c1.461-.001 2.28 1.682 1.378 2.831l-2.74 3.487 3.396 3.397a.75.75 0 1 1-1.06 1.06l-3.27-3.269-3.204 4.08c-.736.936-2.24.416-2.24-.774V14.74a.25.25 0 0 0-.25-.25H5.752c-1.46 0-2.278-1.683-1.376-2.831l2.738-3.485Zm7.77 7.77-2.875 3.66V14.74a1.75 1.75 0 0 0-1.75-1.75H5.75a.25.25 0 0 1-.197-.405L8.18 9.242l6.703 6.702Z","clip-rule":"evenodd"}]]

/**
 * @component @name FlashDisabled
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtOS4xMTUgOC4wNTQgMi44NzYtMy42NlY5LjI2YzAgLjk2Ny43ODQgMS43NSAxLjc1MSAxLjc1bDQuNTA2LS4wMDNhLjI1LjI1IDAgMCAxIC4xOTcuNDA1bC0yLjYyOCAzLjM0NS02LjcwMi02LjcwMlptLTIuMDAyLjEyTDMuNzIgNC43NzlhLjc1Ljc1IDAgMSAxIDEuMDYtMS4wNmwzLjI2OCAzLjI2NyAzLjIwNS00LjA3OWMuNzM1LS45MzYgMi4yMzktLjQxNiAyLjIzOS43NzRWOS4yNmMwIC4xMzguMTEyLjI1LjI1LjI1bDQuNTA2LS4wMDNjMS40NjEtLjAwMSAyLjI4IDEuNjgyIDEuMzc4IDIuODMxbC0yLjc0IDMuNDg3IDMuMzk2IDMuMzk3YS43NS43NSAwIDEgMS0xLjA2IDEuMDZsLTMuMjctMy4yNjktMy4yMDQgNC4wOGMtLjczNi45MzYtMi4yNC40MTYtMi4yNC0uNzc0VjE0Ljc0YS4yNS4yNSAwIDAgMC0uMjUtLjI1SDUuNzUyYy0xLjQ2IDAtMi4yNzgtMS42ODMtMS4zNzYtMi44MzFsMi43MzgtMy40ODVabTcuNzcgNy43Ny0yLjg3NSAzLjY2VjE0Ljc0YTEuNzUgMS43NSAwIDAgMC0xLjc1LTEuNzVINS43NWEuMjUuMjUgMCAwIDEtLjE5Ny0uNDA1TDguMTggOS4yNDJsNi43MDMgNi43MDJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FlashDisabled = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-flash-disabled',
        'staticon-FlashDisabled',
        className
      ),
      ...props,
    })
);
FlashDisabled.displayName = 'FlashDisabled'

export default FlashDisabled;
