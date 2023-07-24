'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter();

    return (
        <Image
            onClick={() => router.push('/')}
            alt="site-logo"
            src="/images/logo.png"
            width="121"
            height="121"
            className='block cursor-pointer object-cover'
        />
    )
}

export default Logo;