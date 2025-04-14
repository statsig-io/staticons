
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M5.655 9.439a.643.643 0 1 0 .909-.91L4.989 6.956h6.976a3.91 3.91 0 1 1 0 7.818H3.55a.626.626 0 0 0 0 1.253h8.415a5.162 5.162 0 1 0 0-10.324H4.989l1.575-1.575a.643.643 0 1 0-.91-.91l-2.55 2.55a.793.793 0 0 0 0 1.122l2.55 2.55Z","clip-rule":"evenodd"}]]

/**
 * @component @name Undo
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS42NTUgOS40MzlhLjY0My42NDMgMCAxIDAgLjkwOS0uOTFMNC45ODkgNi45NTZoNi45NzZhMy45MSAzLjkxIDAgMSAxIDAgNy44MThIMy41NWEuNjI2LjYyNiAwIDAgMCAwIDEuMjUzaDguNDE1YTUuMTYyIDUuMTYyIDAgMSAwIDAtMTAuMzI0SDQuOTg5bDEuNTc1LTEuNTc1YS42NDMuNjQzIDAgMSAwLS45MS0uOTFsLTIuNTUgMi41NWEuNzkzLjc5MyAwIDAgMCAwIDEuMTIybDIuNTUgMi41NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Undo = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-undo',
        'staticon-Undo',
        className
      ),
      ...props,
    })
);
Undo.displayName = 'Undo'

export default Undo;
