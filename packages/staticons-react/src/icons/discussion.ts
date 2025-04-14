
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2 5.124c0-1.174.951-2.125 2.125-2.125h9.1c1.173 0 2.124.951 2.124 2.125V7.67h.776c1.036 0 1.875.84 1.875 1.875v3.835c0 .976-.745 1.777-1.698 1.867v.979a.775.775 0 0 1-1.242.618l-2.101-1.59H10.2a1.875 1.875 0 0 1-1.875-1.874v-.537L5.74 14.597a.775.775 0 0 1-1.21-.641V12.58h-.404A2.125 2.125 0 0 1 2 10.455V5.124Zm13.35 5.33V8.92h.775c.346 0 .625.28.625.625v3.835c0 .345-.28.625-.625.625h-.298a.775.775 0 0 0-.775.775v.491l-1.373-1.039a1.125 1.125 0 0 0-.678-.227h-2.8a.625.625 0 0 1-.625-.625v-.8h3.648a2.125 2.125 0 0 0 2.125-2.125ZM4.124 4.25a.875.875 0 0 0-.875.875v5.33c0 .484.392.876.875.876h.78c.483 0 .874.392.874.875v.855l2.356-1.597a.776.776 0 0 1 .435-.133h4.654a.875.875 0 0 0 .875-.875V5.124a.875.875 0 0 0-.875-.875H4.125Zm1.269 2.879a.82.82 0 1 0 0 1.64.82.82 0 0 0 0-1.64Zm5.742.82a.82.82 0 1 1 1.64 0 .82.82 0 0 1-1.64 0Zm-2.461-.82a.82.82 0 1 0 0 1.64.82.82 0 0 0 0-1.64Z","clip-rule":"evenodd"}]]

/**
 * @component @name Discussion
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMiA1LjEyNGMwLTEuMTc0Ljk1MS0yLjEyNSAyLjEyNS0yLjEyNWg5LjFjMS4xNzMgMCAyLjEyNC45NTEgMi4xMjQgMi4xMjVWNy42N2guNzc2YzEuMDM2IDAgMS44NzUuODQgMS44NzUgMS44NzV2My44MzVjMCAuOTc2LS43NDUgMS43NzctMS42OTggMS44Njd2Ljk3OWEuNzc1Ljc3NSAwIDAgMS0xLjI0Mi42MThsLTIuMTAxLTEuNTlIMTAuMmExLjg3NSAxLjg3NSAwIDAgMS0xLjg3NS0xLjg3NHYtLjUzN0w1Ljc0IDE0LjU5N2EuNzc1Ljc3NSAwIDAgMS0xLjIxLS42NDFWMTIuNThoLS40MDRBMi4xMjUgMi4xMjUgMCAwIDEgMiAxMC40NTVWNS4xMjRabTEzLjM1IDUuMzNWOC45MmguNzc1Yy4zNDYgMCAuNjI1LjI4LjYyNS42MjV2My44MzVjMCAuMzQ1LS4yOC42MjUtLjYyNS42MjVoLS4yOThhLjc3NS43NzUgMCAwIDAtLjc3NS43NzV2LjQ5MWwtMS4zNzMtMS4wMzlhMS4xMjUgMS4xMjUgMCAwIDAtLjY3OC0uMjI3aC0yLjhhLjYyNS42MjUgMCAwIDEtLjYyNS0uNjI1di0uOGgzLjY0OGEyLjEyNSAyLjEyNSAwIDAgMCAyLjEyNS0yLjEyNVpNNC4xMjQgNC4yNWEuODc1Ljg3NSAwIDAgMC0uODc1Ljg3NXY1LjMzYzAgLjQ4NC4zOTIuODc2Ljg3NS44NzZoLjc4Yy40ODMgMCAuODc0LjM5Mi44NzQuODc1di44NTVsMi4zNTYtMS41OTdhLjc3Ni43NzYgMCAwIDEgLjQzNS0uMTMzaDQuNjU0YS44NzUuODc1IDAgMCAwIC44NzUtLjg3NVY1LjEyNGEuODc1Ljg3NSAwIDAgMC0uODc1LS44NzVINC4xMjVabTEuMjY5IDIuODc5YS44Mi44MiAwIDEgMCAwIDEuNjQuODIuODIgMCAwIDAgMC0xLjY0Wm01Ljc0Mi44MmEuODIuODIgMCAxIDEgMS42NCAwIC44Mi44MiAwIDAgMS0xLjY0IDBabS0yLjQ2MS0uODJhLjgyLjgyIDAgMSAwIDAgMS42NC44Mi44MiAwIDAgMCAwLTEuNjRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Discussion = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-discussion',
        'staticon-Discussion',
        className
      ),
      ...props,
    })
);
Discussion.displayName = 'Discussion'

export default Discussion;
