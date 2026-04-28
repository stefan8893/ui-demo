import { describe, it, expect } from 'vitest'
import { getSmartHeaderForTopArea } from './index'
import type { SmartHeader } from './index'

describe('getSmartHeaderForTopArea', () => {
  it('should return fixed-top when entering from below and header was hidden', () => {
    const previousState = {
      position: 'floating-hidden',
      isAtTop: false,
      scrollY: 500,
    } as const satisfies SmartHeader

    const result = getSmartHeaderForTopArea(previousState, 64)

    expect(result.position).toBe('fixed-top')
    expect(result.isAtTop).toBe(true)
  })

  it('should stay floating-visible if it was already visible', () => {
    const previousState = {
      position: 'floating-visible',
      isAtTop: false,
      scrollY: 500,
    } as const satisfies SmartHeader

    const result = getSmartHeaderForTopArea(previousState, 20)

    expect(result.position).toBe('floating-visible')
  })
})
