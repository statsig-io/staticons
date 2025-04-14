
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M5.824 4.49H5.14a.875.875 0 0 0-.875.874v9.423c0 .483.392.875.875.875h3.455a4.796 4.796 0 0 1 5.398-7.08V5.365a.875.875 0 0 0-.875-.875h-.65a1.459 1.459 0 0 1-1.445 1.26H7.27a1.459 1.459 0 0 1-1.445-1.26Zm6.64-1.25h.653c1.173 0 2.125.95 2.125 2.124V9.13a4.796 4.796 0 1 1-5.572 7.782H5.14a2.125 2.125 0 0 1-2.126-2.125V5.364c0-1.173.952-2.125 2.125-2.125h.688A1.459 1.459 0 0 1 7.269 2h3.753a1.456 1.456 0 0 1 1.442 1.24Zm-5.403.216c0-.115.093-.208.208-.208h3.753c.115 0 .208.093.208.208v.834a.208.208 0 0 1-.208.208H7.27a.208.208 0 0 1-.208-.208v-.834Zm2.107 9.75a3.546 3.546 0 1 0 7.091 0 3.546 3.546 0 0 0-7.091 0Zm4.068-1.67a.625.625 0 1 0-1.25 0v1.67c0 .24.135.449.334.553l1.42.82a.625.625 0 1 0 .625-1.082l-1.13-.652v-1.309Z","clip-rule":"evenodd"}]]

/**
 * @component @name Review
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS44MjQgNC40OUg1LjE0YS44NzUuODc1IDAgMCAwLS44NzUuODc0djkuNDIzYzAgLjQ4My4zOTIuODc1Ljg3NS44NzVoMy40NTVhNC43OTYgNC43OTYgMCAwIDEgNS4zOTgtNy4wOFY1LjM2NWEuODc1Ljg3NSAwIDAgMC0uODc1LS44NzVoLS42NWExLjQ1OSAxLjQ1OSAwIDAgMS0xLjQ0NSAxLjI2SDcuMjdhMS40NTkgMS40NTkgMCAwIDEtMS40NDUtMS4yNlptNi42NC0xLjI1aC42NTNjMS4xNzMgMCAyLjEyNS45NSAyLjEyNSAyLjEyNFY5LjEzYTQuNzk2IDQuNzk2IDAgMSAxLTUuNTcyIDcuNzgySDUuMTRhMi4xMjUgMi4xMjUgMCAwIDEtMi4xMjYtMi4xMjVWNS4zNjRjMC0xLjE3My45NTItMi4xMjUgMi4xMjUtMi4xMjVoLjY4OEExLjQ1OSAxLjQ1OSAwIDAgMSA3LjI2OSAyaDMuNzUzYTEuNDU2IDEuNDU2IDAgMCAxIDEuNDQyIDEuMjRabS01LjQwMy4yMTZjMC0uMTE1LjA5My0uMjA4LjIwOC0uMjA4aDMuNzUzYy4xMTUgMCAuMjA4LjA5My4yMDguMjA4di44MzRhLjIwOC4yMDggMCAwIDEtLjIwOC4yMDhINy4yN2EuMjA4LjIwOCAwIDAgMS0uMjA4LS4yMDh2LS44MzRabTIuMTA3IDkuNzVhMy41NDYgMy41NDYgMCAxIDAgNy4wOTEgMCAzLjU0NiAzLjU0NiAwIDAgMC03LjA5MSAwWm00LjA2OC0xLjY3YS42MjUuNjI1IDAgMSAwLTEuMjUgMHYxLjY3YzAgLjI0LjEzNS40NDkuMzM0LjU1M2wxLjQyLjgyYS42MjUuNjI1IDAgMSAwIC42MjUtMS4wODJsLTEuMTMtLjY1MnYtMS4zMDlaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Review = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-review',
        'staticon-Review',
        className
      ),
      ...props,
    })
);
Review.displayName = 'Review'

export default Review;
