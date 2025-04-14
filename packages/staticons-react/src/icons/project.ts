
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.754 4.749a.875.875 0 0 0-.875.875l-.003 8.752c0 .483.392.875.875.875h10.495a.875.875 0 0 0 .875-.875l.003-6.718a.875.875 0 0 0-.875-.875h-5.007c-.335 0-.653-.15-.867-.408L8.032 4.749H4.754Zm-2.125.874c0-1.173.951-2.124 2.125-2.124H8.09c.335 0 .653.15.867.408L10.3 5.533h4.948c1.173 0 2.125.952 2.125 2.126l-.003 6.718a2.125 2.125 0 0 1-2.125 2.124H4.751a2.125 2.125 0 0 1-2.125-2.126l.003-8.752Z","clip-rule":"evenodd"}]]

/**
 * @component @name Project
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC43NTQgNC43NDlhLjg3NS44NzUgMCAwIDAtLjg3NS44NzVsLS4wMDMgOC43NTJjMCAuNDgzLjM5Mi44NzUuODc1Ljg3NWgxMC40OTVhLjg3NS44NzUgMCAwIDAgLjg3NS0uODc1bC4wMDMtNi43MThhLjg3NS44NzUgMCAwIDAtLjg3NS0uODc1aC01LjAwN2MtLjMzNSAwLS42NTMtLjE1LS44NjctLjQwOEw4LjAzMiA0Ljc0OUg0Ljc1NFptLTIuMTI1Ljg3NGMwLTEuMTczLjk1MS0yLjEyNCAyLjEyNS0yLjEyNEg4LjA5Yy4zMzUgMCAuNjUzLjE1Ljg2Ny40MDhMMTAuMyA1LjUzM2g0Ljk0OGMxLjE3MyAwIDIuMTI1Ljk1MiAyLjEyNSAyLjEyNmwtLjAwMyA2LjcxOGEyLjEyNSAyLjEyNSAwIDAgMS0yLjEyNSAyLjEyNEg0Ljc1MWEyLjEyNSAyLjEyNSAwIDAgMS0yLjEyNS0yLjEyNmwuMDAzLTguNzUyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Project = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-project',
        'staticon-Project',
        className
      ),
      ...props,
    })
);
Project.displayName = 'Project'

export default Project;
