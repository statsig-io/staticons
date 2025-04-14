
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.626 3.752c0-.345.28-.625.625-.625h4.542a3.634 3.634 0 0 1 2.643 6.13 3.866 3.866 0 0 1-.926 7.616H5.25a.625.625 0 0 1-.615-.735.63.63 0 0 1-.01-.108V9.783a.626.626 0 0 1 0-.026V3.752Zm1.25.625v4.768h4a2.385 2.385 0 0 0-.083-4.768H5.876Zm0 6.019v5.227h5.634a2.614 2.614 0 1 0 0-5.228H9.894a3.428 3.428 0 0 1-.101 0H5.876Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatBold
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42MjYgMy43NTJjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVoNC41NDJhMy42MzQgMy42MzQgMCAwIDEgMi42NDMgNi4xMyAzLjg2NiAzLjg2NiAwIDAgMS0uOTI2IDcuNjE2SDUuMjVhLjYyNS42MjUgMCAwIDEtLjYxNS0uNzM1LjYzLjYzIDAgMCAxLS4wMS0uMTA4VjkuNzgzYS42MjYuNjI2IDAgMCAxIDAtLjAyNlYzLjc1MlptMS4yNS42MjV2NC43NjhoNGEyLjM4NSAyLjM4NSAwIDAgMC0uMDgzLTQuNzY4SDUuODc2Wm0wIDYuMDE5djUuMjI3aDUuNjM0YTIuNjE0IDIuNjE0IDAgMSAwIDAtNS4yMjhIOS44OTRhMy40MjggMy40MjggMCAwIDEtLjEwMSAwSDUuODc2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatBold = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-bold',
        'staticon-FormatBold',
        className
      ),
      ...props,
    })
);
FormatBold.displayName = 'FormatBold'

export default FormatBold;
