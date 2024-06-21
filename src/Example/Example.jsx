import React, { useState } from 'react';
import { Datagrid, useDatagrid, useStickyColumn, useInfiniteScroll } from '@carbon/ibm-products';
import { makeData } from './utils/makeData';

const defaultHeader = [
  {
    Header: 'Row Index1',
    accessor: (row, i) => i,
    sticky: 'left',
    id: 'rowIndex', // id is required when accessor is a function.
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Age',
    accessor: 'age',
    width: 50,
  },
  {
    Header: 'Visits',
    accessor: 'visits',
    width: 60,
  },
  {
    Header: 'Someone 1',
    accessor: 'someone1',
  },
  {
    Header: 'Someone 2',
    accessor: 'someone2',
  },
  {
    Header: 'Someone 3',
    accessor: 'someone3',
  },
  {
    Header: 'Someone 4',
    accessor: 'someone4',
  },
  {
    Header: 'Someone 5',
    accessor: 'someone5',
  },
  {
    Header: 'Someone 6',
    accessor: 'someone6',
  },
  {
    Header: 'Someone 7',
    accessor: 'someone7',
  },
  {
    Header: 'Someone 8',
    accessor: 'someone8',
  },
  {
    Header: 'Someone 9',
    accessor: 'someone9',
  },
  {
    Header: 'Someone 10',
    accessor: 'someone10',
  },{
    Header: 'Someone 11',
    accessor: 'someone111',
  },
  {
    Header: 'Someone 12',
    accessor: 'someone12',
  },
  {
    Header: 'Someone 13',
    accessor: 'someone13',
  },
  {
    Header: 'Someone 14',
    accessor: 'someone14',
  },
  {
    Header: 'Someone 15',
    accessor: 'someone15',
  },
  {
    Header: 'Someone 16',
    accessor: 'someone16',
  },
  {
    Header: 'Someone 17',
    accessor: 'someone17',
  },
  {
    Header: 'Someone 18',
    accessor: 'someone18',
  },
  {
    Header: 'Someone 19',
    accessor: 'someone19',
  },
  {
    Header: 'Someone 20',
    accessor: 'someone20',
  },{
    Header: 'Someone 22',
    accessor: 'someone22',
  },
  {
    Header: 'Someone 23',
    accessor: 'someone23',
  },
  {
    Header: 'Someone 24',
    accessor: 'someone24',
  },
  {
    Header: 'Someone 25',
    accessor: 'someone25',
  },
  {
    Header: 'Someone 26',
    accessor: 'someone26',
  },
  {
    Header: 'Someone 27',
    accessor: 'someone27',
  },
  {
    Header: 'Someone 28',
    accessor: 'someone28',
  },
  {
    Header: 'Someone 29',
    accessor: 'someone29',
  },
  {
    Header: 'Someone 30',
    accessor: 'someone30',
  },
  {
    Header: 'Someone 31',
    accessor: 'someone31',
  },{
    Header: 'Someone 32',
    accessor: 'someone32',
  },
  {
    Header: 'Someone 33',
    accessor: 'someone33',
  },
  {
    Header: 'Someone 34',
    accessor: 'someone34',
  },
  {
    Header: 'Someone 35',
    accessor: 'someone35',
  },
  {
    Header: 'Someone 36',
    accessor: 'someone36',
  },
  {
    Header: 'Someone 37',
    accessor: 'someone37',
  },
  {
    Header: 'Someone 38',
    accessor: 'someone38',
  },
  {
    Header: 'Someone 39',
    accessor: 'someone39',
  },
  {
    Header: 'Someone 40',
    accessor: 'someone40',
  },
  {
    Header: 'Someone 41',
    accessor: 'someone41',
  },{
    Header: 'Someone 42',
    accessor: 'someone42',
  },
  {
    Header: 'Someone 43',
    accessor: 'someone43',
  },
  {
    Header: 'Someone 44',
    accessor: 'someone44',
  },
  {
    Header: 'Someone 45',
    accessor: 'someone45',
  },
  {
    Header: 'Someone 46',
    accessor: 'someone46',
  },
  {
    Header: 'Someone 47',
    accessor: 'someone47',
  },
  {
    Header: 'Someone 48',
    accessor: 'someone48',
  },
  {
    Header: 'Someone 49',
    accessor: 'someone49',
  },
  {
    Header: 'Someone 50',
    accessor: 'someone50',
  }
];

export const Example = () => {
  const columns = React.useMemo(
    () => [
      ...defaultHeader,
      {
        Header: 'Someone 11',
        accessor: 'someone11',
        multiLineWrap: true,
      },
    ],
    []
  );
  
  // datagridParams = useInfiniteScroll;
  // datagridOptions['withVirtualScroll'] = true;
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid({
    columns,
    data,
  },
  useStickyColumn,
  useInfiniteScroll
);

  return <Datagrid datagridState={{ ...datagridState }} />;
};

export default Example;
