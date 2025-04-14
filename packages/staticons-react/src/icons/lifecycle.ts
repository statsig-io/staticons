
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M14.65 5.343a5.908 5.908 0 0 0-8.364.251.625.625 0 1 1-.91-.856A7.158 7.158 0 0 1 15.46 4.39l-.04-.707a.625.625 0 0 1 1.248-.069l.11 1.988a.875.875 0 0 1-.826.922l-1.988.109a.625.625 0 1 1-.068-1.248l.753-.042Zm1.614 2.642a.625.625 0 0 1 1.2-.35 7.158 7.158 0 0 1-4.759 8.84l.641.324a.625.625 0 0 1-.565 1.116l-1.773-.898a.875.875 0 0 1-.385-1.176l.898-1.774a.625.625 0 0 1 1.115.565l-.334.66a5.908 5.908 0 0 0 3.962-7.306Zm-11.431.32.388.56a.625.625 0 0 0 1.028-.712L5.117 6.52A.875.875 0 0 0 3.9 6.299L2.266 7.43a.625.625 0 0 0 .712 1.028l.639-.442a7.158 7.158 0 0 0 5.276 8.575.625.625 0 1 0 .296-1.214 5.908 5.908 0 0 1-4.357-7.073Z","clip-rule":"evenodd"}]]

/**
 * @component @name Lifecycle
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNjUgNS4zNDNhNS45MDggNS45MDggMCAwIDAtOC4zNjQuMjUxLjYyNS42MjUgMCAxIDEtLjkxLS44NTZBNy4xNTggNy4xNTggMCAwIDEgMTUuNDYgNC4zOWwtLjA0LS43MDdhLjYyNS42MjUgMCAwIDEgMS4yNDgtLjA2OWwuMTEgMS45ODhhLjg3NS44NzUgMCAwIDEtLjgyNi45MjJsLTEuOTg4LjEwOWEuNjI1LjYyNSAwIDEgMS0uMDY4LTEuMjQ4bC43NTMtLjA0MlptMS42MTQgMi42NDJhLjYyNS42MjUgMCAwIDEgMS4yLS4zNSA3LjE1OCA3LjE1OCAwIDAgMS00Ljc1OSA4Ljg0bC42NDEuMzI0YS42MjUuNjI1IDAgMCAxLS41NjUgMS4xMTZsLTEuNzczLS44OThhLjg3NS44NzUgMCAwIDEtLjM4NS0xLjE3NmwuODk4LTEuNzc0YS42MjUuNjI1IDAgMCAxIDEuMTE1LjU2NWwtLjMzNC42NmE1LjkwOCA1LjkwOCAwIDAgMCAzLjk2Mi03LjMwNlptLTExLjQzMS4zMi4zODguNTZhLjYyNS42MjUgMCAwIDAgMS4wMjgtLjcxMkw1LjExNyA2LjUyQS44NzUuODc1IDAgMCAwIDMuOSA2LjI5OUwyLjI2NiA3LjQzYS42MjUuNjI1IDAgMCAwIC43MTIgMS4wMjhsLjYzOS0uNDQyYTcuMTU4IDcuMTU4IDAgMCAwIDUuMjc2IDguNTc1LjYyNS42MjUgMCAxIDAgLjI5Ni0xLjIxNCA1LjkwOCA1LjkwOCAwIDAgMS00LjM1Ny03LjA3M1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Lifecycle = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-lifecycle',
        'staticon-Lifecycle',
        className
      ),
      ...props,
    })
);
Lifecycle.displayName = 'Lifecycle'

export default Lifecycle;
