
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.492 6.313a2.75 2.75 0 0 1 2.744-2.563h.13a2.75 2.75 0 0 1 2.628 1.938l.183.59a.75.75 0 0 1-1.433.444l-.183-.591a1.25 1.25 0 0 0-1.194-.881h-.131a1.25 1.25 0 0 0-1.247 1.165l-.184 2.688h1.747a.75.75 0 0 1 0 1.5H9.703l-.483 7.084a2.75 2.75 0 0 1-2.744 2.563h-.045a2.75 2.75 0 0 1-2.525-1.66l-.342-.793a.75.75 0 0 1 1.377-.594l.342.793a1.25 1.25 0 0 0 1.148.754h.045a1.25 1.25 0 0 0 1.247-1.165l.477-6.982H6.16a.75.75 0 0 1 0-1.5h2.142l.19-2.79Zm5.571 7.231a.75.75 0 0 0-1.352-.093l-.137.244a.75.75 0 1 1-1.308-.734l.138-.245c.929-1.653 3.362-1.486 4.055.28l.556 1.415 2.314-2.52a.75.75 0 0 1 1.06-.05.75.75 0 0 1 .04 1.06l-2.806 3.056.894 2.279a.75.75 0 0 0 1.34.115l.25-.412a.75.75 0 1 1 1.282.778l-.25.412c-.967 1.592-3.337 1.388-4.018-.345l-.627-1.597-2.556 2.783a.75.75 0 0 1-1.06.05.75.75 0 0 1-.04-1.06l3.048-3.32-.823-2.096Z","clip-rule":"evenodd"}]]

/**
 * @component @name Formula
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC40OTIgNi4zMTNhMi43NSAyLjc1IDAgMCAxIDIuNzQ0LTIuNTYzaC4xM2EyLjc1IDIuNzUgMCAwIDEgMi42MjggMS45MzhsLjE4My41OWEuNzUuNzUgMCAwIDEtMS40MzMuNDQ0bC0uMTgzLS41OTFhMS4yNSAxLjI1IDAgMCAwLTEuMTk0LS44ODFoLS4xMzFhMS4yNSAxLjI1IDAgMCAwLTEuMjQ3IDEuMTY1bC0uMTg0IDIuNjg4aDEuNzQ3YS43NS43NSAwIDAgMSAwIDEuNUg5LjcwM2wtLjQ4MyA3LjA4NGEyLjc1IDIuNzUgMCAwIDEtMi43NDQgMi41NjNoLS4wNDVhMi43NSAyLjc1IDAgMCAxLTIuNTI1LTEuNjZsLS4zNDItLjc5M2EuNzUuNzUgMCAwIDEgMS4zNzctLjU5NGwuMzQyLjc5M2ExLjI1IDEuMjUgMCAwIDAgMS4xNDguNzU0aC4wNDVhMS4yNSAxLjI1IDAgMCAwIDEuMjQ3LTEuMTY1bC40NzctNi45ODJINi4xNmEuNzUuNzUgMCAwIDEgMC0xLjVoMi4xNDJsLjE5LTIuNzlabTUuNTcxIDcuMjMxYS43NS43NSAwIDAgMC0xLjM1Mi0uMDkzbC0uMTM3LjI0NGEuNzUuNzUgMCAxIDEtMS4zMDgtLjczNGwuMTM4LS4yNDVjLjkyOS0xLjY1MyAzLjM2Mi0xLjQ4NiA0LjA1NS4yOGwuNTU2IDEuNDE1IDIuMzE0LTIuNTJhLjc1Ljc1IDAgMCAxIDEuMDYtLjA1Ljc1Ljc1IDAgMCAxIC4wNCAxLjA2bC0yLjgwNiAzLjA1Ni44OTQgMi4yNzlhLjc1Ljc1IDAgMCAwIDEuMzQuMTE1bC4yNS0uNDEyYS43NS43NSAwIDEgMSAxLjI4Mi43NzhsLS4yNS40MTJjLS45NjcgMS41OTItMy4zMzcgMS4zODgtNC4wMTgtLjM0NWwtLjYyNy0xLjU5Ny0yLjU1NiAyLjc4M2EuNzUuNzUgMCAwIDEtMS4wNi4wNS43NS43NSAwIDAgMS0uMDQtMS4wNmwzLjA0OC0zLjMyLS44MjMtMi4wOTZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
