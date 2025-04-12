
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M.84 2.751c0-.621.503-1.125 1.124-1.125h11.999c.621 0 1.125.504 1.125 1.125v1.926c0 .582-.443 1.061-1.01 1.119V12.5c0 1.035-.84 1.875-1.875 1.875h-8.48A1.875 1.875 0 0 1 1.848 12.5V5.796A1.125 1.125 0 0 1 .84 4.676V2.752Zm2.258 3.05h9.73V12.5c0 .345-.28.625-.625.625h-8.48a.625.625 0 0 1-.625-.625V5.802ZM2.09 2.877v1.676h11.749V2.876H2.089Zm4.3 4.377a.625.625 0 1 0 0 1.25h3.148a.625.625 0 1 0 0-1.25H6.39Z","clip-rule":"evenodd"}]]

/**
 * @component @name Inventory
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNLjg0IDIuNzUxYzAtLjYyMS41MDMtMS4xMjUgMS4xMjQtMS4xMjVoMTEuOTk5Yy42MjEgMCAxLjEyNS41MDQgMS4xMjUgMS4xMjV2MS45MjZjMCAuNTgyLS40NDMgMS4wNjEtMS4wMSAxLjExOVYxMi41YzAgMS4wMzUtLjg0IDEuODc1LTEuODc1IDEuODc1aC04LjQ4QTEuODc1IDEuODc1IDAgMCAxIDEuODQ4IDEyLjVWNS43OTZBMS4xMjUgMS4xMjUgMCAwIDEgLjg0IDQuNjc2VjIuNzUyWm0yLjI1OCAzLjA1aDkuNzNWMTIuNWMwIC4zNDUtLjI4LjYyNS0uNjI1LjYyNWgtOC40OGEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVWNS44MDJaTTIuMDkgMi44Nzd2MS42NzZoMTEuNzQ5VjIuODc2SDIuMDg5Wm00LjMgNC4zNzdhLjYyNS42MjUgMCAxIDAgMCAxLjI1aDMuMTQ4YS42MjUuNjI1IDAgMSAwIDAtMS4yNUg2LjM5WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Inventory = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-inventory',
        'staticon-Inventory',
        className
      ),
      ...props,
    })
);
Inventory.displayName = 'Inventory'

export default Inventory;
