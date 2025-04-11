
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M4.627 3.005a.75.75 0 0 0 0 1.5h14.746a.75.75 0 1 0 0-1.5H4.627Zm6.137 3.508a1.75 1.75 0 0 1 2.474 0l2.264 2.263a.75.75 0 0 1-1.061 1.061l-1.688-1.688v7.7l1.687-1.688a.75.75 0 0 1 1.061 1.061l-2.264 2.265a1.75 1.75 0 0 1-2.475 0l-2.264-2.263a.75.75 0 0 1 1.061-1.061l1.694 1.694V8.145L9.56 9.838a.75.75 0 1 1-1.061-1.06l2.264-2.265Zm-6.887 13.74a.75.75 0 0 1 .75-.75h14.746a.75.75 0 1 1 0 1.5H4.627a.75.75 0 0 1-.75-.75Z"}]]

/**
 * @component @name Expand
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTQuNjI3IDMuMDA1YS43NS43NSAwIDAgMCAwIDEuNWgxNC43NDZhLjc1Ljc1IDAgMSAwIDAtMS41SDQuNjI3Wm02LjEzNyAzLjUwOGExLjc1IDEuNzUgMCAwIDEgMi40NzQgMGwyLjI2NCAyLjI2M2EuNzUuNzUgMCAwIDEtMS4wNjEgMS4wNjFsLTEuNjg4LTEuNjg4djcuN2wxLjY4Ny0xLjY4OGEuNzUuNzUgMCAwIDEgMS4wNjEgMS4wNjFsLTIuMjY0IDIuMjY1YTEuNzUgMS43NSAwIDAgMS0yLjQ3NSAwbC0yLjI2NC0yLjI2M2EuNzUuNzUgMCAwIDEgMS4wNjEtMS4wNjFsMS42OTQgMS42OTRWOC4xNDVMOS41NiA5LjgzOGEuNzUuNzUgMCAxIDEtMS4wNjEtMS4wNmwyLjI2NC0yLjI2NVptLTYuODg3IDEzLjc0YS43NS43NSAwIDAgMSAuNzUtLjc1aDE0Ljc0NmEuNzUuNzUgMCAxIDEgMCAxLjVINC42MjdhLjc1Ljc1IDAgMCAxLS43NS0uNzVaIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Expand = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-expand',
        'staticon-Expand',
        className
      ),
      ...props,
    })
);
Expand.displayName = 'Expand'

export default Expand;
