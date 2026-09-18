'use client'

import { useCallback, useEffect, useState, type ImgHTMLAttributes } from 'react'
import { createPortal } from 'react-dom'

export function ArticleImage({ src, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close])

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} {...props} onClick={() => setOpen(true)} className="cursor-zoom-in" />
      {open
        ? createPortal(
            <div
              className="animate-in fade-in fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/70 p-6 duration-200"
              onClick={close}
              role="dialog"
              aria-label={alt}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="animate-in zoom-in-95 max-h-[85vh] max-w-[min(90vw,64rem)] rounded-md object-contain duration-200"
              />
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
