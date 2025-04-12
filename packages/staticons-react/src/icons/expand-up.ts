
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M3.347 6.195a.58.58 0 0 1 0-.82L6.883 1.84a1.58 1.58 0 0 1 2.234 0l3.536 3.536a.58.58 0 0 1-.82.82L8.58 2.94v7.687a.58.58 0 0 1-1.159 0V2.942L4.166 6.195a.58.58 0 0 1-.82 0ZM2.08 13.464a.58.58 0 0 0 0 1.16h11.84a.58.58 0 0 0 0-1.16H2.08Z"}]]

/**
 * @component @name ExpandUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTMuMzQ3IDYuMTk1YS41OC41OCAwIDAgMSAwLS44Mkw2Ljg4MyAxLjg0YTEuNTggMS41OCAwIDAgMSAyLjIzNCAwbDMuNTM2IDMuNTM2YS41OC41OCAwIDAgMS0uODIuODJMOC41OCAyLjk0djcuNjg3YS41OC41OCAwIDAgMS0xLjE1OSAwVjIuOTQyTDQuMTY2IDYuMTk1YS41OC41OCAwIDAgMS0uODIgMFpNMi4wOCAxMy40NjRhLjU4LjU4IDAgMCAwIDAgMS4xNmgxMS44NGEuNTguNTggMCAwIDAgMC0xLjE2SDIuMDhaIi8+Cjwvc3ZnPgo=)
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
