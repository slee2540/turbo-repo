// import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ChangeEvent, ReactElement, useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { List } from './List'
type FormData = {
  firstName: string
  lastName: string
}

type InputData = {
  [key: string]: string | boolean
  first: string
  last: string
  isOpen: boolean
}

type ApiData = {
  count: number
  entries: EntryData[]
}

type EntryData = {
  API: string
  Auth: string
  Category: string
  Cors: string
  Description: string
  HTTPS: boolean
  Link: string
}

// categories

export const api = async () => {
  const res = await fetch('https://api.publicapis.org/random', {
    method: 'GET',
  })
  const result = (await res.json()) as ApiData
  // console.log(result)
  return result.entries
}

export const SearchAddress = (): ReactElement => {
  // Access the client
  // const queryClient = useQueryClient()

  // Queries
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: api,
    // 이전 데이터 유지 옵션
    // keepPreviousData: true,
    // stale 상태 1분으로 설정
    // refetchInterval: 5000,
  })

  // Mutations
  // const mutation = useMutation({
  //   mutationFn: api,
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ['todos'] })
  //   },
  // })

  const {
    register,
    setValue,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormData>()

  const [text, setText] = useState<InputData>({
    first: '',
    last: '',
    isOpen: false,
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    setText({ ...text, [type]: e.target.value })
  }

  const onSubmit = handleSubmit((data) => console.log(data))
  console.log(text)
  return (
    <form onSubmit={onSubmit}>
      {data &&
        data?.map((item) => {
          return (
            <div key={item.Category}>
              <span>{item.API}</span>
              <span>{item.Category}</span>
              <span>{item.Description}</span>
            </div>
          )
        })}

      <label>First Name</label>
      <input
        {...register('firstName')}
        onChange={(e) => onChange(e, 'first')}
      />
      <label>Last Name</label>
      <input {...register('lastName')} onChange={(e) => onChange(e, 'last')} />
      <button
        type="button"
        onClick={() => {
          const { isOpen } = text
          setValue('firstName', '')
          setValue('lastName', '')
          setText({ ...text, first: '', last: '' })

          // mutation.mutate()
        }}>
        SetValue
      </button>

      {/* <button
        onClick={() => {
          const { isOpen } = text
          setText({ ...text, isOpen: !isOpen })
        }}>
        테스트
      </button>

      {text.isOpen && <List />} */}
      <List />
    </form>
  )
}
