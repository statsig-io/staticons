
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12 3.876c.692 0 1.168.282 1.623.85.486.608.89 1.472 1.405 2.578l.023.048c1.025 2.196 2.38 5.05 5.543 7.09a.75.75 0 0 0 .813-1.26c-2.77-1.787-3.975-4.275-4.997-6.465l-.07-.151c-.473-1.014-.945-2.025-1.546-2.777-.67-.837-1.546-1.413-2.794-1.413s-2.124.576-2.794 1.413c-.601.752-1.072 1.763-1.545 2.777l-.07.151c-1.023 2.19-2.229 4.679-4.997 6.464a.75.75 0 1 0 .813 1.26c3.162-2.039 4.517-4.893 5.543-7.09l.022-.047c.516-1.106.92-1.97 1.405-2.578.455-.568.932-.85 1.623-.85Zm-1.334 13.53a1.25 1.25 0 0 1 0 1.768L8.44 21.401a.75.75 0 1 1-1.061-1.061l1.299-1.299h-5.67a.75.75 0 1 1 0-1.5H8.68l-1.298-1.298a.75.75 0 1 1 1.06-1.06l2.224 2.223Zm2.66 1.77a1.25 1.25 0 0 1 0-1.769l2.23-2.229a.75.75 0 0 1 1.06 1.061l-1.302 1.302h5.681a.75.75 0 1 1 0 1.5h-5.681l1.302 1.303a.75.75 0 1 1-1.06 1.06l-2.23-2.229Z","clip-rule":"evenodd"}]]

/**
 * @component @name Cuped
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMy44NzZjLjY5MiAwIDEuMTY4LjI4MiAxLjYyMy44NS40ODYuNjA4Ljg5IDEuNDcyIDEuNDA1IDIuNTc4bC4wMjMuMDQ4YzEuMDI1IDIuMTk2IDIuMzggNS4wNSA1LjU0MyA3LjA5YS43NS43NSAwIDAgMCAuODEzLTEuMjZjLTIuNzctMS43ODctMy45NzUtNC4yNzUtNC45OTctNi40NjVsLS4wNy0uMTUxYy0uNDczLTEuMDE0LS45NDUtMi4wMjUtMS41NDYtMi43NzctLjY3LS44MzctMS41NDYtMS40MTMtMi43OTQtMS40MTNzLTIuMTI0LjU3Ni0yLjc5NCAxLjQxM2MtLjYwMS43NTItMS4wNzIgMS43NjMtMS41NDUgMi43NzdsLS4wNy4xNTFjLTEuMDIzIDIuMTktMi4yMjkgNC42NzktNC45OTcgNi40NjRhLjc1Ljc1IDAgMSAwIC44MTMgMS4yNmMzLjE2Mi0yLjAzOSA0LjUxNy00Ljg5MyA1LjU0My03LjA5bC4wMjItLjA0N2MuNTE2LTEuMTA2LjkyLTEuOTcgMS40MDUtMi41NzguNDU1LS41NjguOTMyLS44NSAxLjYyMy0uODVabS0xLjMzNCAxMy41M2ExLjI1IDEuMjUgMCAwIDEgMCAxLjc2OEw4LjQ0IDIxLjQwMWEuNzUuNzUgMCAxIDEtMS4wNjEtMS4wNjFsMS4yOTktMS4yOTloLTUuNjdhLjc1Ljc1IDAgMSAxIDAtMS41SDguNjhsLTEuMjk4LTEuMjk4YS43NS43NSAwIDEgMSAxLjA2LTEuMDZsMi4yMjQgMi4yMjNabTIuNjYgMS43N2ExLjI1IDEuMjUgMCAwIDEgMC0xLjc2OWwyLjIzLTIuMjI5YS43NS43NSAwIDAgMSAxLjA2IDEuMDYxbC0xLjMwMiAxLjMwMmg1LjY4MWEuNzUuNzUgMCAxIDEgMCAxLjVoLTUuNjgxbDEuMzAyIDEuMzAzYS43NS43NSAwIDEgMS0xLjA2IDEuMDZsLTIuMjMtMi4yMjlaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Cuped = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-cuped',
        'staticon-Cuped',
        className
      ),
      ...props,
    })
);
Cuped.displayName = 'Cuped'

export default Cuped;
