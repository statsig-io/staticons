
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.632 10.493c0 1.035.84 1.875 1.875 1.875h5.612v.884c0 .345-.28.625-.625.625H2.75a.625.625 0 0 1-.625-.625v-7.74c0-.345.28-.625.625-.625h.882v5.606Zm1.25-5.606v5.606c0 .345.28.625.625.625h5.612V5.512a.625.625 0 0 0-.625-.625H4.882Zm7.487 6.23V5.513c0-1.035-.84-1.875-1.875-1.875H4.882V2.75c0-.345.28-.625.625-.625h7.743c.345 0 .625.28.625.625v7.744c0 .345-.28.625-.625.625h-.88Zm0 1.25h.881a1.874 1.874 0 0 0 1.875-1.874V2.749c0-1.036-.84-1.875-1.875-1.875H5.507c-1.036 0-1.875.84-1.875 1.875v.888H2.75c-1.036 0-1.875.84-1.875 1.875v7.74c0 1.035.84 1.875 1.875 1.875h7.744c1.036 0 1.875-.84 1.875-1.875v-.884ZM5.8 8.002c0-.346.28-.625.625-.625h.95v-.953a.625.625 0 0 1 1.25 0v.953h.953a.625.625 0 0 1 0 1.25h-.952v.95a.625.625 0 0 1-1.25 0v-.95h-.951A.625.625 0 0 1 5.799 8Z","clip-rule":"evenodd"}]]

/**
 * @component @name CombineEvents
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy42MzIgMTAuNDkzYzAgMS4wMzUuODQgMS44NzUgMS44NzUgMS44NzVoNS42MTJ2Ljg4NGMwIC4zNDUtLjI4LjYyNS0uNjI1LjYyNUgyLjc1YS42MjUuNjI1IDAgMCAxLS42MjUtLjYyNXYtNy43NGMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNWguODgydjUuNjA2Wm0xLjI1LTUuNjA2djUuNjA2YzAgLjM0NS4yOC42MjUuNjI1LjYyNWg1LjYxMlY1LjUxMmEuNjI1LjYyNSAwIDAgMC0uNjI1LS42MjVINC44ODJabTcuNDg3IDYuMjNWNS41MTNjMC0xLjAzNS0uODQtMS44NzUtMS44NzUtMS44NzVINC44ODJWMi43NWMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNWg3Ljc0M2MuMzQ1IDAgLjYyNS4yOC42MjUuNjI1djcuNzQ0YzAgLjM0NS0uMjguNjI1LS42MjUuNjI1aC0uODhabTAgMS4yNWguODgxYTEuODc0IDEuODc0IDAgMCAwIDEuODc1LTEuODc0VjIuNzQ5YzAtMS4wMzYtLjg0LTEuODc1LTEuODc1LTEuODc1SDUuNTA3Yy0xLjAzNiAwLTEuODc1Ljg0LTEuODc1IDEuODc1di44ODhIMi43NWMtMS4wMzYgMC0xLjg3NS44NC0xLjg3NSAxLjg3NXY3Ljc0YzAgMS4wMzUuODQgMS44NzUgMS44NzUgMS44NzVoNy43NDRjMS4wMzYgMCAxLjg3NS0uODQgMS44NzUtMS44NzV2LS44ODRaTTUuOCA4LjAwMmMwLS4zNDYuMjgtLjYyNS42MjUtLjYyNWguOTV2LS45NTNhLjYyNS42MjUgMCAwIDEgMS4yNSAwdi45NTNoLjk1M2EuNjI1LjYyNSAwIDAgMSAwIDEuMjVoLS45NTJ2Ljk1YS42MjUuNjI1IDAgMCAxLTEuMjUgMHYtLjk1aC0uOTUxQS42MjUuNjI1IDAgMCAxIDUuNzk5IDhaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CombineEvents = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-combine-events',
        'staticon-CombineEvents',
        className
      ),
      ...props,
    })
);
CombineEvents.displayName = 'CombineEvents'

export default CombineEvents;
