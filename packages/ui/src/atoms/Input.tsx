import { type InputHTMLAttributes } from 'react'
import { cn } from '../lib/cn'

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & {
  id: string
  label: string
  error?: string
}

export function Input({
  id,
  label,
  error,
  className,
  ...props
}: InputProps) {
  const errorId = error ? `${id}-error` : undefined

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-body text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={cn(
          'rounded-md border border-smoke/40 bg-surface px-3 py-2 font-body text-ink placeholder:text-smoke focus:border-sage focus:outline-none',
          error && 'border-earth',
          className,
        )}
        {...props}
      />
      {error ? (
        <p id={errorId} role="alert" className="font-body text-sm text-earth">
          {error}
        </p>
      ) : null}
    </div>
  )
}