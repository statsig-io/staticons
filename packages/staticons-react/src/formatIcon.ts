import type { INode } from "svgson";
import { toKebabCase, base64SVG } from "@staticons/lib";

export default (name: string, content: string, children: INode[]) => {
  const iconNode = children.map(({ name, attributes }) => [name, attributes]);

  return `
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = ${JSON.stringify(iconNode)}

/**
 * @component @name ${name}
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,${base64SVG(content)})
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ${name} = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-${toKebabCase(name)}',
        'staticon-${name}',
        className
      ),
      ...props,
    })
);
${name}.displayName = '${name}'

export default ${name};
`;
};
