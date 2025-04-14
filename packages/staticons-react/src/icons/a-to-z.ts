
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M6.346 6.31c-.316-1.08-1.844-1.08-2.16 0l-2.162 7.389a.625.625 0 0 0 1.2.35l.499-1.704H6.81l.499 1.705a.625.625 0 1 0 1.2-.351l-2.163-7.39Zm.098 4.785L5.266 7.07l-1.178 4.025h2.356Zm5.807-4.908c0-.346.28-.625.625-.625h4.29c.66 0 1.059.73.7 1.285l-4.076 6.311h3.535a.625.625 0 0 1 0 1.25h-4.3a.833.833 0 0 1-.7-1.285L16.4 6.812h-3.525a.625.625 0 0 1-.625-.625Zm-.855 4.31H9.563a.625.625 0 0 1 0-1.25h1.833a.625.625 0 1 1 0 1.25Z","clip-rule":"evenodd"}]]

/**
 * @component @name AToZ
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4zNDYgNi4zMWMtLjMxNi0xLjA4LTEuODQ0LTEuMDgtMi4xNiAwbC0yLjE2MiA3LjM4OWEuNjI1LjYyNSAwIDAgMCAxLjIuMzVsLjQ5OS0xLjcwNEg2LjgxbC40OTkgMS43MDVhLjYyNS42MjUgMCAxIDAgMS4yLS4zNTFsLTIuMTYzLTcuMzlabS4wOTggNC43ODVMNS4yNjYgNy4wN2wtMS4xNzggNC4wMjVoMi4zNTZabTUuODA3LTQuOTA4YzAtLjM0Ni4yOC0uNjI1LjYyNS0uNjI1aDQuMjljLjY2IDAgMS4wNTkuNzMuNyAxLjI4NWwtNC4wNzYgNi4zMTFoMy41MzVhLjYyNS42MjUgMCAwIDEgMCAxLjI1aC00LjNhLjgzMy44MzMgMCAwIDEtLjctMS4yODVMMTYuNCA2LjgxMmgtMy41MjVhLjYyNS42MjUgMCAwIDEtLjYyNS0uNjI1Wm0tLjg1NSA0LjMxSDkuNTYzYS42MjUuNjI1IDAgMCAxIDAtMS4yNWgxLjgzM2EuNjI1LjYyNSAwIDEgMSAwIDEuMjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const AToZ = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-ato-z',
        'staticon-AToZ',
        className
      ),
      ...props,
    })
);
AToZ.displayName = 'AToZ'

export default AToZ;
