const TableRow = ({
  Player, 
  Team, 
  FPTS,
  pos,
  vorp,
  vols,
  onClick
}) => (
    <tr class="cursor-pointer hover:bg-gray-100" key={Player + Team} onClick={() => onClick(pos, Player)}>
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