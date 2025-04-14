
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M9.42 4.308a6.098 6.098 0 1 0 6.273 6.271h-4.398A1.875 1.875 0 0 1 9.42 8.705V4.308Zm7.524 5.991.001.104a7.348 7.348 0 1 1-7.244-7.347c.337-.547.954-.91 1.696-.78a7.803 7.803 0 0 1 6.327 6.327c.13.742-.233 1.358-.78 1.696ZM10.67 4.034a.58.58 0 0 1 .172-.421.38.38 0 0 1 .34-.106 6.553 6.553 0 0 1 5.311 5.31.38.38 0 0 1-.106.34.58.58 0 0 1-.42.173h-4.672a.625.625 0 0 1-.625-.625V4.034Z","clip-rule":"evenodd"}]]

/**
 * @component @name Segments
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS40MiA0LjMwOGE2LjA5OCA2LjA5OCAwIDEgMCA2LjI3MyA2LjI3MWgtNC4zOThBMS44NzUgMS44NzUgMCAwIDEgOS40MiA4LjcwNVY0LjMwOFptNy41MjQgNS45OTEuMDAxLjEwNGE3LjM0OCA3LjM0OCAwIDEgMS03LjI0NC03LjM0N2MuMzM3LS41NDcuOTU0LS45MSAxLjY5Ni0uNzhhNy44MDMgNy44MDMgMCAwIDEgNi4zMjcgNi4zMjdjLjEzLjc0Mi0uMjMzIDEuMzU4LS43OCAxLjY5NlpNMTAuNjcgNC4wMzRhLjU4LjU4IDAgMCAxIC4xNzItLjQyMS4zOC4zOCAwIDAgMSAuMzQtLjEwNiA2LjU1MyA2LjU1MyAwIDAgMSA1LjMxMSA1LjMxLjM4LjM4IDAgMCAxLS4xMDYuMzQuNTguNTggMCAwIDEtLjQyLjE3M2gtNC42NzJhLjYyNS42MjUgMCAwIDEtLjYyNS0uNjI1VjQuMDM0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Segments = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-segments',
        'staticon-Segments',
        className
      ),
      ...props,
    })
);
Segments.displayName = 'Segments'

export default Segments;
