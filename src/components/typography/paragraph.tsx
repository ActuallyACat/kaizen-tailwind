import * as React from "react";
import classnames from "classnames"
import { BaseProps, Scale, Spacing } from "../types"
import { responsivePaddingClasses, responsiveMarginClasses } from '../utils'

export const Paragraph = ({
  tag = "p",
  children,
  scale = "md",
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  ...otherProps
}: {
  scale?: Scale
} & Spacing &
  BaseProps) => {
  let classes: string[] = [
    // ...responsiveSizeClasses(scale),
    ...responsivePaddingClasses({ p, pt, pr, pb, pl, px, py }),
    ...responsiveMarginClasses({ m, mt, mr, mb, ml, mx, my }),
  ]

  const classNames = classnames(
    'text-wisteria-800',
    classes.join(' ')
  )
  

  const allProps = Object.assign({}, otherProps, {className: classNames})
  return React.createElement(tag, allProps, children)
}

/**
 * Generates responsive size classes
 * e.g. {mobile: 'md', desktop: 'xl'} => .size-md--mobile .size-xl--desktop
 * @param scale
 */
// const responsiveSizeClasses = (scale: Scale): string[] => {
//   let classes: string[] = []
//   if (typeof scale === "string") {
//     classes.push(styles[`size-${scale}`])
//   } else {
//     Object.keys(scale).forEach(key => {
//       classes.push(styles[`size-${scale[key]}--${key}`])
//     })
//   }

//   return classes
// }
