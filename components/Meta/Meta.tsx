import React from 'react'
import Head from 'next/head'

interface IHeadMeta {
  description?: string
  title?: string
}

const Meta: React.FC<IHeadMeta> = ({ title, description }: IHeadMeta) => {
  return (
    <Head>
      <title>Чип-тюнинг Сыктывкар {title ? ` - ${title}` : ''}</title>
      <meta name='description' content={description} />
    </Head>
  )
}

export default React.memo(Meta)