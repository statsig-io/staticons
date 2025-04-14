
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M7.43 14.799c.234.253.63.269.883.035l4.34-4.008a1.125 1.125 0 0 0 0-1.653l-4.34-4.008a.625.625 0 0 0-.848.918L11.705 10l-4.24 3.916a.625.625 0 0 0-.035.884Z","clip-rule":"evenodd"}]]

/**
 * @component @name ChevronRight
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy40MyAxNC43OTljLjIzNC4yNTMuNjMuMjY5Ljg4My4wMzVsNC4zNC00LjAwOGExLjEyNSAxLjEyNSAwIDAgMCAwLTEuNjUzbC00LjM0LTQuMDA4YS42MjUuNjI1IDAgMCAwLS44NDguOTE4TDExLjcwNSAxMGwtNC4yNCAzLjkxNmEuNjI1LjYyNSAwIDAgMC0uMDM1Ljg4NFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ChevronRight = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-chevron-right',
        'staticon-ChevronRight',
        className
      ),
      ...props,
    })
);
ChevronRight.displayName = 'ChevronRight'

export default ChevronRight;
