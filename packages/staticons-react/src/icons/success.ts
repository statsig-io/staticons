
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M14.251 8.462a.625.625 0 1 0-.884-.884l-4.669 4.67-2.375-2.375a.625.625 0 1 0-.884.884l2.71 2.709a.777.777 0 0 0 1.099 0l5.003-5.004Z"}],["path",{"fill-rule":"evenodd","d":"M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-1.25 0a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Success
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTE0LjI1MSA4LjQ2MmEuNjI1LjYyNSAwIDEgMC0uODg0LS44ODRsLTQuNjY5IDQuNjctMi4zNzUtMi4zNzVhLjYyNS42MjUgMCAxIDAtLjg4NC44ODRsMi43MSAyLjcwOWEuNzc3Ljc3NyAwIDAgMCAxLjA5OSAwbDUuMDAzLTUuMDA0WiIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE4IDEwYTggOCAwIDEgMS0xNiAwIDggOCAwIDAgMSAxNiAwWm0tMS4yNSAwYTYuNzUgNi43NSAwIDEgMS0xMy41IDAgNi43NSA2Ljc1IDAgMCAxIDEzLjUgMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Success = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-success',
        'staticon-Success',
        className
      ),
      ...props,
    })
);
Success.displayName = 'Success'

export default Success;
