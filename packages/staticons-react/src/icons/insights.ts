
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M3.626 8.368A6.371 6.371 0 0 1 10 2.001a6.37 6.37 0 0 1 6.374 6.367 6.351 6.351 0 0 1-2.171 4.788.32.32 0 0 0-.111.176l-.231 1.24a1.493 1.493 0 0 1-1.07 1.165c-.238 1.3-1.415 2.261-2.79 2.261s-2.553-.96-2.79-2.261a1.493 1.493 0 0 1-1.072-1.166l-.231-1.239a.32.32 0 0 0-.11-.176 6.35 6.35 0 0 1-2.172-4.788Zm6.375 8.38c.688 0 1.25-.407 1.476-.958H8.524c.225.551.788.958 1.477.958Zm2.631-2.406a.243.243 0 0 1-.22.198H10.63v-3.312c.637-.139 1.188-.476 1.615-.854.556-.492.974-1.115 1.141-1.642a.625.625 0 0 0-1.19-.379c-.087.272-.358.712-.78 1.085-.244.217-.516.39-.8.494a2.762 2.762 0 0 0-.67-1.495c-.437-.494-1.1-.86-1.905-.762-.97.118-1.657 1.08-1.344 2.055.28.868 1.22 1.421 2.682 1.542v3.268H7.59a.243.243 0 0 1-.221-.198l-.231-1.239a1.568 1.568 0 0 0-.516-.887 5.1 5.1 0 0 1-1.745-3.848A5.121 5.121 0 0 1 10 3.251a5.12 5.12 0 0 1 5.124 5.117 5.1 5.1 0 0 1-1.745 3.848c-.25.22-.448.524-.516.887l-.231 1.24ZM7.887 9.347c.046.141.33.556 1.479.67a1.524 1.524 0 0 0-.356-.752c-.23-.259-.51-.387-.819-.35-.241.03-.36.255-.304.432Z","clip-rule":"evenodd"}]]

/**
 * @component @name Insights
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy42MjYgOC4zNjhBNi4zNzEgNi4zNzEgMCAwIDEgMTAgMi4wMDFhNi4zNyA2LjM3IDAgMCAxIDYuMzc0IDYuMzY3IDYuMzUxIDYuMzUxIDAgMCAxLTIuMTcxIDQuNzg4LjMyLjMyIDAgMCAwLS4xMTEuMTc2bC0uMjMxIDEuMjRhMS40OTMgMS40OTMgMCAwIDEtMS4wNyAxLjE2NWMtLjIzOCAxLjMtMS40MTUgMi4yNjEtMi43OSAyLjI2MXMtMi41NTMtLjk2LTIuNzktMi4yNjFhMS40OTMgMS40OTMgMCAwIDEtMS4wNzItMS4xNjZsLS4yMzEtMS4yMzlhLjMyLjMyIDAgMCAwLS4xMS0uMTc2IDYuMzUgNi4zNSAwIDAgMS0yLjE3Mi00Ljc4OFptNi4zNzUgOC4zOGMuNjg4IDAgMS4yNS0uNDA3IDEuNDc2LS45NThIOC41MjRjLjIyNS41NTEuNzg4Ljk1OCAxLjQ3Ny45NThabTIuNjMxLTIuNDA2YS4yNDMuMjQzIDAgMCAxLS4yMi4xOThIMTAuNjN2LTMuMzEyYy42MzctLjEzOSAxLjE4OC0uNDc2IDEuNjE1LS44NTQuNTU2LS40OTIuOTc0LTEuMTE1IDEuMTQxLTEuNjQyYS42MjUuNjI1IDAgMCAwLTEuMTktLjM3OWMtLjA4Ny4yNzItLjM1OC43MTItLjc4IDEuMDg1LS4yNDQuMjE3LS41MTYuMzktLjguNDk0YTIuNzYyIDIuNzYyIDAgMCAwLS42Ny0xLjQ5NWMtLjQzNy0uNDk0LTEuMS0uODYtMS45MDUtLjc2Mi0uOTcuMTE4LTEuNjU3IDEuMDgtMS4zNDQgMi4wNTUuMjguODY4IDEuMjIgMS40MjEgMi42ODIgMS41NDJ2My4yNjhINy41OWEuMjQzLjI0MyAwIDAgMS0uMjIxLS4xOThsLS4yMzEtMS4yMzlhMS41NjggMS41NjggMCAwIDAtLjUxNi0uODg3IDUuMSA1LjEgMCAwIDEtMS43NDUtMy44NDhBNS4xMjEgNS4xMjEgMCAwIDEgMTAgMy4yNTFhNS4xMiA1LjEyIDAgMCAxIDUuMTI0IDUuMTE3IDUuMSA1LjEgMCAwIDEtMS43NDUgMy44NDhjLS4yNS4yMi0uNDQ4LjUyNC0uNTE2Ljg4N2wtLjIzMSAxLjI0Wk03Ljg4NyA5LjM0N2MuMDQ2LjE0MS4zMy41NTYgMS40NzkuNjdhMS41MjQgMS41MjQgMCAwIDAtLjM1Ni0uNzUyYy0uMjMtLjI1OS0uNTEtLjM4Ny0uODE5LS4zNS0uMjQxLjAzLS4zNi4yNTUtLjMwNC40MzJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Insights = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-insights',
        'staticon-Insights',
        className
      ),
      ...props,
    })
);
Insights.displayName = 'Insights'

export default Insights;
