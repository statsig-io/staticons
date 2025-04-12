
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m3.087 6.824 4.897-4.528 4.925 4.528h-1.475a.858.858 0 0 0-.858.858v3.255H5.393V7.682a.858.858 0 0 0-.858-.858H3.087Zm5.658-5.526A1.125 1.125 0 0 0 7.22 1.3L1.535 6.557c-.585.54-.202 1.517.594 1.517h2.014v2.987c0 .622.504 1.126 1.125 1.126h5.433c.621 0 1.125-.504 1.125-1.125V8.074h2.045c.798 0 1.18-.98.593-1.519L8.745 1.298ZM4.784 13.75a.625.625 0 1 0 0 1.25h6.433a.625.625 0 1 0 0-1.25H4.784Z","clip-rule":"evenodd"}]]

/**
 * @component @name Upgrade
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMy4wODcgNi44MjQgNC44OTctNC41MjggNC45MjUgNC41MjhoLTEuNDc1YS44NTguODU4IDAgMCAwLS44NTguODU4djMuMjU1SDUuMzkzVjcuNjgyYS44NTguODU4IDAgMCAwLS44NTgtLjg1OEgzLjA4N1ptNS42NTgtNS41MjZBMS4xMjUgMS4xMjUgMCAwIDAgNy4yMiAxLjNMMS41MzUgNi41NTdjLS41ODUuNTQtLjIwMiAxLjUxNy41OTQgMS41MTdoMi4wMTR2Mi45ODdjMCAuNjIyLjUwNCAxLjEyNiAxLjEyNSAxLjEyNmg1LjQzM2MuNjIxIDAgMS4xMjUtLjUwNCAxLjEyNS0xLjEyNVY4LjA3NGgyLjA0NWMuNzk4IDAgMS4xOC0uOTguNTkzLTEuNTE5TDguNzQ1IDEuMjk4Wk00Ljc4NCAxMy43NWEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoNi40MzNhLjYyNS42MjUgMCAxIDAgMC0xLjI1SDQuNzg0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Upgrade = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-upgrade',
        'staticon-Upgrade',
        className
      ),
      ...props,
    })
);
Upgrade.displayName = 'Upgrade'

export default Upgrade;
