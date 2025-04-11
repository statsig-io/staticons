
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M3.5 17.751a2.75 2.75 0 0 0 2.75 2.75h11.5a2.75 2.75 0 0 0 2.75-2.75v-2.799a.75.75 0 0 0-1.5 0v2.8c0 .69-.56 1.25-1.25 1.25H6.25c-.69 0-1.25-.56-1.25-1.25V6.248c0-.69.56-1.25 1.25-1.25h2.798a.75.75 0 1 0 0-1.5H6.25a2.75 2.75 0 0 0-2.75 2.75V17.75Z"}],["path",{"fill":"#000","d":"M11.992 4.249a.75.75 0 0 1 .75-.75h5.508a2.25 2.25 0 0 1 2.25 2.25v5.507a.75.75 0 0 1-1.5 0V6.06l-6.717 6.716a.75.75 0 1 1-1.06-1.06L17.939 5h-5.197a.75.75 0 0 1-.75-.75Z"}]]

/**
 * @component @name ExternalLink
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTMuNSAxNy43NTFhMi43NSAyLjc1IDAgMCAwIDIuNzUgMi43NWgxMS41YTIuNzUgMi43NSAwIDAgMCAyLjc1LTIuNzV2LTIuNzk5YS43NS43NSAwIDAgMC0xLjUgMHYyLjhjMCAuNjktLjU2IDEuMjUtMS4yNSAxLjI1SDYuMjVjLS42OSAwLTEuMjUtLjU2LTEuMjUtMS4yNVY2LjI0OGMwLS42OS41Ni0xLjI1IDEuMjUtMS4yNWgyLjc5OGEuNzUuNzUgMCAxIDAgMC0xLjVINi4yNWEyLjc1IDIuNzUgMCAwIDAtMi43NSAyLjc1VjE3Ljc1WiIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xMS45OTIgNC4yNDlhLjc1Ljc1IDAgMCAxIC43NS0uNzVoNS41MDhhMi4yNSAyLjI1IDAgMCAxIDIuMjUgMi4yNXY1LjUwN2EuNzUuNzUgMCAwIDEtMS41IDBWNi4wNmwtNi43MTcgNi43MTZhLjc1Ljc1IDAgMSAxLTEuMDYtMS4wNkwxNy45MzkgNWgtNS4xOTdhLjc1Ljc1IDAgMCAxLS43NS0uNzVaIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ExternalLink = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-external-link',
        'staticon-ExternalLink',
        className
      ),
      ...props,
    })
);
ExternalLink.displayName = 'ExternalLink'

export default ExternalLink;
