
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M13.316 11.168a1.372 1.372 0 0 0 0-2.337l-3.999-2.46a1.372 1.372 0 0 0-2.09 1.17v4.918a1.372 1.372 0 0 0 2.09 1.169l4-2.46Zm-.653-1.274a.124.124 0 0 1 0 .212l-4 2.46a.125.125 0 0 1-.19-.107V7.54c0-.097.108-.157.19-.106l4 2.46Z","clip-rule":"evenodd"}],["path",{"fill-rule":"evenodd","d":"M2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0Zm1.25 0a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Run
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMzE2IDExLjE2OGExLjM3MiAxLjM3MiAwIDAgMCAwLTIuMzM3bC0zLjk5OS0yLjQ2YTEuMzcyIDEuMzcyIDAgMCAwLTIuMDkgMS4xN3Y0LjkxOGExLjM3MiAxLjM3MiAwIDAgMCAyLjA5IDEuMTY5bDQtMi40NlptLS42NTMtMS4yNzRhLjEyNC4xMjQgMCAwIDEgMCAuMjEybC00IDIuNDZhLjEyNS4xMjUgMCAwIDEtLjE5LS4xMDdWNy41NGMwLS4wOTcuMTA4LS4xNTcuMTktLjEwNmw0IDIuNDZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDEwYTggOCAwIDEgMCAxNiAwIDggOCAwIDAgMC0xNiAwWm0xLjI1IDBhNi43NSA2Ljc1IDAgMSAwIDEzLjUgMCA2Ljc1IDYuNzUgMCAwIDAtMTMuNSAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Run = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-run',
        'staticon-Run',
        className
      ),
      ...props,
    })
);
Run.displayName = 'Run'

export default Run;
