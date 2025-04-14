
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M7.709 5.234a2.48 2.48 0 1 0-.001 4.96 2.48 2.48 0 0 0 0-4.96Zm-1.23 2.48a1.23 1.23 0 1 1 2.459 0 1.23 1.23 0 0 1-2.46 0Z","clip-rule":"evenodd"}],["path",{"fill-rule":"evenodd","d":"M4.624 17.498a2.125 2.125 0 0 1-2.125-2.125V4.626c0-1.174.951-2.125 2.125-2.125h10.752c1.173 0 2.125.951 2.125 2.125v10.747a2.125 2.125 0 0 1-2.125 2.125H4.624Zm0-1.25a.875.875 0 0 1-.782-.482l2.528-2.941a.68.68 0 0 1 1.03 0L8.412 14a1.06 1.06 0 0 0 1.607 0l2.472-2.875a.68.68 0 0 1 1.03 0l2.73 3.177v1.07a.875.875 0 0 1-.875.875H4.624ZM16.251 4.626v7.759l-1.782-2.073a1.93 1.93 0 0 0-2.926 0l-2.327 2.707-.868-1.01a1.93 1.93 0 0 0-2.926 0l-1.673 1.947v-9.33c0-.483.392-.875.875-.875h10.752c.483 0 .875.392.875.875Z","clip-rule":"evenodd"}]]

/**
 * @component @name Image
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy43MDkgNS4yMzRhMi40OCAyLjQ4IDAgMSAwLS4wMDEgNC45NiAyLjQ4IDIuNDggMCAwIDAgMC00Ljk2Wm0tMS4yMyAyLjQ4YTEuMjMgMS4yMyAwIDEgMSAyLjQ1OSAwIDEuMjMgMS4yMyAwIDAgMS0yLjQ2IDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjYyNCAxNy40OThhMi4xMjUgMi4xMjUgMCAwIDEtMi4xMjUtMi4xMjVWNC42MjZjMC0xLjE3NC45NTEtMi4xMjUgMi4xMjUtMi4xMjVoMTAuNzUyYzEuMTczIDAgMi4xMjUuOTUxIDIuMTI1IDIuMTI1djEwLjc0N2EyLjEyNSAyLjEyNSAwIDAgMS0yLjEyNSAyLjEyNUg0LjYyNFptMC0xLjI1YS44NzUuODc1IDAgMCAxLS43ODItLjQ4MmwyLjUyOC0yLjk0MWEuNjguNjggMCAwIDEgMS4wMyAwTDguNDEyIDE0YTEuMDYgMS4wNiAwIDAgMCAxLjYwNyAwbDIuNDcyLTIuODc1YS42OC42OCAwIDAgMSAxLjAzIDBsMi43MyAzLjE3N3YxLjA3YS44NzUuODc1IDAgMCAxLS44NzUuODc1SDQuNjI0Wk0xNi4yNTEgNC42MjZ2Ny43NTlsLTEuNzgyLTIuMDczYTEuOTMgMS45MyAwIDAgMC0yLjkyNiAwbC0yLjMyNyAyLjcwNy0uODY4LTEuMDFhMS45MyAxLjkzIDAgMCAwLTIuOTI2IDBsLTEuNjczIDEuOTQ3di05LjMzYzAtLjQ4My4zOTItLjg3NS44NzUtLjg3NWgxMC43NTJjLjQ4MyAwIC44NzUuMzkyLjg3NS44NzVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Image = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-image',
        'staticon-Image',
        className
      ),
      ...props,
    })
);
Image.displayName = 'Image'

export default Image;
