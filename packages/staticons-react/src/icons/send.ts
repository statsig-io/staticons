
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M15.913 4.967 11.857 16.09a.232.232 0 0 1-.085.12.265.265 0 0 1-.138.043.264.264 0 0 1-.141-.03.232.232 0 0 1-.095-.113L9.413 11.9a2.737 2.737 0 0 0-.152-.28l6.652-6.652Zm-.882-.88L8.38 10.738a2.724 2.724 0 0 0-.279-.151L3.89 8.602a.232.232 0 0 1-.111-.095.264.264 0 0 1-.031-.141.264.264 0 0 1 .043-.138.232.232 0 0 1 .12-.085l11.12-4.056Zm.458-1.493c1.194-.436 2.353.723 1.917 1.917l-4.378 12.006c-.455 1.248-2.191 1.327-2.758.125L8.286 12.43a1.495 1.495 0 0 0-.716-.716L3.358 9.73c-1.202-.567-1.123-2.303.125-2.758L15.49 2.594Z","clip-rule":"evenodd"}]]

/**
 * @component @name Send
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuOTEzIDQuOTY3IDExLjg1NyAxNi4wOWEuMjMyLjIzMiAwIDAgMS0uMDg1LjEyLjI2NS4yNjUgMCAwIDEtLjEzOC4wNDMuMjY0LjI2NCAwIDAgMS0uMTQxLS4wMy4yMzIuMjMyIDAgMCAxLS4wOTUtLjExM0w5LjQxMyAxMS45YTIuNzM3IDIuNzM3IDAgMCAwLS4xNTItLjI4bDYuNjUyLTYuNjUyWm0tLjg4Mi0uODhMOC4zOCAxMC43MzhhMi43MjQgMi43MjQgMCAwIDAtLjI3OS0uMTUxTDMuODkgOC42MDJhLjIzMi4yMzIgMCAwIDEtLjExMS0uMDk1LjI2NC4yNjQgMCAwIDEtLjAzMS0uMTQxLjI2NC4yNjQgMCAwIDEgLjA0My0uMTM4LjIzMi4yMzIgMCAwIDEgLjEyLS4wODVsMTEuMTItNC4wNTZabS40NTgtMS40OTNjMS4xOTQtLjQzNiAyLjM1My43MjMgMS45MTcgMS45MTdsLTQuMzc4IDEyLjAwNmMtLjQ1NSAxLjI0OC0yLjE5MSAxLjMyNy0yLjc1OC4xMjVMOC4yODYgMTIuNDNhMS40OTUgMS40OTUgMCAwIDAtLjcxNi0uNzE2TDMuMzU4IDkuNzNjLTEuMjAyLS41NjctMS4xMjMtMi4zMDMuMTI1LTIuNzU4TDE1LjQ5IDIuNTk0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Send = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-send',
        'staticon-Send',
        className
      ),
      ...props,
    })
);
Send.displayName = 'Send'

export default Send;
