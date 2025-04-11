
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M17.126 12.75a.75.75 0 0 0 0-1.5H6.873a.75.75 0 0 0 0 1.5h10.253Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-1.5 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Minus
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3LjEyNiAxMi43NWEuNzUuNzUgMCAwIDAgMC0xLjVINi44NzNhLjc1Ljc1IDAgMCAwIDAgMS41aDEwLjI1M1oiLz4KICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMSAxMmE5IDkgMCAxIDEtMTggMCA5IDkgMCAwIDEgMTggMFptLTEuNSAwYTcuNSA3LjUgMCAxIDEtMTUgMCA3LjUgNy41IDAgMCAxIDE1IDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Minus = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-minus',
        'staticon-Minus',
        className
      ),
      ...props,
    })
);
Minus.displayName = 'Minus'

export default Minus;
