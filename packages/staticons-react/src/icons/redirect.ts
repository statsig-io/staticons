
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M15.074 3.332a.625.625 0 0 1 .884 0l1.857 1.857a.625.625 0 0 1 0 .884L15.958 7.93a.625.625 0 1 1-.884-.884l.79-.79H14.65c-1.56 0-3.003.831-3.785 2.18L9.987 9.95l.877 1.512a4.375 4.375 0 0 0 3.785 2.18h1.215l-.79-.789a.625.625 0 0 1 .884-.884l1.857 1.857a.625.625 0 0 1 0 .884l-1.857 1.856a.625.625 0 0 1-.884-.884l.79-.79H14.65a5.625 5.625 0 0 1-4.867-2.803l-.517-.893-.518.893a5.625 5.625 0 0 1-4.866 2.804H2.627a.625.625 0 1 1 0-1.25h1.254c1.56 0 3.002-.831 3.785-2.181l.876-1.512-.876-1.512a4.375 4.375 0 0 0-3.785-2.18H2.627a.625.625 0 1 1 0-1.25h1.254A5.625 5.625 0 0 1 8.747 7.81l.518.893.517-.893a5.625 5.625 0 0 1 4.867-2.804h1.215l-.79-.79a.625.625 0 0 1 0-.884Z","clip-rule":"evenodd"}]]

/**
 * @component @name Redirect
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuMDc0IDMuMzMyYS42MjUuNjI1IDAgMCAxIC44ODQgMGwxLjg1NyAxLjg1N2EuNjI1LjYyNSAwIDAgMSAwIC44ODRMMTUuOTU4IDcuOTNhLjYyNS42MjUgMCAxIDEtLjg4NC0uODg0bC43OS0uNzlIMTQuNjVjLTEuNTYgMC0zLjAwMy44MzEtMy43ODUgMi4xOEw5Ljk4NyA5Ljk1bC44NzcgMS41MTJhNC4zNzUgNC4zNzUgMCAwIDAgMy43ODUgMi4xOGgxLjIxNWwtLjc5LS43ODlhLjYyNS42MjUgMCAwIDEgLjg4NC0uODg0bDEuODU3IDEuODU3YS42MjUuNjI1IDAgMCAxIDAgLjg4NGwtMS44NTcgMS44NTZhLjYyNS42MjUgMCAwIDEtLjg4NC0uODg0bC43OS0uNzlIMTQuNjVhNS42MjUgNS42MjUgMCAwIDEtNC44NjctMi44MDNsLS41MTctLjg5My0uNTE4Ljg5M2E1LjYyNSA1LjYyNSAwIDAgMS00Ljg2NiAyLjgwNEgyLjYyN2EuNjI1LjYyNSAwIDEgMSAwLTEuMjVoMS4yNTRjMS41NiAwIDMuMDAyLS44MzEgMy43ODUtMi4xODFsLjg3Ni0xLjUxMi0uODc2LTEuNTEyYTQuMzc1IDQuMzc1IDAgMCAwLTMuNzg1LTIuMThIMi42MjdhLjYyNS42MjUgMCAxIDEgMC0xLjI1aDEuMjU0QTUuNjI1IDUuNjI1IDAgMCAxIDguNzQ3IDcuODFsLjUxOC44OTMuNTE3LS44OTNhNS42MjUgNS42MjUgMCAwIDEgNC44NjctMi44MDRoMS4yMTVsLS43OS0uNzlhLjYyNS42MjUgMCAwIDEgMC0uODg0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Redirect = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-redirect',
        'staticon-Redirect',
        className
      ),
      ...props,
    })
);
Redirect.displayName = 'Redirect'

export default Redirect;
