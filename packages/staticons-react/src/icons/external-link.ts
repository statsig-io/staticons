
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M1.375 12.75c0 1.036.84 1.876 1.875 1.876h9.5c1.035 0 1.874-.84 1.874-1.875v-2.466a.625.625 0 0 0-1.25 0v2.466c0 .345-.28.625-.625.625H3.25a.625.625 0 0 1-.625-.625V3.248c0-.345.28-.625.625-.625h2.464a.625.625 0 1 0 0-1.25H3.25c-1.036 0-1.875.84-1.875 1.875v9.502ZM7.95 2c0-.346.28-.626.625-.626H13c.897 0 1.625.728 1.625 1.625v4.425a.625.625 0 1 1-1.25 0V3.508L8.25 8.632a.625.625 0 0 1-.884-.884l5.124-5.124H8.575A.625.625 0 0 1 7.95 2Z","clip-rule":"evenodd"}]]

/**
 * @component @name ExternalLink
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS4zNzUgMTIuNzVjMCAxLjAzNi44NCAxLjg3NiAxLjg3NSAxLjg3Nmg5LjVjMS4wMzUgMCAxLjg3NC0uODQgMS44NzQtMS44NzV2LTIuNDY2YS42MjUuNjI1IDAgMCAwLTEuMjUgMHYyLjQ2NmMwIC4zNDUtLjI4LjYyNS0uNjI1LjYyNUgzLjI1YS42MjUuNjI1IDAgMCAxLS42MjUtLjYyNVYzLjI0OGMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNWgyLjQ2NGEuNjI1LjYyNSAwIDEgMCAwLTEuMjVIMy4yNWMtMS4wMzYgMC0xLjg3NS44NC0xLjg3NSAxLjg3NXY5LjUwMlpNNy45NSAyYzAtLjM0Ni4yOC0uNjI2LjYyNS0uNjI2SDEzYy44OTcgMCAxLjYyNS43MjggMS42MjUgMS42MjV2NC40MjVhLjYyNS42MjUgMCAxIDEtMS4yNSAwVjMuNTA4TDguMjUgOC42MzJhLjYyNS42MjUgMCAwIDEtLjg4NC0uODg0bDUuMTI0LTUuMTI0SDguNTc1QS42MjUuNjI1IDAgMCAxIDcuOTUgMloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
