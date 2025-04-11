
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M13.442 3.018a2.607 2.607 0 0 0-2.884.013c-1.216.826-3.085 1.826-5.048 2.117-1.125.167-2.134 1.102-2.134 2.367v3.889c0 3.374 1.74 5.982 3.619 7.72.941.87 1.934 1.538 2.798 1.991.432.227.84.404 1.2.527.348.117.702.201 1.009.201.307 0 .66-.084 1.008-.201.36-.123.769-.3 1.2-.527a13.329 13.329 0 0 0 2.798-1.992c1.878-1.737 3.617-4.345 3.617-7.719v-3.9c0-1.265-1.014-2.183-2.117-2.37-1.976-.336-3.852-1.31-5.066-2.116Zm-2.04 1.253c.354-.24.849-.243 1.211-.003 1.31.87 3.385 1.96 5.644 2.345.53.09.868.5.868.891v3.9c0 2.823-1.45 5.06-3.136 6.618-.84.777-1.723 1.37-2.476 1.765a7.04 7.04 0 0 1-.985.434c-.288.098-.46.122-.526.122s-.239-.024-.527-.122a7.047 7.047 0 0 1-.985-.434 11.836 11.836 0 0 1-2.477-1.765c-1.686-1.558-3.137-3.795-3.137-6.618v-3.89c0-.403.341-.806.855-.882 2.278-.338 4.364-1.473 5.67-2.36ZM14 11.741a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name SafeguardGate
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNDQyIDMuMDE4YTIuNjA3IDIuNjA3IDAgMCAwLTIuODg0LjAxM2MtMS4yMTYuODI2LTMuMDg1IDEuODI2LTUuMDQ4IDIuMTE3LTEuMTI1LjE2Ny0yLjEzNCAxLjEwMi0yLjEzNCAyLjM2N3YzLjg4OWMwIDMuMzc0IDEuNzQgNS45ODIgMy42MTkgNy43Mi45NDEuODcgMS45MzQgMS41MzggMi43OTggMS45OTEuNDMyLjIyNy44NC40MDQgMS4yLjUyNy4zNDguMTE3LjcwMi4yMDEgMS4wMDkuMjAxLjMwNyAwIC42Ni0uMDg0IDEuMDA4LS4yMDEuMzYtLjEyMy43NjktLjMgMS4yLS41MjdhMTMuMzI5IDEzLjMyOSAwIDAgMCAyLjc5OC0xLjk5MmMxLjg3OC0xLjczNyAzLjYxNy00LjM0NSAzLjYxNy03LjcxOXYtMy45YzAtMS4yNjUtMS4wMTQtMi4xODMtMi4xMTctMi4zNy0xLjk3Ni0uMzM2LTMuODUyLTEuMzEtNS4wNjYtMi4xMTZabS0yLjA0IDEuMjUzYy4zNTQtLjI0Ljg0OS0uMjQzIDEuMjExLS4wMDMgMS4zMS44NyAzLjM4NSAxLjk2IDUuNjQ0IDIuMzQ1LjUzLjA5Ljg2OC41Ljg2OC44OTF2My45YzAgMi44MjMtMS40NSA1LjA2LTMuMTM2IDYuNjE4LS44NC43NzctMS43MjMgMS4zNy0yLjQ3NiAxLjc2NWE3LjA0IDcuMDQgMCAwIDEtLjk4NS40MzRjLS4yODguMDk4LS40Ni4xMjItLjUyNi4xMjJzLS4yMzktLjAyNC0uNTI3LS4xMjJhNy4wNDcgNy4wNDcgMCAwIDEtLjk4NS0uNDM0IDExLjgzNiAxMS44MzYgMCAwIDEtMi40NzctMS43NjVjLTEuNjg2LTEuNTU4LTMuMTM3LTMuNzk1LTMuMTM3LTYuNjE4di0zLjg5YzAtLjQwMy4zNDEtLjgwNi44NTUtLjg4MiAyLjI3OC0uMzM4IDQuMzY0LTEuNDczIDUuNjctMi4zNlpNMTQgMTEuNzQxYTIgMiAwIDEgMS00IDAgMiAyIDAgMCAxIDQgMFptMS41IDBhMy41IDMuNSAwIDEgMS03IDAgMy41IDMuNSAwIDAgMSA3IDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SafeguardGate = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-safeguard-gate',
        'staticon-SafeguardGate',
        className
      ),
      ...props,
    })
);
SafeguardGate.displayName = 'SafeguardGate'

export default SafeguardGate;
