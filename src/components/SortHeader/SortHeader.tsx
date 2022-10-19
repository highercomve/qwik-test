import { $, component$, PropFunction } from "@builder.io/qwik"

interface Props {
  onChange$: PropFunction<(value: string, field: string) => void>
  sort: any
  field: string
}

export const SortingHeader = component$((props: Props) => {
  const { sort = {}, field = '' } = props
  const value = sort[field] || ''

  const onClick = $(() => {
    const { onChange$ = console.log } = props
    onChange$(value == 'asc' ? 'desc' : 'asc', field)
  })

  return (
    <i
      onClick$={onClick}
      style={{cursor: 'pointer'}}
      className="material-icons"
    >
      {value == '' && 'unfold_more'}
      {value.indexOf('asc') >= 0 && 'expand_more'}
      {value.indexOf('desc') >= 0 && 'expand_less'}
    </i>
  )
})
