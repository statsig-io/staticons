
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M5.28 3.866a2.143 2.143 0 0 1 2.138-1.992h.113c.931 0 1.756.602 2.04 1.49l.132.41a.625.625 0 1 1-1.19.38l-.132-.41a.893.893 0 0 0-.85-.62h-.113a.893.893 0 0 0-.89.83l-.13 1.84H7.66a.625.625 0 1 1 0 1.25H6.31l-.358 5.074a2.143 2.143 0 0 1-2.137 1.992h-.05a2.143 2.143 0 0 1-1.957-1.268l-.253-.567a.625.625 0 1 1 1.141-.51l.253.567a.893.893 0 0 0 .816.528h.05a.893.893 0 0 0 .89-.83l.352-4.985H3.573a.625.625 0 1 1 0-1.25h1.572l.136-1.93Z"}],["path",{"fill":"#000","d":"M9.512 9.175a.513.513 0 0 0-.92-.065l-.112.194a.625.625 0 1 1-1.08-.629l.112-.194c.737-1.266 2.606-1.134 3.158.223l.393.966 1.702-1.791a.625.625 0 0 1 .884-.025c.25.238.258.633.02.884l-2.091 2.2.659 1.619a.513.513 0 0 0 .91.08l.2-.318a.625.625 0 1 1 1.058.665l-.2.318c-.765 1.216-2.585 1.056-3.127-.275l-.445-1.096-1.887 1.984a.625.625 0 0 1-.883.025.625.625 0 0 1-.02-.884l2.274-2.392-.605-1.49Z"}]]

/**
 * @component @name Formula
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTUuMjggMy44NjZhMi4xNDMgMi4xNDMgMCAwIDEgMi4xMzgtMS45OTJoLjExM2MuOTMxIDAgMS43NTYuNjAyIDIuMDQgMS40OWwuMTMyLjQxYS42MjUuNjI1IDAgMSAxLTEuMTkuMzhsLS4xMzItLjQxYS44OTMuODkzIDAgMCAwLS44NS0uNjJoLS4xMTNhLjg5My44OTMgMCAwIDAtLjg5LjgzbC0uMTMgMS44NEg3LjY2YS42MjUuNjI1IDAgMSAxIDAgMS4yNUg2LjMxbC0uMzU4IDUuMDc0YTIuMTQzIDIuMTQzIDAgMCAxLTIuMTM3IDEuOTkyaC0uMDVhMi4xNDMgMi4xNDMgMCAwIDEtMS45NTctMS4yNjhsLS4yNTMtLjU2N2EuNjI1LjYyNSAwIDEgMSAxLjE0MS0uNTFsLjI1My41NjdhLjg5My44OTMgMCAwIDAgLjgxNi41MjhoLjA1YS44OTMuODkzIDAgMCAwIC44OS0uODNsLjM1Mi00Ljk4NUgzLjU3M2EuNjI1LjYyNSAwIDEgMSAwLTEuMjVoMS41NzJsLjEzNi0xLjkzWiIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik05LjUxMiA5LjE3NWEuNTEzLjUxMyAwIDAgMC0uOTItLjA2NWwtLjExMi4xOTRhLjYyNS42MjUgMCAxIDEtMS4wOC0uNjI5bC4xMTItLjE5NGMuNzM3LTEuMjY2IDIuNjA2LTEuMTM0IDMuMTU4LjIyM2wuMzkzLjk2NiAxLjcwMi0xLjc5MWEuNjI1LjYyNSAwIDAgMSAuODg0LS4wMjVjLjI1LjIzOC4yNTguNjMzLjAyLjg4NGwtMi4wOTEgMi4yLjY1OSAxLjYxOWEuNTEzLjUxMyAwIDAgMCAuOTEuMDhsLjItLjMxOGEuNjI1LjYyNSAwIDEgMSAxLjA1OC42NjVsLS4yLjMxOGMtLjc2NSAxLjIxNi0yLjU4NSAxLjA1Ni0zLjEyNy0uMjc1bC0uNDQ1LTEuMDk2LTEuODg3IDEuOTg0YS42MjUuNjI1IDAgMCAxLS44ODMuMDI1LjYyNS42MjUgMCAwIDEtLjAyLS44ODRsMi4yNzQtMi4zOTItLjYwNS0xLjQ5WiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Formula = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-formula',
        'staticon-Formula',
        className
      ),
      ...props,
    })
);
Formula.displayName = 'Formula'

export default Formula;
