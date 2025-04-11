
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-1.5 0a7.5 7.5 0 0 1-12.247 5.807L17.807 7.253A7.469 7.469 0 0 1 19.5 12ZM6.192 16.746 16.746 6.192A7.5 7.5 0 0 0 6.192 16.746Z","clip-rule":"evenodd"}]]

/**
 * @component @name Disable
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjEgMTJhOSA5IDAgMSAxLTE4IDAgOSA5IDAgMCAxIDE4IDBabS0xLjUgMGE3LjUgNy41IDAgMCAxLTEyLjI0NyA1LjgwN0wxNy44MDcgNy4yNTNBNy40NjkgNy40NjkgMCAwIDEgMTkuNSAxMlpNNi4xOTIgMTYuNzQ2IDE2Ljc0NiA2LjE5MkE3LjUgNy41IDAgMCAwIDYuMTkyIDE2Ljc0NloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Disable = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-disable',
        'staticon-Disable',
        className
      ),
      ...props,
    })
);
Disable.displayName = 'Disable'

export default Disable;
