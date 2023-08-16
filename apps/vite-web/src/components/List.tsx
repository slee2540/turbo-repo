// import { useState } from 'react'
import { ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'
import { api } from './SearchAddress'

export const List = (): ReactElement => {
  // Queries
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: api,
    keepPreviousData: true,
    // staleTime: 3000,
  })

  return (
    <div>
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
    </div>
  )
}
