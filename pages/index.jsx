import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';

const Home = ({sortedByVorp}) => {

  return (
    <div class="flex flex-row flex-wrap">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <TableHeader />
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  {sortedByVorp.map(playerData => (
                    <TableRow {...playerData} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const QB_REPLACEMENT_INDEX = 21;
  const QB_BENCH_INDEX = 17;

  const RB_REPLACEMENT_INDEX = 50;
  const RB_BENCH_INDEX = 35;

  const WR_REPLACEMENT_INDEX = 55;
  const WR_BENCH_INDEX = 35;

  const TE_REPLACEMENT_INDEX = 21;
  const TE_BENCH_INDEX = 17;

  const qbData = require('./api/data/qb.json');
  const rbData = require('./api/data/rb.json');
  const wrData = require('./api/data/wr.json');
  const teData = require('./api/data/te.json');

  const cleanedQbData = qbData.map(({ Player, Team, FPTS }) => ({
    Player, 
    Team, 
    FPTS,
    pos: 'QB',
    vorp: Math.round(FPTS - qbData[QB_REPLACEMENT_INDEX].FPTS),
    vols: Math.round(FPTS - qbData[QB_BENCH_INDEX].FPTS),
  }));

  const cleanedRbData = rbData.map(({ Player, Team, FPTS }) => ({
    Player, 
    Team, 
    FPTS,
    pos: 'RB',
    vorp: Math.round(FPTS - qbData[RB_REPLACEMENT_INDEX].FPTS),
    vols: Math.round(FPTS - qbData[RB_BENCH_INDEX].FPTS),
  }));

  const cleanedWrData = wrData.map(({ Player, Team, FPTS }) => ({
    Player, 
    Team, 
    FPTS,
    pos: 'WR',
    vorp: Math.round(FPTS - qbData[WR_REPLACEMENT_INDEX].FPTS),
    vols: Math.round(FPTS - qbData[WR_BENCH_INDEX].FPTS),
  }));

  const cleanedTeData = teData.map(({ Player, Team, FPTS }) => ({
    Player, 
    Team, 
    FPTS,
    pos: 'TE',
    vorp: Math.round(FPTS - qbData[TE_REPLACEMENT_INDEX].FPTS),
    vols: Math.round(FPTS - qbData[TE_BENCH_INDEX].FPTS),
  }));

  const concatData = [...cleanedQbData, ...cleanedRbData, ...cleanedWrData, ...cleanedTeData];
  
  const sortedByVorp = concatData.sort((a, b) => b.vorp - a.vorp);

  return {
    props: {
      sortedByVorp
    },
  }
}

export default Home