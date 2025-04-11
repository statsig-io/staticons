
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.722 4.501a.75.75 0 0 0 0-1.5H3.47a.75.75 0 1 0 0 1.5h.883v15.003H3.47a.75.75 0 0 0 0 1.5h3.25a.75.75 0 0 0 0-1.5h-.867V4.5h.868Zm8.29 12.461.86-2.151a3.5 3.5 0 0 1 1.95-1.95l2.151-.86-2.151-.861a3.5 3.5 0 0 1-1.95-1.95l-.86-2.152-.861 2.152a3.5 3.5 0 0 1-1.95 1.95L10.05 12l2.151.86a3.5 3.5 0 0 1 1.95 1.95l.86 2.152Zm2.253-1.594-.86 2.151c-.504 1.257-2.283 1.257-2.786 0l-.86-2.151a2 2 0 0 0-1.115-1.114l-2.152-.861c-1.257-.503-1.257-2.283 0-2.786l2.152-.86a2 2 0 0 0 1.114-1.114l.86-2.152c.504-1.257 2.283-1.257 2.786 0l.86 2.152a2 2 0 0 0 1.115 1.114l2.151.86c1.258.503 1.258 2.283 0 2.786l-2.151.86a2 2 0 0 0-1.114 1.115Z","clip-rule":"evenodd"}]]

/**
 * @component @name PromptGenerator
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi43MjIgNC41MDFhLjc1Ljc1IDAgMCAwIDAtMS41SDMuNDdhLjc1Ljc1IDAgMSAwIDAgMS41aC44ODN2MTUuMDAzSDMuNDdhLjc1Ljc1IDAgMCAwIDAgMS41aDMuMjVhLjc1Ljc1IDAgMCAwIDAtMS41aC0uODY3VjQuNWguODY4Wm04LjI5IDEyLjQ2MS44Ni0yLjE1MWEzLjUgMy41IDAgMCAxIDEuOTUtMS45NWwyLjE1MS0uODYtMi4xNTEtLjg2MWEzLjUgMy41IDAgMCAxLTEuOTUtMS45NWwtLjg2LTIuMTUyLS44NjEgMi4xNTJhMy41IDMuNSAwIDAgMS0xLjk1IDEuOTVMMTAuMDUgMTJsMi4xNTEuODZhMy41IDMuNSAwIDAgMSAxLjk1IDEuOTVsLjg2IDIuMTUyWm0yLjI1My0xLjU5NC0uODYgMi4xNTFjLS41MDQgMS4yNTctMi4yODMgMS4yNTctMi43ODYgMGwtLjg2LTIuMTUxYTIgMiAwIDAgMC0xLjExNS0xLjExNGwtMi4xNTItLjg2MWMtMS4yNTctLjUwMy0xLjI1Ny0yLjI4MyAwLTIuNzg2bDIuMTUyLS44NmEyIDIgMCAwIDAgMS4xMTQtMS4xMTRsLjg2LTIuMTUyYy41MDQtMS4yNTcgMi4yODMtMS4yNTcgMi43ODYgMGwuODYgMi4xNTJhMiAyIDAgMCAwIDEuMTE1IDEuMTE0bDIuMTUxLjg2YzEuMjU4LjUwMyAxLjI1OCAyLjI4MyAwIDIuNzg2bC0yLjE1MS44NmEyIDIgMCAwIDAtMS4xMTQgMS4xMTVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const PromptGenerator = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-prompt-generator',
        'staticon-PromptGenerator',
        className
      ),
      ...props,
    })
);
PromptGenerator.displayName = 'PromptGenerator'

export default PromptGenerator;
