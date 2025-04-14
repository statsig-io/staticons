
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M9.662 3.249a5.912 5.912 0 1 0 0 11.824 5.912 5.912 0 0 0 0-11.824ZM2.5 9.161a7.162 7.162 0 1 1 12.167 5.123l2.65 2.65a.625.625 0 0 1-.884.883l-2.737-2.737A7.162 7.162 0 0 1 2.5 9.16Zm3.537-.576a.625.625 0 0 0 0 1.25h7.25a.625.625 0 1 0 0-1.25h-7.25Z","clip-rule":"evenodd"}]]

/**
 * @component @name ZoomOut
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS42NjIgMy4yNDlhNS45MTIgNS45MTIgMCAxIDAgMCAxMS44MjQgNS45MTIgNS45MTIgMCAwIDAgMC0xMS44MjRaTTIuNSA5LjE2MWE3LjE2MiA3LjE2MiAwIDEgMSAxMi4xNjcgNS4xMjNsMi42NSAyLjY1YS42MjUuNjI1IDAgMCAxLS44ODQuODgzbC0yLjczNy0yLjczN0E3LjE2MiA3LjE2MiAwIDAgMSAyLjUgOS4xNlptMy41MzctLjU3NmEuNjI1LjYyNSAwIDAgMCAwIDEuMjVoNy4yNWEuNjI1LjYyNSAwIDEgMCAwLTEuMjVoLTcuMjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ZoomOut = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-zoom-out',
        'staticon-ZoomOut',
        className
      ),
      ...props,
    })
);
ZoomOut.displayName = 'ZoomOut'

export default ZoomOut;
