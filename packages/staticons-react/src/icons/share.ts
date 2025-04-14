
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M12.537 5.545a1.92 1.92 0 1 0 3.839 0 1.92 1.92 0 0 0-3.839 0Zm-1.208.52a3.17 3.17 0 1 1 .453 1.182L8.584 9.093a3.17 3.17 0 0 1 0 1.82l3.196 1.846a3.17 3.17 0 1 1-.451 1.183l-3.335-1.925a3.17 3.17 0 1 1 0-4.028l3.335-1.925Zm-5.783 5.858a1.92 1.92 0 1 1 0-3.84 1.92 1.92 0 0 1 0 3.84Zm8.91 4.454a1.92 1.92 0 1 1 0-3.838 1.92 1.92 0 0 1 0 3.838Z","clip-rule":"evenodd"}]]

/**
 * @component @name Share
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNTM3IDUuNTQ1YTEuOTIgMS45MiAwIDEgMCAzLjgzOSAwIDEuOTIgMS45MiAwIDAgMC0zLjgzOSAwWm0tMS4yMDguNTJhMy4xNyAzLjE3IDAgMSAxIC40NTMgMS4xODJMOC41ODQgOS4wOTNhMy4xNyAzLjE3IDAgMCAxIDAgMS44MmwzLjE5NiAxLjg0NmEzLjE3IDMuMTcgMCAxIDEtLjQ1MSAxLjE4M2wtMy4zMzUtMS45MjVhMy4xNyAzLjE3IDAgMSAxIDAtNC4wMjhsMy4zMzUtMS45MjVabS01Ljc4MyA1Ljg1OGExLjkyIDEuOTIgMCAxIDEgMC0zLjg0IDEuOTIgMS45MiAwIDAgMSAwIDMuODRabTguOTEgNC40NTRhMS45MiAxLjkyIDAgMSAxIDAtMy44MzggMS45MiAxLjkyIDAgMCAxIDAgMy44MzhaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Share = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-share',
        'staticon-Share',
        className
      ),
      ...props,
    })
);
Share.displayName = 'Share'

export default Share;
