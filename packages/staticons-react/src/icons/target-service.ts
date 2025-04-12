
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.627 1.123a.625.625 0 1 0-1.25 0v1.071a5.84 5.84 0 0 0-5.179 5.18H1.124a.625.625 0 0 0 0 1.25h1.074a5.84 5.84 0 0 0 5.175 5.178v1.075a.625.625 0 1 0 1.25 0v-1.075a5.839 5.839 0 0 0 5.182-5.175h1.072a.625.625 0 1 0 0-1.25h-1.07a5.839 5.839 0 0 0-5.18-5.183v-1.07ZM3.415 7.998a4.587 4.587 0 1 0 9.174 0 4.587 4.587 0 0 0-9.174 0Zm4.586 1.877a1.876 1.876 0 1 0 0-3.752 1.876 1.876 0 0 0 0 3.752Z","clip-rule":"evenodd"}]]

/**
 * @component @name TargetService
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC42MjcgMS4xMjNhLjYyNS42MjUgMCAxIDAtMS4yNSAwdjEuMDcxYTUuODQgNS44NCAwIDAgMC01LjE3OSA1LjE4SDEuMTI0YS42MjUuNjI1IDAgMCAwIDAgMS4yNWgxLjA3NGE1Ljg0IDUuODQgMCAwIDAgNS4xNzUgNS4xNzh2MS4wNzVhLjYyNS42MjUgMCAxIDAgMS4yNSAwdi0xLjA3NWE1LjgzOSA1LjgzOSAwIDAgMCA1LjE4Mi01LjE3NWgxLjA3MmEuNjI1LjYyNSAwIDEgMCAwLTEuMjVoLTEuMDdhNS44MzkgNS44MzkgMCAwIDAtNS4xOC01LjE4M3YtMS4wN1pNMy40MTUgNy45OThhNC41ODcgNC41ODcgMCAxIDAgOS4xNzQgMCA0LjU4NyA0LjU4NyAwIDAgMC05LjE3NCAwWm00LjU4NiAxLjg3N2ExLjg3NiAxLjg3NiAwIDEgMCAwLTMuNzUyIDEuODc2IDEuODc2IDAgMCAwIDAgMy43NTJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
