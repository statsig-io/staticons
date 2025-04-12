
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3 14.373a1.875 1.875 0 0 1-1.875-1.875V3.502c0-1.036.84-1.875 1.875-1.875h10c1.035 0 1.875.84 1.875 1.875v8.996c0 1.036-.84 1.875-1.875 1.875H3Zm-.625-1.875c0 .345.28.625.625.625h10c.345 0 .625-.28.625-.625v-1.956H2.375v1.956Zm0-3.206h11.25V6.709H2.375v2.583Zm11.25-5.79v1.957H2.375V3.502c0-.345.28-.625.625-.625h10c.345 0 .625.28.625.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name Samples
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMyAxNC4zNzNhMS44NzUgMS44NzUgMCAwIDEtMS44NzUtMS44NzVWMy41MDJjMC0xLjAzNi44NC0xLjg3NSAxLjg3NS0xLjg3NWgxMGMxLjAzNSAwIDEuODc1Ljg0IDEuODc1IDEuODc1djguOTk2YzAgMS4wMzYtLjg0IDEuODc1LTEuODc1IDEuODc1SDNabS0uNjI1LTEuODc1YzAgLjM0NS4yOC42MjUuNjI1LjYyNWgxMGMuMzQ1IDAgLjYyNS0uMjguNjI1LS42MjV2LTEuOTU2SDIuMzc1djEuOTU2Wm0wLTMuMjA2aDExLjI1VjYuNzA5SDIuMzc1djIuNTgzWm0xMS4yNS01Ljc5djEuOTU3SDIuMzc1VjMuNTAyYzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1aDEwYy4zNDUgMCAuNjI1LjI4LjYyNS42MjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Samples = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-samples',
        'staticon-Samples',
        className
      ),
      ...props,
    })
);
Samples.displayName = 'Samples'

export default Samples;
