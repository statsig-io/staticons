
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.752 4.531c0-.5.405-.904.904-.904h4.605v2.868a1.9 1.9 0 0 0 1.899 1.9h3.088v7.074c0 .5-.405.904-.904.904H5.656a.904.904 0 0 1-.904-.904V4.531Zm10.136 2.613L11.511 3.9v2.595c0 .358.29.65.649.65h2.728ZM5.656 2.377c-1.19 0-2.154.964-2.154 2.154V15.47c0 1.19.964 2.154 2.154 2.154h8.688c1.19 0 2.154-.964 2.154-2.154V7.875c0-.587-.24-1.148-.662-1.554l-3.481-3.343a2.154 2.154 0 0 0-1.492-.601H5.656ZM11 10.402a.657.657 0 0 1 .902 0l1.78 1.707a.594.594 0 0 1 0 .865l-1.78 1.707a.657.657 0 0 1-.902 0 .594.594 0 0 1 0-.865l1.329-1.274-1.33-1.275a.594.594 0 0 1 0-.865Zm-2.9 0a.657.657 0 0 1 .902 0 .594.594 0 0 1 0 .865l-1.33 1.275 1.33 1.274a.594.594 0 0 1 0 .865.657.657 0 0 1-.903 0l-1.78-1.707a.594.594 0 0 1 0-.865l1.78-1.707Z","clip-rule":"evenodd"}]]

/**
 * @component @name SdkDocs
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC43NTIgNC41MzFjMC0uNS40MDUtLjkwNC45MDQtLjkwNGg0LjYwNXYyLjg2OGExLjkgMS45IDAgMCAwIDEuODk5IDEuOWgzLjA4OHY3LjA3NGMwIC41LS40MDUuOTA0LS45MDQuOTA0SDUuNjU2YS45MDQuOTA0IDAgMCAxLS45MDQtLjkwNFY0LjUzMVptMTAuMTM2IDIuNjEzTDExLjUxMSAzLjl2Mi41OTVjMCAuMzU4LjI5LjY1LjY0OS42NWgyLjcyOFpNNS42NTYgMi4zNzdjLTEuMTkgMC0yLjE1NC45NjQtMi4xNTQgMi4xNTRWMTUuNDdjMCAxLjE5Ljk2NCAyLjE1NCAyLjE1NCAyLjE1NGg4LjY4OGMxLjE5IDAgMi4xNTQtLjk2NCAyLjE1NC0yLjE1NFY3Ljg3NWMwLS41ODctLjI0LTEuMTQ4LS42NjItMS41NTRsLTMuNDgxLTMuMzQzYTIuMTU0IDIuMTU0IDAgMCAwLTEuNDkyLS42MDFINS42NTZaTTExIDEwLjQwMmEuNjU3LjY1NyAwIDAgMSAuOTAyIDBsMS43OCAxLjcwN2EuNTk0LjU5NCAwIDAgMSAwIC44NjVsLTEuNzggMS43MDdhLjY1Ny42NTcgMCAwIDEtLjkwMiAwIC41OTQuNTk0IDAgMCAxIDAtLjg2NWwxLjMyOS0xLjI3NC0xLjMzLTEuMjc1YS41OTQuNTk0IDAgMCAxIDAtLjg2NVptLTIuOSAwYS42NTcuNjU3IDAgMCAxIC45MDIgMCAuNTk0LjU5NCAwIDAgMSAwIC44NjVsLTEuMzMgMS4yNzUgMS4zMyAxLjI3NGEuNTk0LjU5NCAwIDAgMSAwIC44NjUuNjU3LjY1NyAwIDAgMS0uOTAzIDBsLTEuNzgtMS43MDdhLjU5NC41OTQgMCAwIDEgMC0uODY1bDEuNzgtMS43MDdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SdkDocs = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-sdk-docs',
        'staticon-SdkDocs',
        className
      ),
      ...props,
    })
);
SdkDocs.displayName = 'SdkDocs'

export default SdkDocs;
