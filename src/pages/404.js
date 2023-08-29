import Image from 'next/image';
import ErrorImg from '@/assets/404.svg';
import { Button } from '@/components/common';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="container">
      <div className="flex justify-between my-12">
        <div className="flex flex-col max-w-[60ch] gap-4">
          <h1 className="text-[32px] font-bold">Search Not Found</h1>
          <p className="text-sm text-neutral-n-500">
            Oops! The search string you entered was:
            <span className="text-primary-b-700  font-semibold">
              {' '}
              x894805975fjgfhFJgGHJH8798-8-08-8846A
            </span>{' '}
            Sorry! This is an invalid search string.
          </p>
          <p className="text-sm text-neutral-n-500">
            If you think this is a problem with us, please{' '}
            <span className="text-primary-b-500 cursor-pointer font-semibold">
              {' '}
              tell us.
            </span>
          </p>
          <Link href="/">
            <Button className="bg-primary-b-500 text-white py-2 px-6 rounded-lg text-sm mt-10">
              Back home
            </Button>
          </Link>
        </div>
        <div>
          <Image src={ErrorImg} width={600} height={300} alt="404" />
        </div>
      </div>
    </div>
  );
}
