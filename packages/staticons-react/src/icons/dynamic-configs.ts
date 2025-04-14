
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M6.934 2.75a2.292 2.292 0 0 0-2.292 2.292v1.167c0 1.43-.89 2.709-2.232 3.204a.625.625 0 0 0 0 1.174 3.416 3.416 0 0 1 2.232 3.204v1.168a2.292 2.292 0 0 0 2.292 2.291h.361a2.3 2.3 0 0 0 .392-.033l.31-.054a.625.625 0 0 0-.215-1.231l-.308.053c-.06.01-.119.015-.179.015h-.361a1.042 1.042 0 0 1-1.042-1.041V13.79A4.664 4.664 0 0 0 3.947 10a4.667 4.667 0 0 0 1.945-3.792V5.042C5.892 4.466 6.36 4 6.934 4h.361c.06 0 .12.005.179.015l.308.054a.625.625 0 0 0 .214-1.232l-.309-.053a2.292 2.292 0 0 0-.392-.034h-.361Zm8.425 2.292a2.292 2.292 0 0 0-2.292-2.292h-.362a2.29 2.29 0 0 0-.392.034l-.308.053a.625.625 0 0 0 .213 1.232l.31-.054c.058-.01.118-.015.177-.015h.362c.575 0 1.042.466 1.042 1.042v1.167c0 1.528.744 2.93 1.945 3.791a4.666 4.666 0 0 0-1.945 3.791v1.167c0 .576-.467 1.042-1.042 1.042h-.362a1.06 1.06 0 0 1-.178-.015l-.308-.054a.625.625 0 0 0-.214 1.232l.308.053c.13.023.261.034.392.034h.362a2.292 2.292 0 0 0 2.292-2.292v-1.167c0-1.43.89-2.709 2.232-3.204a.625.625 0 0 0 0-1.174 3.416 3.416 0 0 1-2.232-3.204V5.042Z","clip-rule":"evenodd"}]]

/**
 * @component @name DynamicConfigs
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi45MzQgMi43NWEyLjI5MiAyLjI5MiAwIDAgMC0yLjI5MiAyLjI5MnYxLjE2N2MwIDEuNDMtLjg5IDIuNzA5LTIuMjMyIDMuMjA0YS42MjUuNjI1IDAgMCAwIDAgMS4xNzQgMy40MTYgMy40MTYgMCAwIDEgMi4yMzIgMy4yMDR2MS4xNjhhMi4yOTIgMi4yOTIgMCAwIDAgMi4yOTIgMi4yOTFoLjM2MWEyLjMgMi4zIDAgMCAwIC4zOTItLjAzM2wuMzEtLjA1NGEuNjI1LjYyNSAwIDAgMC0uMjE1LTEuMjMxbC0uMzA4LjA1M2MtLjA2LjAxLS4xMTkuMDE1LS4xNzkuMDE1aC0uMzYxYTEuMDQyIDEuMDQyIDAgMCAxLTEuMDQyLTEuMDQxVjEzLjc5QTQuNjY0IDQuNjY0IDAgMCAwIDMuOTQ3IDEwYTQuNjY3IDQuNjY3IDAgMCAwIDEuOTQ1LTMuNzkyVjUuMDQyQzUuODkyIDQuNDY2IDYuMzYgNCA2LjkzNCA0aC4zNjFjLjA2IDAgLjEyLjAwNS4xNzkuMDE1bC4zMDguMDU0YS42MjUuNjI1IDAgMCAwIC4yMTQtMS4yMzJsLS4zMDktLjA1M2EyLjI5MiAyLjI5MiAwIDAgMC0uMzkyLS4wMzRoLS4zNjFabTguNDI1IDIuMjkyYTIuMjkyIDIuMjkyIDAgMCAwLTIuMjkyLTIuMjkyaC0uMzYyYTIuMjkgMi4yOSAwIDAgMC0uMzkyLjAzNGwtLjMwOC4wNTNhLjYyNS42MjUgMCAwIDAgLjIxMyAxLjIzMmwuMzEtLjA1NGMuMDU4LS4wMS4xMTgtLjAxNS4xNzctLjAxNWguMzYyYy41NzUgMCAxLjA0Mi40NjYgMS4wNDIgMS4wNDJ2MS4xNjdjMCAxLjUyOC43NDQgMi45MyAxLjk0NSAzLjc5MWE0LjY2NiA0LjY2NiAwIDAgMC0xLjk0NSAzLjc5MXYxLjE2N2MwIC41NzYtLjQ2NyAxLjA0Mi0xLjA0MiAxLjA0MmgtLjM2MmExLjA2IDEuMDYgMCAwIDEtLjE3OC0uMDE1bC0uMzA4LS4wNTRhLjYyNS42MjUgMCAwIDAtLjIxNCAxLjIzMmwuMzA4LjA1M2MuMTMuMDIzLjI2MS4wMzQuMzkyLjAzNGguMzYyYTIuMjkyIDIuMjkyIDAgMCAwIDIuMjkyLTIuMjkydi0xLjE2N2MwLTEuNDMuODktMi43MDkgMi4yMzItMy4yMDRhLjYyNS42MjUgMCAwIDAgMC0xLjE3NCAzLjQxNiAzLjQxNiAwIDAgMS0yLjIzMi0zLjIwNFY1LjA0MloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const DynamicConfigs = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-dynamic-configs',
        'staticon-DynamicConfigs',
        className
      ),
      ...props,
    })
);
DynamicConfigs.displayName = 'DynamicConfigs'

export default DynamicConfigs;
