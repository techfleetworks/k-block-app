import { Help } from '@/components/common';
import Image from 'next/image';
import copy from '@/assets/copy.svg';
import CircleBigCheck from '@/assets/circle-big-check.svg';

const TransactionDetails = () => {
  return (
    <div className="container">
      <h1 className="my-8 text-[32px] font-bold">Transaction Details</h1>
      {/* Overview Card */}
      <div className=" bg-neutral-n-0 p-5  rounded-xl  drop-shadow-md mb-4">
        <h2 className="text-xl font-bold">Overview</h2>
        <table className=" mt-5 text-left text-sm text-neutral-n-800 font-normal">
          <tbody className="space-y-6">
            <tr className="flex space-x-20">
              <th className="font-normal  w-[180px] ">
                <Help
                  label="Request Key"
                  tooltipText={
                    <>
                      Tooltip text here.{' '}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </th>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td className="flex">
                        {' '}
                        xP0Nt2zjJUSQKzxfccpt4ABRx35gVer69BRHRCGSz7o
                        <Image
                          width={16}
                          height={16}
                          src={copy}
                          alt="copy icon"
                          className="ml-2"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal  w-[180px] ">
                <Help
                  label="Status"
                  tooltipText={
                    <>
                      Tooltip text here.{' '}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </th>
              <td className="flex">
                <span className="text-xs bg-semantic-g-50 font-normal text-semantic-g-500  px-3 py-2 rounded-full flex space-x-1 ">
                  <span>Successful</span>
                  <Image
                    src={CircleBigCheck}
                    width={16}
                    height={16}
                    alt="Green check"
                  />
                </span>
              </td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal  w-[180px] ">
                <Help
                  label="Chain"
                  tooltipText={
                    <>
                      Tooltip text here.{' '}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </th>
              <td>1</td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal  w-[180px] ">
                <Help
                  label="Block Height"
                  tooltipText={
                    <>
                      Tooltip text here.{' '}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </th>
              <td className="text-primary-b-500 cursor-pointer">394400</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Transactions Card */}
      <div className=" bg-neutral-n-0 p-5  rounded-xl  drop-shadow-md mb-4">
        <h2 className="text-xl font-bold">Transactions</h2>
        <table className=" mt-5 text-left text-sm text-neutral-n-800 font-normal">
          <tbody className="space-y-6">
            <tr className="flex space-x-20">
              <th className="font-normal  w-[180px] ">
                From <br /> To <br /> Amount
              </th>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td className="flex text-primary-b-500 cursor-pointer">
                        k:b81799a0028e30765af127d09b0c404aad09f7ae06da90f864992848959e66b7
                      </td>
                      <td className="flex text-primary-b-500 cursor-pointer">
                        K:2f0e70d6e0648f30c37ea3b470279585e8c3a5fc10c1c508f79a90d432baacad8
                      </td>
                      <td className="flex">0.0092 KDA</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal  w-[180px] ">
                From <br /> To <br /> Amount
              </th>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td className="flex text-primary-b-500 cursor-pointer">
                        k:b81799a0028e30765af127d09b0c404aad09f7ae06da90f864992848959e66b7
                      </td>
                      <td className="flex text-primary-b-500 cursor-pointer">
                        k:bf3822a0028e30765af127d09b0c404aad09f7ae06da90f864992848959e66b7
                      </td>
                      <td className="flex">0.0092 KDA</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Other Information Card */}
      <div className=" bg-neutral-n-0 p-5  rounded-xl  drop-shadow-md ">
        <h2 className="text-xl font-bold">Other Information</h2>
        <table className=" mt-5 text-left text-sm text-neutral-n-800 font-normal">
          <tbody className="space-y-6">
            <tr className="flex space-x-20">
              <th className="font-normal  w-[180px] ">
                <Help
                  label="Transaction ID"
                  tooltipText={
                    <>
                      Tooltip text here.{' '}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </th>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td className="flex">5679980</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal  w-[180px] ">
                <Help
                  label="Gas fee"
                  tooltipText={
                    <>
                      Tooltip text here.{' '}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </th>
              <td className="flex">0.000234 KDA</td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal  w-[180px] ">
                <Help
                  label="Block Hash"
                  tooltipText={
                    <>
                      Tooltip text here.{' '}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </th>
              <td className="text-primary-b-500 cursor-pointer">
                0d572e0e....eed0949e
              </td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal  w-[180px] ">
                <Help
                  label="Parent Hash"
                  tooltipText={
                    <>
                      Tooltip text here.{' '}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </th>
              <td className="text-primary-b-500 cursor-pointer">
                4f60a083....19f63aa5
              </td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal  w-[180px] ">
                <Help
                  label="Logs"
                  tooltipText={
                    <>
                      Tooltip text here.{' '}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </th>
              <td>wmxxwaNeh12NaDHCe-7Iq3Ih5usqx-xbhUMLWTjOdq4</td>
            </tr>
            <tr className="flex space-x-20">
              <th className="font-normal  w-[180px] ">
                <Help
                  label="Gas limit"
                  tooltipText={
                    <>
                      Tooltip text here.{' '}
                      <a className="underline" href="http://example.com/">
                        Learn more.
                      </a>
                    </>
                  }
                />
              </th>
              <td>2500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionDetails;
