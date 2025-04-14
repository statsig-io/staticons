
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.626 17.5a2.125 2.125 0 0 1-2.125-2.125V4.625c0-1.174.952-2.125 2.125-2.125h10.748c1.174 0 2.125.951 2.125 2.125v10.75a2.125 2.125 0 0 1-2.125 2.125H4.626Zm-.875-2.125c0 .483.392.875.875.875h10.748a.875.875 0 0 0 .875-.875V4.625a.875.875 0 0 0-.875-.875H4.626a.875.875 0 0 0-.875.875v10.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name CheckboxNonSelected
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42MjYgMTcuNWEyLjEyNSAyLjEyNSAwIDAgMS0yLjEyNS0yLjEyNVY0LjYyNWMwLTEuMTc0Ljk1Mi0yLjEyNSAyLjEyNS0yLjEyNWgxMC43NDhjMS4xNzQgMCAyLjEyNS45NTEgMi4xMjUgMi4xMjV2MTAuNzVhMi4xMjUgMi4xMjUgMCAwIDEtMi4xMjUgMi4xMjVINC42MjZabS0uODc1LTIuMTI1YzAgLjQ4My4zOTIuODc1Ljg3NS44NzVoMTAuNzQ4YS44NzUuODc1IDAgMCAwIC44NzUtLjg3NVY0LjYyNWEuODc1Ljg3NSAwIDAgMC0uODc1LS44NzVINC42MjZhLjg3NS44NzUgMCAwIDAtLjg3NS44NzV2MTAuNzVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CheckboxNonSelected = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-checkbox-non-selected',
        'staticon-CheckboxNonSelected',
        className
      ),
      ...props,
    })
);
CheckboxNonSelected.displayName = 'CheckboxNonSelected'

export default CheckboxNonSelected;
