
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M5.094 7.743a.625.625 0 0 1 0-.884l3.757-3.757a1.625 1.625 0 0 1 2.298 0l3.757 3.757a.625.625 0 0 1-.884.884l-3.397-3.397v8.725a.625.625 0 0 1-1.25 0V4.346L5.978 7.743a.625.625 0 0 1-.884 0Zm-.244 8.382a.975.975 0 0 1-.975-.975v-4.157a.625.625 0 1 0-1.25 0v4.157c0 1.229.996 2.225 2.225 2.225h10.3a2.225 2.225 0 0 0 2.225-2.225v-4.157a.625.625 0 1 0-1.25 0v4.157a.975.975 0 0 1-.975.975H4.85Z","clip-rule":"evenodd"}]]

/**
 * @component @name Upload
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4wOTQgNy43NDNhLjYyNS42MjUgMCAwIDEgMC0uODg0bDMuNzU3LTMuNzU3YTEuNjI1IDEuNjI1IDAgMCAxIDIuMjk4IDBsMy43NTcgMy43NTdhLjYyNS42MjUgMCAwIDEtLjg4NC44ODRsLTMuMzk3LTMuMzk3djguNzI1YS42MjUuNjI1IDAgMCAxLTEuMjUgMFY0LjM0Nkw1Ljk3OCA3Ljc0M2EuNjI1LjYyNSAwIDAgMS0uODg0IDBabS0uMjQ0IDguMzgyYS45NzUuOTc1IDAgMCAxLS45NzUtLjk3NXYtNC4xNTdhLjYyNS42MjUgMCAxIDAtMS4yNSAwdjQuMTU3YzAgMS4yMjkuOTk2IDIuMjI1IDIuMjI1IDIuMjI1aDEwLjNhMi4yMjUgMi4yMjUgMCAwIDAgMi4yMjUtMi4yMjV2LTQuMTU3YS42MjUuNjI1IDAgMSAwLTEuMjUgMHY0LjE1N2EuOTc1Ljk3NSAwIDAgMS0uOTc1Ljk3NUg0Ljg1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Upload = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-upload',
        'staticon-Upload',
        className
      ),
      ...props,
    })
);
Upload.displayName = 'Upload'

export default Upload;
