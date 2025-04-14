
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M10 4.001a6 6 0 0 0-5.999 6 .625.625 0 0 1-1.25 0 7.25 7.25 0 0 1 13.14-4.227V4.692a.625.625 0 1 1 1.25 0v2.4a.875.875 0 0 1-.875.875h-2.4a.625.625 0 1 1 0-1.25h1.157A5.994 5.994 0 0 0 10 4.001Zm6.624 5.374c.345 0 .625.28.625.625a7.25 7.25 0 0 1-13.103 4.277v1.029a.625.625 0 1 1-1.25 0v-2.4c0-.482.391-.874.875-.874h2.398a.625.625 0 1 1 0 1.25H4.976A6 6 0 0 0 16 10c0-.346.28-.626.625-.626Z","clip-rule":"evenodd"}]]

/**
 * @component @name Regenerate
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAgNC4wMDFhNiA2IDAgMCAwLTUuOTk5IDYgLjYyNS42MjUgMCAwIDEtMS4yNSAwIDcuMjUgNy4yNSAwIDAgMSAxMy4xNC00LjIyN1Y0LjY5MmEuNjI1LjYyNSAwIDEgMSAxLjI1IDB2Mi40YS44NzUuODc1IDAgMCAxLS44NzUuODc1aC0yLjRhLjYyNS42MjUgMCAxIDEgMC0xLjI1aDEuMTU3QTUuOTk0IDUuOTk0IDAgMCAwIDEwIDQuMDAxWm02LjYyNCA1LjM3NGMuMzQ1IDAgLjYyNS4yOC42MjUuNjI1YTcuMjUgNy4yNSAwIDAgMS0xMy4xMDMgNC4yNzd2MS4wMjlhLjYyNS42MjUgMCAxIDEtMS4yNSAwdi0yLjRjMC0uNDgyLjM5MS0uODc0Ljg3NS0uODc0aDIuMzk4YS42MjUuNjI1IDAgMSAxIDAgMS4yNUg0Ljk3NkE2IDYgMCAwIDAgMTYgMTBjMC0uMzQ2LjI4LS42MjYuNjI1LS42MjZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Regenerate = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-regenerate',
        'staticon-Regenerate',
        className
      ),
      ...props,
    })
);
Regenerate.displayName = 'Regenerate'

export default Regenerate;
