
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"m10.885 4.32-.046.132a4.134 4.134 0 0 1-2.432 2.489c-.236.09-.497.09-.733 0A4.128 4.128 0 0 1 5.25 4.456l-.048-.136a.37.37 0 0 1 .349-.493h4.986a.37.37 0 0 1 .348.493Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.249 1.499a.625.625 0 0 0 0 1.25h.248v.535c0 1.695.716 3.31 1.971 4.449a.362.362 0 0 1 0 .535 6.026 6.026 0 0 0-1.98 4.443l-.001.54H2.25a.625.625 0 1 0 0 1.25h11.5a.625.625 0 0 0 0-1.25h-.238l-.002-.54a6.026 6.026 0 0 0-1.979-4.443.362.362 0 0 1 0-.535 6.004 6.004 0 0 0 1.971-4.449v-.535h.248a.625.625 0 1 0 0-1.25H2.248Zm10.014 11.752H3.737l.002-.536a4.776 4.776 0 0 1 1.568-3.52 1.612 1.612 0 0 0 .001-2.389 4.754 4.754 0 0 1-1.561-3.522v-.535h8.506v.535a4.754 4.754 0 0 1-1.561 3.522 1.612 1.612 0 0 0 0 2.389c.995.9 1.565 2.18 1.57 3.52l.001.537Z","clip-rule":"evenodd"}]]

/**
 * @component @name Waiting
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0ibTEwLjg4NSA0LjMyLS4wNDYuMTMyYTQuMTM0IDQuMTM0IDAgMCAxLTIuNDMyIDIuNDg5Yy0uMjM2LjA5LS40OTcuMDktLjczMyAwQTQuMTI4IDQuMTI4IDAgMCAxIDUuMjUgNC40NTZsLS4wNDgtLjEzNmEuMzcuMzcgMCAwIDEgLjM0OS0uNDkzaDQuOTg2YS4zNy4zNyAwIDAgMSAuMzQ4LjQ5M1oiLz4KICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjI0OSAxLjQ5OWEuNjI1LjYyNSAwIDAgMCAwIDEuMjVoLjI0OHYuNTM1YzAgMS42OTUuNzE2IDMuMzEgMS45NzEgNC40NDlhLjM2Mi4zNjIgMCAwIDEgMCAuNTM1IDYuMDI2IDYuMDI2IDAgMCAwLTEuOTggNC40NDNsLS4wMDEuNTRIMi4yNWEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoMTEuNWEuNjI1LjYyNSAwIDAgMCAwLTEuMjVoLS4yMzhsLS4wMDItLjU0YTYuMDI2IDYuMDI2IDAgMCAwLTEuOTc5LTQuNDQzLjM2Mi4zNjIgMCAwIDEgMC0uNTM1IDYuMDA0IDYuMDA0IDAgMCAwIDEuOTcxLTQuNDQ5di0uNTM1aC4yNDhhLjYyNS42MjUgMCAxIDAgMC0xLjI1SDIuMjQ4Wm0xMC4wMTQgMTEuNzUySDMuNzM3bC4wMDItLjUzNmE0Ljc3NiA0Ljc3NiAwIDAgMSAxLjU2OC0zLjUyIDEuNjEyIDEuNjEyIDAgMCAwIC4wMDEtMi4zODkgNC43NTQgNC43NTQgMCAwIDEtMS41NjEtMy41MjJ2LS41MzVoOC41MDZ2LjUzNWE0Ljc1NCA0Ljc1NCAwIDAgMS0xLjU2MSAzLjUyMiAxLjYxMiAxLjYxMiAwIDAgMCAwIDIuMzg5Yy45OTUuOSAxLjU2NSAyLjE4IDEuNTcgMy41MmwuMDAxLjUzN1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Waiting = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-waiting',
        'staticon-Waiting',
        className
      ),
      ...props,
    })
);
Waiting.displayName = 'Waiting'

export default Waiting;
