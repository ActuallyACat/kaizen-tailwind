import { GridFractions, ResponsiveSpacing, Spacing } from "./types"

export const convertFractionToString = (fraction: GridFractions): string => {
  switch (fraction) {
    case "1/8":
      return "xxs"
    case "1/4":
      return "xs"
    case "1/2":
      return "sm"
    case "1":
      return "md"
    case "2":
      return "lg"
    case "4":
      return "xl"
    case "8":
      return "xxl"
    default:
      return fraction
  }
}


export const pt = (unit: GridFractions): string[] => [
  `pt-${convertFractionToString(unit)}`
]

export const pr = (unit: GridFractions): string[] => [
  `pr-${convertFractionToString(unit)}`
]

export const pb = (unit: GridFractions): string[] => [
  `pb-${convertFractionToString(unit)}`
]

export const pl = (unit: GridFractions): string[] => [
  `pl-${convertFractionToString(unit)}`
]

export const px = (unit: GridFractions): string[] => [
  `px-${convertFractionToString(unit)}`
]

export const py = (unit: GridFractions): string[] => [
  `py-${convertFractionToString(unit)}`
]

export const p = (unit: ResponsiveSpacing): string[] => {
  const classes: string[] = []
  if (typeof unit === "string") {
    classes.push(`p-${convertFractionToString(unit)}`)
  } else {
    Object.keys(unit).forEach(key => {
      // @TODO 
      // classes.push(styles[`p-${convertFractionToString(unit[key])}--${key}`])
    })
  }

  return classes
}

// @TODO - i18n. Use padding before / padding after
// Seb can help with this
export const responsivePaddingClasses = ({
  p: padding,
  pt: paddingTop,
  pr: paddingRight,
  pb: paddingBottom,
  pl: paddingLeft,
  px: paddingXAxis,
  py: paddingYAxis,
}: Spacing): string[] => {
  let classes: string[] = []

  if (padding !== undefined) classes.push(...p(padding))
  if (paddingTop !== undefined) classes.push(...pt(paddingTop))
  if (paddingRight !== undefined) classes.push(...pr(paddingRight))
  if (paddingBottom !== undefined) classes.push(...pb(paddingBottom))
  if (paddingLeft !== undefined) classes.push(...pl(paddingLeft))
  if (paddingXAxis !== undefined) classes.push(...px(paddingXAxis))
  if (paddingYAxis !== undefined) classes.push(...py(paddingYAxis))

  // if no padding defined on any param, default to 0
  if (
    padding === undefined &&
    paddingTop === undefined &&
    paddingRight === undefined &&
    paddingBottom === undefined &&
    paddingLeft === undefined &&
    paddingXAxis === undefined &&
    paddingYAxis === undefined
  ) {
    classes.push(...p("0"))
  }
  return classes
}


export const mt = (unit: GridFractions): string[] => [
  `mt-${convertFractionToString(unit)}`,
]

export const mr = (unit: GridFractions): string[] => [
  `mr-${convertFractionToString(unit)}`,
]

export const mb = (unit: GridFractions): string[] => [
  `mb-${convertFractionToString(unit)}`,
]

export const ml = (unit: GridFractions): string[] => [
  `ml-${convertFractionToString(unit)}`,
]

export const mx = (unit: GridFractions): string[] => [
  `mx-${convertFractionToString(unit)}`,
]

export const my = (unit: GridFractions): string[] => [
  `my-${convertFractionToString(unit)}`,
]

export const m = (unit: ResponsiveSpacing): string[] => {
  const classes: string[] = []
  if (typeof unit === "string") {
    classes.push(`m-${convertFractionToString(unit)}`)
  } else {
    Object.keys(unit).forEach(key => {
      // classes.push(`m-${convertFractionToString(unit[key])}--${key}`)
    })
  }

  return classes
}

export const responsiveMarginClasses = ({
  m: margin,
  mt: marginTop,
  mr: marginRight,
  mb: marginBottom,
  ml: marginLeft,
  mx: marginXAxis,
  my: marginYAxis,
}: Spacing): string[] => {
  let classes: string[] = []

  if (margin !== undefined) classes.push(...m(margin))
  if (marginTop !== undefined) classes.push(...mt(marginTop))
  if (marginRight !== undefined) classes.push(...mr(marginRight))
  if (marginBottom !== undefined) classes.push(...mb(marginBottom))
  if (marginLeft !== undefined) classes.push(...ml(marginLeft))
  if (marginXAxis !== undefined) classes.push(...mx(marginXAxis))
  if (marginYAxis !== undefined) classes.push(...my(marginYAxis))

  // if no padding defined on any param, default to 0
  if (
    margin === undefined &&
    marginTop === undefined &&
    marginRight === undefined &&
    marginBottom === undefined &&
    marginLeft === undefined &&
    marginXAxis === undefined &&
    marginYAxis === undefined
  ) {
    classes.push(...m("0"))
  }

  return classes
}
