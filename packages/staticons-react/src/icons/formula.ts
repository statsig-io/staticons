
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M7.056 5.393a2.306 2.306 0 0 1 2.3-2.144h.123c1.005 0 1.894.65 2.198 1.607l.147.462a.629.629 0 0 1-1.199.381l-.147-.462a1.048 1.048 0 0 0-.999-.73h-.123c-.55 0-1.006.425-1.045.974l-.15 2.132h1.464a.629.629 0 0 1 0 1.258H8.073l-.401 5.72a2.306 2.306 0 0 1-2.3 2.145h-.054a2.306 2.306 0 0 1-2.107-1.37l-.282-.634a.629.629 0 0 1 1.15-.51l.281.634c.168.379.544.623.958.623h.054c.55 0 1.007-.426 1.045-.975l.395-5.633H5.104a.629.629 0 1 1 0-1.258h1.797l.155-2.22Z"}],["path",{"d":"M11.729 11.283a.629.629 0 0 0-1.128-.08l-.123.214a.629.629 0 0 1-1.09-.629l.124-.214c.787-1.36 2.794-1.22 3.383.238l.47 1.164 1.947-2.061a.629.629 0 0 1 .889-.028.629.629 0 0 1 .023.889l-2.342 2.48.745 1.844a.629.629 0 0 0 1.116.098l.22-.352a.629.629 0 1 1 1.066.666l-.219.352c-.817 1.307-2.772 1.136-3.35-.293l-.528-1.31-2.15 2.278a.629.629 0 0 1-.89.028.629.629 0 0 1-.023-.89l2.546-2.695-.686-1.7Z"}]]

/**
 * @component @name Formula
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTcuMDU2IDUuMzkzYTIuMzA2IDIuMzA2IDAgMCAxIDIuMy0yLjE0NGguMTIzYzEuMDA1IDAgMS44OTQuNjUgMi4xOTggMS42MDdsLjE0Ny40NjJhLjYyOS42MjkgMCAwIDEtMS4xOTkuMzgxbC0uMTQ3LS40NjJhMS4wNDggMS4wNDggMCAwIDAtLjk5OS0uNzNoLS4xMjNjLS41NSAwLTEuMDA2LjQyNS0xLjA0NS45NzRsLS4xNSAyLjEzMmgxLjQ2NGEuNjI5LjYyOSAwIDAgMSAwIDEuMjU4SDguMDczbC0uNDAxIDUuNzJhMi4zMDYgMi4zMDYgMCAwIDEtMi4zIDIuMTQ1aC0uMDU0YTIuMzA2IDIuMzA2IDAgMCAxLTIuMTA3LTEuMzdsLS4yODItLjYzNGEuNjI5LjYyOSAwIDAgMSAxLjE1LS41MWwuMjgxLjYzNGMuMTY4LjM3OS41NDQuNjIzLjk1OC42MjNoLjA1NGMuNTUgMCAxLjAwNy0uNDI2IDEuMDQ1LS45NzVsLjM5NS01LjYzM0g1LjEwNGEuNjI5LjYyOSAwIDEgMSAwLTEuMjU4aDEuNzk3bC4xNTUtMi4yMloiLz4KICA8cGF0aCBkPSJNMTEuNzI5IDExLjI4M2EuNjI5LjYyOSAwIDAgMC0xLjEyOC0uMDhsLS4xMjMuMjE0YS42MjkuNjI5IDAgMCAxLTEuMDktLjYyOWwuMTI0LS4yMTRjLjc4Ny0xLjM2IDIuNzk0LTEuMjIgMy4zODMuMjM4bC40NyAxLjE2NCAxLjk0Ny0yLjA2MWEuNjI5LjYyOSAwIDAgMSAuODg5LS4wMjguNjI5LjYyOSAwIDAgMSAuMDIzLjg4OWwtMi4zNDIgMi40OC43NDUgMS44NDRhLjYyOS42MjkgMCAwIDAgMS4xMTYuMDk4bC4yMi0uMzUyYS42MjkuNjI5IDAgMSAxIDEuMDY2LjY2NmwtLjIxOS4zNTJjLS44MTcgMS4zMDctMi43NzIgMS4xMzYtMy4zNS0uMjkzbC0uNTI4LTEuMzEtMi4xNSAyLjI3OGEuNjI5LjYyOSAwIDAgMS0uODkuMDI4LjYyOS42MjkgMCAwIDEtLjAyMy0uODlsMi41NDYtMi42OTUtLjY4Ni0xLjdaIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Formula = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-formula',
        'staticon-Formula',
        className
      ),
      ...props,
    })
);
Formula.displayName = 'Formula'

export default Formula;
