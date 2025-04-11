
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M8.68 8.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.5 6.25a5.75 5.75 0 1 0 0 11.5h7a5.75 5.75 0 0 0 0-11.5h-7ZM4.25 12A4.25 4.25 0 0 1 8.5 7.75h7a4.25 4.25 0 0 1 0 8.5h-7A4.25 4.25 0 0 1 4.25 12Z","clip-rule":"evenodd"}]]

/**
 * @component @name FeatureGate
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTguNjggOC45YTMuMSAzLjEgMCAxIDAgMCA2LjIgMy4xIDMuMSAwIDAgMCAwLTYuMloiLz4KICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjUgNi4yNWE1Ljc1IDUuNzUgMCAxIDAgMCAxMS41aDdhNS43NSA1Ljc1IDAgMCAwIDAtMTEuNWgtN1pNNC4yNSAxMkE0LjI1IDQuMjUgMCAwIDEgOC41IDcuNzVoN2E0LjI1IDQuMjUgMCAwIDEgMCA4LjVoLTdBNC4yNSA0LjI1IDAgMCAxIDQuMjUgMTJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FeatureGate = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-feature-gate',
        'staticon-FeatureGate',
        className
      ),
      ...props,
    })
);
FeatureGate.displayName = 'FeatureGate'

export default FeatureGate;
