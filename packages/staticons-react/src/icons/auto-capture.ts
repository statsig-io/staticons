
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3 1.126c-1.036 0-1.875.84-1.875 1.875v2.855a.625.625 0 1 0 1.25 0V3.001c0-.345.28-.625.625-.625h2.848a.625.625 0 0 0 0-1.25H3Zm7.145 0a.625.625 0 1 0 0 1.25H13c.345 0 .625.28.625.625v2.855a.625.625 0 1 0 1.25 0V3.001c0-1.036-.84-1.875-1.875-1.875h-2.855Zm-7.77 9.024a.625.625 0 1 0-1.25 0V13c0 1.035.839 1.875 1.875 1.875h2.848a.625.625 0 0 0 0-1.25H3A.625.625 0 0 1 2.375 13v-2.85Zm12.5 0a.625.625 0 0 0-1.25 0V13c0 .345-.28.625-.625.625h-2.855a.625.625 0 1 0 0 1.25H13c1.036 0 1.875-.84 1.875-1.875v-2.85ZM10.012 8a2.012 2.012 0 1 1-4.024 0 2.012 2.012 0 0 1 4.024 0Zm1.25 0a3.262 3.262 0 1 1-6.524 0 3.262 3.262 0 0 1 6.524 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name AutoCapture
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMyAxLjEyNmMtMS4wMzYgMC0xLjg3NS44NC0xLjg3NSAxLjg3NXYyLjg1NWEuNjI1LjYyNSAwIDEgMCAxLjI1IDBWMy4wMDFjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVoMi44NDhhLjYyNS42MjUgMCAwIDAgMC0xLjI1SDNabTcuMTQ1IDBhLjYyNS42MjUgMCAxIDAgMCAxLjI1SDEzYy4zNDUgMCAuNjI1LjI4LjYyNS42MjV2Mi44NTVhLjYyNS42MjUgMCAxIDAgMS4yNSAwVjMuMDAxYzAtMS4wMzYtLjg0LTEuODc1LTEuODc1LTEuODc1aC0yLjg1NVptLTcuNzcgOS4wMjRhLjYyNS42MjUgMCAxIDAtMS4yNSAwVjEzYzAgMS4wMzUuODM5IDEuODc1IDEuODc1IDEuODc1aDIuODQ4YS42MjUuNjI1IDAgMCAwIDAtMS4yNUgzQS42MjUuNjI1IDAgMCAxIDIuMzc1IDEzdi0yLjg1Wm0xMi41IDBhLjYyNS42MjUgMCAwIDAtMS4yNSAwVjEzYzAgLjM0NS0uMjguNjI1LS42MjUuNjI1aC0yLjg1NWEuNjI1LjYyNSAwIDEgMCAwIDEuMjVIMTNjMS4wMzYgMCAxLjg3NS0uODQgMS44NzUtMS44NzV2LTIuODVaTTEwLjAxMiA4YTIuMDEyIDIuMDEyIDAgMSAxLTQuMDI0IDAgMi4wMTIgMi4wMTIgMCAwIDEgNC4wMjQgMFptMS4yNSAwYTMuMjYyIDMuMjYyIDAgMSAxLTYuNTI0IDAgMy4yNjIgMy4yNjIgMCAwIDEgNi41MjQgMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const AutoCapture = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-auto-capture',
        'staticon-AutoCapture',
        className
      ),
      ...props,
    })
);
AutoCapture.displayName = 'AutoCapture'

export default AutoCapture;
