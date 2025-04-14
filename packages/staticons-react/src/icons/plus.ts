
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M10.625 3.625a.625.625 0 1 0-1.25 0v5.75h-5.75a.625.625 0 1 0 0 1.25h5.75v5.75a.625.625 0 1 0 1.25 0v-5.75h5.75a.625.625 0 1 0 0-1.25h-5.75v-5.75Z"}]]

/**
 * @component @name Plus
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTEwLjYyNSAzLjYyNWEuNjI1LjYyNSAwIDEgMC0xLjI1IDB2NS43NWgtNS43NWEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoNS43NXY1Ljc1YS42MjUuNjI1IDAgMSAwIDEuMjUgMHYtNS43NWg1Ljc1YS42MjUuNjI1IDAgMSAwIDAtMS4yNWgtNS43NXYtNS43NVoiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Plus = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-plus',
        'staticon-Plus',
        className
      ),
      ...props,
    })
);
Plus.displayName = 'Plus'

export default Plus;
