import Link from 'next/link'

type Props = {
    currentPage: string;
}

const Navbar = (props: Props) =>
{
return (
    <div className='top-0 py-4 pl-12 bg-[#008FFF] z-10 max-w-[100%] min-w-[100%] font-medium'>
        <ul className='flex flex-row'>
            <li><Link href='/' className={props.currentPage === 'home' ? 'font-semibold mr-6' : 'mr-6'}>Home</Link></li>
            <li><Link href='/hangman' className={props.currentPage === 'hangman' ? 'font-semibold mr-6' : 'mr-6'}>Hangman</Link></li>
            <li><Link href='/guessword' className={props.currentPage === 'guessword' ? 'font-semibold mr-6' : 'mr-6'}>Guess The Word</Link></li>
        </ul>
    </div>
)
}

export default Navbar;