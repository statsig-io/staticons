
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m8 2.252 5.999 4.157-6 4.156L2.002 6.41 8 2.252Zm-.712-1.027a1.25 1.25 0 0 1 1.424 0L14.71 5.38a1.25 1.25 0 0 1 0 2.055l-6 4.157a1.25 1.25 0 0 1-1.423 0L1.289 7.436a1.25 1.25 0 0 1 0-2.055l5.999-4.157Zm7.685 9.294a.625.625 0 0 0-.712-1.028l-6.049 4.191a.375.375 0 0 1-.427 0l-6.048-4.19a.625.625 0 1 0-.712 1.027l6.048 4.19a1.625 1.625 0 0 0 1.851 0l6.049-4.19Z","clip-rule":"evenodd"}]]

/**
 * @component @name Layers
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtOCAyLjI1MiA1Ljk5OSA0LjE1Ny02IDQuMTU2TDIuMDAyIDYuNDEgOCAyLjI1MlptLS43MTItMS4wMjdhMS4yNSAxLjI1IDAgMCAxIDEuNDI0IDBMMTQuNzEgNS4zOGExLjI1IDEuMjUgMCAwIDEgMCAyLjA1NWwtNiA0LjE1N2ExLjI1IDEuMjUgMCAwIDEtMS40MjMgMEwxLjI4OSA3LjQzNmExLjI1IDEuMjUgMCAwIDEgMC0yLjA1NWw1Ljk5OS00LjE1N1ptNy42ODUgOS4yOTRhLjYyNS42MjUgMCAwIDAtLjcxMi0xLjAyOGwtNi4wNDkgNC4xOTFhLjM3NS4zNzUgMCAwIDEtLjQyNyAwbC02LjA0OC00LjE5YS42MjUuNjI1IDAgMSAwLS43MTIgMS4wMjdsNi4wNDggNC4xOWExLjYyNSAxLjYyNSAwIDAgMCAxLjg1MSAwbDYuMDQ5LTQuMTlaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Layers = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-layers',
        'staticon-Layers',
        className
      ),
      ...props,
    })
);
Layers.displayName = 'Layers'

export default Layers;
