
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m15.253 4.646 4.1 4.101a.5.5 0 0 1 .147.354v5.798a.5.5 0 0 1-.146.354l-4.101 4.1a.5.5 0 0 1-.354.147H9.101a.5.5 0 0 1-.354-.146l-4.1-4.101a.5.5 0 0 1-.147-.354V9.101a.5.5 0 0 1 .146-.354l4.101-4.1A.5.5 0 0 1 9.1 4.5h5.798a.5.5 0 0 1 .354.146ZM14.899 3a2 2 0 0 1 1.415.586l4.1 4.1A2 2 0 0 1 21 9.101v5.798a2 2 0 0 1-.586 1.415l-4.1 4.1a2 2 0 0 1-1.415.586H9.101a2 2 0 0 1-1.415-.586l-4.1-4.1A2 2 0 0 1 3 14.899V9.101a2 2 0 0 1 .586-1.415l4.1-4.1A2 2 0 0 1 9.101 3h5.798ZM12.75 8.257a.75.75 0 0 0-1.5 0v4.486a.75.75 0 0 0 1.5 0V8.257ZM12 14.743a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name Error
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTUuMjUzIDQuNjQ2IDQuMSA0LjEwMWEuNS41IDAgMCAxIC4xNDcuMzU0djUuNzk4YS41LjUgMCAwIDEtLjE0Ni4zNTRsLTQuMTAxIDQuMWEuNS41IDAgMCAxLS4zNTQuMTQ3SDkuMTAxYS41LjUgMCAwIDEtLjM1NC0uMTQ2bC00LjEtNC4xMDFhLjUuNSAwIDAgMS0uMTQ3LS4zNTRWOS4xMDFhLjUuNSAwIDAgMSAuMTQ2LS4zNTRsNC4xMDEtNC4xQS41LjUgMCAwIDEgOS4xIDQuNWg1Ljc5OGEuNS41IDAgMCAxIC4zNTQuMTQ2Wk0xNC44OTkgM2EyIDIgMCAwIDEgMS40MTUuNTg2bDQuMSA0LjFBMiAyIDAgMCAxIDIxIDkuMTAxdjUuNzk4YTIgMiAwIDAgMS0uNTg2IDEuNDE1bC00LjEgNC4xYTIgMiAwIDAgMS0xLjQxNS41ODZIOS4xMDFhMiAyIDAgMCAxLTEuNDE1LS41ODZsLTQuMS00LjFBMiAyIDAgMCAxIDMgMTQuODk5VjkuMTAxYTIgMiAwIDAgMSAuNTg2LTEuNDE1bDQuMS00LjFBMiAyIDAgMCAxIDkuMTAxIDNoNS43OThaTTEyLjc1IDguMjU3YS43NS43NSAwIDAgMC0xLjUgMHY0LjQ4NmEuNzUuNzUgMCAwIDAgMS41IDBWOC4yNTdaTTEyIDE0Ljc0M2EuODc1Ljg3NSAwIDEgMCAwIDEuNzUuODc1Ljg3NSAwIDAgMCAwLTEuNzVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Error = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-error',
        'staticon-Error',
        className
      ),
      ...props,
    })
);
Error.displayName = 'Error'

export default Error;
