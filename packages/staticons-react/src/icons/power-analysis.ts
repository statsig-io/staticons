
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M20.192 2.245a.75.75 0 0 1 .75.75v10.032a.75.75 0 1 1-1.5 0V2.996a.75.75 0 0 1 .75-.75Zm-6.693 1.906a.75.75 0 1 0-1.501 0V10a6.464 6.464 0 0 0-2.22-.89V6.017a.75.75 0 1 0-1.502 0V8.99a6.504 6.504 0 1 0 6.645 7.608h6.335a.75.75 0 1 0 0-1.5h-6.253a6.475 6.475 0 0 0-1.504-3.782V4.151Zm2.97 1.349a.75.75 0 0 1 .751.75v6.777a.75.75 0 0 1-1.5 0V6.25a.75.75 0 0 1 .75-.75Zm-7.958 4.987a5.003 5.003 0 1 0 0 10.006 5.003 5.003 0 0 0 0-10.006Zm-.32 1.707a.75.75 0 0 1 .75.75v2.099l1.866.527a.75.75 0 0 1-.407 1.444l-2.351-.664a.75.75 0 0 1-.608-.737v-2.669a.75.75 0 0 1 .75-.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name PowerAnalysis
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMTkyIDIuMjQ1YS43NS43NSAwIDAgMSAuNzUuNzV2MTAuMDMyYS43NS43NSAwIDEgMS0xLjUgMFYyLjk5NmEuNzUuNzUgMCAwIDEgLjc1LS43NVptLTYuNjkzIDEuOTA2YS43NS43NSAwIDEgMC0xLjUwMSAwVjEwYTYuNDY0IDYuNDY0IDAgMCAwLTIuMjItLjg5VjYuMDE3YS43NS43NSAwIDEgMC0xLjUwMiAwVjguOTlhNi41MDQgNi41MDQgMCAxIDAgNi42NDUgNy42MDhoNi4zMzVhLjc1Ljc1IDAgMSAwIDAtMS41aC02LjI1M2E2LjQ3NSA2LjQ3NSAwIDAgMC0xLjUwNC0zLjc4MlY0LjE1MVptMi45NyAxLjM0OWEuNzUuNzUgMCAwIDEgLjc1MS43NXY2Ljc3N2EuNzUuNzUgMCAwIDEtMS41IDBWNi4yNWEuNzUuNzUgMCAwIDEgLjc1LS43NVptLTcuOTU4IDQuOTg3YTUuMDAzIDUuMDAzIDAgMSAwIDAgMTAuMDA2IDUuMDAzIDUuMDAzIDAgMCAwIDAtMTAuMDA2Wm0tLjMyIDEuNzA3YS43NS43NSAwIDAgMSAuNzUuNzV2Mi4wOTlsMS44NjYuNTI3YS43NS43NSAwIDAgMS0uNDA3IDEuNDQ0bC0yLjM1MS0uNjY0YS43NS43NSAwIDAgMS0uNjA4LS43Mzd2LTIuNjY5YS43NS43NSAwIDAgMSAuNzUtLjc1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const PowerAnalysis = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-power-analysis',
        'staticon-PowerAnalysis',
        className
      ),
      ...props,
    })
);
PowerAnalysis.displayName = 'PowerAnalysis'

export default PowerAnalysis;
