const TableRow = ({
  Player, 
  Team, 
  FPTS,
  pos,
  vorp,
  vols
}) => (
    <tr key={Player + Team}>
      <td class="px-6 py-4 whitespace-no-wrap">
        <div class="text-sm leading-5 font-medium text-gray-900">
          {Player}
        </div>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {Team}
      </td>
      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {pos}
      </td>
      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {vols}
      </td>
      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {vorp}
      </td>
    </tr>
  )

  export default TableRow;