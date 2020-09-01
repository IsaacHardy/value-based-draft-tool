import OverviewTableHeader from '../components/OverviewTableHeader';
import OverviewTableRow from '../components/OverviewTableRow';
import PositionTableHeader from '../components/PositionTableHeader';
import PositionTableRow from '../components/PositionTableRow';
import { useDataContext } from '../context/dataContext';

const Home = () => {
  const { 
    data, 
    qbData,
    rbData,
    wrData,
    teData, 
    draftPlayer,
    isLoading
  } = useDataContext();

  return (
    <div class="flex flex-row flex-wrap">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <OverviewTableHeader />
                </thead>
                <tbody class="bg-white divide-y  bg-gray-600 divide-gray-200">
                  {data.map(playerData => (
                    <OverviewTableRow isLoading={isLoading} {...playerData} onClick={draftPlayer}/>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <PositionTableHeader />
                </thead>
                <tbody class="bg-white divide-y bg-yellow-400 divide-gray-200">
                  {qbData.map(playerData => (
                    <PositionTableRow isLoading={isLoading} {...playerData} onClick={draftPlayer}/>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <PositionTableHeader />
                </thead>
                <tbody class="bg-white divide-y bg-green-400 divide-gray-200">
                  {rbData.map(playerData => (
                    <PositionTableRow isLoading={isLoading} {...playerData} onClick={draftPlayer}/>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <PositionTableHeader />
                </thead>
                <tbody class="bg-white divide-y bg-red-400 divide-gray-200">
                  {wrData.map(playerData => (
                    <PositionTableRow isLoading={isLoading} {...playerData} onClick={draftPlayer}/>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <PositionTableHeader />
                </thead>
                <tbody class="bg-white divide-y bg-blue-400 divide-gray-200">
                  {teData.map(playerData => (
                    <PositionTableRow isLoading={isLoading} {...playerData} onClick={draftPlayer}/>
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

export default Home