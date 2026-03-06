# CLAUDE.md

## Commands

```text
dev          build        test:run
type-check   lint         format
```

## Structure

```text
src/
├─ app/[locale]/     # routing only
├─ components/{feature}/
│  ├─ *.tsx, *.test.tsx, index.ts
├─ lib/
│  ├─ hooks/         # client-only, import from @/lib/hooks
│  ├─ i18n/
│  ├─ utils/
│  ├─ web-vitals/    # client-only, import from @/lib/web-vitals
│  └─ index.ts       # server-safe only
├─ test/
└─ types/
```

## Imports

```typescript
// ok
import { X } from '@/components'
import { x } from '@/lib'
import { useX } from '@/lib/hooks' // client-only
import { WebVitals } from '@/lib/web-vitals' // client-only
import type { X } from '@/types'

// ng
import { useX } from '@/lib' // breaks server
import { X } from '@/components/x/X' // use barrel
```

## Rules

| Do                      | Don't                  |
| ----------------------- | ---------------------- |
| `type`                  | `interface`            |
| `memo()`                | unnecessary re-renders |
| semantic tokens         | hardcoded colors       |
| relative imports in lib | `@/lib` in lib         |
| barrel exports          | direct file imports    |

## Styling

```typescript
// ok: bg-background text-foreground text-foreground-muted
// ng: bg-black text-white text-white/60 slate-900
```

## Patterns

```typescript
// memo
export const X = memo(function X(props: Props) { })

// hook
useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

// i18n
const t = useTranslations('ns')

// test
<IntlWrapper locale="ja"><X /></IntlWrapper>
```

## A11y

```typescript
role="timer" aria-label={t('x')}
@media (prefers-reduced-motion: reduce) { animation: none }
```

## Pre-submit

```bash
type-check && lint && test:run && build
```
