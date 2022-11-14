import React, { FC } from 'react';

type Props = {
  rowsInfos: any;
};

const BodyTable: FC<Props> = props => {
  const { rowsInfos } = props;
  return (
    <tbody>
      {/* <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-900">
            <th
              scope="row"
              className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
            >
              Apple MacBook Pro 17
            </th>
            <td className="py-4 px-6">Sliver</td>
            <td className="py-4 px-6">Laptop</td>
            <td className="py-4 px-6">$2999</td>
            <td className="py-4 px-6">
              <a
                href="#"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="border-b bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
            <th
              scope="row"
              className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td className="py-4 px-6">White</td>
            <td className="py-4 px-6">Laptop PC</td>
            <td className="py-4 px-6">$1999</td>
            <td className="py-4 px-6">
              <a
                href="#"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-900">
            <th
              scope="row"
              className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td className="py-4 px-6">Black</td>
            <td className="py-4 px-6">Accessories</td>
            <td className="py-4 px-6">$99</td>
            <td className="py-4 px-6">
              <a
                href="#"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="border-b bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
            <th
              scope="row"
              className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
            >
              Google Pixel Phone
            </th>
            <td className="py-4 px-6">Gray</td>
            <td className="py-4 px-6">Phone</td>
            <td className="py-4 px-6">$799</td>
            <td className="py-4 px-6">
              <a
                href="#"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
            >
              Apple Watch 5
            </th>
            <td className="py-4 px-6">Red</td>
            <td className="py-4 px-6">Wearables</td>
            <td className="py-4 px-6">$999</td>
            <td className="py-4 px-6">
              <a
                href="#"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </td>
          </tr> */}
    </tbody>
  );
};

export default BodyTable;
