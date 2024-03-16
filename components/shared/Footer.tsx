import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className=" border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>
          {date} Evently. All Rights reserved {''}
          <Link target="_blank" href={'https://twitter.com/Mohamedalfad'}>
            @Mohamed_alfadel
          </Link>
        </p>
      </div>
    </footer>
  );
}
