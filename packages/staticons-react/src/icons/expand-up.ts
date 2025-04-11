
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M6.234 9.55a.758.758 0 0 1 0-1.067l4.192-4.22a2.215 2.215 0 0 1 3.148 0l4.192 4.22a.758.758 0 0 1 0 1.068.747.747 0 0 1-1.06 0L12.75 5.57v9.814a.752.752 0 0 1-.75.755.752.752 0 0 1-.75-.755V5.57L7.295 9.55a.747.747 0 0 1-1.061 0Zm-1.607 9.298a.752.752 0 0 0-.75.755c0 .416.336.755.75.755h14.746c.414 0 .75-.338.75-.755a.752.752 0 0 0-.75-.755H4.627Z"}]]

/**
 * @component @name ExpandUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTYuMjM0IDkuNTVhLjc1OC43NTggMCAwIDEgMC0xLjA2N2w0LjE5Mi00LjIyYTIuMjE1IDIuMjE1IDAgMCAxIDMuMTQ4IDBsNC4xOTIgNC4yMmEuNzU4Ljc1OCAwIDAgMSAwIDEuMDY4Ljc0Ny43NDcgMCAwIDEtMS4wNiAwTDEyLjc1IDUuNTd2OS44MTRhLjc1Mi43NTIgMCAwIDEtLjc1Ljc1NS43NTIuNzUyIDAgMCAxLS43NS0uNzU1VjUuNTdMNy4yOTUgOS41NWEuNzQ3Ljc0NyAwIDAgMS0xLjA2MSAwWm0tMS42MDcgOS4yOThhLjc1Mi43NTIgMCAwIDAtLjc1Ljc1NWMwIC40MTYuMzM2Ljc1NS43NS43NTVoMTQuNzQ2Yy40MTQgMCAuNzUtLjMzOC43NS0uNzU1YS43NTIuNzUyIDAgMCAwLS43NS0uNzU1SDQuNjI3WiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ExpandUp = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-expand-up',
        'staticon-ExpandUp',
        className
      ),
      ...props,
    })
);
ExpandUp.displayName = 'ExpandUp'

export default ExpandUp;
