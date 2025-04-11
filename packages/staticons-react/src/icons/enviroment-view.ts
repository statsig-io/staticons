
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12.139 5.498a2.5 2.5 0 0 0 2.5 2.5h3.111a2.5 2.5 0 0 0 0-5h-3.111a2.5 2.5 0 0 0-2.5 2.5Zm2.5 1a1 1 0 1 1 0-2h3.111a1 1 0 1 1 0 2h-3.111ZM12.139 12a2.5 2.5 0 0 0 2.5 2.5h3.111a2.5 2.5 0 0 0 0-5h-3.111a2.5 2.5 0 0 0-2.5 2.5Zm2.5 1a1 1 0 1 1 0-2h3.111a1 1 0 1 1 0 2h-3.111Zm0 8.002a2.5 2.5 0 0 1 0-5h3.111a2.5 2.5 0 0 1 0 5h-3.111Zm-1-2.5a1 1 0 0 0 1 1h3.111a1 1 0 1 0 0-2h-3.111a1 1 0 0 0-1 1ZM4.5 4.748a.75.75 0 0 0 0 1.5h5.271a.75.75 0 0 0 0-1.5H4.5ZM3.75 12a.75.75 0 0 1 .75-.75h5.271a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm.75 5.752a.75.75 0 0 0 0 1.5h5.271a.75.75 0 0 0 0-1.5H4.5Z","clip-rule":"evenodd"}]]

/**
 * @component @name EnviromentView
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMTM5IDUuNDk4YTIuNSAyLjUgMCAwIDAgMi41IDIuNWgzLjExMWEyLjUgMi41IDAgMCAwIDAtNWgtMy4xMTFhMi41IDIuNSAwIDAgMC0yLjUgMi41Wm0yLjUgMWExIDEgMCAxIDEgMC0yaDMuMTExYTEgMSAwIDEgMSAwIDJoLTMuMTExWk0xMi4xMzkgMTJhMi41IDIuNSAwIDAgMCAyLjUgMi41aDMuMTExYTIuNSAyLjUgMCAwIDAgMC01aC0zLjExMWEyLjUgMi41IDAgMCAwLTIuNSAyLjVabTIuNSAxYTEgMSAwIDEgMSAwLTJoMy4xMTFhMSAxIDAgMSAxIDAgMmgtMy4xMTFabTAgOC4wMDJhMi41IDIuNSAwIDAgMSAwLTVoMy4xMTFhMi41IDIuNSAwIDAgMSAwIDVoLTMuMTExWm0tMS0yLjVhMSAxIDAgMCAwIDEgMWgzLjExMWExIDEgMCAxIDAgMC0yaC0zLjExMWExIDEgMCAwIDAtMSAxWk00LjUgNC43NDhhLjc1Ljc1IDAgMCAwIDAgMS41aDUuMjcxYS43NS43NSAwIDAgMCAwLTEuNUg0LjVaTTMuNzUgMTJhLjc1Ljc1IDAgMCAxIC43NS0uNzVoNS4yNzFhLjc1Ljc1IDAgMCAxIDAgMS41SDQuNWEuNzUuNzUgMCAwIDEtLjc1LS43NVptLjc1IDUuNzUyYS43NS43NSAwIDAgMCAwIDEuNWg1LjI3MWEuNzUuNzUgMCAwIDAgMC0xLjVINC41WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const EnviromentView = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-enviroment-view',
        'staticon-EnviromentView',
        className
      ),
      ...props,
    })
);
EnviromentView.displayName = 'EnviromentView'

export default EnviromentView;
