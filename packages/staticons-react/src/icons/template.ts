
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2.5 15.377c0 1.173.951 2.125 2.125 2.125h10.75a2.125 2.125 0 0 0 2.125-2.125V4.624a2.125 2.125 0 0 0-2.125-2.125H4.625A2.125 2.125 0 0 0 2.5 4.624v10.753Zm2.125.875a.875.875 0 0 1-.875-.875v-4.752h4.974v5.627H4.625Zm5.35 0h5.4a.875.875 0 0 0 .875-.875v-4.752H9.974v5.627Zm6.275-6.877H3.75V4.624c0-.483.392-.875.875-.875h10.75c.483 0 .875.392.875.875v4.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name Template
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi41IDE1LjM3N2MwIDEuMTczLjk1MSAyLjEyNSAyLjEyNSAyLjEyNWgxMC43NWEyLjEyNSAyLjEyNSAwIDAgMCAyLjEyNS0yLjEyNVY0LjYyNGEyLjEyNSAyLjEyNSAwIDAgMC0yLjEyNS0yLjEyNUg0LjYyNUEyLjEyNSAyLjEyNSAwIDAgMCAyLjUgNC42MjR2MTAuNzUzWm0yLjEyNS44NzVhLjg3NS44NzUgMCAwIDEtLjg3NS0uODc1di00Ljc1Mmg0Ljk3NHY1LjYyN0g0LjYyNVptNS4zNSAwaDUuNGEuODc1Ljg3NSAwIDAgMCAuODc1LS44NzV2LTQuNzUySDkuOTc0djUuNjI3Wm02LjI3NS02Ljg3N0gzLjc1VjQuNjI0YzAtLjQ4My4zOTItLjg3NS44NzUtLjg3NWgxMC43NWMuNDgzIDAgLjg3NS4zOTIuODc1Ljg3NXY0Ljc1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Template = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-template',
        'staticon-Template',
        className
      ),
      ...props,
    })
);
Template.displayName = 'Template'

export default Template;
