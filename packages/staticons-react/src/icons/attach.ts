
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M9.785 4.59a4.071 4.071 0 0 1 5.56-1.484 4.062 4.062 0 0 1 1.493 5.55l-4.702 8.135a2.41 2.41 0 0 1-4.174-2.407l4.702-8.134a.748.748 0 0 1 1.295.747L9.257 15.13a.914.914 0 0 0 1.583.913l4.703-8.134a2.576 2.576 0 0 0-4.462-2.573L6.379 13.47a4.227 4.227 0 0 0 1.554 5.778 4.237 4.237 0 0 0 5.786-1.545l4.702-8.134a.748.748 0 0 1 1.295.747l-4.702 8.134c-1.58 2.736-5.085 3.671-7.828 2.09a5.72 5.72 0 0 1-2.103-7.817L9.785 4.59Z","clip-rule":"evenodd"}]]

/**
 * @component @name Attach
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS43ODUgNC41OWE0LjA3MSA0LjA3MSAwIDAgMSA1LjU2LTEuNDg0IDQuMDYyIDQuMDYyIDAgMCAxIDEuNDkzIDUuNTVsLTQuNzAyIDguMTM1YTIuNDEgMi40MSAwIDAgMS00LjE3NC0yLjQwN2w0LjcwMi04LjEzNGEuNzQ4Ljc0OCAwIDAgMSAxLjI5NS43NDdMOS4yNTcgMTUuMTNhLjkxNC45MTQgMCAwIDAgMS41ODMuOTEzbDQuNzAzLTguMTM0YTIuNTc2IDIuNTc2IDAgMCAwLTQuNDYyLTIuNTczTDYuMzc5IDEzLjQ3YTQuMjI3IDQuMjI3IDAgMCAwIDEuNTU0IDUuNzc4IDQuMjM3IDQuMjM3IDAgMCAwIDUuNzg2LTEuNTQ1bDQuNzAyLTguMTM0YS43NDguNzQ4IDAgMCAxIDEuMjk1Ljc0N2wtNC43MDIgOC4xMzRjLTEuNTggMi43MzYtNS4wODUgMy42NzEtNy44MjggMi4wOWE1LjcyIDUuNzIgMCAwIDEtMi4xMDMtNy44MTdMOS43ODUgNC41OVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Attach = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-attach',
        'staticon-Attach',
        className
      ),
      ...props,
    })
);
Attach.displayName = 'Attach'

export default Attach;
