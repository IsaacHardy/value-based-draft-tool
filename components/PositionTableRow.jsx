import { memo } from 'react';

const PositionTableRow = ({
    Player, 
    Team, 
    FPTS,
    pos,
    vorp,
    vols,
    onClick,
    isLoading
  }) => {
    const onRowClick = () => {
      if (isLoading) return;
      return onClick(pos, Player);
    }
  
    const disableCss = isLoading ? "cursor-wait hover:bg-gray-100" : "cursor-pointer hover:bg-gray-100"
  
    return (
      <tr class={disableCss} key={Player + pos} onClick={onRowClick}>
        <td class="px-3 py-3 whitespace-no-wrap">
          <div class="text-sm leading-5 font-medium text-gray-900">
            {Player}
          </div>
        </td>
        <td class="px-3 py-3 whitespace-no-wrap text-sm leading-5 text-gray-900">
          {vols}
        </td>
        <td class="px-3 py-3 whitespace-no-wrap text-sm leading-5 text-gray-900">
          {vorp}
        </td>
      </tr>
    )
  }
  
    export default memo(PositionTableRow);