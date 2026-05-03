import React from 'react'

interface HighlightedTextProps {
  children: string
  /** CSS color for the per-line highlight box */
  highlight?: string
  /** CSS color for the outer container background */
  bg?: string
  /**
   * Fraction of the em square the highlight covers, anchored to the top of the glyphs.
   * 1.0 = full em height, 0.75 = tighter. Tune per font.
   */
  highlightHeight?: number
  /** Classes on the outer container (padding, sizing, etc.) */
  className?: string
  /** Classes on the text (font-size, font-weight, line-height, etc.) */
  textClassName?: string
}

export function HighlightedText({
  children,
  highlight = '#F5EFE0',
  bg,
  highlightHeight = 0.82,
  className = '',
  textClassName = '',
}: HighlightedTextProps) {
  return (
    <div
      className={`${textClassName} ${className}`}
      style={bg ? { backgroundColor: bg } : undefined}
    >
      <span
        className="box-decoration-clone inline"
        style={{
          backgroundColor: highlight,
          // Shrinks the inline box so the background is shorter than the full line height.
          // verticalAlign: text-top anchors it to the ascender line, not the baseline.
          lineHeight: highlightHeight,
          verticalAlign: 'super',
        }}
      >
        {children}
      </span>
    </div>
  )
}
