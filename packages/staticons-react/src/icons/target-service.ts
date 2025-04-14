
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M10.627 2.625a.625.625 0 1 0-1.25 0v1.144a6.262 6.262 0 0 0-5.604 5.605H2.625a.625.625 0 1 0 0 1.25h1.148a6.262 6.262 0 0 0 5.6 5.603v1.15a.625.625 0 1 0 1.25 0v-1.15a6.262 6.262 0 0 0 5.608-5.6h1.144a.625.625 0 1 0 0-1.25h-1.143a6.262 6.262 0 0 0-5.605-5.608V2.625ZM4.992 9.998a5.01 5.01 0 1 0 10.02 0 5.01 5.01 0 0 0-10.02 0Zm5.01 2.013a2.012 2.012 0 1 0 0-4.024 2.012 2.012 0 0 0 0 4.024Z","clip-rule":"evenodd"}]]

/**
 * @component @name TargetService
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNjI3IDIuNjI1YS42MjUuNjI1IDAgMSAwLTEuMjUgMHYxLjE0NGE2LjI2MiA2LjI2MiAwIDAgMC01LjYwNCA1LjYwNUgyLjYyNWEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoMS4xNDhhNi4yNjIgNi4yNjIgMCAwIDAgNS42IDUuNjAzdjEuMTVhLjYyNS42MjUgMCAxIDAgMS4yNSAwdi0xLjE1YTYuMjYyIDYuMjYyIDAgMCAwIDUuNjA4LTUuNmgxLjE0NGEuNjI1LjYyNSAwIDEgMCAwLTEuMjVoLTEuMTQzYTYuMjYyIDYuMjYyIDAgMCAwLTUuNjA1LTUuNjA4VjIuNjI1Wk00Ljk5MiA5Ljk5OGE1LjAxIDUuMDEgMCAxIDAgMTAuMDIgMCA1LjAxIDUuMDEgMCAwIDAtMTAuMDIgMFptNS4wMSAyLjAxM2EyLjAxMiAyLjAxMiAwIDEgMCAwLTQuMDI0IDIuMDEyIDIuMDEyIDAgMCAwIDAgNC4wMjRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const TargetService = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-target-service',
        'staticon-TargetService',
        className
      ),
      ...props,
    })
);
TargetService.displayName = 'TargetService'

export default TargetService;
