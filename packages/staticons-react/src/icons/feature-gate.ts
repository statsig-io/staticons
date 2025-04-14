
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M7.25 7.212a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Z"}],["path",{"fill-rule":"evenodd","d":"M7.123 4.876a5.124 5.124 0 1 0 0 10.248h5.754a5.124 5.124 0 0 0 0-10.248H7.123ZM3.249 10a3.874 3.874 0 0 1 3.874-3.873h5.754a3.874 3.874 0 0 1 0 7.747H7.123A3.873 3.873 0 0 1 3.249 10Z","clip-rule":"evenodd"}]]

/**
 * @component @name FeatureGate
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTcuMjUgNy4yMTJhMi43NSAyLjc1IDAgMSAwIDAgNS41IDIuNzUgMi43NSAwIDAgMCAwLTUuNVoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjEyMyA0Ljg3NmE1LjEyNCA1LjEyNCAwIDEgMCAwIDEwLjI0OGg1Ljc1NGE1LjEyNCA1LjEyNCAwIDAgMCAwLTEwLjI0OEg3LjEyM1pNMy4yNDkgMTBhMy44NzQgMy44NzQgMCAwIDEgMy44NzQtMy44NzNoNS43NTRhMy44NzQgMy44NzQgMCAwIDEgMCA3Ljc0N0g3LjEyM0EzLjg3MyAzLjg3MyAwIDAgMSAzLjI0OSAxMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
