
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M12.592 5.688a.625.625 0 1 0 0 1.25h3.25l-4.123 4.214a.625.625 0 0 1-.94-.053L9.22 9.093a1.875 1.875 0 0 0-2.82-.16l-4.222 4.314a.625.625 0 1 0 .894.874l4.22-4.311a.625.625 0 0 1 .94.053l1.561 2.005c.698.895 2.026.97 2.82.159l4.138-4.229v3.3a.625.625 0 1 0 1.25 0V6.814c0-.62-.504-1.125-1.125-1.125h-4.284Z","clip-rule":"evenodd"}]]

/**
 * @component @name TrendingUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNTkyIDUuNjg4YS42MjUuNjI1IDAgMSAwIDAgMS4yNWgzLjI1bC00LjEyMyA0LjIxNGEuNjI1LjYyNSAwIDAgMS0uOTQtLjA1M0w5LjIyIDkuMDkzYTEuODc1IDEuODc1IDAgMCAwLTIuODItLjE2bC00LjIyMiA0LjMxNGEuNjI1LjYyNSAwIDEgMCAuODk0Ljg3NGw0LjIyLTQuMzExYS42MjUuNjI1IDAgMCAxIC45NC4wNTNsMS41NjEgMi4wMDVjLjY5OC44OTUgMi4wMjYuOTcgMi44Mi4xNTlsNC4xMzgtNC4yMjl2My4zYS42MjUuNjI1IDAgMSAwIDEuMjUgMFY2LjgxNGMwLS42Mi0uNTA0LTEuMTI1LTEuMTI1LTEuMTI1aC00LjI4NFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const TrendingUp = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-trending-up',
        'staticon-TrendingUp',
        className
      ),
      ...props,
    })
);
TrendingUp.displayName = 'TrendingUp'

export default TrendingUp;
