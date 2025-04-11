
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M14.493 12a2.5 2.5 0 1 1-4.999.002A2.5 2.5 0 0 1 14.493 12Zm7.001 0a2.5 2.5 0 1 1-4.998.002A2.5 2.5 0 0 1 21.494 12ZM7.491 12a2.5 2.5 0 1 1-4.998.002A2.5 2.5 0 0 1 7.49 12Z"}]]

/**
 * @component @name ThreeDot
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE0LjQ5MyAxMmEyLjUgMi41IDAgMSAxLTQuOTk5LjAwMkEyLjUgMi41IDAgMCAxIDE0LjQ5MyAxMlptNy4wMDEgMGEyLjUgMi41IDAgMSAxLTQuOTk4LjAwMkEyLjUgMi41IDAgMCAxIDIxLjQ5NCAxMlpNNy40OTEgMTJhMi41IDIuNSAwIDEgMS00Ljk5OC4wMDJBMi41IDIuNSAwIDAgMSA3LjQ5IDEyWiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ThreeDot = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-three-dot',
        'staticon-ThreeDot',
        className
      ),
      ...props,
    })
);
ThreeDot.displayName = 'ThreeDot'

export default ThreeDot;
