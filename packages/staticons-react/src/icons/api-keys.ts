
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M14.872 11.173a4.274 4.274 0 1 0-7.02-1.505.883.883 0 0 1-.199.938L3.9 14.36l.226 1.514 1.514.226.644-.644-.293-.293a.875.875 0 0 1 0-1.238l1.018-1.017a.875.875 0 0 1 1.237 0l.293.293.855-.854a.883.883 0 0 1 .938-.2 4.275 4.275 0 0 0 4.54-.974Zm.884-6.929a5.525 5.525 0 0 1-5.644 9.152l-.954.954a.875.875 0 0 1-1.237 0l-.294-.293-.487.487.293.293a.875.875 0 0 1 0 1.238l-1.042 1.043a.875.875 0 0 1-.748.246l-1.976-.294a.875.875 0 0 1-.737-.737l-.294-1.976a.875.875 0 0 1 .246-.747l3.722-3.722a5.525 5.525 0 0 1 9.152-5.644Zm-3.394 4.364a.685.685 0 1 1-.969-.97.685.685 0 0 1 .969.97Zm-1.853.884a1.935 1.935 0 1 0 2.737-2.737 1.935 1.935 0 0 0-2.737 2.737Z","clip-rule":"evenodd"}]]

/**
 * @component @name ApiKeys
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuODcyIDExLjE3M2E0LjI3NCA0LjI3NCAwIDEgMC03LjAyLTEuNTA1Ljg4My44ODMgMCAwIDEtLjE5OS45MzhMMy45IDE0LjM2bC4yMjYgMS41MTQgMS41MTQuMjI2LjY0NC0uNjQ0LS4yOTMtLjI5M2EuODc1Ljg3NSAwIDAgMSAwLTEuMjM4bDEuMDE4LTEuMDE3YS44NzUuODc1IDAgMCAxIDEuMjM3IDBsLjI5My4yOTMuODU1LS44NTRhLjg4My44ODMgMCAwIDEgLjkzOC0uMiA0LjI3NSA0LjI3NSAwIDAgMCA0LjU0LS45NzRabS44ODQtNi45MjlhNS41MjUgNS41MjUgMCAwIDEtNS42NDQgOS4xNTJsLS45NTQuOTU0YS44NzUuODc1IDAgMCAxLTEuMjM3IDBsLS4yOTQtLjI5My0uNDg3LjQ4Ny4yOTMuMjkzYS44NzUuODc1IDAgMCAxIDAgMS4yMzhsLTEuMDQyIDEuMDQzYS44NzUuODc1IDAgMCAxLS43NDguMjQ2bC0xLjk3Ni0uMjk0YS44NzUuODc1IDAgMCAxLS43MzctLjczN2wtLjI5NC0xLjk3NmEuODc1Ljg3NSAwIDAgMSAuMjQ2LS43NDdsMy43MjItMy43MjJhNS41MjUgNS41MjUgMCAwIDEgOS4xNTItNS42NDRabS0zLjM5NCA0LjM2NGEuNjg1LjY4NSAwIDEgMS0uOTY5LS45Ny42ODUuNjg1IDAgMCAxIC45NjkuOTdabS0xLjg1My44ODRhMS45MzUgMS45MzUgMCAxIDAgMi43MzctMi43MzcgMS45MzUgMS45MzUgMCAwIDAtMi43MzcgMi43MzdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ApiKeys = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-api-keys',
        'staticon-ApiKeys',
        className
      ),
      ...props,
    })
);
ApiKeys.displayName = 'ApiKeys'

export default ApiKeys;
