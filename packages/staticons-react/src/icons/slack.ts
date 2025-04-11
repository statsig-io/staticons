
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M12.563 4.8c0-1.011.827-1.831 1.839-1.831 1.011 0 1.839.82 1.839 1.831v4.633a1.838 1.838 0 0 1-1.84 1.831 1.838 1.838 0 0 1-1.838-1.831V4.8Zm4.857 4.743a1.838 1.838 0 1 1 1.847 1.843h-1.846V9.543Zm-6.036 9.604a1.838 1.838 0 0 1-1.838 1.831 1.838 1.838 0 0 1-1.84-1.831v-4.633c0-1.011.828-1.831 1.84-1.831 1.011 0 1.838.82 1.838 1.831v4.633Zm-4.857-4.743A1.838 1.838 0 1 1 4.68 12.56h1.847v1.843Zm12.62-1.841a1.839 1.839 0 0 1 0 3.678h-4.632a1.838 1.838 0 0 1-1.832-1.839c0-1.011.82-1.839 1.832-1.839h4.632Zm-4.743 4.857a1.838 1.838 0 1 1-1.842 1.847V17.42h1.842ZM4.8 11.384a1.838 1.838 0 0 1-1.831-1.84c0-1.01.82-1.838 1.831-1.838h4.633c1.011 0 1.831.827 1.831 1.839 0 1.011-.82 1.839-1.831 1.839H4.8Zm4.743-4.858a1.838 1.838 0 1 1 1.843-1.846v1.846H9.543Z"}]]

/**
 * @component @name Slack
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEyLjU2MyA0LjhjMC0xLjAxMS44MjctMS44MzEgMS44MzktMS44MzEgMS4wMTEgMCAxLjgzOS44MiAxLjgzOSAxLjgzMXY0LjYzM2ExLjgzOCAxLjgzOCAwIDAgMS0xLjg0IDEuODMxIDEuODM4IDEuODM4IDAgMCAxLTEuODM4LTEuODMxVjQuOFptNC44NTcgNC43NDNhMS44MzggMS44MzggMCAxIDEgMS44NDcgMS44NDNoLTEuODQ2VjkuNTQzWm0tNi4wMzYgOS42MDRhMS44MzggMS44MzggMCAwIDEtMS44MzggMS44MzEgMS44MzggMS44MzggMCAwIDEtMS44NC0xLjgzMXYtNC42MzNjMC0xLjAxMS44MjgtMS44MzEgMS44NC0xLjgzMSAxLjAxMSAwIDEuODM4LjgyIDEuODM4IDEuODMxdjQuNjMzWm0tNC44NTctNC43NDNBMS44MzggMS44MzggMCAxIDEgNC42OCAxMi41NmgxLjg0N3YxLjg0M1ptMTIuNjItMS44NDFhMS44MzkgMS44MzkgMCAwIDEgMCAzLjY3OGgtNC42MzJhMS44MzggMS44MzggMCAwIDEtMS44MzItMS44MzljMC0xLjAxMS44Mi0xLjgzOSAxLjgzMi0xLjgzOWg0LjYzMlptLTQuNzQzIDQuODU3YTEuODM4IDEuODM4IDAgMSAxLTEuODQyIDEuODQ3VjE3LjQyaDEuODQyWk00LjggMTEuMzg0YTEuODM4IDEuODM4IDAgMCAxLTEuODMxLTEuODRjMC0xLjAxLjgyLTEuODM4IDEuODMxLTEuODM4aDQuNjMzYzEuMDExIDAgMS44MzEuODI3IDEuODMxIDEuODM5IDAgMS4wMTEtLjgyIDEuODM5LTEuODMxIDEuODM5SDQuOFptNC43NDMtNC44NThhMS44MzggMS44MzggMCAxIDEgMS44NDMtMS44NDZ2MS44NDZIOS41NDNaIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Slack = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-slack',
        'staticon-Slack',
        className
      ),
      ...props,
    })
);
Slack.displayName = 'Slack'

export default Slack;
