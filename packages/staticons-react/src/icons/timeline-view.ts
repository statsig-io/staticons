
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.75 3.749A1.75 1.75 0 0 0 3 5.499v.999c0 .966.784 1.75 1.75 1.75h7.083a1.75 1.75 0 0 0 1.75-1.75v-.999a1.75 1.75 0 0 0-1.75-1.75H4.75Zm-.25 1.75a.25.25 0 0 1 .25-.25h7.083a.25.25 0 0 1 .25.25v.999a.25.25 0 0 1-.25.25H4.75a.25.25 0 0 1-.25-.25v-.999Zm3.448 5.994c0-.966.784-1.75 1.75-1.75h6.047V4.5a.75.75 0 0 1 1.5 0v5.244h2.006c.966 0 1.75.784 1.75 1.75v.999a1.75 1.75 0 0 1-1.75 1.75h-2.006v5.259a.75.75 0 0 1-1.5 0v-5.259H9.698a1.75 1.75 0 0 1-1.75-1.75v-.999Zm1.75-.25a.25.25 0 0 0-.25.25v.999c0 .138.112.25.25.25h9.553a.25.25 0 0 0 .25-.25v-.999a.25.25 0 0 0-.25-.25H9.698Zm-4.075 6.259c0-.966.783-1.75 1.75-1.75h5.003c.966 0 1.75.783 1.75 1.75v.999a1.75 1.75 0 0 1-1.75 1.75H7.373a1.75 1.75 0 0 1-1.75-1.75v-.999Zm1.75-.25a.25.25 0 0 0-.25.25v.999c0 .138.111.25.25.25h5.003a.25.25 0 0 0 .25-.25v-.999a.25.25 0 0 0-.25-.25H7.373Z","clip-rule":"evenodd"}]]

/**
 * @component @name TimelineView
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC43NSAzLjc0OUExLjc1IDEuNzUgMCAwIDAgMyA1LjQ5OXYuOTk5YzAgLjk2Ni43ODQgMS43NSAxLjc1IDEuNzVoNy4wODNhMS43NSAxLjc1IDAgMCAwIDEuNzUtMS43NXYtLjk5OWExLjc1IDEuNzUgMCAwIDAtMS43NS0xLjc1SDQuNzVabS0uMjUgMS43NWEuMjUuMjUgMCAwIDEgLjI1LS4yNWg3LjA4M2EuMjUuMjUgMCAwIDEgLjI1LjI1di45OTlhLjI1LjI1IDAgMCAxLS4yNS4yNUg0Ljc1YS4yNS4yNSAwIDAgMS0uMjUtLjI1di0uOTk5Wm0zLjQ0OCA1Ljk5NGMwLS45NjYuNzg0LTEuNzUgMS43NS0xLjc1aDYuMDQ3VjQuNWEuNzUuNzUgMCAwIDEgMS41IDB2NS4yNDRoMi4wMDZjLjk2NiAwIDEuNzUuNzg0IDEuNzUgMS43NXYuOTk5YTEuNzUgMS43NSAwIDAgMS0xLjc1IDEuNzVoLTIuMDA2djUuMjU5YS43NS43NSAwIDAgMS0xLjUgMHYtNS4yNTlIOS42OThhMS43NSAxLjc1IDAgMCAxLTEuNzUtMS43NXYtLjk5OVptMS43NS0uMjVhLjI1LjI1IDAgMCAwLS4yNS4yNXYuOTk5YzAgLjEzOC4xMTIuMjUuMjUuMjVoOS41NTNhLjI1LjI1IDAgMCAwIC4yNS0uMjV2LS45OTlhLjI1LjI1IDAgMCAwLS4yNS0uMjVIOS42OThabS00LjA3NSA2LjI1OWMwLS45NjYuNzgzLTEuNzUgMS43NS0xLjc1aDUuMDAzYy45NjYgMCAxLjc1Ljc4MyAxLjc1IDEuNzV2Ljk5OWExLjc1IDEuNzUgMCAwIDEtMS43NSAxLjc1SDcuMzczYTEuNzUgMS43NSAwIDAgMS0xLjc1LTEuNzV2LS45OTlabTEuNzUtLjI1YS4yNS4yNSAwIDAgMC0uMjUuMjV2Ljk5OWMwIC4xMzguMTExLjI1LjI1LjI1aDUuMDAzYS4yNS4yNSAwIDAgMCAuMjUtLjI1di0uOTk5YS4yNS4yNSAwIDAgMC0uMjUtLjI1SDcuMzczWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const TimelineView = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-timeline-view',
        'staticon-TimelineView',
        className
      ),
      ...props,
    })
);
TimelineView.displayName = 'TimelineView'

export default TimelineView;
