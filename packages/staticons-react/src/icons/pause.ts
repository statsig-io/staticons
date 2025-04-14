
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M12.403 7.333v5.334a.625.625 0 0 1-1.25 0V7.333a.625.625 0 1 1 1.25 0Zm-3.556 5.334V7.333a.625.625 0 0 0-1.25 0v5.334a.625.625 0 0 0 1.25 0Z"}],["path",{"fill-rule":"evenodd","d":"M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-1.25a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5Z","clip-rule":"evenodd"}]]

/**
 * @component @name Pause
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTEyLjQwMyA3LjMzM3Y1LjMzNGEuNjI1LjYyNSAwIDAgMS0xLjI1IDBWNy4zMzNhLjYyNS42MjUgMCAxIDEgMS4yNSAwWm0tMy41NTYgNS4zMzRWNy4zMzNhLjYyNS42MjUgMCAwIDAtMS4yNSAwdjUuMzM0YS42MjUuNjI1IDAgMCAwIDEuMjUgMFoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMCAxOGE4IDggMCAxIDEgMC0xNiA4IDggMCAwIDEgMCAxNlptMC0xLjI1YTYuNzUgNi43NSAwIDEgMSAwLTEzLjUgNi43NSA2Ljc1IDAgMCAxIDAgMTMuNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Pause = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-pause',
        'staticon-Pause',
        className
      ),
      ...props,
    })
);
Pause.displayName = 'Pause'

export default Pause;
