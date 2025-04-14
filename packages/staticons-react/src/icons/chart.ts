
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4 3.876a.625.625 0 1 0-1.25 0v10.748c0 1.174.952 2.125 2.125 2.125h11.75a.625.625 0 1 0 0-1.25H4.875A.875.875 0 0 1 4 14.624V3.876Zm12.728 2.145a.625.625 0 1 0-1.209-.32l-.128.5c-.165.658-.364 1.444-.646 2.17-.178.456-.378.854-.6 1.158-.225.304-.443.472-.648.54a1.046 1.046 0 0 1-.836-.043c-.3-.147-.675-.479-1.086-1.172-.477-.803-.99-1.361-1.572-1.66-.609-.312-1.217-.301-1.78-.114-.517.173-.924.547-1.24.957-.32.414-.586.912-.806 1.412-.404.917-.692 1.924-.882 2.588l-.048.166a.625.625 0 1 0 1.201.346l.047-.161c.192-.673.458-1.6.826-2.435.198-.45.416-.849.65-1.152.239-.308.458-.472.646-.535.303-.1.556-.093.815.04.287.148.65.484 1.068 1.187.483.812 1.016 1.364 1.612 1.656.615.3 1.228.29 1.78.106.536-.179.946-.56 1.259-.985.313-.426.56-.936.758-1.445.315-.808.539-1.697.705-2.358.041-.164.079-.315.114-.446Z","clip-rule":"evenodd"}]]

/**
 * @component @name Chart
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNCAzLjg3NmEuNjI1LjYyNSAwIDEgMC0xLjI1IDB2MTAuNzQ4YzAgMS4xNzQuOTUyIDIuMTI1IDIuMTI1IDIuMTI1aDExLjc1YS42MjUuNjI1IDAgMSAwIDAtMS4yNUg0Ljg3NUEuODc1Ljg3NSAwIDAgMSA0IDE0LjYyNFYzLjg3NlptMTIuNzI4IDIuMTQ1YS42MjUuNjI1IDAgMSAwLTEuMjA5LS4zMmwtLjEyOC41Yy0uMTY1LjY1OC0uMzY0IDEuNDQ0LS42NDYgMi4xNy0uMTc4LjQ1Ni0uMzc4Ljg1NC0uNiAxLjE1OC0uMjI1LjMwNC0uNDQzLjQ3Mi0uNjQ4LjU0YTEuMDQ2IDEuMDQ2IDAgMCAxLS44MzYtLjA0M2MtLjMtLjE0Ny0uNjc1LS40NzktMS4wODYtMS4xNzItLjQ3Ny0uODAzLS45OS0xLjM2MS0xLjU3Mi0xLjY2LS42MDktLjMxMi0xLjIxNy0uMzAxLTEuNzgtLjExNC0uNTE3LjE3My0uOTI0LjU0Ny0xLjI0Ljk1Ny0uMzIuNDE0LS41ODYuOTEyLS44MDYgMS40MTItLjQwNC45MTctLjY5MiAxLjkyNC0uODgyIDIuNTg4bC0uMDQ4LjE2NmEuNjI1LjYyNSAwIDEgMCAxLjIwMS4zNDZsLjA0Ny0uMTYxYy4xOTItLjY3My40NTgtMS42LjgyNi0yLjQzNS4xOTgtLjQ1LjQxNi0uODQ5LjY1LTEuMTUyLjIzOS0uMzA4LjQ1OC0uNDcyLjY0Ni0uNTM1LjMwMy0uMS41NTYtLjA5My44MTUuMDQuMjg3LjE0OC42NS40ODQgMS4wNjggMS4xODcuNDgzLjgxMiAxLjAxNiAxLjM2NCAxLjYxMiAxLjY1Ni42MTUuMyAxLjIyOC4yOSAxLjc4LjEwNi41MzYtLjE3OS45NDYtLjU2IDEuMjU5LS45ODUuMzEzLS40MjYuNTYtLjkzNi43NTgtMS40NDUuMzE1LS44MDguNTM5LTEuNjk3LjcwNS0yLjM1OC4wNDEtLjE2NC4wNzktLjMxNS4xMTQtLjQ0NloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Chart = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-chart',
        'staticon-Chart',
        className
      ),
      ...props,
    })
);
Chart.displayName = 'Chart'

export default Chart;
