
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.5 4.745a1.25 1.25 0 1 0 0-2.499 1.25 1.25 0 0 0 0 2.499Zm1.249 3.247a1.249 1.249 0 1 1-2.498 0 1.249 1.249 0 0 1 2.498 0Zm2.356-.602a.603.603 0 0 0 0 1.205h8.042a.603.603 0 1 0 0-1.205H6.105ZM3.75 12.503a1.25 1.25 0 1 1-2.498 0 1.25 1.25 0 0 1 2.498 0Zm1.753-9.007c0-.333.27-.603.603-.603h8.042a.603.603 0 0 1 0 1.206H6.105a.603.603 0 0 1-.603-.603Zm.603 8.404a.603.603 0 0 0 0 1.206h8.042a.603.603 0 0 0 0-1.206H6.105Z","clip-rule":"evenodd"}]]

/**
 * @component @name ListView
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi41IDQuNzQ1YTEuMjUgMS4yNSAwIDEgMCAwLTIuNDk5IDEuMjUgMS4yNSAwIDAgMCAwIDIuNDk5Wm0xLjI0OSAzLjI0N2ExLjI0OSAxLjI0OSAwIDEgMS0yLjQ5OCAwIDEuMjQ5IDEuMjQ5IDAgMCAxIDIuNDk4IDBabTIuMzU2LS42MDJhLjYwMy42MDMgMCAwIDAgMCAxLjIwNWg4LjA0MmEuNjAzLjYwMyAwIDEgMCAwLTEuMjA1SDYuMTA1Wk0zLjc1IDEyLjUwM2ExLjI1IDEuMjUgMCAxIDEtMi40OTggMCAxLjI1IDEuMjUgMCAwIDEgMi40OTggMFptMS43NTMtOS4wMDdjMC0uMzMzLjI3LS42MDMuNjAzLS42MDNoOC4wNDJhLjYwMy42MDMgMCAwIDEgMCAxLjIwNkg2LjEwNWEuNjAzLjYwMyAwIDAgMS0uNjAzLS42MDNabS42MDMgOC40MDRhLjYwMy42MDMgMCAwIDAgMCAxLjIwNmg4LjA0MmEuNjAzLjYwMyAwIDAgMCAwLTEuMjA2SDYuMTA1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ListView = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-list-view',
        'staticon-ListView',
        className
      ),
      ...props,
    })
);
ListView.displayName = 'ListView'

export default ListView;
