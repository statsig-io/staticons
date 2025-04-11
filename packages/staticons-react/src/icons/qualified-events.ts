
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.075 3.908V2.75a.75.75 0 0 0-1.5 0v1.158h-.823a2.75 2.75 0 0 0-2.75 2.75v8.689a2.75 2.75 0 0 0 2.75 2.75h5.7a5.956 5.956 0 0 0 11.545-2.05 5.953 5.953 0 0 0-3.216-5.289v-4.1a2.75 2.75 0 0 0-2.75-2.75h-.845V2.75a.75.75 0 0 0-1.5 0v1.158H7.075Zm10.206 6.314V9.079H3.502v6.268c0 .69.56 1.25 1.25 1.25h5.363a5.953 5.953 0 0 1 7.166-6.375Zm0-2.643H3.502v-.92c0-.691.56-1.25 1.25-1.25H16.03c.69 0 1.25.559 1.25 1.25v.92Zm1.614 7.946a.75.75 0 0 0-1.06-1.061l-2.448 2.447-1.111-1.11a.75.75 0 1 0-1.06 1.06l1.287 1.288a1.25 1.25 0 0 0 1.768 0l2.624-2.625Zm1.602.522a4.453 4.453 0 1 1-8.907 0 4.453 4.453 0 0 1 8.907 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name QualifiedEvents
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy4wNzUgMy45MDhWMi43NWEuNzUuNzUgMCAwIDAtMS41IDB2MS4xNThoLS44MjNhMi43NSAyLjc1IDAgMCAwLTIuNzUgMi43NXY4LjY4OWEyLjc1IDIuNzUgMCAwIDAgMi43NSAyLjc1aDUuN2E1Ljk1NiA1Ljk1NiAwIDAgMCAxMS41NDUtMi4wNSA1Ljk1MyA1Ljk1MyAwIDAgMC0zLjIxNi01LjI4OXYtNC4xYTIuNzUgMi43NSAwIDAgMC0yLjc1LTIuNzVoLS44NDVWMi43NWEuNzUuNzUgMCAwIDAtMS41IDB2MS4xNThINy4wNzVabTEwLjIwNiA2LjMxNFY5LjA3OUgzLjUwMnY2LjI2OGMwIC42OS41NiAxLjI1IDEuMjUgMS4yNWg1LjM2M2E1Ljk1MyA1Ljk1MyAwIDAgMSA3LjE2Ni02LjM3NVptMC0yLjY0M0gzLjUwMnYtLjkyYzAtLjY5MS41Ni0xLjI1IDEuMjUtMS4yNUgxNi4wM2MuNjkgMCAxLjI1LjU1OSAxLjI1IDEuMjV2LjkyWm0xLjYxNCA3Ljk0NmEuNzUuNzUgMCAwIDAtMS4wNi0xLjA2MWwtMi40NDggMi40NDctMS4xMTEtMS4xMWEuNzUuNzUgMCAxIDAtMS4wNiAxLjA2bDEuMjg3IDEuMjg4YTEuMjUgMS4yNSAwIDAgMCAxLjc2OCAwbDIuNjI0LTIuNjI1Wm0xLjYwMi41MjJhNC40NTMgNC40NTMgMCAxIDEtOC45MDcgMCA0LjQ1MyA0LjQ1MyAwIDAgMSA4LjkwNyAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const QualifiedEvents = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-qualified-events',
        'staticon-QualifiedEvents',
        className
      ),
      ...props,
    })
);
QualifiedEvents.displayName = 'QualifiedEvents'

export default QualifiedEvents;
