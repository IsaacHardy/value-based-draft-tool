import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';
import {useDataContext} from '../context/dataContext';

const Home = () => {
  const { data, draftPlayer } = useDataContext();

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
                  {data.map(playerData => (
                    <TableRow {...playerData} onClick={draftPlayer}/>
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