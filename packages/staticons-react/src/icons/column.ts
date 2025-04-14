
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M7.554 17.38a2.125 2.125 0 0 1-2.125-2.125V4.745c0-1.173.951-2.125 2.125-2.125h4.893c1.174 0 2.125.952 2.125 2.125v10.51a2.125 2.125 0 0 1-2.125 2.125H7.554Zm-.875-2.125c0 .483.391.875.875.875h4.893a.875.875 0 0 0 .875-.875v-2.414H6.68v2.414Zm6.643-6.844v3.18H6.68V8.41h6.643Zm0-1.25H6.68V4.745c0-.483.391-.875.875-.875h4.893c.484 0 .875.392.875.875v2.416Zm-8.89.614a.625.625 0 0 0-.625-.625h-.683c-.621 0-1.125.504-1.125 1.125v3.43c0 .622.504 1.126 1.125 1.126h.684a.625.625 0 1 0 0-1.25h-.559V8.4h.558c.346 0 .625-.28.625-.626Zm11.136 0c0-.345.28-.625.625-.625h.683c.621 0 1.125.504 1.125 1.125v3.43c0 .622-.504 1.126-1.125 1.126h-.683a.625.625 0 1 1 0-1.25h.558V8.4h-.558a.625.625 0 0 1-.625-.626Z","clip-rule":"evenodd"}]]

/**
 * @component @name Column
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy41NTQgMTcuMzhhMi4xMjUgMi4xMjUgMCAwIDEtMi4xMjUtMi4xMjVWNC43NDVjMC0xLjE3My45NTEtMi4xMjUgMi4xMjUtMi4xMjVoNC44OTNjMS4xNzQgMCAyLjEyNS45NTIgMi4xMjUgMi4xMjV2MTAuNTFhMi4xMjUgMi4xMjUgMCAwIDEtMi4xMjUgMi4xMjVINy41NTRabS0uODc1LTIuMTI1YzAgLjQ4My4zOTEuODc1Ljg3NS44NzVoNC44OTNhLjg3NS44NzUgMCAwIDAgLjg3NS0uODc1di0yLjQxNEg2LjY4djIuNDE0Wm02LjY0My02Ljg0NHYzLjE4SDYuNjhWOC40MWg2LjY0M1ptMC0xLjI1SDYuNjhWNC43NDVjMC0uNDgzLjM5MS0uODc1Ljg3NS0uODc1aDQuODkzYy40ODQgMCAuODc1LjM5Mi44NzUuODc1djIuNDE2Wm0tOC44OS42MTRhLjYyNS42MjUgMCAwIDAtLjYyNS0uNjI1aC0uNjgzYy0uNjIxIDAtMS4xMjUuNTA0LTEuMTI1IDEuMTI1djMuNDNjMCAuNjIyLjUwNCAxLjEyNiAxLjEyNSAxLjEyNmguNjg0YS42MjUuNjI1IDAgMSAwIDAtMS4yNWgtLjU1OVY4LjRoLjU1OGMuMzQ2IDAgLjYyNS0uMjguNjI1LS42MjZabTExLjEzNiAwYzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1aC42ODNjLjYyMSAwIDEuMTI1LjUwNCAxLjEyNSAxLjEyNXYzLjQzYzAgLjYyMi0uNTA0IDEuMTI2LTEuMTI1IDEuMTI2aC0uNjgzYS42MjUuNjI1IDAgMSAxIDAtMS4yNWguNTU4VjguNGgtLjU1OGEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Column = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-column',
        'staticon-Column',
        className
      ),
      ...props,
    })
);
Column.displayName = 'Column'

export default Column;
