
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M1.125 13.001c0 1.036.839 1.875 1.875 1.875h10c1.036 0 1.875-.84 1.875-1.875V2.998c0-1.035-.84-1.875-1.875-1.875H3c-1.036 0-1.875.84-1.875 1.875v10.003ZM3 13.626a.625.625 0 0 1-.625-.625V8.623h2.828a.875.875 0 0 0 .816-.56l.846-2.19 1.403 5.71c.205.832 1.358.906 1.666.107l1.184-3.067h2.507v4.378c0 .345-.28.625-.625.625H3Zm10.625-6.253V2.998A.625.625 0 0 0 13 2.373H3a.625.625 0 0 0-.625.625v4.375h2.57L6.13 4.31c.308-.799 1.461-.725 1.666.106l1.403 5.711.846-2.194a.875.875 0 0 1 .817-.56h2.764Z","clip-rule":"evenodd"}]]

/**
 * @component @name Health
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS4xMjUgMTMuMDAxYzAgMS4wMzYuODM5IDEuODc1IDEuODc1IDEuODc1aDEwYzEuMDM2IDAgMS44NzUtLjg0IDEuODc1LTEuODc1VjIuOTk4YzAtMS4wMzUtLjg0LTEuODc1LTEuODc1LTEuODc1SDNjLTEuMDM2IDAtMS44NzUuODQtMS44NzUgMS44NzV2MTAuMDAzWk0zIDEzLjYyNmEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVWOC42MjNoMi44MjhhLjg3NS44NzUgMCAwIDAgLjgxNi0uNTZsLjg0Ni0yLjE5IDEuNDAzIDUuNzFjLjIwNS44MzIgMS4zNTguOTA2IDEuNjY2LjEwN2wxLjE4NC0zLjA2N2gyLjUwN3Y0LjM3OGMwIC4zNDUtLjI4LjYyNS0uNjI1LjYyNUgzWm0xMC42MjUtNi4yNTNWMi45OThBLjYyNS42MjUgMCAwIDAgMTMgMi4zNzNIM2EuNjI1LjYyNSAwIDAgMC0uNjI1LjYyNXY0LjM3NWgyLjU3TDYuMTMgNC4zMWMuMzA4LS43OTkgMS40NjEtLjcyNSAxLjY2Ni4xMDZsMS40MDMgNS43MTEuODQ2LTIuMTk0YS44NzUuODc1IDAgMCAxIC44MTctLjU2aDIuNzY0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Health = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-health',
        'staticon-Health',
        className
      ),
      ...props,
    })
);
Health.displayName = 'Health'

export default Health;
