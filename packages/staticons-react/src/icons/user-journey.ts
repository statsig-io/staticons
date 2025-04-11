
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M16.983 2.876c.966 0 1.75.784 1.75 1.75v1.495h2.266a.75.75 0 0 1 0 1.5h-2.266v1.494a1.75 1.75 0 0 1-1.75 1.75h-1.777a1.75 1.75 0 0 1-1.75-1.75V7.621h-1.422a.75.75 0 0 0-.75.75v2.13c0 .575-.216 1.1-.572 1.498.357.399.574.925.574 1.501v2.13c0 .414.335.75.75.75h1.42v-1.495c0-.966.784-1.75 1.75-1.75h1.777c.966 0 1.75.784 1.75 1.75v1.494h2.266a.75.75 0 0 1 0 1.5h-2.266v1.495a1.75 1.75 0 0 1-1.75 1.75h-1.777a1.75 1.75 0 0 1-1.75-1.75V17.88h-1.42a2.25 2.25 0 0 1-2.25-2.25V13.5a.75.75 0 0 0-.75-.75H7.528v1.889a1.75 1.75 0 0 1-1.75 1.75H4a1.75 1.75 0 0 1-1.75-1.75v-5.34c0-.966.783-1.75 1.75-1.75h1.777c.966 0 1.75.784 1.75 1.75v1.951h1.506a.75.75 0 0 0 .75-.75V8.37a2.25 2.25 0 0 1 2.25-2.25h1.422V4.627c0-.966.784-1.75 1.75-1.75h1.777Zm.25 14.253v-2.244a.25.25 0 0 0-.25-.25h-1.777a.25.25 0 0 0-.25.25v4.489c0 .138.112.25.25.25h1.777a.25.25 0 0 0 .25-.25v-2.245Zm0-12.503v4.489a.25.25 0 0 1-.25.25h-1.777a.25.25 0 0 1-.25-.25V4.626a.25.25 0 0 1 .25-.25h1.777a.25.25 0 0 1 .25.25ZM6.028 9.3a.25.25 0 0 0-.25-.25H4a.25.25 0 0 0-.25.25v5.338c0 .139.112.25.25.25h1.777a.25.25 0 0 0 .25-.25V9.3Z","clip-rule":"evenodd"}]]

/**
 * @component @name UserJourney
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuOTgzIDIuODc2Yy45NjYgMCAxLjc1Ljc4NCAxLjc1IDEuNzV2MS40OTVoMi4yNjZhLjc1Ljc1IDAgMCAxIDAgMS41aC0yLjI2NnYxLjQ5NGExLjc1IDEuNzUgMCAwIDEtMS43NSAxLjc1aC0xLjc3N2ExLjc1IDEuNzUgMCAwIDEtMS43NS0xLjc1VjcuNjIxaC0xLjQyMmEuNzUuNzUgMCAwIDAtLjc1Ljc1djIuMTNjMCAuNTc1LS4yMTYgMS4xLS41NzIgMS40OTguMzU3LjM5OS41NzQuOTI1LjU3NCAxLjUwMXYyLjEzYzAgLjQxNC4zMzUuNzUuNzUuNzVoMS40MnYtMS40OTVjMC0uOTY2Ljc4NC0xLjc1IDEuNzUtMS43NWgxLjc3N2MuOTY2IDAgMS43NS43ODQgMS43NSAxLjc1djEuNDk0aDIuMjY2YS43NS43NSAwIDAgMSAwIDEuNWgtMi4yNjZ2MS40OTVhMS43NSAxLjc1IDAgMCAxLTEuNzUgMS43NWgtMS43NzdhMS43NSAxLjc1IDAgMCAxLTEuNzUtMS43NVYxNy44OGgtMS40MmEyLjI1IDIuMjUgMCAwIDEtMi4yNS0yLjI1VjEzLjVhLjc1Ljc1IDAgMCAwLS43NS0uNzVINy41Mjh2MS44ODlhMS43NSAxLjc1IDAgMCAxLTEuNzUgMS43NUg0YTEuNzUgMS43NSAwIDAgMS0xLjc1LTEuNzV2LTUuMzRjMC0uOTY2Ljc4My0xLjc1IDEuNzUtMS43NWgxLjc3N2MuOTY2IDAgMS43NS43ODQgMS43NSAxLjc1djEuOTUxaDEuNTA2YS43NS43NSAwIDAgMCAuNzUtLjc1VjguMzdhMi4yNSAyLjI1IDAgMCAxIDIuMjUtMi4yNWgxLjQyMlY0LjYyN2MwLS45NjYuNzg0LTEuNzUgMS43NS0xLjc1aDEuNzc3Wm0uMjUgMTQuMjUzdi0yLjI0NGEuMjUuMjUgMCAwIDAtLjI1LS4yNWgtMS43NzdhLjI1LjI1IDAgMCAwLS4yNS4yNXY0LjQ4OWMwIC4xMzguMTEyLjI1LjI1LjI1aDEuNzc3YS4yNS4yNSAwIDAgMCAuMjUtLjI1di0yLjI0NVptMC0xMi41MDN2NC40ODlhLjI1LjI1IDAgMCAxLS4yNS4yNWgtMS43NzdhLjI1LjI1IDAgMCAxLS4yNS0uMjVWNC42MjZhLjI1LjI1IDAgMCAxIC4yNS0uMjVoMS43NzdhLjI1LjI1IDAgMCAxIC4yNS4yNVpNNi4wMjggOS4zYS4yNS4yNSAwIDAgMC0uMjUtLjI1SDRhLjI1LjI1IDAgMCAwLS4yNS4yNXY1LjMzOGMwIC4xMzkuMTEyLjI1LjI1LjI1aDEuNzc3YS4yNS4yNSAwIDAgMCAuMjUtLjI1VjkuM1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const UserJourney = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-user-journey',
        'staticon-UserJourney',
        className
      ),
      ...props,
    })
);
UserJourney.displayName = 'UserJourney'

export default UserJourney;
