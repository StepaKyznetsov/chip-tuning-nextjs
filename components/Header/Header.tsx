import type { NextPage } from 'next'
import Link from 'next/link'
import { links } from '../../constants/links'

const Header: NextPage = () => {
    return (
        <div className='sticky top-0 h-16 bg-gray flex items-center justify-center'>
            <div className='content justify-between'>
                {
                    links.map((item) =>
                        <Link key={item.label} href = {item.link}>{item.label}</Link>
                    )
                }
            </div>
        </div>
    )
}

export default Header;
