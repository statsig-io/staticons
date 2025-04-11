
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M17.866 13.422a5.153 5.153 0 1 0-8.503-1.923c.155.44.071.965-.294 1.33L4.64 17.26l.273 1.828 1.829.272.78-.779-.09-.089a1.25 1.25 0 0 1 0-1.767l.945-.945a1.25 1.25 0 0 1 1.768 0l.089.088.937-.937a1.28 1.28 0 0 1 1.33-.293 5.154 5.154 0 0 0 5.365-1.215Zm1.06-8.348a6.653 6.653 0 0 1-6.798 11.02l-1.01 1.01a1.25 1.25 0 0 1-1.768 0l-.089-.088-.591.591.089.09a1.25 1.25 0 0 1 0 1.767l-1.046 1.045c-.28.28-.676.411-1.068.352l-2.136-.318a1.25 1.25 0 0 1-1.052-1.052l-.319-2.136a1.25 1.25 0 0 1 .353-1.068l4.414-4.415a6.653 6.653 0 0 1 11.021-6.798Zm-4.085 5.257a.828.828 0 1 1-1.172-1.172.828.828 0 0 1 1.172 1.172Zm-2.232 1.06A2.328 2.328 0 1 0 15.902 8.1a2.328 2.328 0 0 0-3.293 3.293Z","clip-rule":"evenodd"}]]

/**
 * @component @name ApiKeys
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTcuODY2IDEzLjQyMmE1LjE1MyA1LjE1MyAwIDEgMC04LjUwMy0xLjkyM2MuMTU1LjQ0LjA3MS45NjUtLjI5NCAxLjMzTDQuNjQgMTcuMjZsLjI3MyAxLjgyOCAxLjgyOS4yNzIuNzgtLjc3OS0uMDktLjA4OWExLjI1IDEuMjUgMCAwIDEgMC0xLjc2N2wuOTQ1LS45NDVhMS4yNSAxLjI1IDAgMCAxIDEuNzY4IDBsLjA4OS4wODguOTM3LS45MzdhMS4yOCAxLjI4IDAgMCAxIDEuMzMtLjI5MyA1LjE1NCA1LjE1NCAwIDAgMCA1LjM2NS0xLjIxNVptMS4wNi04LjM0OGE2LjY1MyA2LjY1MyAwIDAgMS02Ljc5OCAxMS4wMmwtMS4wMSAxLjAxYTEuMjUgMS4yNSAwIDAgMS0xLjc2OCAwbC0uMDg5LS4wODgtLjU5MS41OTEuMDg5LjA5YTEuMjUgMS4yNSAwIDAgMSAwIDEuNzY3bC0xLjA0NiAxLjA0NWMtLjI4LjI4LS42NzYuNDExLTEuMDY4LjM1MmwtMi4xMzYtLjMxOGExLjI1IDEuMjUgMCAwIDEtMS4wNTItMS4wNTJsLS4zMTktMi4xMzZhMS4yNSAxLjI1IDAgMCAxIC4zNTMtMS4wNjhsNC40MTQtNC40MTVhNi42NTMgNi42NTMgMCAwIDEgMTEuMDIxLTYuNzk4Wm0tNC4wODUgNS4yNTdhLjgyOC44MjggMCAxIDEtMS4xNzItMS4xNzIuODI4LjgyOCAwIDAgMSAxLjE3MiAxLjE3MlptLTIuMjMyIDEuMDZBMi4zMjggMi4zMjggMCAxIDAgMTUuOTAyIDguMWEyLjMyOCAyLjMyOCAwIDAgMC0zLjI5MyAzLjI5M1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
