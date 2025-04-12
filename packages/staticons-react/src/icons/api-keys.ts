
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12.48 9.05a3.91 3.91 0 1 0-6.405-1.332.78.78 0 0 1-.173.835l-3.497 3.496.2 1.345 1.345.2.578-.577-.275-.318a.775.775 0 0 1 .038-1.055l1.056-1.056a.775.775 0 0 1 1.134.04l.203.234.763-.764a.778.778 0 0 1 .835-.173 3.912 3.912 0 0 0 4.198-.874Zm.883-6.414a5.16 5.16 0 0 1-5.244 8.558l-.913.913a.775.775 0 0 1-1.134-.041l-.202-.234-.383.383.275.319a.775.775 0 0 1-.037 1.055l-1.06 1.06a.775.775 0 0 1-.662.218l-1.93-.288a.775.775 0 0 1-.652-.652l-.288-1.93a.775.775 0 0 1 .219-.662L4.806 7.88a5.16 5.16 0 0 1 8.558-5.244Zm-3.207 4.039a.588.588 0 1 1-.831-.831.588.588 0 0 1 .831.831Zm-1.715.884a1.838 1.838 0 1 0 2.599-2.6 1.838 1.838 0 0 0-2.6 2.6Z","clip-rule":"evenodd"}]]

/**
 * @component @name ApiKeys
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNDggOS4wNWEzLjkxIDMuOTEgMCAxIDAtNi40MDUtMS4zMzIuNzguNzggMCAwIDEtLjE3My44MzVsLTMuNDk3IDMuNDk2LjIgMS4zNDUgMS4zNDUuMi41NzgtLjU3Ny0uMjc1LS4zMThhLjc3NS43NzUgMCAwIDEgLjAzOC0xLjA1NWwxLjA1Ni0xLjA1NmEuNzc1Ljc3NSAwIDAgMSAxLjEzNC4wNGwuMjAzLjIzNC43NjMtLjc2NGEuNzc4Ljc3OCAwIDAgMSAuODM1LS4xNzMgMy45MTIgMy45MTIgMCAwIDAgNC4xOTgtLjg3NFptLjg4My02LjQxNGE1LjE2IDUuMTYgMCAwIDEtNS4yNDQgOC41NThsLS45MTMuOTEzYS43NzUuNzc1IDAgMCAxLTEuMTM0LS4wNDFsLS4yMDItLjIzNC0uMzgzLjM4My4yNzUuMzE5YS43NzUuNzc1IDAgMCAxLS4wMzcgMS4wNTVsLTEuMDYgMS4wNmEuNzc1Ljc3NSAwIDAgMS0uNjYyLjIxOGwtMS45My0uMjg4YS43NzUuNzc1IDAgMCAxLS42NTItLjY1MmwtLjI4OC0xLjkzYS43NzUuNzc1IDAgMCAxIC4yMTktLjY2Mkw0LjgwNiA3Ljg4YTUuMTYgNS4xNiAwIDAgMSA4LjU1OC01LjI0NFptLTMuMjA3IDQuMDM5YS41ODguNTg4IDAgMSAxLS44MzEtLjgzMS41ODguNTg4IDAgMCAxIC44MzEuODMxWm0tMS43MTUuODg0YTEuODM4IDEuODM4IDAgMSAwIDIuNTk5LTIuNiAxLjgzOCAxLjgzOCAwIDAgMC0yLjYgMi42WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ApiKeys = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-api-keys',
        'staticon-ApiKeys',
        className
      ),
      ...props,
    })
);
ApiKeys.displayName = 'ApiKeys'

export default ApiKeys;
