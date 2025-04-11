
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3 6.748a2.75 2.75 0 0 1 2.75-2.75h12.5A2.75 2.75 0 0 1 21 6.748v8.508a2.75 2.75 0 0 1-2.75 2.75h-6.164a.25.25 0 0 0-.15.05l-4.334 3.245a1 1 0 0 1-1.6-.8v-2.495H5.75A2.75 2.75 0 0 1 3 15.256V6.748Zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v8.508c0 .69.56 1.25 1.25 1.25h.503c.69 0 1.25.56 1.25 1.25v1.745l3.534-2.646a1.75 1.75 0 0 1 1.049-.349h6.164c.69 0 1.25-.56 1.25-1.25V6.748c0-.69-.56-1.25-1.25-1.25H5.75Zm6.25 1.5a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 1 1-1.5 0v-2.5h-2.5a.75.75 0 1 1 0-1.5h2.5v-2.5a.75.75 0 0 1 .75-.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name AddComment
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMyA2Ljc0OGEyLjc1IDIuNzUgMCAwIDEgMi43NS0yLjc1aDEyLjVBMi43NSAyLjc1IDAgMCAxIDIxIDYuNzQ4djguNTA4YTIuNzUgMi43NSAwIDAgMS0yLjc1IDIuNzVoLTYuMTY0YS4yNS4yNSAwIDAgMC0uMTUuMDVsLTQuMzM0IDMuMjQ1YTEgMSAwIDAgMS0xLjYtLjh2LTIuNDk1SDUuNzVBMi43NSAyLjc1IDAgMCAxIDMgMTUuMjU2VjYuNzQ4Wm0yLjc1LTEuMjVjLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1djguNTA4YzAgLjY5LjU2IDEuMjUgMS4yNSAxLjI1aC41MDNjLjY5IDAgMS4yNS41NiAxLjI1IDEuMjV2MS43NDVsMy41MzQtMi42NDZhMS43NSAxLjc1IDAgMCAxIDEuMDQ5LS4zNDloNi4xNjRjLjY5IDAgMS4yNS0uNTYgMS4yNS0xLjI1VjYuNzQ4YzAtLjY5LS41Ni0xLjI1LTEuMjUtMS4yNUg1Ljc1Wm02LjI1IDEuNWEuNzUuNzUgMCAwIDEgLjc1Ljc1djIuNWgyLjVhLjc1Ljc1IDAgMCAxIDAgMS41aC0yLjV2Mi41YS43NS43NSAwIDEgMS0xLjUgMHYtMi41aC0yLjVhLjc1Ljc1IDAgMSAxIDAtMS41aDIuNXYtMi41YS43NS43NSAwIDAgMSAuNzUtLjc1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const AddComment = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-add-comment',
        'staticon-AddComment',
        className
      ),
      ...props,
    })
);
AddComment.displayName = 'AddComment'

export default AddComment;
