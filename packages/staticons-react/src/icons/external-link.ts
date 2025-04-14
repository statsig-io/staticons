
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2.625 15.252c0 1.173.951 2.124 2.125 2.124h10.5a2.125 2.125 0 0 0 2.125-2.125v-2.68a.625.625 0 1 0-1.25 0v2.68a.875.875 0 0 1-.875.876H4.75a.875.875 0 0 1-.875-.875V4.748c0-.483.392-.875.875-.875h2.679a.625.625 0 1 0 0-1.25H4.75a2.125 2.125 0 0 0-2.125 2.125v10.503Zm7.387-12.003c0-.345.28-.625.625-.625H15.5c1.035 0 1.875.84 1.875 1.875v4.856a.625.625 0 1 1-1.25 0V4.758l-5.899 5.9a.625.625 0 1 1-.883-.884l5.898-5.9h-4.604a.625.625 0 0 1-.625-.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name ExternalLink
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi42MjUgMTUuMjUyYzAgMS4xNzMuOTUxIDIuMTI0IDIuMTI1IDIuMTI0aDEwLjVhMi4xMjUgMi4xMjUgMCAwIDAgMi4xMjUtMi4xMjV2LTIuNjhhLjYyNS42MjUgMCAxIDAtMS4yNSAwdjIuNjhhLjg3NS44NzUgMCAwIDEtLjg3NS44NzZINC43NWEuODc1Ljg3NSAwIDAgMS0uODc1LS44NzVWNC43NDhjMC0uNDgzLjM5Mi0uODc1Ljg3NS0uODc1aDIuNjc5YS42MjUuNjI1IDAgMSAwIDAtMS4yNUg0Ljc1YTIuMTI1IDIuMTI1IDAgMCAwLTIuMTI1IDIuMTI1djEwLjUwM1ptNy4zODctMTIuMDAzYzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1SDE1LjVjMS4wMzUgMCAxLjg3NS44NCAxLjg3NSAxLjg3NXY0Ljg1NmEuNjI1LjYyNSAwIDEgMS0xLjI1IDBWNC43NThsLTUuODk5IDUuOWEuNjI1LjYyNSAwIDEgMS0uODgzLS44ODRsNS44OTgtNS45aC00LjYwNGEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ExternalLink = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-external-link',
        'staticon-ExternalLink',
        className
      ),
      ...props,
    })
);
ExternalLink.displayName = 'ExternalLink'

export default ExternalLink;
