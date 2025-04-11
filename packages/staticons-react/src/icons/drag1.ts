
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M9 10.01a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM9 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm6-5.99a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM15 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"}]]

/**
 * @component @name Drag1
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTkgMTAuMDFhMiAyIDAgMSAxIDAgNCAyIDIgMCAwIDEgMC00Wk05IDRhMiAyIDAgMSAxIDAgNCAyIDIgMCAwIDEgMC00Wm0wIDEyYTIgMiAwIDEgMSAwIDQgMiAyIDAgMCAxIDAtNFptNi01Ljk5YTIgMiAwIDEgMSAwIDQgMiAyIDAgMCAxIDAtNFpNMTUgNGEyIDIgMCAxIDEgMCA0IDIgMiAwIDAgMSAwLTRabTAgMTJhMiAyIDAgMSAxIDAgNCAyIDIgMCAwIDEgMC00WiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Drag1 = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-drag1',
        'staticon-Drag1',
        className
      ),
      ...props,
    })
);
Drag1.displayName = 'Drag1'

export default Drag1;
