
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M13.87 3.123H2.124a.375.375 0 0 0-.375.375l.005 9.005c0 .206.167.373.374.374.023-.911.364-1.937.98-2.754a3.986 3.986 0 0 1 1.284-1.12 2.65 2.65 0 1 1 3.26-.005c.519.277.95.677 1.287 1.127.612.818.947 1.843.97 2.752h3.965a.375.375 0 0 0 .375-.375l-.006-9.004a.375.375 0 0 0-.375-.375Zm-5.21 9.754a3.717 3.717 0 0 0-.72-2.003c-.466-.622-1.11-1.03-1.911-1.03-.803 0-1.452.41-1.922 1.032a3.7 3.7 0 0 0-.728 2.001h5.28ZM2.125 1.873h11.744c.898 0 1.625.727 1.625 1.624l.006 9.004c0 .898-.727 1.626-1.625 1.626H2.13a1.625 1.625 0 0 1-1.625-1.624L.5 3.5c0-.898.727-1.626 1.625-1.626Zm7.609 3.971c0-.345.28-.625.625-.625h2.357a.625.625 0 1 1 0 1.25h-2.357a.625.625 0 0 1-.625-.625Zm.625 1.73a.625.625 0 1 0 0 1.25h2.357a.625.625 0 1 0 0-1.25h-2.357ZM6.019 5.51a1.4 1.4 0 1 0 .003 2.8 1.4 1.4 0 0 0-.002-2.8Z","clip-rule":"evenodd"}]]

/**
 * @component @name Id
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuODcgMy4xMjNIMi4xMjRhLjM3NS4zNzUgMCAwIDAtLjM3NS4zNzVsLjAwNSA5LjAwNWMwIC4yMDYuMTY3LjM3My4zNzQuMzc0LjAyMy0uOTExLjM2NC0xLjkzNy45OC0yLjc1NGEzLjk4NiAzLjk4NiAwIDAgMSAxLjI4NC0xLjEyIDIuNjUgMi42NSAwIDEgMSAzLjI2LS4wMDVjLjUxOS4yNzcuOTUuNjc3IDEuMjg3IDEuMTI3LjYxMi44MTguOTQ3IDEuODQzLjk3IDIuNzUyaDMuOTY1YS4zNzUuMzc1IDAgMCAwIC4zNzUtLjM3NWwtLjAwNi05LjAwNGEuMzc1LjM3NSAwIDAgMC0uMzc1LS4zNzVabS01LjIxIDkuNzU0YTMuNzE3IDMuNzE3IDAgMCAwLS43Mi0yLjAwM2MtLjQ2Ni0uNjIyLTEuMTEtMS4wMy0xLjkxMS0xLjAzLS44MDMgMC0xLjQ1Mi40MS0xLjkyMiAxLjAzMmEzLjcgMy43IDAgMCAwLS43MjggMi4wMDFoNS4yOFpNMi4xMjUgMS44NzNoMTEuNzQ0Yy44OTggMCAxLjYyNS43MjcgMS42MjUgMS42MjRsLjAwNiA5LjAwNGMwIC44OTgtLjcyNyAxLjYyNi0xLjYyNSAxLjYyNkgyLjEzYTEuNjI1IDEuNjI1IDAgMCAxLTEuNjI1LTEuNjI0TC41IDMuNWMwLS44OTguNzI3LTEuNjI2IDEuNjI1LTEuNjI2Wm03LjYwOSAzLjk3MWMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNWgyLjM1N2EuNjI1LjYyNSAwIDEgMSAwIDEuMjVoLTIuMzU3YS42MjUuNjI1IDAgMCAxLS42MjUtLjYyNVptLjYyNSAxLjczYS42MjUuNjI1IDAgMSAwIDAgMS4yNWgyLjM1N2EuNjI1LjYyNSAwIDEgMCAwLTEuMjVoLTIuMzU3Wk02LjAxOSA1LjUxYTEuNCAxLjQgMCAxIDAgLjAwMyAyLjggMS40IDEuNCAwIDAgMC0uMDAyLTIuOFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Id = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-id',
        'staticon-Id',
        className
      ),
      ...props,
    })
);
Id.displayName = 'Id'

export default Id;
