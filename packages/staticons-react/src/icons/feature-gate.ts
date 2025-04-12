
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M5.483 5.485a2.516 2.516 0 1 0 0 5.033 2.516 2.516 0 0 0 0-5.033Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.375 3.25a4.75 4.75 0 0 0 0 9.5h5.25a4.75 4.75 0 0 0 0-9.5h-5.25ZM1.875 8a3.501 3.501 0 0 1 3.5-3.5h5.25a3.501 3.501 0 1 1 0 7.001h-5.25a3.501 3.501 0 0 1-3.5-3.5Z","clip-rule":"evenodd"}]]

/**
 * @component @name FeatureGate
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTUuNDgzIDUuNDg1YTIuNTE2IDIuNTE2IDAgMSAwIDAgNS4wMzMgMi41MTYgMi41MTYgMCAwIDAgMC01LjAzM1oiLz4KICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjM3NSAzLjI1YTQuNzUgNC43NSAwIDAgMCAwIDkuNWg1LjI1YTQuNzUgNC43NSAwIDAgMCAwLTkuNWgtNS4yNVpNMS44NzUgOGEzLjUwMSAzLjUwMSAwIDAgMSAzLjUtMy41aDUuMjVhMy41MDEgMy41MDEgMCAxIDEgMCA3LjAwMWgtNS4yNWEzLjUwMSAzLjUwMSAwIDAgMS0zLjUtMy41WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
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
