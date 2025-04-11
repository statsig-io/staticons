
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M18.254 3.997c.966 0 1.75.784 1.75 1.75v4.56a.75.75 0 0 1-1.5 0v-3.75L6.567 18.493h3.749a.75.75 0 1 1 0 1.5H5.754a1.75 1.75 0 0 1-1.75-1.75v-4.559a.75.75 0 0 1 1.5 0v3.751L17.442 5.497h-3.75a.75.75 0 0 1 0-1.5h4.562Z"}]]

/**
 * @component @name Resize
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE4LjI1NCAzLjk5N2MuOTY2IDAgMS43NS43ODQgMS43NSAxLjc1djQuNTZhLjc1Ljc1IDAgMCAxLTEuNSAwdi0zLjc1TDYuNTY3IDE4LjQ5M2gzLjc0OWEuNzUuNzUgMCAxIDEgMCAxLjVINS43NTRhMS43NSAxLjc1IDAgMCAxLTEuNzUtMS43NXYtNC41NTlhLjc1Ljc1IDAgMCAxIDEuNSAwdjMuNzUxTDE3LjQ0MiA1LjQ5N2gtMy43NWEuNzUuNzUgMCAwIDEgMC0xLjVoNC41NjJaIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Resize = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-resize',
        'staticon-Resize',
        className
      ),
      ...props,
    })
);
Resize.displayName = 'Resize'

export default Resize;
