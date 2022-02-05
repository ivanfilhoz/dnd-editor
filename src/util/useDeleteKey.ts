import { useEffect } from 'react'

export default function useDeleteKey (onPressDelete: () => void) {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === 'Delete') {
        onPressDelete()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onPressDelete])
}
