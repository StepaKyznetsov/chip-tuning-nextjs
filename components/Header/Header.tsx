import type { NextPage } from 'next'
import Link from 'next/link'

const links: string[] = [
    'Главная',
    'Услуги по чип-тюнингу',
    'Вопросы и ответы',
    'Отчёты',
    'О нас',
    'Контакты',
    'Отзывы'
]

const Header: NextPage = () => {
    return (
        <div className='sticky top-0 h-16 bg-neutral-200 flex items-center justify-center'>
            <div className='w-4/6 flex justify-between box-border'>
                {
                    links.map((item) =>
                        <Link href='#' className='hover:border-b-2 border-b-rose-700'>{item}</Link>
                    )
                }
            </div>
        </div>
    )
}

export default Header;
