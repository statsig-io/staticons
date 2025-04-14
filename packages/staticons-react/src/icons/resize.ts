
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M15.373 3.502c.622 0 1.126.504 1.126 1.125V8.63a.625.625 0 1 1-1.25 0V5.635l-9.613 9.613h2.996a.625.625 0 0 1 0 1.25H4.626a1.125 1.125 0 0 1-1.125-1.126v-4.004a.625.625 0 1 1 1.25 0v2.997l9.613-9.613h-2.997a.625.625 0 1 1 0-1.25h4.006Z"}]]

/**
 * @component @name Resize
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTE1LjM3MyAzLjUwMmMuNjIyIDAgMS4xMjYuNTA0IDEuMTI2IDEuMTI1VjguNjNhLjYyNS42MjUgMCAxIDEtMS4yNSAwVjUuNjM1bC05LjYxMyA5LjYxM2gyLjk5NmEuNjI1LjYyNSAwIDAgMSAwIDEuMjVINC42MjZhMS4xMjUgMS4xMjUgMCAwIDEtMS4xMjUtMS4xMjZ2LTQuMDA0YS42MjUuNjI1IDAgMSAxIDEuMjUgMHYyLjk5N2w5LjYxMy05LjYxM2gtMi45OTdhLjYyNS42MjUgMCAxIDEgMC0xLjI1aDQuMDA2WiIvPgo8L3N2Zz4K)
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
